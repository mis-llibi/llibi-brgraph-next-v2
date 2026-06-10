export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { deleteFile, readFile, saveFile } from "@/lib/s3";
import {
  getDatasetSelection,
  resolveDatasetForUpload,
} from "@/lib/datasets";
import { parseMasterlistWorksheet } from "@/lib/standard-data";

export async function POST(req: NextRequest) {
  try {
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) return authResult;

    const permissionResult = requirePermission(authResult.user, "canUpload");
    if (permissionResult) return permissionResult;

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const clientIdInput = formData.get("id");
    const insurerIdInput = formData.get("insurerId");

    if (!file || !clientIdInput || !insurerIdInput) {
      return NextResponse.json({ error: "Missing required fields" });
    }

    const clientId = Number(clientIdInput);
    const insurerId = Number(insurerIdInput);
    const { datasetId, datasetTitle } = getDatasetSelection(formData);
    const dataset = await resolveDatasetForUpload({
      clientId,
      insurerId,
      datasetId,
      datasetTitle,
    });

    const { key } = await saveFile(file);
    try {
      const worksheet = await readFile(key);
      if (!worksheet) {
        return NextResponse.json({ error: "Failed to read excel file" });
      }

      const rows = parseMasterlistWorksheet(
        worksheet,
        clientId,
        insurerId,
        dataset.id,
      );

      await prisma.$transaction(async (tx) => {
        const db = tx as any;
        await db.masterlistEntries.deleteMany({
          where: { clientId, datasetId: dataset.id },
        });
        await tx.uploads.deleteMany({
          where: {
            clientId,
            insurerId,
            datasetId: dataset.id,
            type: "masterlist",
          },
        });
        if (rows.length) {
          await db.masterlistEntries.createMany({ data: rows });
        }
        await tx.uploads.create({
          data: {
            clientId,
            insurerId,
            datasetId: dataset.id,
            year: dataset.title,
            type: "masterlist",
          },
        });
      });

      return NextResponse.json({
        message: "Masterlist uploaded successfully",
        success: true,
        recordsProcessed: rows.length,
      });
    } finally {
      await deleteFile(key);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to upload excel file";
    console.error("Failed to upload masterlist:", error);
    return NextResponse.json({ error: message });
  }
}
