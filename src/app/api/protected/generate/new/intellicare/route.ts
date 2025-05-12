export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { error } from "console";
import { DateTime } from "luxon";

import { NextResponse as res, NextRequest } from "next/server";

// This route is for new account generation for Intellicare

type generateOneYearRequest = {
  startDate: string;
  endDate: string;
  py: string;
  clientId: number;
  insurer: string;
  masterlist: string;
};

export async function POST(req: NextRequest) {
  if (!req.body) {
    return res.json({ error: "Request body is null" });
  }
  const data: generateOneYearRequest = await req.json();

  const chart1Result = await chart1(data);
  if (chart1Result.error) {
    return res.json({ error: chart1Result.error });
  }
  const chart2Result = await chart2(data);
  const chart3Result = await chart3(data);
  if (chart3Result.error) {
    return res.json({ error: chart1Result.error });
  }
  const chart4Result = await chart4(data);
  if (chart4Result.error) {
    return res.json({ error: chart4Result.error });
  }
  const chart5Result = await chart5(data);
  if (chart5Result.error) {
    return res.json({ error: chart4Result.error });
  }
  const chart6Result = await chart6(data);
  if (chart6Result.error) {
    return res.json({ error: chart6Result.error });
  }

  return res.json({
    success: true,
    data: {
      chart1: chart1Result.data,
      chart2: chart2Result.data,
      chart3: chart3Result.data,
      chart4: chart4Result.data,
      chart5: chart5Result.data,
      chart6: chart6Result.data,
    },
  });
}

