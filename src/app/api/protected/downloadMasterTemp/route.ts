export const dynamic = "force-dynamic";
import { NextResponse as res, NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth-middleware";
import fs from "fs";
import path from "path";
import { convertInsurer } from "@/lib/insurers";

export async function GET(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult instanceof res) {
    return authResult; 
  }
  const insurerIdParam = req.nextUrl.searchParams.get("insurerId");

  if (!insurerIdParam) {
    return res.json({ error: "insurerId is required" }, { status: 400 });
  }

  const insurerId = parseInt(insurerIdParam, 10);

  if (isNaN(insurerId)) {
    return res.json(
      { error: "insurerId must be a valid number" },
      { status: 400 }
    );
  }

  const insurer = convertInsurer(insurerId);
  const filepath = path.join(
    process.cwd(),
    "templates",
    `${insurer.toLowerCase()}`,
    "Masterlist.xlsx"
  );
  console.log("File path to download:", filepath);

  const fileBuffer = fs.readFileSync(filepath);

  return new res(fileBuffer as unknown as BodyInit, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename=Masterlist_${insurer}.xlsx`,
    },
  });
}
