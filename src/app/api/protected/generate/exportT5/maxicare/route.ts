export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { DateTime } from "luxon";
import { unparse } from "papaparse";

import { NextResponse as res, NextRequest } from "next/server";

// This route is for exporting Table 5 data
type exportT5Request = {
  startDate: string;
  endDate: string;
  clientId: number;
};

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" });
  }
  const data: exportT5Request = await req.json();
  const startDate = data.startDate;
  const endDate = DateTime.fromISO(data.endDate)
    .endOf("month")
    .set({
      hour: 0,
      minute: 0,
      second: 0,
    })
    .toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
  const clientId = data.clientId;

  try {
    const initialData = await prisma.maxicare.groupBy({
      by: ["Member_Type", "Diagnosis"],
      _sum: {
        Approved_Claim_Amount: true,
      },
      _count: {
        Approved_Claim_Amount: true,
      },
      _avg: {
        Approved_Claim_Amount: true,
      },
      where: {
        Admission_Date: {
          gte: startDate,
          lte: endDate,
        },
        clientId,
        Approved_Claim_Amount: {
          not: null,
        },
        Diagnosis: {
          not: null,
        },
      },
      orderBy: {
        Member_Type: "desc",
      },
    });

    const groupedByMemberType: Record<string, any[]> = {};

    const sortedData = initialData.sort((a, b) => {
      const aClaim = a._sum.Approved_Claim_Amount ?? 0;
      const bClaim = b._sum.Approved_Claim_Amount ?? 0;

      return bClaim - aClaim; // Descending order
    });

    sortedData.forEach((item) => {
      const memberType = item.Member_Type ?? "Unknown Member";
      if (!groupedByMemberType[memberType]) {
        groupedByMemberType[memberType] = [];
      }
      groupedByMemberType[memberType].push(item);
    });

    const totalClaimAmount = initialData.reduce(
      (acc, disease) => acc + (disease._sum.Approved_Claim_Amount ?? 0),
      0
    );
    const totalClaimCount = initialData.reduce(
      (acc, disease) => acc + disease._count.Approved_Claim_Amount,
      0
    );

    const processedData = Object.values(groupedByMemberType)
      .flat()
      .map((data: any) => {
        const claimAmount = Math.round(data._sum.Approved_Claim_Amount ?? 0);
        const claimAmount_percentage = Math.round(
          (claimAmount / totalClaimAmount) * 100
        );
        const finalCA_percentage =
          claimAmount_percentage === 0 && claimAmount !== 0
            ? Number(
                (
                  Math.round((claimAmount / totalClaimAmount) * 100 * 100) / 100
                ).toFixed(1)
              )
            : claimAmount_percentage;
        const claimCount = data._count.Approved_Claim_Amount;
        const claimCount_percentage = Math.round(
          (claimCount / totalClaimCount) * 100
        );
        const finalCC_percentage =
          claimCount_percentage === 0 && claimCount !== 0
            ? Number(
                (
                  Math.round((claimCount / totalClaimCount) * 100 * 100) / 100
                ).toFixed(1)
              )
            : claimCount_percentage;
        const averageClaimAmount = Math.round(
          data._avg.Approved_Claim_Amount ?? 0
        );

        const { _avg, _count, _sum, ...payload } = data;

        return {
          ...payload,
          claimAmount,
          claimAmount_percentage: finalCA_percentage,
          claimCount,
          claimCount_percentage: finalCC_percentage,
          averageClaimAmount,
        };
      });

    // get sum of all claimAmount and claimCount for all data
    const totalApprovedClaimAmount = await prisma.maxicare.aggregate({
      _sum: {
        Approved_Claim_Amount: true,
      },
      _count: {
        Approved_Claim_Amount: true,
      },
      where: {
        Admission_Date: {
          gte: startDate,
          lte: endDate,
        },
        clientId,
        Approved_Claim_Amount: {
          not: null,
        },
      },
    });

    const { _sum, _count } = totalApprovedClaimAmount;
    const totalClaimAmountSum = _sum.Approved_Claim_Amount ?? 0;
    const totalClaimCountSum = _count.Approved_Claim_Amount ?? 0;

    const memberTypes = Array.from(
      new Set(processedData.map((d: any) => d.Member_Type))
    );

    const totals = memberTypes.map((type) => {
      const rows = processedData.filter((d) => d.Member_Type === type);
      const totalClaimAmount = rows.reduce((sum, r) => sum + r.claimAmount, 0);
      const tCA_percentage = Math.round(
        (totalClaimAmount / totalClaimAmountSum) * 100
      );
      const finalCA_percentage =
        tCA_percentage === 0 && totalClaimAmount !== 0
          ? Number(
              (
                Math.round(
                  (totalClaimAmount / totalClaimAmountSum) * 100 * 100
                ) / 100
              ).toFixed(1)
            )
          : tCA_percentage;
      const totalClaimCount = rows.reduce((sum, r) => sum + r.claimCount, 0);
      const tCC_percentage = Math.round(
        (totalClaimCount / totalClaimCountSum) * 100
      );
      const finalCC_percentage =
        tCC_percentage === 0 && totalClaimCount !== 0
          ? Number(
              (
                Math.round((totalClaimCount / totalClaimCountSum) * 100 * 100) /
                100
              ).toFixed(1)
            )
          : tCC_percentage;

      return {
        Member_Type: type,
        claimAmount: totalClaimAmount,
        claimCount: totalClaimCount,
        claimAmount_percentage: finalCA_percentage,
        claimCount_percentage: finalCC_percentage,
        averageClaimAmount:
          totalClaimCount > 0
            ? Math.round(totalClaimAmount / totalClaimCount)
            : 0,
      };
    });

    const payload = processedData.sort((a, b) => {
      const priorityOrder: Record<string, number> = { P: 1, D: 2 };
      const aPriority = priorityOrder[a.Member_Type] ?? 99;
      const bPriority = priorityOrder[b.Member_Type] ?? 99;
      return aPriority - bPriority;
    });

    const rows = payload.map((item) => ({
      Member_Type: item.Member_Type,
      Diagnosis: item.Diagnosis,
      claimAmount: item.claimAmount,
      claimAmount_percentage: item.claimAmount_percentage,
      claimCount: item.claimCount,
      claimCount_percentage: item.claimCount_percentage,
      averageClaimAmount: item.averageClaimAmount,
    }));

    const csv = unparse(rows, {
      newline: "\r\n",
    });

    return new Response(new Blob([csv], { type: "text/csv;charset=utf-8" }), {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=table5-export-${DateTime.now().toFormat(
          "yyyyMMdd-HHmmss"
        )}.csv`,
      },
    });
  } catch (error) {
    return res.json({ error: error });
  }
}