const chart1 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
  const startDate = data.startDate;
  const endDate = data.endDate;
  const clientId = data.clientId;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // get unique companies
      const companies = await tx.intellicareMasterlist.findMany({
        where: { clientId: clientId, PY: py },
        select: { COMPANY: true },
        distinct: ["COMPANY"],
        orderBy: { COMPANY: "desc" },
      });

      // get unique relations
      const relations = await tx.intellicareMasterlist.findMany({
        where: {
          clientId: clientId,
          PY: py,
          RELATION: {
            not: "EMPLOYEE",
          },
        },
        select: { RELATION: true },
        distinct: ["RELATION"],
      });

      const priorityOrder = {
        spouse: 1,
        child: 2,
        parent: 3,
        sibling: 4,
        // Add other relations as needed
      };

      // order by spouse, child, parent, sibling
      const sortedRelations = relations.sort((a, b) => {
        const aPriority = a.RELATION
          ? priorityOrder[
              a.RELATION.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99; // Default priority for unknown values
        const bPriority = b.RELATION
          ? priorityOrder[
              b.RELATION.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99;

        return aPriority - bPriority;
      });

      const totalAll = await tx.intellicareMasterlist.count({
        where: { clientId: clientId, PY: py },
      });

      // get employees and dependents count for each company
      const companyData = await Promise.all(
        companies.map(async (company) => {
          const employees = await tx.intellicareMasterlist.count({
            where: {
              clientId: clientId,
              COMPANY: company.COMPANY,
              MEMBER_TYPE: "P",
              PY: py,
            },
          });
          const dependents = await tx.intellicareMasterlist.count({
            where: {
              clientId: clientId,
              COMPANY: company.COMPANY,
              MEMBER_TYPE: "D",
              PY: py,
            },
          });
          const total = employees + dependents;
          const detailedDependents = await Promise.all(
            sortedRelations.map(async (relation) => {
              //if employee, return
              if (relation.RELATION === "Employee") return;
              const count = await tx.intellicareMasterlist.count({
                where: {
                  clientId: clientId,
                  COMPANY: company.COMPANY,
                  RELATION: relation.RELATION,
                  MEMBER_TYPE: "D",
                  PY: py,
                },
              });

              // create a payload with the relation as key
              const payload: { [key: string]: number } = {};
              for (let i = 0; i < sortedRelations.length; i++) {
                if (relation.RELATION) {
                  payload[relation.RELATION.trim().toLowerCase()] = count;
                  payload[
                    `${relation.RELATION.trim().toLowerCase()}_percentage`
                  ] = (count / totalAll) * 100;
                }
              }

              return payload;
            })
          );
          const payload = {
            company: company.COMPANY,
            employees: employees,
            employees_percentage: Math.round((employees / totalAll) * 100),
            dependents: dependents,
            dependents_percentage: Math.round((dependents / totalAll) * 100),
            spouse: detailedDependents[0]?.spouse ?? 0,
            spouse_percentage: Math.round(
              detailedDependents[0]?.spouse_percentage ?? 0
            ),
            child: detailedDependents[1]?.child ?? 0,
            child_percentage: Math.round(
              detailedDependents[1]?.child_percentage ?? 0
            ),
            parent: detailedDependents[2]?.parent ?? 0,
            parent_percentage: Math.round(
              detailedDependents[2]?.parent_percentage ?? 0
            ),
            sibling: detailedDependents[3]?.sibling ?? 0,
            sibling_percentage: Math.round(
              detailedDependents[3]?.sibling_percentage ?? 0
            ),
            companyTotal: total,
            companyTotalPercentage: Math.round((total / totalAll) * 100),
          };

          return payload;
        })
      );

      // get total employees and dependents count
      const totalEmployees = companyData.reduce(
        (acc, company) => acc + company.employees,
        0
      );
      const totalDependents = companyData.reduce(
        (acc, company) => acc + company.dependents,
        0
      );
      const totalSpouse = companyData.reduce(
        (acc, company) => acc + company.spouse,
        0
      );
      const totalChild = companyData.reduce(
        (acc, company) => acc + company.child,
        0
      );
      const totalParent = companyData.reduce(
        (acc, company) => acc + company.parent,
        0
      );
      const totalSibling = companyData.reduce(
        (acc, company) => acc + company.sibling,
        0
      );

      const total = totalEmployees + totalDependents;

      // get total employees and dependents percentage
      const totalEmployeesPercentage = Math.round(
        (totalEmployees / totalAll) * 100
      );
      const totalDependentsPercentage = Math.round(
        (totalDependents / totalAll) * 100
      );
      const totalSpousePercentage = Math.round((totalSpouse / totalAll) * 100);
      const totalChildPercentage = Math.round((totalChild / totalAll) * 100);
      const totalParentPercentage = Math.round((totalParent / totalAll) * 100);
      const totalSiblingPercentage = Math.round(
        (totalSibling / totalAll) * 100
      );

      // add COMBINED company
      const combined = {
        company: "COMBINED",
        employees: totalEmployees,
        employees_percentage: totalEmployeesPercentage,
        dependents: totalDependents,
        dependents_percentage: totalDependentsPercentage,
        spouse: totalSpouse,
        spouse_percentage: totalSpousePercentage,
        child: totalChild,
        child_percentage: totalChildPercentage,
        parent: totalParent,
        parent_percentage: totalParentPercentage,
        sibling: totalSibling,
        sibling_percentage: totalSiblingPercentage,
        companyTotal: total,
        companyTotalPercentage: Math.round((total / totalAll) * 100),
      };

      companyData.push(combined);
      return companyData;
    });

    if (result.length === 0) {
      return { error: "No data found" };
    } else {
      return { data: result };
    }
  } catch (error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error(error.message);
      return { error: error.message };
    } else {
      console.error(error.message);
      return { error: error.message };
    }
  }
};

const chart2 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
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

  const totalClaimAmount = await prisma.intellicare.aggregate({
    _sum: {
      Approved_Claim_Amount: true,
    },
    _avg: {
      Approved_Claim_Amount: true,
    },
    where: {
      Admission_Date: {
        gte: startDate,
        lte: endDate,
        not: null,
      },
      clientId,
    },
  });

  const claimCount = await prisma.intellicare.count({
    where: {
      Admission_Date: {
        gte: startDate,
        lte: endDate,
      },
      clientId,
    },
  });

  return {
    data: {
      totalClaim: Math.round(totalClaimAmount._sum.Approved_Claim_Amount ?? 0),
      claimCount,
    },
  };
};

