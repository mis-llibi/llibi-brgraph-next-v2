import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextResponse } from "next/server";
import {
  authResponse,
  jsonRequest,
  permissionResponse,
  responseJson,
  testUser,
} from "@/test/api";

const mocks = vi.hoisted(() => ({
  requireAuth: vi.fn(),
  requirePermission: vi.fn(),
  prisma: {
    clients: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
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

import { GET, POST } from "./route";

describe("client management route", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mocks.requireAuth.mockResolvedValue({ user: testUser });
    mocks.requirePermission.mockReturnValue(null);
  });

  it("GET returns mapped clients with insurer names", async () => {
    mocks.prisma.clients.findMany.mockResolvedValue([
      {
        id: 1,
        client_name: "Acme",
        description: "Main client",
        insurer_id: 2,
        insurer: { name: "PhilCare" },
      },
      {
        id: 3,
        client_name: "Beta",
        description: null,
        insurer_id: null,
        insurer: null,
      },
    ]);

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(responseJson(response)).resolves.toEqual({
      success: true,
      clients: [
        {
          id: 1,
          clientName: "Acme",
          description: "Main client",
          insurerId: 2,
          insurerName: "PhilCare",
        },
        {
          id: 3,
          clientName: "Beta",
          description: null,
          insurerId: null,
          insurerName: "No Insurer",
        },
      ],
    });
    expect(mocks.prisma.clients.findMany).toHaveBeenCalledWith({
      include: { insurer: true },
      orderBy: { client_name: "asc" },
    });
  });

  it("GET returns auth response when unauthenticated", async () => {
    const unauthenticated = authResponse();
    mocks.requireAuth.mockResolvedValue(unauthenticated);

    const response = await GET();

    expect(response).toBe(unauthenticated);
    expect(mocks.prisma.clients.findMany).not.toHaveBeenCalled();
  });

  it("POST rejects missing client name", async () => {
    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: " ",
      insurerId: 2,
    }));

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client name is required",
    });
  });

  it("POST rejects duplicate client and insurer pair", async () => {
    mocks.prisma.clients.findFirst.mockResolvedValue({ id: 9 });

    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: " Acme ",
      insurerId: 2,
    }));

    expect(response.status).toBe(409);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Client \" Acme \" already exists for this insurer",
    });
    expect(mocks.prisma.clients.findFirst).toHaveBeenCalledWith({
      where: { client_name: "Acme", insurer_id: 2 },
    });
  });

  it("POST rejects missing insurer", async () => {
    mocks.prisma.clients.findFirst.mockResolvedValue(null);
    mocks.prisma.insurers.findUnique.mockResolvedValue(null);

    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: "Acme",
      insurerId: 2,
    }));

    expect(response.status).toBe(400);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: false,
      error: "Selected insurer does not exist",
    });
  });

  it("POST creates and maps a valid client", async () => {
    mocks.prisma.clients.findFirst.mockResolvedValue(null);
    mocks.prisma.insurers.findUnique.mockResolvedValue({ id: 2, name: "PhilCare" });
    mocks.prisma.clients.create.mockResolvedValue({
      id: 5,
      client_name: "Acme",
      description: "Notes",
      insurer_id: 2,
      insurer: { name: "PhilCare" },
    });

    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: " Acme ",
      description: " Notes ",
      insurerId: 2,
    }));

    expect(response.status).toBe(200);
    await expect(responseJson(response)).resolves.toMatchObject({
      success: true,
      message: "Client created successfully",
      client: {
        id: 5,
        clientName: "Acme",
        description: "Notes",
        insurerId: 2,
        insurerName: "PhilCare",
      },
    });
    expect(mocks.prisma.clients.create).toHaveBeenCalledWith({
      data: {
        client_name: "Acme",
        description: "Notes",
        insurer_id: 2,
      },
      include: { insurer: true },
    });
  });

  it("POST returns permission response when canCreate is denied", async () => {
    const denied = permissionResponse("canCreate");
    mocks.requirePermission.mockReturnValue(denied);

    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: "Acme",
    }));

    expect(response).toBe(denied);
    expect(mocks.requirePermission).toHaveBeenCalledWith(testUser, "canCreate");
    expect(mocks.prisma.clients.findFirst).not.toHaveBeenCalled();
  });

  it("treats any NextResponse auth result as terminal", async () => {
    const responseBody = NextResponse.json({ error: "custom" }, { status: 418 });
    mocks.requireAuth.mockResolvedValue(responseBody);

    const response = await POST(jsonRequest("/api/protected/client-management", {
      clientName: "Acme",
    }));

    expect(response).toBe(responseBody);
  });
});
