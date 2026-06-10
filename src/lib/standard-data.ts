import { prisma } from "@/lib/prisma";
import { DateTime } from "luxon";
import type { Worksheet } from "exceljs";

const db = prisma as any;

export type GenerateDatasetRequest = {
  clientId: number;
  insurer_id: number;
  datasetId: number;
  title: string;
};

type HeaderMap = Record<string, number>;

const relationPriority: Record<string, number> = {
  employee: 1,
  principal: 1,
  spouse: 2,
  child: 3,
  parent: 4,
  sibling: 5,
  other: 6,
};

function normalizeHeader(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function normalizeText(value: unknown) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/\n/g, " ").trim();
}

function normalizeRelation(value: unknown) {
  const text = normalizeText(value);
  const lower = text.toLowerCase();
  const map: Record<string, string> = {
    employee: "Employee",
    principal: "Employee",
    "principal member": "Employee",
    spouse: "Spouse",
    "dependent spouse": "Spouse",
    child: "Child",
    children: "Child",
    "dependent child": "Child",
    "dependent children": "Child",
    parent: "Parent",
    sibling: "Sibling",
    brother: "Sibling",
    sister: "Sibling",
    "brother / sister": "Sibling",
    "brother/sister": "Sibling",
    other: "Other",
    "other dependents": "Other",
  };

  return map[lower] ?? text;
}

function normalizeMemberType(value: unknown, relationship?: string) {
  const text = normalizeText(value);
  const lower = text.toLowerCase();
  const map: Record<string, string> = {
    p: "P",
    principal: "P",
    employee: "P",
    employees: "P",
    d: "D",
    dependent: "D",
    dependents: "D",
  };

  if (map[lower]) return map[lower];
  if (!text && relationship) return relationship === "Employee" ? "P" : "D";
  return text;
}

function parseNumber(value: unknown, label: string, rowNumber: number, required: boolean) {
  if (value === null || value === undefined || value === "") {
    if (required) throw new Error(`Missing ${label} at row ${rowNumber}`);
    return null;
  }

  const number = Number(String(value).replace(/,/g, "").trim());
  if (Number.isNaN(number)) {
    throw new Error(`Invalid ${label} at row ${rowNumber}. Value: "${value}"`);
  }

  return number;
}

function parseDate(value: unknown, label: string, rowNumber: number) {
  if (!value) return null;

  if (value instanceof Date) return value;

  const text = normalizeText(value);
  const formats = ["MM/dd/yyyy", "M/d/yyyy", "yyyy-MM-dd", "dd/MM/yyyy"];
  for (const format of formats) {
    const parsed = DateTime.fromFormat(text, format, { zone: "utc" });
    if (parsed.isValid) return parsed.toJSDate();
  }

  const iso = DateTime.fromISO(text, { zone: "utc" });
  if (iso.isValid) return iso.toJSDate();

  throw new Error(`Invalid ${label} at row ${rowNumber}. Value: "${value}"`);
}

function getHeaders(worksheet: Worksheet) {
  const headers: HeaderMap = {};

  worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell, colNumber) => {
    const header = normalizeHeader(cell.value);
    if (header) headers[header] = colNumber;
  });

  return headers;
}

function cellValue(worksheet: Worksheet, rowNumber: number, headers: HeaderMap, names: string[]) {
  for (const name of names) {
    const colNumber = headers[normalizeHeader(name)];
    if (colNumber) return worksheet.getRow(rowNumber).getCell(colNumber).value;
  }

  return null;
}

function assertHeaders(headers: HeaderMap, required: string[]) {
  const missing = required.filter((name) => !headers[normalizeHeader(name)]);
  if (missing.length) {
    throw new Error(`Missing required columns: ${missing.join(", ")}`);
  }
}

function isBlankRow(worksheet: Worksheet, rowNumber: number, headers: HeaderMap, names: string[]) {
  return names.every((name) => {
    const value = cellValue(worksheet, rowNumber, headers, [name]);
    return normalizeText(value) === "";
  });
}

function requireText(value: unknown, label: string, rowNumber: number) {
  const text = normalizeText(value);
  if (!text) throw new Error(`Missing ${label} at row ${rowNumber}`);
  return text;
}