const chart3 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
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
    const result = await prisma.$transaction(async (tx) => {
      const companyData = await tx.intellicare.groupBy({
        by: ["Company", "Claim_Type"],
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
          Admission_Date: {
            gte: startDate,
            lte: endDate,
            not: null,
          },
          Approved_Claim_Amount: {
            not: null,
          },
          Company: {
            not: null,
          },
        },
        having: {
          Company: {
            not: null,
          },
        },
      });

      const payload = companyData.map((data) => {
        const claimAmount = Math.round(data._sum.Approved_Claim_Amount ?? 0);
        const claimCount = data._count.Approved_Claim_Amount;
        const averageClaimAmount = Math.round(
          data._avg.Approved_Claim_Amount ?? 0
        );
        const { _sum, _count, _avg, ...payload } = data;
        return {
          ...payload,
          claimAmount,
          claimCount,
          averageClaimAmount,
        };
      });

      return payload;
    });

    const totalClaimAmount = result.reduce(
      (acc, company) => acc + company.claimAmount,
      0
    );

    const totalClaimCount = result.reduce(
      (acc, company) => acc + company.claimCount,
      0
    );

    const combinedData = await prisma.intellicare.groupBy({
      by: ["Claim_Type"],
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
        Admission_Date: {
          gte: startDate,
          lte: endDate,
          not: null,
        },
        Approved_Claim_Amount: {
          not: null,
        },
      },
    });

    const combinedDataCompany = combinedData.map((data, idx) => {
      const claimAmount = Math.round(data._sum.Approved_Claim_Amount ?? 0);
      const claimCount = data._count.Approved_Claim_Amount;
      const averageClaimAmount = Math.round(
        data._avg.Approved_Claim_Amount ?? 0
      );
      const { _sum, _count, _avg, ...payload } = data;
      return {
        Company: "Combined",
        ...payload,
        claimAmount,
        claimCount,
        averageClaimAmount,
      };
    });

    const combinedResult = [...result, ...combinedDataCompany].map((data) => ({
      ...data,
      Company: data.Company ?? "Unknown Company", // Replace null with a default value
    }));

    const uniqueCompanies = [
      ...new Set(combinedResult.map((data) => data.Company)),
    ];

    const companyTotals = uniqueCompanies.map((company) => {
      const companyData = combinedResult.filter(
        (data) => data.Company === company
      );
      const claimAmount = companyData.reduce(
        (acc, data) => acc + data.claimAmount,
        0
      );
      const claimCount = companyData.reduce(
        (acc, data) => acc + data.claimCount,
        0
      );
      const claimAmount_percentage = Math.round(
        (claimAmount / totalClaimAmount) * 100
      );
      const claimAmountAverage = Math.round(claimAmount / claimCount);
      const finalCA_percentage =
        claimAmount_percentage === 0 && claimAmount !== 0
          ? Number(
              (
                Math.round((claimAmount / totalClaimAmount) * 100 * 100) / 100
              ).toFixed(1)
            )
          : claimAmount_percentage;

      const claimCount_percentage = Math.round(
        (claimCount / totalClaimCount) * 100
      );
      return {
        Company: company,
        Claim_Type: "Total",
        claimAmount,
        claimCount,
        claimAmount_percentage: finalCA_percentage,
        claimCount_percentage,
        averageClaimAmount: claimAmountAverage,
      };
    });

    // Add companyTotals to combinedResult
    combinedResult.push(...companyTotals);

    const payload = combinedResult.map((data, idx) => {
      const claimAmount_percentage = Math.round(
        (data.claimAmount / totalClaimAmount) * 100
      );
      const finalCA_percentage =
        claimAmount_percentage === 0 && data.claimAmount !== 0
          ? Number(
              (
                Math.round((data.claimAmount / totalClaimAmount) * 100 * 100) /
                100
              ).toFixed(1)
            )
          : claimAmount_percentage;

      return {
        ...data,
        claimAmount_percentage: finalCA_percentage,
        claimCount_percentage: Math.round(
          (data.claimCount / totalClaimCount) * 100
        ),
      };
    });

    // sort by company based from unique companies
    const companyPriorityOrder: Record<string, number> = {};

    uniqueCompanies.forEach((company, index) => {
      companyPriorityOrder[company ?? "Unknown Company"] = index + 1;
    });

    // Ensure "Combined" is always last
    companyPriorityOrder["Combined"] = 99;

    // Sort by company
    const sortedPayload = payload.sort((a, b) => {
      const aPriority = companyPriorityOrder[a.Company] ?? 0;
      const bPriority = companyPriorityOrder[b.Company] ?? 0;

      return aPriority - bPriority;
    });

    return {
      data: sortedPayload,
    };
  } catch (error) {
    return {
      error: error,
    };
  }
};

