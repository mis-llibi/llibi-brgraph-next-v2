export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { NextResponse as res, NextRequest } from "next/server";
import { uploadDeck } from "@/lib/s3";

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" });
  }
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const clientId = formData.get("id");
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString() || "";

  if (!clientId) {
    return res.json({ error: "Client ID is required" }, { status: 400 });
  }

  if (!file) {
    return res.json({ error: "File is required" }, { status: 400 });
  }

  if (!name) {
    return res.json({ error: "File name is required" }, { status: 400 });
  }

  try {
    const { key } = await uploadDeck(file, clientId.toString());

    // Save the deck information to the database
    const deck = await prisma.decks.create({
      data: {
        name,
        key,
        description,
        clientId: +clientId,
      },
    });

    return res.json({ success: true, deck });
  } catch (error) {
    console.error("Error uploading deck:", error);
    return res.json({ error: "Failed to upload deck" }, { status: 500 });
  }
}