export function parseMasterlistWorksheet(
  worksheet: Worksheet,
  clientId: number,
  insurerId: number,
  datasetId: number,
) {
  const headers = getHeaders(worksheet);
  const required = [
    "Masked ID",
    "Company Name/Subgroup",
    "Relationship",
    "Member Type",
  ];
  const allColumns = [...required, "PY", "Plan Type", "MBL", "Age Group"];
  assertHeaders(headers, required);

  const rows = [];
  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    if (isBlankRow(worksheet, rowNumber, headers, allColumns)) continue;

    const relationship = normalizeRelation(
      requireText(cellValue(worksheet, rowNumber, headers, ["Relationship"]), "Relationship", rowNumber),
    );
    const memberType = normalizeMemberType(
      requireText(cellValue(worksheet, rowNumber, headers, ["Member Type"]), "Member Type", rowNumber),
      relationship,
    );

    rows.push({
      clientId,
      insurerId,
      datasetId,
      maskedId: requireText(cellValue(worksheet, rowNumber, headers, ["Masked ID"]), "Masked ID", rowNumber),
      companyName: requireText(
        cellValue(worksheet, rowNumber, headers, ["Company Name/Subgroup"]),
        "Company Name/Subgroup",
        rowNumber,
      ),
      relationship,
      memberType,
      planType: normalizeText(cellValue(worksheet, rowNumber, headers, ["Plan Type"])) || null,
      mbl: parseNumber(cellValue(worksheet, rowNumber, headers, ["MBL"]), "MBL", rowNumber, false),
      ageGroup: normalizeText(cellValue(worksheet, rowNumber, headers, ["Age Group"])) || null,
    });
  }

  return rows;
}

export function parseUtilizationWorksheet(
  worksheet: Worksheet,
  clientId: number,
  insurerId: number,
  datasetId: number,
) {
  const headers = getHeaders(worksheet);
  const required = [
    "Masked ID",
    "Company Name / Subgroup",
    "Relationship",
    "Member Type",
    "Diagnosis",
    "Provider Name",
    "Claim/Coverage Type",
    "Approved Claim Amount",
  ];
  const allColumns = [
    ...required,
    "PY",
    "Plan Type",
    "MBL",
    "Age Group",
    "Admission Date",
    "Discharge Date",
    "Date Processed",
  ];
  assertHeaders(headers, required);

  const rows = [];
  const months: string[] = [];
  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    if (isBlankRow(worksheet, rowNumber, headers, allColumns)) continue;

    const relationship = normalizeRelation(
      requireText(cellValue(worksheet, rowNumber, headers, ["Relationship"]), "Relationship", rowNumber),
    );
    const memberType = normalizeMemberType(
      requireText(cellValue(worksheet, rowNumber, headers, ["Member Type"]), "Member Type", rowNumber),
      relationship,
    );
    const admissionDate = parseDate(
      cellValue(worksheet, rowNumber, headers, ["Admission Date"]),
      "Admission Date",
      rowNumber,
    );

    if (admissionDate) {
      const month = DateTime.fromJSDate(admissionDate).toFormat("LLL");
      if (!months.includes(month)) months.push(month);
    }

    rows.push({
      clientId,
      insurerId,
      datasetId,
      maskedId: requireText(cellValue(worksheet, rowNumber, headers, ["Masked ID"]), "Masked ID", rowNumber),
      companyName: requireText(
        cellValue(worksheet, rowNumber, headers, ["Company Name / Subgroup", "Company Name/Subgroup"]),
        "Company Name / Subgroup",
        rowNumber,
      ),
      relationship,
      memberType,
      planType: normalizeText(cellValue(worksheet, rowNumber, headers, ["Plan Type"])) || null,
      mbl: parseNumber(cellValue(worksheet, rowNumber, headers, ["MBL"]), "MBL", rowNumber, false),
      ageGroup: normalizeText(cellValue(worksheet, rowNumber, headers, ["Age Group"])) || null,
      diagnosis: requireText(cellValue(worksheet, rowNumber, headers, ["Diagnosis"]), "Diagnosis", rowNumber),
      providerName: requireText(cellValue(worksheet, rowNumber, headers, ["Provider Name"]), "Provider Name", rowNumber),
      claimCoverageType: requireText(
        cellValue(worksheet, rowNumber, headers, ["Claim/Coverage Type"]),
        "Claim/Coverage Type",
        rowNumber,
      ),
      admissionDate,
      dischargeDate: parseDate(cellValue(worksheet, rowNumber, headers, ["Discharge Date"]), "Discharge Date", rowNumber),
      dateProcessed: parseDate(cellValue(worksheet, rowNumber, headers, ["Date Processed"]), "Date Processed", rowNumber),
      approvedClaimAmount: parseNumber(
        cellValue(worksheet, rowNumber, headers, ["Approved Claim Amount"]),
        "Approved Claim Amount",
        rowNumber,
        true,
      ) as number,
    });
  }

  months.sort(
    (a, b) => DateTime.fromFormat(a, "LLL").month - DateTime.fromFormat(b, "LLL").month,
  );

  return {
    rows,
    months: months.length ? `${months[0]}-${months[months.length - 1]}` : null,
  };
}