const chart4 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
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
    const result = await prisma.$transaction(async (tx) => {
      const initialData = await tx.intellicare.groupBy({
        by: ["Relationship"],
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
          Admission_Date: {
            gte: startDate,
            lte: endDate,
            not: null,
          },
          Relationship: {
            not: "Corporate",
          },
          Approved_Claim_Amount: {
            not: null,
          },
        },
      });

      const payload = initialData.map(async (data) => {
        const claimAmount = Math.round(data._sum.Approved_Claim_Amount ?? 0);
        const claimCount = data._count.Approved_Claim_Amount;
        const claimAverage = Math.round(data._avg.Approved_Claim_Amount ?? 0);

        //const personAverage = Math.round(claimAmount / )
        const { _sum, _count, _avg, ...payload } = data;
        const headcount = await tx.intellicareMasterlist.count({
          where: {
            clientId,
            RELATION: data.Relationship,
            PY: py,
          },
        });
        const personAverage = Math.round(claimAmount / headcount);
        return {
          ...payload,
          headcount,
          claimAmount,
          claimCount,
          claimAverage,
          personAverage,
        };
      });

      const priorityOrder = {
        employee: 1,
        spouse: 2,
        child: 3,
        parent: 4,
        sibling: 5,
        // Add other relations as needed
      };

      const resolvedPayload = await Promise.all(payload);

      const sortedPayload = resolvedPayload.sort((a, b) => {
        const aPriority = a.Relationship
          ? priorityOrder[
              a.Relationship.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99; // Default priority for unknown values
        const bPriority = b.Relationship
          ? priorityOrder[
              b.Relationship.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99;

        return aPriority - bPriority;
      });

      return sortedPayload;
    });
    return { data: result };
  } catch (error) {
    return {
      error: error,
    };
  }
};

const chart5 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
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
    const initialData = await prisma.intellicare.groupBy({
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

    const top5Results = Object.keys(groupedByMemberType).flatMap(
      (memberType) => {
        return groupedByMemberType[memberType].slice(0, 5);
      }
    );

    const totalClaimAmount = initialData.reduce(
      (acc, disease) => acc + (disease._sum.Approved_Claim_Amount ?? 0),
      0
    );
    const totalClaimCount = initialData.reduce(
      (acc, disease) => acc + disease._count.Approved_Claim_Amount,
      0
    );

    const processedData = top5Results.map((data) => {
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
    const totalApprovedClaimAmount = await prisma.intellicare.aggregate({
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
      new Set(processedData.map((d) => d.Member_Type))
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

    return { data: { data: processedData, total: totals } };
  } catch (error) {
    return { error: error };
  }
};

const chart6 = async (
  data: generateOneYearRequest
): Promise<{ data?: any; error?: any }> => {
  const py = data.py;
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
    const initialData = await prisma.intellicare.groupBy({
      by: ["Member_Type", "Provider_Name"],
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
        Provider_Name: {
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

    const top5Results = Object.keys(groupedByMemberType).flatMap(
      (memberType) => {
        return groupedByMemberType[memberType].slice(0, 5);
      }
    );

    const totalClaimAmount = initialData.reduce(
      (acc, provider) => acc + (provider._sum.Approved_Claim_Amount ?? 0),
      0
    );
    const totalClaimCount = initialData.reduce(
      (acc, provider) => acc + provider._count.Approved_Claim_Amount,
      0
    );
    const processedData = top5Results.map((data) => {
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
    const totalApprovedClaimAmount = await prisma.intellicare.aggregate({
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
      new Set(processedData.map((d) => d.Member_Type))
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

    return { data: { data: processedData, total: totals } };
  } catch (error) {
    return { error: error };
  }
};
