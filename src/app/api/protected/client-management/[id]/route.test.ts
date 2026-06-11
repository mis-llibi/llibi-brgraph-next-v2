import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  jsonRequest,
  permissionResponse,
  responseJson,
  routeParams,
  testUser,
} from "@/test/api";

const mocks = vi.hoisted(() => ({
  requireAuth: vi.fn(),
  requirePermission: vi.fn(),
  prisma: {
    clients: {
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    insurers: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("@/lib/auth-middleware", () => ({
  requireAuth: mocks.requireAuth,
  requirePermission: mocks.requirePermission,
}));

vi.mock("@/lib/prisma", () => ({
  prisma: mocks.prisma,
}));

import { DELETE, GET, PUT } from "./route";

describe("client management [id] route", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.requireAuth.mockResolvedValue({ user: testUser });
    mocks.requirePermission.mockReturnValue(null);
  });

  it("GET rejects an invalid ID", async () => {
    const response = await GET(jsonRequest("/api/protected/client-management/nope"), routeParams("nope"));

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Invalid client ID",
    });
  });

  it("GET returns 404 for a missing client", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue(null);

    const response = await GET(jsonRequest("/api/protected/client-management/99"), routeParams("99"));

    expect(response.status).toBe(404);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client not found",
    });
  });

  it("PUT rejects duplicate names", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue({ id: 5 });
    mocks.prisma.clients.findFirst.mockResolvedValue({ id: 7 });

    const response = await PUT(
      jsonRequest("/api/protected/client-management/5", {
        clientName: "Acme",
        insurerId: 2,
      }),
      routeParams("5"),
    );

    expect(response.status).toBe(409);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client \"Acme\" already exists for this insurer",
    });
    expect(mocks.prisma.clients.findFirst).toHaveBeenCalledWith({
      where: {
        client_name: "Acme",
        insurer_id: 2,
        id: { not: 5 },
      },
    });
  });

  it("PUT rejects an invalid ID", async () => {
    const response = await PUT(
      jsonRequest("/api/protected/client-management/nope", { clientName: "Acme" }),
      routeParams("nope"),
    );

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Invalid client ID",
    });
  });

  it("PUT returns 404 for a missing client", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue(null);

    const response = await PUT(
      jsonRequest("/api/protected/client-management/99", { clientName: "Acme" }),
      routeParams("99"),
    );

    expect(response.status).toBe(404);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client not found",
    });
  });

  it("PUT rejects invalid insurers", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue({ id: 5 });
    mocks.prisma.clients.findFirst.mockResolvedValue(null);
    mocks.prisma.insurers.findUnique.mockResolvedValue(null);

    const response = await PUT(
      jsonRequest("/api/protected/client-management/5", {
        clientName: "Acme",
        insurerId: 2,
      }),
      routeParams("5"),
    );

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Selected insurer does not exist",
    });
  });

  it("PUT updates and maps a client", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue({ id: 5 });
    mocks.prisma.clients.findFirst.mockResolvedValue(null);
    mocks.prisma.insurers.findUnique.mockResolvedValue({ id: 2 });
    mocks.prisma.clients.update.mockResolvedValue({
      id: 5,
      client_name: "Acme",
      description: null,
      insurer_id: 2,
      insurer: { name: "Maxicare" },
    });

    const response = await PUT(
      jsonRequest("/api/protected/client-management/5", {
        clientName: " Acme ",
        description: " ",
        insurerId: 2,
      }),
      routeParams("5"),
    );

    expect(response.status).toBe(200);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: true,
      client: {
        id: 5,
        clientName: "Acme",
        description: null,
        insurerId: 2,
        insurerName: "Maxicare",
      },
    });
  });

  it("PUT returns permission response when canEdit is denied", async () => {
    const denied = permissionResponse("canEdit");
    mocks.requirePermission.mockReturnValue(denied);

    const response = await PUT(
      jsonRequest("/api/protected/client-management/5", { clientName: "Acme" }),
      routeParams("5"),
    );

    expect(response).toBe(denied);
    expect(mocks.prisma.clients.findUnique).not.toHaveBeenCalled();
  });

  it("DELETE blocks clients with related data", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue({
      id: 5,
      _count: {
        uploads: 1,
        decks: 2,
        masterlistEntries: 3,
        utilizationEntries: 4,
      },
    });

    const response = await DELETE(jsonRequest("/api/protected/client-management/5"), routeParams("5"));

    expect(response.status).toBe(409);
    await expect(responseJson(response)).resolves.toEqual({
      success: false,
      error: "Cannot delete client with existing data",
      details: {
        uploads: 1,
        decks: 2,
        masterlists: 3,
        utilizations: 4,
      },
    });
    expect(mocks.prisma.clients.delete).not.toHaveBeenCalled();
  });

  it("DELETE returns 404 for a missing client", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue(null);

    const response = await DELETE(jsonRequest("/api/protected/client-management/99"), routeParams("99"));

    expect(response.status).toBe(404);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client not found",
    });
  });

  it("DELETE succeeds when no related data exists", async () => {
    mocks.prisma.clients.findUnique.mockResolvedValue({
      id: 5,
      _count: {
        uploads: 0,
        decks: 0,
        masterlistEntries: 0,
        utilizationEntries: 0,
      },
    });
    mocks.prisma.clients.delete.mockResolvedValue({ id: 5 });

    const response = await DELETE(jsonRequest("/api/protected/client-management/5"), routeParams("5"));

    expect(response.status).toBe(200);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: true,
      message: "Client deleted successfully",
    });
    expect(mocks.prisma.clients.delete).toHaveBeenCalledWith({
      where: { id: 5 },
    });
  });

  it("DELETE returns permission response when canRemove is denied", async () => {
    const denied = permissionResponse("canRemove");
    mocks.requirePermission.mockReturnValue(denied);

    const response = await DELETE(jsonRequest("/api/protected/client-management/5"), routeParams("5"));

    expect(response).toBe(denied);
    expect(mocks.prisma.clients.findUnique).not.toHaveBeenCalled();
  });
});
