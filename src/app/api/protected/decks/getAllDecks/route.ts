export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { NextResponse as res } from "next/server";

export async function GET() {
  try {
    const decks = await prisma.decks.findMany({
      include: {
        clients: {
          select: {
            id: true,
            client_name: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return res.json({ decks });
  } catch (error) {
    console.error("Error fetching all decks:", error);
    return res.json({ error: "Failed to fetch decks" }, { status: 500 });
  }
}
