export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

import { NextResponse as res, NextRequest } from "next/server";

type inputRow = {
  Member_Type: string;
  Diagnosis: string;
  ICD_10_Code: string;
  claimAmount: number;
  claimAmount_percentage: number;
  claimCount: number;
  claimCount_percentage: number;
  averageClaimAmount: number;
};

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" });
  }
  const { clientId, py, rows } = await req.json();

  if (!clientId || !py || !rows) {
    return res.json({
      error: "Missing required fields: clientId, py, or rows",
    });
  }

  await prisma.customIllnesses.deleteMany({
    where: {
      clientId,
      py,
    },
  });

  await prisma.customIllnesses
    .createMany({
      data: rows.map((row: inputRow) => ({
        clientId,
        py,
        member_type: row.Member_Type,
        icd_10_code: row.ICD_10_Code,
        diagnosis: row.Diagnosis,
        claim_amount: row.claimAmount,
        percentage_to_total_amount: row.claimAmount_percentage,
        claim_count: row.claimCount,
        percentage_to_total_count: row.claimCount_percentage,
        average_cost_per_claim: row.averageClaimAmount,
      })),
      skipDuplicates: true,
    })
    .catch((error) => {
      console.error("Error inserting data into customIllnesses:", error);
      return res.json({ error: "Failed to insert data" });
    });

  return res.json({
    message: "Data imported successfully",
    success: true,
  });
}
