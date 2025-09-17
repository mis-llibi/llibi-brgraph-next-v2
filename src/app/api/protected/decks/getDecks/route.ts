export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { NextResponse as res, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Require authentication first
    const authResult = await requireAuth();
    if (authResult instanceof res) {
      return authResult; // Return auth error response
    }

    // Check canViewDeck permission
    const permissionResult = requirePermission(authResult.user, "canViewDeck");
    if (permissionResult) {
      return permissionResult; // Return permission error response
    }

    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get("clientId");

    if (!clientId) {
      return res.json({ error: "Client ID is required" }, { status: 400 });
    }

    const decks = await prisma.decks.findMany({
      where: {
        clientId: +clientId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return res.json({ decks });
  } catch (error) {
    console.error("Error fetching decks:", error);
    return res.json({ error: "Failed to fetch decks" }, { status: 500 });
  }
}
