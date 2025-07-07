export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

import { NextResponse as res, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
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
