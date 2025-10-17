export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { saveFile, readFile, deleteFile } from "@/lib/s3";
import { DateTime } from "luxon";

import { NextResponse, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to Philcare */

// Function to standardize relationship values to match other insurers
function standardizeRelation(relation: string): string {
  if (!relation) return relation;

  const normalized = relation.toString().trim();

  // Mapping for standardization based on actual Excel file data
  const relationMap: { [key: string]: string } = {
    "Principal Member": "Employee",
    "Dependent Children": "Child",
    "Dependent Spouse": "Spouse",
    Parent: "Parent",
    "Brother / Sister": "Sibling",
    "Other dependents": "Other", // Only 1 record in the actual data
    // Standard values (already correct)
    Employee: "Employee",
    Child: "Child",
    Spouse: "Spouse",
    Sibling: "Sibling",
    Other: "Other",
  };

  return relationMap[normalized] || normalized;
}

// This route is for uploading the masterlist of a client
export async function POST(req: NextRequest) {
  try {
    // Require authentication first
    const authResult = await requireAuth();
    if (authResult instanceof NextResponse) {
      return authResult; // Return auth error response
    }

    // Check canUpload permission for uploading masterlists
    const permissionResult = requirePermission(authResult.user, "canUpload");
    if (permissionResult) {
      return permissionResult; // Return permission error response
    }

    // get the file from the request
    if (!req.body) {
      return NextResponse.json({ error: "Request body is null" });
    }
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const clientId = formData.get("id");
    const year = formData.get("year");
    const insurerId = formData.get("insurerId");
    if (!clientId || !year || !insurerId || !file) {
      return NextResponse.json({ error: "Missing required fields" });
    }

    const company = await prisma.clients.findFirst({
      select: {
        client_name: true,
      },
      where: {
        id: +clientId,
      },
    });

    console.log("Starting Philcare process for:", company?.client_name);

    if (file) {
      console.log("Uploading File...");
      const { key } = await saveFile(file);
      console.log("Reading File...");
      const worksheet = await readFile(key);
      if (!worksheet) {
        return NextResponse.json({ error: "Failed to read excel file" });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const worksheetData: any[] = [];
        const headers: string[] = [];
        const keep = [
          "Policy No",
          "Agreement No",
          "Employee No",
          "Sub Office Code",
          "Sub Office Name",
          "Certificate No",
          "Last Name",
          "First Name",
          "MI",
          "Member Orig Eff Date",
          "Member Eff Date",
          "Gender",
          "Age",
          "Date Of Birth",
          "Marital Status",
          "Relationship",
          "Class Code",
          "Class Definition",
          "Room Type",
          "Room Board Max Amt",
          "Member Fee Plus Rider",
          "Dental Code",
          "Accidental Rider",
          "Accidental Rider Coverage Amount",
          "Life Rider",
          "Life Rider Coverage Amount",
          "Travel Assistance Program",
          "TAP Coverage Amount",
          "Pre-Existing Code",
          "Member Status",
          "Payor",
          "Member Coverage",
          "Remarks",
          "Account Type",
          "PY",
        ];

        // get headers first (from 1st row)
        worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
          let header = cell.value?.toString() || "";
          header = header.trim();
          headers.push(header);
        });

        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
          const rowObject: { [key: string]: unknown } = {};
          // if 1st row, skip
          if (rowNumber === 1) return;

          // only keep if header is in keep array
          row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
            const headerName = headers[colNumber - 1];
            if (!keep.includes(headerName)) return;

            // Map Excel column names to database field names
            switch (headerName) {
              case "Policy No":
                rowObject.POLICY_NO = cell.value;
                break;
              case "Agreement No":
                rowObject.AGREEMENT_NO = cell.value;
                break;
              case "Employee No":
                rowObject.EMPLOYEE_NO = cell.value;
                break;
              case "Sub Office Code":
                rowObject.SUB_OFFICE_CODE = cell.value;
                break;
              case "Sub Office Name":
                rowObject.SUB_OFFICE_NAME = cell.value;
                break;
              case "Certificate No":
                rowObject.CERTIFICATE_NO = cell.value;
                break;
              case "Last Name":
                rowObject.LAST_NAME = cell.value;
                break;
              case "First Name":
                rowObject.FIRST_NAME = cell.value;
                break;
              case "MI":
                rowObject.MI = cell.value;
                break;
              case "Member Orig Eff Date":
                rowObject.MEMBER_ORIG_EFF_DATE = cell.value;
                break;
              case "Member Eff Date":
                rowObject.MEMBER_EFF_DATE = cell.value;
                break;
              case "Gender":
                rowObject.GENDER = cell.value;
                break;
              case "Age":
                rowObject.AGE = cell.value;
                break;
              case "Date Of Birth":
                rowObject.DATE_OF_BIRTH = cell.value;
                break;
              case "Marital Status":
                rowObject.MARITAL_STATUS = cell.value;
                break;
              case "Relationship":
                rowObject.RELATIONSHIP = standardizeRelation(
                  cell.value?.toString() || ""
                );
                break;
              case "Class Code":
                rowObject.CLASS_CODE = cell.value;
                break;
              case "Class Definition":
                rowObject.CLASS_DEFINITION = cell.value;
                break;
              case "Room Type":
                rowObject.ROOM_TYPE = cell.value;
                break;
              case "Room Board Max Amt":
                rowObject.ROOM_BOARD_MAX_AMT = cell.value;
                break;
              case "Member Fee Plus Rider":
                rowObject.MEMBER_FEE_PLUS_RIDER = cell.value;
                break;
              case "Dental Code":
                rowObject.DENTAL_CODE = cell.value;
                break;
              case "Accidental Rider":
                rowObject.ACCIDENTAL_RIDER = cell.value;
                break;
              case "Accidental Rider Coverage Amount":
                rowObject.ACCIDENTAL_RIDER_COVERAGE_AMT = cell.value;
                break;
              case "Life Rider":
                rowObject.LIFE_RIDER = cell.value;
                break;
              case "Life Rider Coverage Amount":
                rowObject.LIFE_RIDER_COVERAGE_AMT = cell.value;
                break;
              case "Travel Assistance Program":
                rowObject.TRAVEL_ASSISTANCE_PROGRAM = cell.value;
                break;
              case "TAP Coverage Amount":
                rowObject.TAP_COVERAGE_AMT = cell.value;
                break;
              case "Pre-Existing Code":
                rowObject.PRE_EXISTING_CODE = cell.value;
                break;
              case "Member Status":
                rowObject.MEMBER_STATUS = cell.value;
                break;
              case "Payor":
                rowObject.PAYOR = cell.value;
                break;
              case "Member Coverage":
                rowObject.MEMBER_COVERAGE = cell.value;
                break;
              case "Remarks":
                rowObject.REMARKS = cell.value;
                break;
              case "Account Type":
                rowObject.ACCOUNT_TYPE = cell.value;
                break;
              case "PY":
                rowObject.PY = cell.value;
                break;
              default:
                // fallback for any unmapped fields
                const dbFieldName = headerName.toUpperCase().replace(/ /g, "_");
                rowObject[dbFieldName] = cell.value;
                break;
            }
          });

          // Set clientId before pushing
          rowObject.clientId = +clientId;
          worksheetData.push(rowObject);
        });

        try {
          // prisma transaction
          await prisma.$transaction(async (tx) => {
            // delete all masterlist with the same PY
            await tx.philcareMasterlist.deleteMany({
              where: {
                clientId: +clientId,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                PY: (worksheetData[0] as any)?.PY as string,
              },
            });

            await tx.uploads.deleteMany({
              where: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year as string,
              },
            });

            worksheetData.forEach((data, idx) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const typedData = data as any;
              if (typedData.PY !== (year as string)) {
                throw new Error(
                  `PY does not match the year. Check row ${idx + 1}'s PY`
                );
              }

              // Format date fields if they exist and are valid
              // Handle DATE_OF_BIRTH - can be DateTime object or string
              if (typedData.DATE_OF_BIRTH) {
                let birthDate: DateTime;

                if (typedData.DATE_OF_BIRTH instanceof Date) {
                  // It's already a Date object from Excel
                  birthDate = DateTime.fromISO(
                    typedData.DATE_OF_BIRTH.toISOString(),
                    {
                      zone: "utc",
                      setZone: false,
                    }
                  );
                } else if (typeof typedData.DATE_OF_BIRTH === "string") {
                  // It's a string, try to parse it (MM/DD/YYYY format)
                  const dateStr = typedData.DATE_OF_BIRTH.toString();
                  // Try MM/DD/YYYY format first
                  birthDate = DateTime.fromFormat(dateStr, "MM/dd/yyyy", {
                    zone: "utc",
                  });

                  if (!birthDate.isValid) {
                    // Try other common formats
                    birthDate = DateTime.fromFormat(dateStr, "yyyy-MM-dd", {
                      zone: "utc",
                    });
                  }

                  if (!birthDate.isValid) {
                    birthDate = DateTime.fromISO(dateStr, { zone: "utc" });
                  }
                } else {
                  throw new Error(
                    `Invalid DATE_OF_BIRTH format in row ${
                      idx + 1
                    }. Expected Date object or string, got: ${typeof typedData.DATE_OF_BIRTH}. Value: ${
                      typedData.DATE_OF_BIRTH
                    }`
                  );
                }

                if (!birthDate.isValid) {
                  throw new Error(
                    `Invalid DATE_OF_BIRTH value in row ${
                      idx + 1
                    }. Could not parse: "${
                      typedData.DATE_OF_BIRTH
                    }". Expected formats: MM/DD/YYYY, YYYY-MM-DD, or ISO date.`
                  );
                }

                typedData.DATE_OF_BIRTH = birthDate.toFormat(
                  "yyyy-MM-dd'T'HH:mm:ss'Z'"
                );
              }

              // Handle MEMBER_ORIG_EFF_DATE
              if (typedData.MEMBER_ORIG_EFF_DATE) {
                let origEffDate: DateTime;

                if (typedData.MEMBER_ORIG_EFF_DATE instanceof Date) {
                  origEffDate = DateTime.fromISO(
                    typedData.MEMBER_ORIG_EFF_DATE.toISOString(),
                    {
                      zone: "utc",
                      setZone: false,
                    }
                  );
                } else if (typeof typedData.MEMBER_ORIG_EFF_DATE === "string") {
                  const dateStr = typedData.MEMBER_ORIG_EFF_DATE.toString();
                  origEffDate = DateTime.fromFormat(dateStr, "MM/dd/yyyy", {
                    zone: "utc",
                  });

                  if (!origEffDate.isValid) {
                    origEffDate = DateTime.fromFormat(dateStr, "yyyy-MM-dd", {
                      zone: "utc",
                    });
                  }

                  if (!origEffDate.isValid) {
                    origEffDate = DateTime.fromISO(dateStr, { zone: "utc" });
                  }
                } else {
                  throw new Error(
                    `Invalid MEMBER_ORIG_EFF_DATE format in row ${
                      idx + 1
                    }. Expected Date object or string, got: ${typeof typedData.MEMBER_ORIG_EFF_DATE}. Value: ${
                      typedData.MEMBER_ORIG_EFF_DATE
                    }`
                  );
                }

                if (!origEffDate.isValid) {
                  throw new Error(
                    `Invalid MEMBER_ORIG_EFF_DATE value in row ${
                      idx + 1
                    }. Could not parse: "${
                      typedData.MEMBER_ORIG_EFF_DATE
                    }". Expected formats: MM/DD/YYYY, YYYY-MM-DD, or ISO date.`
                  );
                }

                typedData.MEMBER_ORIG_EFF_DATE = origEffDate.toFormat(
                  "yyyy-MM-dd'T'HH:mm:ss'Z'"
                );
              }

              // Handle MEMBER_EFF_DATE
              if (typedData.MEMBER_EFF_DATE) {
                let effDate: DateTime;

                if (typedData.MEMBER_EFF_DATE instanceof Date) {
                  effDate = DateTime.fromISO(
                    typedData.MEMBER_EFF_DATE.toISOString(),
                    {
                      zone: "utc",
                      setZone: false,
                    }
                  );
                } else if (typeof typedData.MEMBER_EFF_DATE === "string") {
                  const dateStr = typedData.MEMBER_EFF_DATE.toString();
                  effDate = DateTime.fromFormat(dateStr, "MM/dd/yyyy", {
                    zone: "utc",
                  });

                  if (!effDate.isValid) {
                    effDate = DateTime.fromFormat(dateStr, "yyyy-MM-dd", {
                      zone: "utc",
                    });
                  }

                  if (!effDate.isValid) {
                    effDate = DateTime.fromISO(dateStr, { zone: "utc" });
                  }
                } else {
                  throw new Error(
                    `Invalid MEMBER_EFF_DATE format in row ${
                      idx + 1
                    }. Expected Date object or string, got: ${typeof typedData.MEMBER_EFF_DATE}. Value: ${
                      typedData.MEMBER_EFF_DATE
                    }`
                  );
                }

                if (!effDate.isValid) {
                  throw new Error(
                    `Invalid MEMBER_EFF_DATE value in row ${
                      idx + 1
                    }. Could not parse: "${
                      typedData.MEMBER_EFF_DATE
                    }". Expected formats: MM/DD/YYYY, YYYY-MM-DD, or ISO date.`
                  );
                }

                typedData.MEMBER_EFF_DATE = effDate.toFormat(
                  "yyyy-MM-dd'T'HH:mm:ss'Z'"
                );
              }

              // Convert numeric fields with better error handling
              if (typedData.SUB_OFFICE_CODE) {
                const subOfficeCode = parseInt(
                  typedData.SUB_OFFICE_CODE.toString()
                );
                if (isNaN(subOfficeCode)) {
                  throw new Error(
                    `Invalid SUB_OFFICE_CODE in row ${
                      idx + 1
                    }. Expected number, got: "${typedData.SUB_OFFICE_CODE}"`
                  );
                }
                typedData.SUB_OFFICE_CODE = subOfficeCode;
              }

              if (typedData.AGE) {
                const age = parseInt(typedData.AGE.toString());
                if (isNaN(age)) {
                  throw new Error(
                    `Invalid AGE in row ${idx + 1}. Expected number, got: "${
                      typedData.AGE
                    }"`
                  );
                }
                typedData.AGE = age;
              }

              if (typedData.CLASS_CODE) {
                const classCode = parseInt(typedData.CLASS_CODE.toString());
                if (isNaN(classCode)) {
                  throw new Error(
                    `Invalid CLASS_CODE in row ${
                      idx + 1
                    }. Expected number, got: "${typedData.CLASS_CODE}"`
                  );
                }
                typedData.CLASS_CODE = classCode;
              }

              if (typedData.PRE_EXISTING_CODE) {
                const preExistingCode = parseInt(
                  typedData.PRE_EXISTING_CODE.toString()
                );
                if (isNaN(preExistingCode)) {
                  throw new Error(
                    `Invalid PRE_EXISTING_CODE in row ${
                      idx + 1
                    }. Expected number, got: "${typedData.PRE_EXISTING_CODE}"`
                  );
                }
                typedData.PRE_EXISTING_CODE = preExistingCode;
              }

              // Convert float fields with better error handling
              const floatFields = [
                "ROOM_BOARD_MAX_AMT",
                "MEMBER_FEE_PLUS_RIDER",
                "ACCIDENTAL_RIDER",
                "ACCIDENTAL_RIDER_COVERAGE_AMT",
                "LIFE_RIDER",
                "LIFE_RIDER_COVERAGE_AMT",
                "TRAVEL_ASSISTANCE_PROGRAM",
                "TAP_COVERAGE_AMT",
              ];

              floatFields.forEach((field) => {
                if (typedData[field]) {
                  const floatValue = parseFloat(typedData[field].toString());
                  if (isNaN(floatValue)) {
                    throw new Error(
                      `Invalid ${field} in row ${
                        idx + 1
                      }. Expected number, got: "${typedData[field]}"`
                    );
                  }
                  typedData[field] = floatValue;
                }
              });

              typedData.clientId = +clientId;
            });

            // insert all data to masterlist
            await tx.philcareMasterlist.createMany({
              data: worksheetData,
            });

            // insert the upload data
            await tx.uploads.create({
              data: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year as string,
                type: "masterlist",
              },
            });
          });
        } catch (error: unknown) {
          if (error instanceof PrismaClientKnownRequestError) {
            console.error(error.message);
            return NextResponse.json({ error: error.message });
          } else if (error instanceof Error) {
            console.error(error.message);
            return NextResponse.json({ error: error.message });
          } else {
            console.error("Unknown error:", error);
            return NextResponse.json({ error: "An unknown error occurred" });
          }
        }

        // delete the file after reading
        await deleteFile(key);
        return NextResponse.json({
          message: "Philcare masterlist uploaded successfully",
          success: true,
          headers: headers,
          worksheetData: worksheetData,
        });
      }
    } else {
      return NextResponse.json({ error: "File is null" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Failed to upload Philcare masterlist",
      message: error,
    });
  }
}
