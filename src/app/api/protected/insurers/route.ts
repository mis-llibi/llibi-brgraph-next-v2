export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-middleware";
import { NextResponse } from "next/server";

// GET - List all insurers for dropdown selection
export async function GET() {
  try {
    // Require authentication - any authenticated user can view insurers
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult; // Return auth error response
    }

    const insurers = await prisma.insurers.findMany({
      include: {
        _count: {
          select: {
            clients: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      insurers: insurers.map((insurer) => ({
        id: insurer.id,
        name: insurer.name,
        clientsCount: insurer._count.clients,
      })),
    });
  } catch (error) {
    console.error("Error fetching insurers:", error);
    return NextResponse.json(
      { error: "Failed to fetch insurers", success: false },
      { status: 500 }
    );
  }
}
