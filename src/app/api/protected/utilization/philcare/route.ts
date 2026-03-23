export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DateTime } from "luxon";
import { readFile, deleteFile, saveFile } from "@/lib/s3";

import { NextResponse as res, NextRequest } from "next/server";

// Function to standardize Philcare relation values to match Intellicare format
const standardizeRelation = (relation: string): string => {
  if (!relation) return relation;

  const relationMap: Record<string, string> = {
    "Principal Member": "Employee",
    "Dependent Children": "Child",
    Spouse: "Spouse", // Already correct
    Parent: "Parent", // Already correct
    "Brother / Sister": "Sibling",
    // Add variations if needed
    "Dependent Child": "Child",
    "Brother/Sister": "Sibling",
    Brother: "Sibling",
    Sister: "Sibling",
  };

  // Check for exact match first
  if (relationMap[relation]) {
    return relationMap[relation];
  }

  // Check for case-insensitive match
  const lowerRelation = relation.toLowerCase();
  for (const [key, value] of Object.entries(relationMap)) {
    if (key.toLowerCase() === lowerRelation) {
      return value;
    }
  }

  // Return original if no mapping found
  return relation;
};

const standardizeClaimType = (claimType: string): string => {
  if (!claimType) return claimType;

  const claimTypeMap: Record<string, string> = {
    Inpatient: "Inpatient",
    Outpatient: "Outpatient",
    IP: "Inpatient",
    OP: "Outpatient",
    "In Patient": "Inpatient",
    "Out Patient": "Outpatient",
  };

  // Check for exact match first
  if (claimTypeMap[claimType]) {
    return claimTypeMap[claimType];
  }

  // Check for case-insensitive match
  const lowerClaimType = claimType.toLowerCase();
  for (const [key, value] of Object.entries(claimTypeMap)) {
    if (key.toLowerCase() === lowerClaimType) {
      return value;
    }
  }

  // Return original if no mapping found
  return claimType;
};

/* This route and any of its subroutes is designed for anything related to Philcare */

