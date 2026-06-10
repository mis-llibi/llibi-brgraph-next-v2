export const dynamic = "force-dynamic";
import { NextResponse as res } from "next/server";
import { requireAuth } from "@/lib/auth-middleware";
import fs from "fs";
import path from "path";

export async function GET() {
  const authResult = await requireAuth();
  if (authResult instanceof res) {
    return authResult;
  }
  const filepath = path.join(
    process.cwd(),
    "docs",
    "Utilization Template - for BR Automation.xlsx"
  );

  const fileBuffer = fs.readFileSync(filepath);

  return new res(fileBuffer as unknown as BodyInit, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": "attachment; filename=Utilization_Template.xlsx",
    },
  });
}