function percentage(value: number, total: number) {
  if (!total) return 0;
  const raw = (value / total) * 100;
  return Math.round(raw) === 0 && raw > 0 ? Number(raw.toFixed(1)) : Math.round(raw);
}

function relationKey(relation: string) {
  return relation.trim().toLowerCase();
}

function sortRelations<T extends { Relationship?: string; relationship?: string }>(rows: T[]) {
  return rows.sort((a, b) => {
    const aRelation = a.Relationship ?? a.relationship ?? "";
    const bRelation = b.Relationship ?? b.relationship ?? "";
    return (
      (relationPriority[aRelation.toLowerCase()] ?? 99) -
      (relationPriority[bRelation.toLowerCase()] ?? 99)
    );
  });
}

export async function generateSingleDataset(data: GenerateDatasetRequest) {
  const [chart1, chart2, chart3, chart4, chart5, chart6] = await Promise.all([
    buildChart1(data),
    buildChart2(data),
    buildChart3(data),
    buildChart4(data),
    buildTopFive(data, "diagnosis"),
    buildTopFive(data, "providerName"),
  ]);

  return { chart1, chart2, chart3, chart4, chart5, chart6 };
}

export async function generateMultiDataset(data: GenerateDatasetRequest[]) {
  const latest = data[data.length - 1];
  const [chart1, chart2, chart3, chart4, chart5, chart6] = await Promise.all([
    Promise.all(data.map(buildChart1)),
    Promise.all(data.map(buildChart2)),
    buildChart3(latest),
    buildChart4(latest),
    buildTopFive(latest, "diagnosis"),
    buildTopFive(latest, "providerName"),
  ]);

  return { chart1, chart2, chart3, chart4, chart5, chart6 };
}

async function buildChart1(data: GenerateDatasetRequest) {
  const rows: any[] = await db.masterlistEntries.findMany({
    where: { clientId: data.clientId, datasetId: data.datasetId },
    select: { companyName: true, relationship: true, memberType: true },
    orderBy: { companyName: "desc" },
  });

  const totalAll = rows.length;
  const companies = Array.from(new Set<string>(rows.map((row) => row.companyName)));
  const relations = Array.from(new Set<string>(rows.map((row) => row.relationship).filter(Boolean)))
    .filter((relation) => relation.toLowerCase() !== "employee")
    .sort(
      (a, b) =>
        (relationPriority[a.toLowerCase()] ?? 99) -
        (relationPriority[b.toLowerCase()] ?? 99),
    );

  const companyData = companies.map((company) => {
    const companyRows = rows.filter((row) => row.companyName === company);
    const employees = companyRows.filter((row) => row.memberType === "P").length;
    const dependents = companyRows.filter((row) => row.memberType === "D").length;
    const payload: Record<string, string | number> = {
      company,
      employees,
      employees_percentage: percentage(employees, totalAll),
      dependents,
      dependents_percentage: percentage(dependents, totalAll),
      companyTotal: companyRows.length,
      companyTotalPercentage: percentage(companyRows.length, totalAll),
    };

    for (const relation of relations) {
      const key = relationKey(relation);
      const count = companyRows.filter(
        (row) => row.memberType === "D" && row.relationship === relation,
      ).length;
      payload[key] = count;
      payload[`${key}_percentage`] = percentage(count, totalAll);
    }

    return payload;
  });

  const combined: Record<string, string | number> = {
    company: "COMBINED",
    employees: Number(companyData.reduce((sum, row) => sum + Number(row.employees ?? 0), 0)),
    dependents: Number(companyData.reduce((sum, row) => sum + Number(row.dependents ?? 0), 0)),
  };
  combined.employees_percentage = percentage(Number(combined.employees), totalAll);
  combined.dependents_percentage = percentage(Number(combined.dependents), totalAll);

  for (const relation of relations) {
    const key = relationKey(relation);
    const count = companyData.reduce((sum, row) => sum + Number(row[key] ?? 0), 0);
    combined[key] = count;
    combined[`${key}_percentage`] = percentage(count, totalAll);
  }

  combined.companyTotal = Number(combined.employees) + Number(combined.dependents);
  combined.companyTotalPercentage = percentage(Number(combined.companyTotal), totalAll);
  companyData.push(combined);

  return companyData;
}