// This route is for uploading the utilization of a client
export async function POST(req: NextRequest) {
  try {
    // Require authentication first
    const authResult = await requireAuth();
    if (authResult instanceof res) {
      return authResult; // Return auth error response
    }

    // Check canUpload permission for uploading utilization data
    const permissionResult = requirePermission(authResult.user, "canUpload");
    if (permissionResult) {
      return permissionResult; // Return permission error response
    }

    if (!req.body) {
      return res.json({ error: "Request body is null" });
    }
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const clientId = formData.get("id");
    const year = formData.get("year") as string;
    const insurerId = formData.get("insurerId");
    if (!clientId || !year || !insurerId || !file) {
      return res.json({ error: "Missing required fields" });
    }

    if (file) {
      console.log("Uploading Philcare utilization file...");
      const { key } = await saveFile(file);
      console.log("Reading File...");
      const worksheet = await readFile(key);

      if (!worksheet) {
        return res.json({ error: "Failed to read excel file" });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const worksheetData: any[] = [];
        const headers: string[] = [];
        const keep = [
          "Provider",
          "Company",
          "Claim No",
          "Diagnosis",
          "Date From",
          "LOS",
          "IP/OP",
          "NR/R",
          "Utilization",
          "Relation",
        ];
        const requiredColumns = [
          "Diagnosis",
          "Date From",
          "IP/OP",
          "Utilization",
        ];

        // get headers first (from 1st row)
        worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
          let header = cell.value?.toString() || "";
          header = header.trim();
          headers.push(header);
        });

        console.log("Philcare headers found:", headers);

        const yearStartDate = DateTime.fromFormat(year, "yyyy")
          .startOf("year")
          .toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const yearEndDate = DateTime.fromFormat(year, "yyyy")
          .endOf("year")
          .toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

        // Validate that all required columns are present
        const missingColumns = requiredColumns.filter(
          (col) => !headers.includes(col),
        );
        if (missingColumns.length > 0) {
          return res.json({
            error: `Missing required columns: ${missingColumns.join(", ")}`,
          });
        }

        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
          const rowObject: { [key: string]: unknown } = {};
          // if 1st row, skip
          if (rowNumber === 1) return;

          // only keep if header is in keep array
          row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
            const headerName = headers[colNumber - 1];
            if (!keep.includes(headerName)) return;

            // Map Philcare columns to database fields
            switch (headerName) {
              case "Provider":
                rowObject.Provider_Name = cell.value;
                break;
              case "Company":
                rowObject.Company = cell.value;
                break;
              case "Claim No":
                rowObject.Member_Account = cell.value;
                break;
              case "Diagnosis":
                rowObject.Diagnosis = cell.value;
                break;
              case "Date From":
                rowObject.Admission_Date = cell.value;
                break;
              case "LOS":
                rowObject.LOS = cell.value;
                break;
              case "IP/OP":
                rowObject.Claim_Type = standardizeClaimType(
                  cell.value?.toString() || "",
                );
                break;
              case "NR/R":
                rowObject.NR_R = cell.value;
                break;
              case "Utilization":
                rowObject.Approved_Claim_Amount = cell.value;
                break;
              case "Relation":
                rowObject.Relationship = standardizeRelation(
                  cell.value?.toString() || "",
                );
                break;
              default:
                // Store unmapped fields as-is
                rowObject[headerName] = cell.value;
                break;
            }
          });

          // Set standard fields
          rowObject.PY = year;
          rowObject.clientId = +clientId;
          worksheetData.push(rowObject);
        });

        try {
          await prisma.$transaction(async (tx) => {
            // Delete existing utilization data for the year
            await tx.philcare.deleteMany({
              where: {
                clientId: +clientId,
                Admission_Date: {
                  gte: yearStartDate,
                  lte: yearEndDate,
                },
              },
            });

            // Delete existing upload record
            await tx.uploads.deleteMany({
              where: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year,
                type: "utilization",
              },
            });

            const months: string[] = [];

            worksheetData.forEach((data, idx) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const typedData = data as any;

              // Replace "\n" with " " in string fields
              for (const key in typedData) {
                if (typeof typedData[key] === "string") {
                  typedData[key] = typedData[key].replace(/\n/g, " ");
                }
              }

              // Validate and format Admission_Date (Date From)
              if (!typedData.Admission_Date) {
                throw new Error(
                  `Missing Admission Date in row ${
                    idx + 1
                  }. Date From field is required.`,
                );
              }

              let admissionDate: DateTime;

              if (typedData.Admission_Date instanceof Date) {
                admissionDate = DateTime.fromISO(
                  typedData.Admission_Date.toISOString(),
                  {
                    zone: "utc",
                    setZone: false,
                  },
                );
              } else if (typeof typedData.Admission_Date === "string") {
                // Try to parse string date
                admissionDate = DateTime.fromFormat(
                  typedData.Admission_Date,
                  "MM/dd/yyyy",
                  { zone: "utc" },
                );

                if (!admissionDate.isValid) {
                  admissionDate = DateTime.fromFormat(
                    typedData.Admission_Date,
                    "yyyy-MM-dd",
                    { zone: "utc" },
                  );
                }

                if (!admissionDate.isValid) {
                  admissionDate = DateTime.fromISO(typedData.Admission_Date, {
                    zone: "utc",
                  });
                }
              } else {
                throw new Error(
                  `Invalid Admission Date format in row ${
                    idx + 1
                  }. Expected Date object or string, got: ${typeof typedData.Admission_Date}. Value: ${
                    typedData.Admission_Date
                  }`,
                );
              }

              // Check if Admission_Date is within the year
              if (
                admissionDate < DateTime.fromISO(yearStartDate) ||
                admissionDate > DateTime.fromISO(yearEndDate)
              ) {
                throw new Error(
                  `Admission Date in row ${
                    idx + 1
                  } is not within the year ${year}. Date: ${admissionDate.toFormat(
                    "yyyy-MM-dd",
                  )}`,
                );
              }

              if (!admissionDate.isValid) {
                throw new Error(
                  `Invalid Admission Date in row ${
                    idx + 1
                  }. Could not parse: "${
                    typedData.Admission_Date
                  }". Expected formats: MM/DD/YYYY, YYYY-MM-DD, or ISO date.`,
                );
              }

              typedData.Admission_Date = admissionDate.toFormat(
                "yyyy-MM-dd'T'HH:mm:ss'Z'",
              );

              // Track months for upload record
              const month = admissionDate.toFormat("LLL");
              if (!months.includes(month)) {
                months.push(month);
              }

              // Handle Date_To if present
              if (typedData.Date_To && typedData.Date_To instanceof Date) {
                const dateTo = DateTime.fromISO(
                  typedData.Date_To.toISOString(),
                  {
                    zone: "utc",
                    setZone: false,
                  },
                );
                if (dateTo.isValid) {
                  typedData.Date_To = dateTo.toFormat(
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                  );
                }
              }

              // Parse and validate Approved_Claim_Amount (Utilization)
              if (
                typedData.Approved_Claim_Amount !== undefined &&
                typedData.Approved_Claim_Amount !== null
              ) {
                const claimAmount = parseFloat(
                  typedData.Approved_Claim_Amount.toString(),
                );
                if (isNaN(claimAmount)) {
                  throw new Error(
                    `Invalid Approved Claim Amount in row ${
                      idx + 1
                    }. Expected number, got: "${
                      typedData.Approved_Claim_Amount
                    }"`,
                  );
                }
                typedData.Approved_Claim_Amount = claimAmount;
              }

              // Parse LOS (Length of Stay)
              if (typedData.LOS !== undefined && typedData.LOS !== null) {
                const los = parseInt(typedData.LOS.toString());
                if (isNaN(los)) {
                  throw new Error(
                    `Invalid LOS (Length of Stay) in row ${
                      idx + 1
                    }. Expected number, got: "${typedData.LOS}"`,
                  );
                }
                typedData.LOS = los;
              }

              // Validate Member_Account (Claim No)
              if (
                typedData.Member_Account !== undefined &&
                typedData.Member_Account !== null
              ) {
                typedData.Member_Account = typedData.Member_Account.toString();
              }

              // Set default values for missing fields
              if (!typedData.Member_Type) {
                // Derive from standardized Relationship
                if (typedData.Relationship === "Employee") {
                  typedData.Member_Type = "P";
                } else {
                  typedData.Member_Type = "D";
                }
              }

              typedData.clientId = +clientId;
            });

            // Insert all data to philcare table
            await tx.philcare.createMany({
              data: worksheetData,
            });

            // Sort months array
            months.sort((a, b) => {
              return (
                DateTime.fromFormat(a, "LLL").month -
                DateTime.fromFormat(b, "LLL").month
              );
            });

            // Insert upload record
            await tx.uploads.create({
              data: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year,
                months:
                  months.length > 0
                    ? months[0] + "-" + months[months.length - 1]
                    : "Unknown",
                type: "utilization",
              },
            });
          });
        } catch (error: unknown) {
          // Delete the file after reading
          await deleteFile(key);
          if (error instanceof PrismaClientKnownRequestError) {
            console.error("Prisma error:", error.message);
            return res.json({ error: error.message });
          } else if (error instanceof Error) {
            console.error("Application error:", error.message);
            return res.json({ error: error.message });
          } else {
            console.error("Unknown error:", error);
            return res.json({
              error: "An unknown error occurred during data processing",
            });
          }
        }

        // Delete the file after successful processing
        await deleteFile(key);
        return res.json({
          message: "Philcare utilization uploaded successfully",
          success: true,
          headers: headers,
          recordsProcessed: worksheetData.length,
        });
      }
    } else {
      return res.json({ error: "File is null" });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return res.json({
      error: "Failed to upload Philcare utilization file",
      message: error,
    });
  }
}
