import { describe, expect, it } from "vitest";
import { Workbook } from "exceljs";
import {
  parseMasterlistWorksheet,
  parseUtilizationWorksheet,
} from "./standard-data";

function worksheetFromRows(rows: unknown[][]) {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");
  worksheet.addRows(rows);
  return worksheet;
}

describe("standard data worksheet parsing", () => {
  it("parses masterlist rows into standardized records", () => {
    const worksheet = worksheetFromRows([
      [
        "Masked ID",
        "Company Name/Subgroup",
        "Relationship",
        "Member Type",
        "Plan Type",
        "MBL",
        "Age Group",
      ],
      ["M-001", "Acme HQ", "Principal Member", "Principal", "Gold", "1,500", "30-39"],
      ["M-002", "Acme HQ", "Dependent Child", "Dependent", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);

    const rows = parseMasterlistWorksheet(worksheet, 10, 20, 30);

    expect(rows).toEqual([
      {
        clientId: 10,
        insurerId: 20,
        datasetId: 30,
        maskedId: "M-001",
        companyName: "Acme HQ",
        relationship: "Employee",
        memberType: "P",
        planType: "Gold",
        mbl: 1500,
        ageGroup: "30-39",
      },
      {
        clientId: 10,
        insurerId: 20,
        datasetId: 30,
        maskedId: "M-002",
        companyName: "Acme HQ",
        relationship: "Child",
        memberType: "D",
        planType: null,
        mbl: null,
        ageGroup: null,
      },
    ]);
  });

  it("reports missing masterlist headers", () => {
    const worksheet = worksheetFromRows([
      ["Masked ID", "Relationship", "Member Type"],
      ["M-001", "Employee", "P"],
    ]);

    expect(() => parseMasterlistWorksheet(worksheet, 1, 2, 3)).toThrow(
      "Missing required columns: Company Name/Subgroup",
    );
  });

  it("parses utilization rows and returns a sorted admission month range", () => {
    const worksheet = worksheetFromRows([
      [
        "Masked ID",
        "Company Name / Subgroup",
        "Relationship",
        "Member Type",
        "Diagnosis",
        "Provider Name",
        "Claim/Coverage Type",
        "Approved Claim Amount",
        "Admission Date",
        "Discharge Date",
        "Date Processed",
        "Plan Type",
        "MBL",
        "Age Group",
      ],
      [
        "U-001",
        "Acme HQ",
        "Spouse",
        "Dependent",
        "Flu",
        "Provider A",
        "Inpatient",
        "2,000.50",
        "03/05/2026",
        "2026-03-08",
        "05/01/2026",
        "Gold",
        3000,
        "40-49",
      ],
      [
        "U-002",
        "Acme HQ",
        "Employee",
        "P",
        "Cold",
        "Provider B",
        "Outpatient",
        100,
        "01/15/2026",
        "",
        "",
        "",
        "",
        "",
      ],
    ]);

    const result = parseUtilizationWorksheet(worksheet, 10, 20, 30);

    expect(result.months).toBe("Jan-Mar");
    expect(result.rows).toMatchObject([
      {
        clientId: 10,
        insurerId: 20,
        datasetId: 30,
        maskedId: "U-001",
        companyName: "Acme HQ",
        relationship: "Spouse",
        memberType: "D",
        diagnosis: "Flu",
        providerName: "Provider A",
        claimCoverageType: "Inpatient",
        approvedClaimAmount: 2000.5,
        planType: "Gold",
        mbl: 3000,
        ageGroup: "40-49",
      },
      {
        maskedId: "U-002",
        relationship: "Employee",
        memberType: "P",
        diagnosis: "Cold",
        approvedClaimAmount: 100,
        planType: null,
        mbl: null,
        ageGroup: null,
      },
    ]);
    expect(result.rows[0].admissionDate).toBeInstanceOf(Date);
    expect(result.rows[0].dischargeDate).toBeInstanceOf(Date);
    expect(result.rows[0].dateProcessed).toBeInstanceOf(Date);
  });

  it("reports row-specific utilization validation errors", () => {
    const worksheet = worksheetFromRows([
      [
        "Masked ID",
        "Company Name / Subgroup",
        "Relationship",
        "Member Type",
        "Diagnosis",
        "Provider Name",
        "Claim/Coverage Type",
        "Approved Claim Amount",
      ],
      ["U-001", "Acme HQ", "Employee", "P", "Flu", "Provider A", "Inpatient", "abc"],
    ]);

    expect(() => parseUtilizationWorksheet(worksheet, 1, 2, 3)).toThrow(
      'Invalid Approved Claim Amount at row 2. Value: "abc"',
    );
  });
});
