export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";

import { NextResponse as res, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get("clientId");
  const py = searchParams.get("py");

  if (!clientId || !py) {
    return res.json(
      {
        error: "Missing required fields: clientId or py",
      },
      { status: 400 }
    );
  }

  try {
    const illnesses = await prisma.customIllnesses.findMany({
      where: {
        clientId: parseInt(clientId),
        py,
      },
      orderBy: [{ member_type: "desc" }, { claim_amount: "desc" }],
    });

    if (illnesses.length === 0) {
      return res.json({
        message: "No custom illnesses found for the given clientId and py",
        success: false,
      });
    }

    // Format the illnesses data
    const grouped = illnesses.reduce(
      (acc: Record<string, typeof illnesses>, row) => {
        if (!acc[row.member_type as string])
          acc[row.member_type as string] = [];
        acc[row.member_type as string].push(row);
        return acc;
      },
      {}
    );

    const allData: any[] = [];
    const allTotals: any[] = [];

    for (const [memberType, rows] of Object.entries(grouped)) {
      const sorted = rows.sort(
        (a, b) => b.claim_amount ?? 0 - (a.claim_amount ?? 0)
      );
      const data = sorted.map((r) => ({
        Member_Type: memberType,
        Diagnosis: r.diagnosis,
        claimAmount: Math.ceil(r.claim_amount ?? 0),
        claimAmount_percentage: Math.ceil(Number(r.percentage_to_total_amount)),
        claimCount: Math.ceil(r.claim_count ?? 0),
        claimCount_percentage: Math.ceil(Number(r.percentage_to_total_count)),
        averageClaimAmount: Math.ceil(r.average_cost_per_claim ?? 0),
      }));

      const totalClaimAmount = data.reduce(
        (sum, r) => sum + (r.claimAmount ?? 0),
        0
      );
      const totalClaimCount = data.reduce(
        (sum, r) => sum + (r.claimCount ?? 0),
        0
      );

      const total = {
        Member_Type: memberType,
        claimAmount: totalClaimAmount,
        claimAmount_percentage: data.reduce(
          (sum, r) => sum + r.claimAmount_percentage,
          0
        ),
        claimCount: totalClaimCount,
        claimCount_percentage: data.reduce(
          (sum, r) => sum + r.claimCount_percentage,
          0
        ),
        averageClaimAmount:
          totalClaimCount > 0
            ? Math.round(totalClaimAmount / totalClaimCount)
            : 0,
      };

      allData.push(...data);
      allTotals.push(total);
    }

    return res.json({
      data: allData,
      totals: allTotals,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching custom illnesses:", error);
    return res.json({
      error: "Failed to fetch custom illnesses",
    });
  }
}
