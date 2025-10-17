export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DateTime } from "luxon";

import { NextResponse as res, NextRequest } from "next/server";

// This route is for new account generation for maxicare

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
  const chart2Result = await chart2(data);
  const chart3Result = await chart3(data);
  const chart4Result = await chart4(data);
  const chart5Result = await chart5(data);
  const chart6Result = await chart6(data);

  return res.json({
    success: true,
    data: {
      chart1: chart1Result.data || chart1Result.error,
      chart2: chart2Result.data || chart2Result.error,
      chart3: chart3Result.data || chart3Result.error,
      chart4: chart4Result.data || chart4Result.error,
      chart5: chart5Result.data || chart5Result.error,
      chart6: chart6Result.data || chart6Result.error,
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
      const companies = await tx.philcareMasterlist.findMany({
        where: { clientId: clientId, PY: py },
        select: { SUB_OFFICE_NAME: true },
        distinct: ["SUB_OFFICE_NAME"],
        orderBy: { SUB_OFFICE_NAME: "desc" },
      });

      // get unique relations
      const relations = await tx.philcareMasterlist.findMany({
        where: {
          clientId: clientId,
          PY: py,
          RELATIONSHIP: {
            not: "Employee",
          },
        },
        select: { RELATIONSHIP: true },
        distinct: ["RELATIONSHIP"],
      });

      const priorityOrder = {
        spouse: 1,
        child: 2,
        parent: 3,
        sibling: 4,
        other: 5,
        // Add other relations as needed
      };

      // order by spouse, child, parent, sibling
      const sortedRelations = relations.sort((a, b) => {
        const aPriority = a.RELATIONSHIP
          ? priorityOrder[
              a.RELATIONSHIP.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99; // Default priority for unknown values
        const bPriority = b.RELATIONSHIP
          ? priorityOrder[
              b.RELATIONSHIP.toLowerCase() as keyof typeof priorityOrder
            ] ?? 99
          : 99;

        return aPriority - bPriority;
      });

      const totalAll = await tx.philcareMasterlist.count({
        where: { clientId: clientId, PY: py },
      });

      // get employees and dependents count for each company
      const companyData = await Promise.all(
        companies.map(async (company) => {
          const employees = await tx.philcareMasterlist.count({
            where: {
              clientId: clientId,
              SUB_OFFICE_NAME: company.SUB_OFFICE_NAME,
              CLASS_DEFINITION: "EMPLOYEES",
              PY: py,
            },
          });
          const dependents = await tx.philcareMasterlist.count({
            where: {
              clientId: clientId,
              SUB_OFFICE_NAME: company.SUB_OFFICE_NAME,
              CLASS_CODE: {
                in: [2, 3],
              },
              PY: py,
            },
          });
          const total = employees + dependents;
          const detailedDependents = await Promise.all(
            sortedRelations.map(async (relation) => {
              if (relation.RELATIONSHIP?.toLowerCase() === "principal") return;
              const count = await tx.philcareMasterlist.count({
                where: {
                  clientId: clientId,
                  SUB_OFFICE_NAME: company.SUB_OFFICE_NAME,
                  RELATIONSHIP: relation.RELATIONSHIP,
                  CLASS_CODE: {
                    in: [2, 3],
                  },
                  PY: py,
                },
              });

              // create a payload with the relation as key
              const payload: { [key: string]: number } = {};
              if (relation.RELATIONSHIP) {
                payload[relation.RELATIONSHIP.trim().toLowerCase()] = count;
                const percentage = (count / totalAll) * 100;
                payload[
                  `${relation.RELATIONSHIP.trim().toLowerCase()}_percentage`
                ] =
                  Math.round(percentage) === 0 && percentage > 0
                    ? Number(percentage.toFixed(1))
                    : Math.round(percentage);
              }

              return payload;
            })
          );
          const calculatePercentage = (value: number, total: number) => {
            const percentage = (value / total) * 100;
            if (Math.round(percentage) === 0 && percentage > 0) {
              return Number(percentage.toFixed(1));
            }
            return Math.round(percentage);
          };

          const payload = {
            company: company.SUB_OFFICE_NAME,
            employees: employees,
            employees_percentage: calculatePercentage(employees, totalAll),
            dependents: dependents,
            dependents_percentage: calculatePercentage(dependents, totalAll),
            spouse: detailedDependents[0]?.spouse ?? 0,
            spouse_percentage: calculatePercentage(
              detailedDependents[0]?.spouse ?? 0,
              totalAll
            ),
            child: detailedDependents[1]?.child ?? 0,
            child_percentage: calculatePercentage(
              detailedDependents[1]?.child ?? 0,
              totalAll
            ),
            parent: detailedDependents[2]?.parent ?? 0,
            parent_percentage: calculatePercentage(
              detailedDependents[2]?.parent ?? 0,
              totalAll
            ),
            sibling: detailedDependents[3]?.sibling ?? 0,
            sibling_percentage: calculatePercentage(
              detailedDependents[3]?.sibling ?? 0,
              totalAll
            ),
            other: detailedDependents[4]?.other ?? 0,
            other_percentage: calculatePercentage(
              detailedDependents[4]?.other ?? 0,
              totalAll
            ),
            companyTotal: total,
            companyTotalPercentage: calculatePercentage(total, totalAll),
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
      const totalOther = companyData.reduce(
        (acc, company) => acc + company.other,
        0
      );

      const total = totalEmployees + totalDependents;

      const calculatePercentage = (value: number, total: number) => {
        const percentage = (value / total) * 100;
        if (Math.round(percentage) === 0 && percentage > 0) {
          return Number(percentage.toFixed(1));
        }
        return Math.round(percentage);
      };

      // get total employees and dependents percentage
      const totalEmployeesPercentage = calculatePercentage(
        totalEmployees,
        totalAll
      );
      const totalDependentsPercentage = calculatePercentage(
        totalDependents,
        totalAll
      );
      const totalSpousePercentage = calculatePercentage(totalSpouse, totalAll);
      const totalChildPercentage = calculatePercentage(totalChild, totalAll);
      const totalParentPercentage = calculatePercentage(totalParent, totalAll);
      const totalSiblingPercentage = calculatePercentage(
        totalSibling,
        totalAll
      );
      const totalOtherPercentage = calculatePercentage(totalOther, totalAll);

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
        other: totalOther,
        other_percentage: totalOtherPercentage,
        companyTotal: total,
        companyTotalPercentage: calculatePercentage(total, totalAll),
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

  const totalClaimAmount = await prisma.philcare.aggregate({
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

  const claimCount = await prisma.philcare.count({
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
      const companyData = await tx.philcare.groupBy({
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

    const combinedData = await prisma.philcare.groupBy({
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
      const initialData = await tx.philcare.groupBy({
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
          Approved_Claim_Amount: {
            not: null,
          },
        },
      });

      console.log("Initial Data for Chart 4:", initialData);

      const payload = initialData.map(async (data) => {
        const claimAmount = Math.round(data._sum.Approved_Claim_Amount ?? 0);
        const claimCount = data._count.Approved_Claim_Amount;
        const claimAverage = Math.round(data._avg.Approved_Claim_Amount ?? 0);

        //const personAverage = Math.round(claimAmount / )
        const { _sum, _count, _avg, ...payload } = data;
        const headcount = await tx.philcareMasterlist.count({
          where: {
            clientId,
            RELATIONSHIP: data.Relationship,
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
        other: 6,
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
    const initialData = await prisma.philcare.groupBy({
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
    const totalApprovedClaimAmount = await prisma.philcare.aggregate({
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

    const payload = processedData.sort((a, b) => {
      const priorityOrder: Record<string, number> = { P: 1, D: 2 };
      const aPriority = priorityOrder[a.Member_Type] ?? 99;
      const bPriority = priorityOrder[b.Member_Type] ?? 99;
      return aPriority - bPriority;
    });

    return { data: { data: payload, total: totals } };
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
    const initialData = await prisma.philcare.groupBy({
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
    const totalApprovedClaimAmount = await prisma.philcare.aggregate({
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

    const payload = processedData.sort((a, b) => {
      const priorityOrder: Record<string, number> = { P: 1, D: 2 };
      const aPriority = priorityOrder[a.Member_Type] ?? 99;
      const bPriority = priorityOrder[b.Member_Type] ?? 99;
      return aPriority - bPriority;
    });

    return { data: { data: payload, total: totals } };
  } catch (error) {
    return { error: error };
  }
};
