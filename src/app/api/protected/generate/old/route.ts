export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import {
  generateMultiDataset,
  type GenerateDatasetRequest,
} from "@/lib/standard-data";

export async function POST(req: NextRequest) {
  if (!req.body) return NextResponse.json({ error: "Request body is null" });

  const data: GenerateDatasetRequest[] = await req.json();
  const reportData = await generateMultiDataset(data);

  return NextResponse.json({
    success: true,
    data: reportData,
  });
}
