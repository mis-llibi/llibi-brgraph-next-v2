export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { NextResponse as res, NextRequest } from "next/server";
import { uploadDeck, deleteFile } from "@/lib/s3";

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" }, { status: 400 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const id = formData.get("id");
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString() || "";

  if (!id) {
    return res.json({ error: "Deck ID is required" }, { status: 400 });
  }

  if (!name) {
    return res.json({ error: "Deck name is required" }, { status: 400 });
  }

  try {
    // Get the existing deck to check if it exists and get current file key
    const existingDeck = await prisma.decks.findUnique({
      where: { id: +id },
    });

    if (!existingDeck) {
      return res.json({ error: "Deck not found" }, { status: 404 });
    }

    const updateData: {
      name: string;
      description: string;
      key?: string;
    } = {
      name,
      description,
    };

    // If a new file is provided, upload it and update the key
    if (file) {
      // Upload the new file
      const { key: newKey } = await uploadDeck(
        file,
        existingDeck.clientId.toString()
      );

      // Delete the old file from S3
      try {
        await deleteFile(existingDeck.key);
      } catch (deleteError) {
        console.warn("Failed to delete old file from S3:", deleteError);
        // Continue with the update even if old file deletion fails
      }

      updateData.key = newKey;
    }

    // Update the deck in the database
    const updatedDeck = await prisma.decks.update({
      where: { id: +id },
      data: updateData,
    });

    return res.json({ success: true, deck: updatedDeck });
  } catch (error) {
    console.error("Error updating deck:", error);
    return res.json({ error: "Failed to update deck" }, { status: 500 });
  }
}
