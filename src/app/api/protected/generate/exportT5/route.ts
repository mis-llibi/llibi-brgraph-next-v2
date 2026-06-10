export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";
import { unparse } from "papaparse";
import { exportTable5Rows } from "@/lib/standard-data";

export async function POST(req: NextRequest) {
  if (!req.body) return NextResponse.json({ error: "Request body is null" });

  const data = await req.json();
  const rows = await exportTable5Rows(Number(data.clientId), Number(data.datasetId));
  const csv = unparse(rows, { newline: "\r\n" });

  return new Response(new Blob([csv], { type: "text/csv;charset=utf-8" }), {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename=table5-export-${DateTime.now().toFormat(
        "yyyyMMdd-HHmmss",
      )}.csv`,
    },
  });
}
