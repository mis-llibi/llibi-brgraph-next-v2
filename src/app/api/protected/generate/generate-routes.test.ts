import { beforeEach, describe, expect, it, vi } from "vitest";
import { getRequest, jsonRequest, responseJson } from "@/test/api";

const mocks = vi.hoisted(() => ({
  generateSingleDataset: vi.fn(),
  generateMultiDataset: vi.fn(),
  prisma: {
    customIllnesses: {
      deleteMany: vi.fn(),
      createMany: vi.fn(),
      findMany: vi.fn(),
    },
  },
}));

vi.mock("@/lib/standard-data", () => ({
  generateSingleDataset: mocks.generateSingleDataset,
  generateMultiDataset: mocks.generateMultiDataset,
}));

vi.mock("@/lib/prisma", () => ({
  prisma: mocks.prisma,
}));

import { POST as postSingle } from "./new/route";
import { POST as postComparative } from "./old/route";
import { POST as postImportT5 } from "./importT5/route";
import { GET as getCustomIllnesses } from "./checkCustomIllnesses/route";

describe("generate routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("single and comparative routes return a request-body error for null bodies", async () => {
    const single = await postSingle(jsonRequest("/api/protected/generate/new"));
    const comparative = await postComparative(jsonRequest("/api/protected/generate/old"));
    const importT5 = await postImportT5(jsonRequest("/api/protected/generate/importT5"));

    await expect(responseJson(single)).resolves.toEqual({ error: "Request body is null" });
    await expect(responseJson(comparative)).resolves.toEqual({ error: "Request body is null" });
    await expect(responseJson(importT5)).resolves.toEqual({ error: "Request body is null" });
  });

  it("single report route calls generateSingleDataset and returns the payload", async () => {
    const request = {
      clientId: 10,
      insurer_id: 20,
      datasetId: 30,
      title: "2026",
    };
    const payload = { chart1: [{ company: "Acme" }] };
    mocks.generateSingleDataset.mockResolvedValue(payload);

    const response = await postSingle(jsonRequest("/api/protected/generate/new", request));

    expect(mocks.generateSingleDataset).toHaveBeenCalledWith(request);
    await expect(responseJson(response)).resolves.toEqual({
      success: true,
      data: payload,
    });
  });

  it("comparative report route calls generateMultiDataset and returns the payload", async () => {
    const request = [
      { clientId: 10, insurer_id: 20, datasetId: 30, title: "2025" },
      { clientId: 10, insurer_id: 20, datasetId: 31, title: "2026" },
    ];
    const payload = { chart2: [{ totalClaim: 100 }] };
    mocks.generateMultiDataset.mockResolvedValue(payload);

    const response = await postComparative(jsonRequest("/api/protected/generate/old", request));

    expect(mocks.generateMultiDataset).toHaveBeenCalledWith(request);
    await expect(responseJson(response)).resolves.toEqual({
      success: true,
      data: payload,
    });
  });

  it("import Table 5 maps UI row fields to customIllnesses.createMany", async () => {
    mocks.prisma.customIllnesses.deleteMany.mockResolvedValue({ count: 1 });
    mocks.prisma.customIllnesses.createMany.mockResolvedValue({ count: 1 });

    const response = await postImportT5(jsonRequest("/api/protected/generate/importT5", {
      clientId: 10,
      py: "2026",
      rows: [
        {
          Member_Type: "P",
          Diagnosis: "Flu",
          ICD_10_Code: "J10",
          claimAmount: 1200,
          claimAmount_percentage: 33,
          claimCount: 4,
          claimCount_percentage: 25,
          averageClaimAmount: 300,
        },
      ],
    }));

    expect(mocks.prisma.customIllnesses.deleteMany).toHaveBeenCalledWith({
      where: { clientId: 10, py: "2026" },
    });
    expect(mocks.prisma.customIllnesses.createMany).toHaveBeenCalledWith({
      data: [
        {
          clientId: 10,
          py: "2026",
          member_type: "P",
          icd_10_code: "J10",
          diagnosis: "Flu",
          claim_amount: 1200,
          percentage_to_total_amount: 33,
          claim_count: 4,
          percentage_to_total_count: 25,
          average_cost_per_claim: 300,
        },
      ],
      skipDuplicates: true,
    });
    await expect(responseJson(response)).resolves.toEqual({
      message: "Data imported successfully",
      success: true,
    });
  });

  it("import Table 5 rejects missing required fields", async () => {
    const response = await postImportT5(jsonRequest("/api/protected/generate/importT5", {
      clientId: 10,
      py: "2026",
    }));

    await expect(responseJson(response)).resolves.toEqual({
      error: "Missing required fields: clientId, py, or rows",
    });
    expect(mocks.prisma.customIllnesses.deleteMany).not.toHaveBeenCalled();
    expect(mocks.prisma.customIllnesses.createMany).not.toHaveBeenCalled();
  });

  it("check custom illnesses returns 400 for missing query params", async () => {
    const response = await getCustomIllnesses(getRequest("/api/protected/generate/checkCustomIllnesses?clientId=10"));

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toEqual({
      error: "Missing required fields: clientId or py",
    });
  });

  it("check custom illnesses returns success false when no rows exist", async () => {
    mocks.prisma.customIllnesses.findMany.mockResolvedValue([]);

    const response = await getCustomIllnesses(
      getRequest("/api/protected/generate/checkCustomIllnesses?clientId=10&py=2026"),
    );

    await expect(responseJson(response)).resolves.toEqual({
      message: "No custom illnesses found for the given clientId and py",
      success: false,
    });
  });

  it("check custom illnesses groups row data and totals by member type", async () => {
    mocks.prisma.customIllnesses.findMany.mockResolvedValue([
      {
        member_type: "P",
        diagnosis: "Flu",
        claim_amount: 100.1,
        percentage_to_total_amount: 12.2,
        claim_count: 2,
        percentage_to_total_count: 40.1,
        average_cost_per_claim: 50.1,
      },
      {
        member_type: "P",
        diagnosis: "Cold",
        claim_amount: 10,
        percentage_to_total_amount: 1,
        claim_count: 1,
        percentage_to_total_count: 20,
        average_cost_per_claim: 10,
      },
      {
        member_type: "D",
        diagnosis: "Asthma",
        claim_amount: 30,
        percentage_to_total_amount: 3,
        claim_count: 3,
        percentage_to_total_count: 30,
        average_cost_per_claim: 10,
      },
    ]);

    const response = await getCustomIllnesses(
      getRequest("/api/protected/generate/checkCustomIllnesses?clientId=10&py=2026"),
    );

    expect(mocks.prisma.customIllnesses.findMany).toHaveBeenCalledWith({
      where: { clientId: 10, py: "2026" },
      orderBy: [{ member_type: "desc" }, { claim_amount: "desc" }],
    });
    await expect(responseJson(response)).resolves.toEqual({
      success: true,
      data: [
        {
          Member_Type: "P",
          Diagnosis: "Flu",
          claimAmount: 101,
          claimAmount_percentage: 13,
          claimCount: 2,
          claimCount_percentage: 41,
          averageClaimAmount: 51,
        },
        {
          Member_Type: "P",
          Diagnosis: "Cold",
          claimAmount: 10,
          claimAmount_percentage: 1,
          claimCount: 1,
          claimCount_percentage: 20,
          averageClaimAmount: 10,
        },
        {
          Member_Type: "D",
          Diagnosis: "Asthma",
          claimAmount: 30,
          claimAmount_percentage: 3,
          claimCount: 3,
          claimCount_percentage: 30,
          averageClaimAmount: 10,
        },
      ],
      totals: [
        {
          Member_Type: "P",
          claimAmount: 111,
          claimAmount_percentage: 14,
          claimCount: 3,
          claimCount_percentage: 61,
          averageClaimAmount: 37,
        },
        {
          Member_Type: "D",
          claimAmount: 30,
          claimAmount_percentage: 3,
          claimCount: 3,
          claimCount_percentage: 30,
          averageClaimAmount: 10,
        },
      ],
    });
  });
});
