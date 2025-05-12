export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const clients = await prisma.clients.findMany();
    return NextResponse.json(clients); // Automatically sets status 200 and sends JSON
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch clients" });
  }
}