async function buildChart2(data: GenerateDatasetRequest) {
  const aggregate = await db.utilizationEntries.aggregate({
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    where: { clientId: data.clientId, datasetId: data.datasetId },
  });

  return {
    totalClaim: Math.round(aggregate._sum.approvedClaimAmount ?? 0),
    claimCount: aggregate._count.approvedClaimAmount,
  };
}

async function buildChart3(data: GenerateDatasetRequest) {
  const rows: any[] = await db.utilizationEntries.groupBy({
    by: ["companyName", "claimCoverageType"],
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    _avg: { approvedClaimAmount: true },
    where: { clientId: data.clientId, datasetId: data.datasetId },
  });

  const mapped = rows.map((row) => ({
    Company: row.companyName,
    Claim_Type: row.claimCoverageType,
    claimAmount: Math.round(row._sum.approvedClaimAmount ?? 0),
    claimCount: row._count.approvedClaimAmount,
    averageClaimAmount: Math.round(row._avg.approvedClaimAmount ?? 0),
  }));
  const totalClaimAmount = mapped.reduce((sum, row) => sum + row.claimAmount, 0);
  const totalClaimCount = mapped.reduce((sum, row) => sum + row.claimCount, 0);

  const claimTypes = Array.from(new Set(mapped.map((row) => row.Claim_Type)));
  const combined = claimTypes.map((claimType) => {
    const typeRows = mapped.filter((row) => row.Claim_Type === claimType);
    const claimAmount = typeRows.reduce((sum, row) => sum + row.claimAmount, 0);
    const claimCount = typeRows.reduce((sum, row) => sum + row.claimCount, 0);
    return {
      Company: "Combined",
      Claim_Type: claimType,
      claimAmount,
      claimCount,
      averageClaimAmount: claimCount ? Math.round(claimAmount / claimCount) : 0,
    };
  });

  const combinedResult = [...mapped, ...combined];
  const companies = Array.from(new Set(combinedResult.map((row) => row.Company)));
  const totals = companies.map((company) => {
    const companyRows = combinedResult.filter((row) => row.Company === company);
    const claimAmount = companyRows.reduce((sum, row) => sum + row.claimAmount, 0);
    const claimCount = companyRows.reduce((sum, row) => sum + row.claimCount, 0);
    return {
      Company: company,
      Claim_Type: "Total",
      claimAmount,
      claimCount,
      averageClaimAmount: claimCount ? Math.round(claimAmount / claimCount) : 0,
    };
  });

  const order = Object.fromEntries(companies.map((company, index) => [company, index + 1]));
  order.Combined = 99;

  return [...combinedResult, ...totals]
    .map((row) => ({
      ...row,
      claimAmount_percentage: percentage(row.claimAmount, totalClaimAmount),
      claimCount_percentage: percentage(row.claimCount, totalClaimCount),
    }))
    .sort((a, b) => (order[a.Company] ?? 0) - (order[b.Company] ?? 0));
}

async function buildChart4(data: GenerateDatasetRequest) {
  const rows: any[] = await db.utilizationEntries.groupBy({
    by: ["relationship"],
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    _avg: { approvedClaimAmount: true },
    where: { clientId: data.clientId, datasetId: data.datasetId },
  });

  const mapped = await Promise.all(
    rows.map(async (row) => {
      const claimAmount = Math.round(row._sum.approvedClaimAmount ?? 0);
      const claimCount = row._count.approvedClaimAmount;
      const headcount = await db.masterlistEntries.count({
        where: {
          clientId: data.clientId,
          datasetId: data.datasetId,
          relationship: row.relationship,
        },
      });

      return {
        Relationship: row.relationship,
        headcount,
        claimAmount,
        claimCount,
        claimAverage: Math.round(row._avg.approvedClaimAmount ?? 0),
        personAverage: headcount ? Math.round(claimAmount / headcount) : 0,
      };
    }),
  );

  return sortRelations(mapped);
}

