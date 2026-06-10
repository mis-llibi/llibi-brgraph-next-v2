export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { NextResponse, NextRequest } from "next/server";

// GET - Get specific client by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    const { id } = await params;
    const clientId = parseInt(id);

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: "Invalid client ID", success: false },
        { status: 400 }
      );
    }

    const client = await (prisma.clients as any).findUnique({
      where: { id: clientId },
      include: {
        insurer: true,
        _count: {
          select: {
            uploads: true,
            decks: true,
            masterlistEntries: true,
            utilizationEntries: true,
          },
        },
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Client not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      client: {
        id: client.id,
        clientName: client.client_name,
        description: client.description,
        insurerId: client.insurer_id,
        insurerName: client.insurer?.name || "No Insurer",
        counts: {
          uploads: client._count.uploads,
          decks: client._count.decks,
          masterlistEntries: client._count.masterlistEntries,
          utilizationEntries: client._count.utilizationEntries,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching client:", error);
    return NextResponse.json(
      { error: "Failed to fetch client", success: false },
      { status: 500 }
    );
  }
}

// PUT - Update client
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    // Check canEdit permission
    const permissionResult = requirePermission(authResult.user, "canEdit");
    if (permissionResult) {
      return permissionResult;
    }

    const { id } = await params;
    const clientId = parseInt(id);

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: "Invalid client ID", success: false },
        { status: 400 }
      );
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

    // Check if client exists
    const existingClient = await prisma.clients.findUnique({
      where: { id: clientId },
    });

    if (!existingClient) {
      return NextResponse.json(
        { error: "Client not found", success: false },
        { status: 404 }
      );
    }

    // Check for duplicate name (excluding current client)
    const duplicateClient = await prisma.clients.findFirst({
      where: {
        client_name: clientName.trim(),
        insurer_id: insurerId || null,
        id: { not: clientId },
      },
    });

    if (duplicateClient) {
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

    const updatedClient = await prisma.clients.update({
      where: { id: clientId },
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
      message: "Client updated successfully",
      client: {
        id: updatedClient.id,
        clientName: updatedClient.client_name,
        description: updatedClient.description,
        insurerId: updatedClient.insurer_id,
        insurerName: updatedClient.insurer?.name || "No Insurer",
      },
    });
  } catch (error) {
    console.error("Error updating client:", error);
    return NextResponse.json(
      { error: "Failed to update client", success: false },
      { status: 500 }
    );
  }
}

// DELETE - Delete client
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Require authentication
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult;
    }

    // Check canRemove permission
    const permissionResult = requirePermission(authResult.user, "canRemove");
    if (permissionResult) {
      return permissionResult;
    }

    const { id } = await params;
    const clientId = parseInt(id);

    if (isNaN(clientId)) {
      return NextResponse.json(
        { error: "Invalid client ID", success: false },
        { status: 400 }
      );
    }

    // Check if client exists and get related data count
    const client = await (prisma.clients as any).findUnique({
      where: { id: clientId },
      include: {
        _count: {
          select: {
            uploads: true,
            decks: true,
            masterlistEntries: true,
            utilizationEntries: true,
          },
        },
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Client not found", success: false },
        { status: 404 }
      );
    }

    // Check if client has related data
    const totalRelatedRecords =
      client._count.uploads +
      client._count.decks +
      client._count.masterlistEntries +
      client._count.utilizationEntries;

    if (totalRelatedRecords > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete client with existing data",
          success: false,
          details: {
            uploads: client._count.uploads,
            decks: client._count.decks,
            masterlists: client._count.masterlistEntries,
            utilizations: client._count.utilizationEntries,
          },
        },
        { status: 409 }
      );
    }

    await prisma.clients.delete({
      where: { id: clientId },
    });

    return NextResponse.json({
      success: true,
      message: "Client deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting client:", error);
    return NextResponse.json(
      { error: "Failed to delete client", success: false },
      { status: 500 }
    );
  }
}
