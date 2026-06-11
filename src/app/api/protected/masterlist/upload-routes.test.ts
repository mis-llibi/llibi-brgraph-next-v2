import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  authResponse,
  formRequest,
  permissionResponse,
  responseJson,
  testUser,
} from "@/test/api";

const mocks = vi.hoisted(() => {
  const tx = {
    masterlistEntries: {
      deleteMany: vi.fn(),
      createMany: vi.fn(),
    },
    utilizationEntries: {
      deleteMany: vi.fn(),
      createMany: vi.fn(),
    },
    uploads: {
      deleteMany: vi.fn(),
      create: vi.fn(),
    },
  };

  return {
    tx,
    requireAuth: vi.fn(),
    requirePermission: vi.fn(),
    prisma: {
      $transaction: vi.fn(),
    },
    saveFile: vi.fn(),
    readFile: vi.fn(),
    deleteFile: vi.fn(),
    resolveDatasetForUpload: vi.fn(),
    parseMasterlistWorksheet: vi.fn(),
    parseUtilizationWorksheet: vi.fn(),
  };
});

vi.mock("@/lib/auth-middleware", () => ({
  requireAuth: mocks.requireAuth,
  requirePermission: mocks.requirePermission,
}));

vi.mock("@/lib/prisma", () => ({
  prisma: mocks.prisma,
}));

vi.mock("@/lib/s3", () => ({
  saveFile: mocks.saveFile,
  readFile: mocks.readFile,
  deleteFile: mocks.deleteFile,
}));

vi.mock("@/lib/datasets", () => ({
  getDatasetSelection: (formData: FormData) => {
    const datasetIdInput = formData.get("dataset_id");
    const datasetTitleInput = formData.get("dataset_title");

    return {
      datasetId: datasetIdInput ? Number(datasetIdInput) : undefined,
      datasetTitle: typeof datasetTitleInput === "string" ? datasetTitleInput : undefined,
    };
  },
  resolveDatasetForUpload: mocks.resolveDatasetForUpload,
}));

vi.mock("@/lib/standard-data", () => ({
  parseMasterlistWorksheet: mocks.parseMasterlistWorksheet,
  parseUtilizationWorksheet: mocks.parseUtilizationWorksheet,
}));

import { POST as postMasterlist } from "./route";
import { POST as postUtilization } from "../utilization/route";

