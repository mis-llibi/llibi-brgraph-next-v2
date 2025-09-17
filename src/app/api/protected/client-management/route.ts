export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { NextResponse, NextRequest } from "next/server";

// GET - List all clients with insurer information
export async function GET() {
  try {
    // Require authentication - any authenticated user can view clients
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult; // Return auth error response
    }

    const clients = await prisma.clients.findMany({
      include: {
        insurer: true,
      },
      orderBy: {
        client_name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      clients: clients.map((client) => ({
        id: client.id,
        clientName: client.client_name,
        description: client.description,
        insurerId: client.insurer_id,
        insurerName: client.insurer?.name || "No Insurer",
      })),
    });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json(
      { error: "Failed to fetch clients", success: false },
      { status: 500 }
    );
  }
}

// POST - Create new client
export async function POST(req: NextRequest) {
  try {
    // Require authentication first
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult; // Return auth error response
    }

    // Check canCreate permission for creating new clients
    const permissionResult = requirePermission(authResult.user, "canCreate");
    if (permissionResult) {
      return permissionResult; // Return permission error response
    }

    const body = await req.json();
    const { clientName, description, insurerId } = body;

    // Validate required fields
    if (!clientName?.trim()) {
      return NextResponse.json(
        { error: "Client name is required", success: false },
        { status: 400 }
      );
    }

    // Check if client already exists with same name and insurer
    const existingClient = await prisma.clients.findFirst({
      where: {
        client_name: clientName.trim(),
        insurer_id: insurerId || null,
      },
    });

    if (existingClient) {
      return NextResponse.json(
        {
          error: `Client "${clientName}" already exists${
            insurerId ? " for this insurer" : ""
          }`,
          success: false,
        },
        { status: 409 }
      );
    }

    // Verify insurer exists if provided
    if (insurerId) {
      const insurer = await prisma.insurers.findUnique({
        where: { id: insurerId },
      });

      if (!insurer) {
        return NextResponse.json(
          { error: "Selected insurer does not exist", success: false },
          { status: 400 }
        );
      }
    }

    const newClient = await prisma.clients.create({
      data: {
        client_name: clientName.trim(),
        description: description?.trim() || null,
        insurer_id: insurerId || null,
      },
      include: {
        insurer: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Client created successfully",
      client: {
        id: newClient.id,
        clientName: newClient.client_name,
        description: newClient.description,
        insurerId: newClient.insurer_id,
        insurerName: newClient.insurer?.name || "No Insurer",
      },
    });
  } catch (error) {
    console.error("Error creating client:", error);
    return NextResponse.json(
      { error: "Failed to create client", success: false },
      { status: 500 }
    );
  }
}
