export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { NextResponse as res, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Require authentication first
    const authResult = await requireAuth();
    if (authResult instanceof res) {
      return authResult; // Return auth error response
    }

    // Check canCreate permission for creating new clients
    const permissionResult = requirePermission(authResult.user, "canCreate");
    if (permissionResult) {
      return permissionResult; // Return permission error response
    }

    const body = await req.json();
    const { clientName, insurerId } = body;

    const existingClient = await prisma.clients.findFirst({
      where: {
        client_name: clientName,
        insurer_id: insurerId,
      },
    });

    if (existingClient) {
      return res.json({
        error: "Client already exists",
        message: `Client with name ${clientName} and insurer ID ${insurerId} already exists.`,
      });
    }

    const newClient = await prisma.clients.create({
      data: {
        client_name: clientName,
        insurer_id: insurerId,
      },
    });

    return res.json({
      newClient,
    });
  } catch (error) {
    return res.json({
      error: "Failed to create client",
      message: error,
    });
  }
}