function uploadRequest(extra: Record<string, FormDataEntryValue> = {}) {
  return formRequest("/api/protected/masterlist", {
    file: new File(["fixture"], "upload.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
    id: "10",
    insurerId: "20",
    dataset_id: "30",
    ...extra,
  });
}

describe("standard upload routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.tx.masterlistEntries.deleteMany.mockResolvedValue({ count: 0 });
    mocks.tx.masterlistEntries.createMany.mockResolvedValue({ count: 1 });
    mocks.tx.utilizationEntries.deleteMany.mockResolvedValue({ count: 0 });
    mocks.tx.utilizationEntries.createMany.mockResolvedValue({ count: 1 });
    mocks.tx.uploads.deleteMany.mockResolvedValue({ count: 0 });
    mocks.tx.uploads.create.mockResolvedValue({ id: 1 });

    mocks.requireAuth.mockResolvedValue({ user: testUser });
    mocks.requirePermission.mockReturnValue(null);
    mocks.prisma.$transaction.mockImplementation((callback) => callback(mocks.tx));
    mocks.saveFile.mockResolvedValue({ key: "uploads/file.xlsx" });
    mocks.readFile.mockResolvedValue({ name: "Sheet1" });
    mocks.deleteFile.mockResolvedValue(undefined);
    mocks.resolveDatasetForUpload.mockResolvedValue({ id: 30, title: "2026" });
    mocks.parseMasterlistWorksheet.mockReturnValue([{ maskedId: "M-001" }]);
    mocks.parseUtilizationWorksheet.mockReturnValue({
      rows: [{ maskedId: "U-001" }],
      months: "Jan-Mar",
    });
  });

  it("returns auth and permission responses without touching S3", async () => {
    const unauthenticated = authResponse();
    mocks.requireAuth.mockResolvedValueOnce(unauthenticated);

    expect(await postMasterlist(uploadRequest())).toBe(unauthenticated);

    const denied = permissionResponse("canUpload");
    mocks.requireAuth.mockResolvedValueOnce({ user: testUser });
    mocks.requirePermission.mockReturnValueOnce(denied);

    expect(await postUtilization(uploadRequest())).toBe(denied);
    expect(mocks.saveFile).not.toHaveBeenCalled();
  });

  it("rejects missing file, client, or insurer fields", async () => {
    const noFile = await postMasterlist(formRequest("/api/protected/masterlist", {
      id: "10",
      insurerId: "20",
    }));
    const noClient = await postMasterlist(formRequest("/api/protected/masterlist", {
      file: new File(["fixture"], "upload.xlsx"),
      insurerId: "20",
    }));
    const noInsurer = await postUtilization(formRequest("/api/protected/utilization", {
      file: new File(["fixture"], "upload.xlsx"),
      id: "10",
    }));

    await expect(responseJson(noFile)).resolves.toEqual({ error: "Missing required fields" });
    await expect(responseJson(noClient)).resolves.toEqual({ error: "Missing required fields" });
    await expect(responseJson(noInsurer)).resolves.toEqual({ error: "Missing required fields" });
    expect(mocks.saveFile).not.toHaveBeenCalled();
  });

  it("resolves masterlist dataset by dataset_id and writes parsed rows in a transaction", async () => {
    const response = await postMasterlist(uploadRequest());

    await expect(responseJson(response)).resolves.toEqual({
      message: "Masterlist uploaded successfully",
      success: true,
      recordsProcessed: 1,
    });
    expect(mocks.resolveDatasetForUpload).toHaveBeenCalledWith({
      clientId: 10,
      insurerId: 20,
      datasetId: 30,
      datasetTitle: undefined,
    });
    expect(mocks.parseMasterlistWorksheet).toHaveBeenCalledWith({ name: "Sheet1" }, 10, 20, 30);
    expect(mocks.tx.masterlistEntries.deleteMany).toHaveBeenCalledWith({
      where: { clientId: 10, datasetId: 30 },
    });
    expect(mocks.tx.uploads.deleteMany).toHaveBeenCalledWith({
      where: { clientId: 10, insurerId: 20, datasetId: 30, type: "masterlist" },
    });
    expect(mocks.tx.masterlistEntries.createMany).toHaveBeenCalledWith({
      data: [{ maskedId: "M-001" }],
    });
    expect(mocks.tx.uploads.create).toHaveBeenCalledWith({
      data: {
        clientId: 10,
        insurerId: 20,
        datasetId: 30,
        year: "2026",
        type: "masterlist",
      },
    });
    expect(mocks.deleteFile).toHaveBeenCalledWith("uploads/file.xlsx");
  });

  it("resolves utilization dataset by dataset_title and records upload months", async () => {
    const response = await postUtilization(uploadRequest({
      dataset_id: "",
      dataset_title: "Policy Year 2026",
    }));

    await expect(responseJson(response)).resolves.toEqual({
      message: "Utilization uploaded successfully",
      success: true,
      recordsProcessed: 1,
    });
    expect(mocks.resolveDatasetForUpload).toHaveBeenCalledWith({
      clientId: 10,
      insurerId: 20,
      datasetId: undefined,
      datasetTitle: "Policy Year 2026",
    });
    expect(mocks.parseUtilizationWorksheet).toHaveBeenCalledWith({ name: "Sheet1" }, 10, 20, 30);
    expect(mocks.tx.utilizationEntries.deleteMany).toHaveBeenCalledWith({
      where: { clientId: 10, datasetId: 30 },
    });
    expect(mocks.tx.uploads.deleteMany).toHaveBeenCalledWith({
      where: { clientId: 10, insurerId: 20, datasetId: 30, type: "utilization" },
    });
    expect(mocks.tx.utilizationEntries.createMany).toHaveBeenCalledWith({
      data: [{ maskedId: "U-001" }],
    });
    expect(mocks.tx.uploads.create).toHaveBeenCalledWith({
      data: {
        clientId: 10,
        insurerId: 20,
        datasetId: 30,
        year: "2026",
        months: "Jan-Mar",
        type: "utilization",
      },
    });
    expect(mocks.deleteFile).toHaveBeenCalledWith("uploads/file.xlsx");
  });

  it("deletes the S3 file when parsing fails", async () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    mocks.parseMasterlistWorksheet.mockImplementation(() => {
      throw new Error("Invalid worksheet");
    });

    try {
      const response = await postMasterlist(uploadRequest());

      await expect(responseJson(response)).resolves.toEqual({ error: "Invalid worksheet" });
      expect(mocks.deleteFile).toHaveBeenCalledWith("uploads/file.xlsx");
      expect(mocks.prisma.$transaction).not.toHaveBeenCalled();
      expect(consoleError).toHaveBeenCalledWith(
        "Failed to upload masterlist:",
        expect.any(Error),
      );
    } finally {
      consoleError.mockRestore();
    }
  });
});