async function buildTopFive(data: GenerateDatasetRequest, field: "diagnosis" | "providerName") {
  const rows: any[] = await db.utilizationEntries.groupBy({
    by: ["memberType", field],
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    _avg: { approvedClaimAmount: true },
    where: { clientId: data.clientId, datasetId: data.datasetId },
  });

  const sorted = rows.sort(
    (a, b) => (b._sum.approvedClaimAmount ?? 0) - (a._sum.approvedClaimAmount ?? 0),
  );
  const grouped: Record<string, typeof rows> = {};
  for (const row of sorted) {
    if (!grouped[row.memberType]) grouped[row.memberType] = [];
    grouped[row.memberType].push(row);
  }

  const top = Object.values(grouped).flatMap((memberRows) => memberRows.slice(0, 5));
  const allAmount = rows.reduce((sum, row) => sum + (row._sum.approvedClaimAmount ?? 0), 0);
  const allCount = rows.reduce((sum, row) => sum + row._count.approvedClaimAmount, 0);
  const label = field === "diagnosis" ? "Diagnosis" : "Provider_Name";

  const processed = top.map((row) => {
    const claimAmount = Math.round(row._sum.approvedClaimAmount ?? 0);
    const claimCount = row._count.approvedClaimAmount;
    return {
      Member_Type: row.memberType,
      [label]: row[field],
      claimAmount,
      claimAmount_percentage: percentage(claimAmount, allAmount),
      claimCount,
      claimCount_percentage: percentage(claimCount, allCount),
      averageClaimAmount: Math.round(row._avg.approvedClaimAmount ?? 0),
    };
  });

  const totalAggregate = await db.utilizationEntries.aggregate({
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    where: { clientId: data.clientId, datasetId: data.datasetId },
  });
  const totalAmount = totalAggregate._sum.approvedClaimAmount ?? 0;
  const totalCount = totalAggregate._count.approvedClaimAmount;
  const memberTypes = Array.from(new Set(processed.map((row) => row.Member_Type)));
  const total = memberTypes.map((memberType) => {
    const memberRows = processed.filter((row) => row.Member_Type === memberType);
    const claimAmount = memberRows.reduce((sum, row) => sum + row.claimAmount, 0);
    const claimCount = memberRows.reduce((sum, row) => sum + row.claimCount, 0);
    return {
      Member_Type: memberType,
      claimAmount,
      claimCount,
      claimAmount_percentage: percentage(claimAmount, totalAmount),
      claimCount_percentage: percentage(claimCount, totalCount),
      averageClaimAmount: claimCount ? Math.round(claimAmount / claimCount) : 0,
    };
  });

  return { data: processed, total };
}

export async function exportTable5Rows(clientId: number, datasetId: number) {
  const rows: any[] = await db.utilizationEntries.groupBy({
    by: ["memberType", "diagnosis"],
    _sum: { approvedClaimAmount: true },
    _count: { approvedClaimAmount: true },
    _avg: { approvedClaimAmount: true },
    where: { clientId, datasetId },
  });

  const totalAmount = rows.reduce((sum, row) => sum + (row._sum.approvedClaimAmount ?? 0), 0);
  const totalCount = rows.reduce((sum, row) => sum + row._count.approvedClaimAmount, 0);

  return rows
    .sort((a, b) => (b._sum.approvedClaimAmount ?? 0) - (a._sum.approvedClaimAmount ?? 0))
    .map((row) => {
      const claimAmount = Math.round(row._sum.approvedClaimAmount ?? 0);
      const claimCount = row._count.approvedClaimAmount;
      return {
        Member_Type: row.memberType,
        Diagnosis: row.diagnosis,
        ICD_10_Code: "",
        claimAmount,
        claimAmount_percentage: percentage(claimAmount, totalAmount),
        claimCount,
        claimCount_percentage: percentage(claimCount, totalCount),
        averageClaimAmount: Math.round(row._avg.approvedClaimAmount ?? 0),
      };
    });
}
