export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId");
  const py = req.nextUrl.searchParams.get("py");

  if (!clientId || !py) {
    return NextResponse.json(
      { error: "Missing required fields: clientId or py" },
      { status: 400 },
    );
  }

  const illnesses = await prisma.customIllnesses.findMany({
    where: { clientId: Number(clientId), py },
    orderBy: [{ member_type: "desc" }, { claim_amount: "desc" }],
  });

  if (!illnesses.length) {
    return NextResponse.json({
      message: "No custom illnesses found for the given clientId and py",
      success: false,
    });
  }

  const grouped = illnesses.reduce<Record<string, typeof illnesses>>((acc, row) => {
    const key = row.member_type ?? "Unknown";
    if (!acc[key]) acc[key] = [];
    acc[key].push(row);
    return acc;
  }, {});

  const data = [];
  const totals = [];

  for (const [memberType, rows] of Object.entries(grouped)) {
    const mapped = rows.map((row) => ({
      Member_Type: memberType,
      Diagnosis: row.diagnosis,
      claimAmount: Math.ceil(row.claim_amount ?? 0),
      claimAmount_percentage: Math.ceil(Number(row.percentage_to_total_amount ?? 0)),
      claimCount: Math.ceil(row.claim_count ?? 0),
      claimCount_percentage: Math.ceil(Number(row.percentage_to_total_count ?? 0)),
      averageClaimAmount: Math.ceil(row.average_cost_per_claim ?? 0),
    }));
    const totalClaimAmount = mapped.reduce((sum, row) => sum + row.claimAmount, 0);
    const totalClaimCount = mapped.reduce((sum, row) => sum + row.claimCount, 0);

    data.push(...mapped);
    totals.push({
      Member_Type: memberType,
      claimAmount: totalClaimAmount,
      claimAmount_percentage: mapped.reduce((sum, row) => sum + row.claimAmount_percentage, 0),
      claimCount: totalClaimCount,
      claimCount_percentage: mapped.reduce((sum, row) => sum + row.claimCount_percentage, 0),
      averageClaimAmount: totalClaimCount ? Math.round(totalClaimAmount / totalClaimCount) : 0,
    });
  }

  return NextResponse.json({ data, totals, success: true });
}
