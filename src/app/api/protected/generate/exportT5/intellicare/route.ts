export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { DateTime } from "luxon";
import { unparse } from "papaparse";

import { NextResponse as res, NextRequest } from "next/server";

// This route is for exporting Table 5 data
type exportT5Request = {
  clientId: number;
  datasetId: number;
  title?: string;
};

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" });
  }
  const data: exportT5Request = await req.json();
  const clientId = data.clientId;
  const datasetId = data.datasetId;

  try {
    const initialData = await prisma.intellicare.groupBy({
      by: ["Member_Type", "Diagnosis", "ICD_10_Code"],
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
        clientId,
        datasetId,
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
        const finalCA_percentage = Number(
          (claimAmount / totalClaimAmount) * 100
        );

        const claimCount = data._count.Approved_Claim_Amount;
        const finalCC_percentage = Number((claimCount / totalClaimCount) * 100);

        const averageClaimAmount = Math.round(
          data._avg.Approved_Claim_Amount ?? 0
        );

        const { _avg, _count, _sum, ...payload } = data;

        return {
          ...payload,
          ICD_10_Code: data.ICD_10_Code,
          claimAmount,
          claimAmount_percentage: finalCA_percentage,
          claimCount,
          claimCount_percentage: finalCC_percentage,
          averageClaimAmount,
        };
      });

    const payload = processedData.sort((a, b) => {
      const priorityOrder: Record<string, number> = { P: 1, D: 2 };
      const aPriority = priorityOrder[a.Member_Type] ?? 99;
      const bPriority = priorityOrder[b.Member_Type] ?? 99;
      return aPriority - bPriority;
    });

    console.log("Final Payload:", JSON.stringify(payload, null, 2));

    const rows = payload.map((item) => ({
      Member_Type: item.Member_Type,
      Diagnosis: item.Diagnosis,
      ICD_10_Code: item.ICD_10_Code,
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
