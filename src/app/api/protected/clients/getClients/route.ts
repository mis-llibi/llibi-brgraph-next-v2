export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-middleware";
import { NextResponse as res } from "next/server";

export async function GET() {
  try {
    // Require authentication - any authenticated user can view clients
    const authResult = await requireAuth();
    if (authResult instanceof res) {
      return authResult; // Return auth error response
    }

    const clients = await prisma.clients.findMany({
      select: {
        id: true,
        client_name: true,
      },
      orderBy: {
        client_name: "asc",
      },
    });

    return res.json({ clients });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.json({ error: "Failed to fetch clients" }, { status: 500 });
  }
}
