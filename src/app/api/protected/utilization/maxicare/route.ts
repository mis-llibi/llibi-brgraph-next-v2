export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DateTime } from "luxon";
import { saveFile, readFile, deleteFile } from "@/lib/s3";

import { NextResponse as res, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to maxicare */

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

    const company = await prisma.clients.findUnique({
      select: {
        client_name: true,
      },
      where: {
        id: +clientId,
      },
    });
    if (file) {
      // Extract file extension for validation if needed in the future
      // const [, extension] = file.name.split(".");
      console.log("Uploading File...");
      const { key } = await saveFile(file);
      console.log("Reading File...");
      const worksheet = await readFile(key);
      if (!worksheet) {
        return res.json({ error: "Failed to read excel file" });
      } else {
        const worksheetData: unknown[] = [];
        const headers: string[] = [];
        const keep = [
          "PY",
          "Company",
          "Member_ID",
          "Plan",
          "ICD10_Desc",
          "Coverage_Type",
          "Admission_Date",
          "Provider_Name",
          "Provider_Type",
          "Approved_Claim_Amount",
          "Relationship",
          "ICD10_Code",
        ];

        // get headers first (from 1st column)
        worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
          let header = cell.value?.toString() || "";
          header = header.replace(/\//g, "_");
          header = header.trim();
          header = header.replace(/ /g, "_");
          header = header.replace(/\./g, "_");
          headers.push(header);
        });

        console.log(headers);

        const yearStartDate = DateTime.fromFormat(year, "yyyy")
          .startOf("year")
          .toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        const yearEndDate = DateTime.fromFormat(year, "yyyy")
          .endOf("year")
          .toFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

        // Validate that all required columns are present
        const missingColumns = keep.filter((col) => !headers.includes(col));
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
            if (!keep.includes(headers[colNumber - 1])) return;
            switch (headers[colNumber - 1]) {
              case "Member_ID":
                rowObject.Member_Account = cell.value;
                break;
              case "Company":
                rowObject.Company = cell.value;
                break;
              case "Plan":
                rowObject.Member_Type =
                  typeof cell.value === "string" &&
                  cell.value.split("-")[1].trim() === "EMPLOYEES"
                    ? "P"
                    : "D";
                break;
              case "ICD10_Code":
                rowObject.ICD_10_Code = cell.value;
                break;
              case "ICD10_Desc":
                rowObject.Diagnosis =
                  typeof cell.value === "string"
                    ? cell.value.split(":")[0].trim()
                    : cell.value;
                break;
              case "Coverage_Type":
                rowObject.Claim_Type = cell.value;
                break;
              case "Admission_Date":
                rowObject.Admission_Date = cell.value;
                break;
              case "Provider_Name":
                rowObject.Provider_Name = cell.value;
                break;
              case "Provider_Type":
                rowObject.Provider_Type = cell.value;
                break;
              case "Aprroved_Claim_Amount":
                rowObject.Aprroved_Claim_Amount = cell.value;
                break;
              case "Relationship":
                rowObject.Relationship = cell.value;
                break;
              default:
                rowObject[headers[colNumber - 1]] = cell.value;
                if (!rowObject.Company) {
                  rowObject.Company = company?.client_name || null;
                }
                break;
            }
          });

          worksheetData.push(rowObject);
        });

        try {
          await prisma.$transaction(async (tx) => {
            await tx.maxicare.deleteMany({
              where: {
                clientId: +clientId,
                Admission_Date: {
                  gte: yearStartDate,
                  lte: yearEndDate,
                },
              },
            });

            await tx.uploads.deleteMany({
              where: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year,
              },
            });

            const months: string[] = [];

            worksheetData.forEach((data, idx) => {
              try {
                const typedData = data as any;
                // Replace "\n" with " " in the row data
                for (const key in typedData) {
                  if (typeof typedData[key] === "string") {
                    typedData[key] = typedData[key].replace(/\n/g, " ");
                  }
                }

                // Validate Diagnosis field length (MySQL VARCHAR limit is 191 chars for Prisma String)
                if (
                  typedData.Diagnosis &&
                  typeof typedData.Diagnosis === "string" &&
                  typedData.Diagnosis.length > 191
                ) {
                  throw new Error(
                    `Diagnosis field too long (${typedData.Diagnosis.length} characters, max 191). Value: "${typedData.Diagnosis.substring(0, 50)}..."`,
                  );
                }

                // check if Admission_Date is valid
                const admissionDate = DateTime.fromISO(
                  typedData.Admission_Date.toISOString(),
                  {
                    zone: "utc",
                    setZone: false,
                  },
                );

                // check if Admission_Date is within the year
                if (
                  admissionDate < DateTime.fromISO(yearStartDate) ||
                  admissionDate > DateTime.fromISO(yearEndDate)
                ) {
                  throw new Error(
                    `Admission Date is not within the year. Check row ${
                      idx + 1
                    }'s Admission Date`,
                  );
                }

                if (!admissionDate.isValid) {
                  throw new Error(
                    `Invalid Admission Date. Check row ${
                      idx + 1
                    }'s Admission Date`,
                  );
                } else {
                  typedData.Admission_Date = admissionDate.toFormat(
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                  );

                  // get month (ex. April) and check if it already exists. If not, add it to the months array
                  const month = admissionDate.toFormat("LLL");
                  if (!months.includes(month)) {
                    months.push(month);
                  }
                }

                // parse approved claim amount and maximum benefit limit to float
                typedData.Approved_Claim_Amount = parseFloat(
                  typedData.Approved_Claim_Amount,
                );

                if (isNaN(typedData.Approved_Claim_Amount)) {
                  throw new Error(
                    `Invalid Approved Claim Amount. Check row ${
                      idx + 1
                    }'s Approved Claim Amount`,
                  );
                }

                typedData.clientId = +clientId;
              } catch (error) {
                throw new Error(
                  `Row ${idx + 2} error: ${error instanceof Error ? error.message : String(error)}`,
                );
              }
            });

            // insert all data to masterlist
            await tx.maxicare.createMany({
              data: worksheetData as any,
            });

            // sort months array
            months.sort((a, b) => {
              return (
                DateTime.fromFormat(a, "LLL").month -
                DateTime.fromFormat(b, "LLL").month
              );
            });

            // insert all data to uploads
            await tx.uploads.create({
              data: {
                clientId: +clientId,
                insurerId: +insurerId,
                year: year,
                months: months[0] + "-" + months[months.length - 1],
                type: "utilization",
              },
            });
          });
        } catch (error: unknown) {
          // delete the file after reading
          await deleteFile(key);
          const errorMessage =
            error instanceof Error ? error.message : String(error);

          // Extract row number if available
          const rowMatch = errorMessage.match(/Row (\d+)/);
          const rowNumber = rowMatch ? rowMatch[1] : "unknown";

          if (error instanceof PrismaClientKnownRequestError) {
            console.error(`Error at row ${rowNumber}:`, error.message);
            return res.json({
              error: `Error at row ${rowNumber}: ${error.message}`,
            });
          } else if (error instanceof Error) {
            console.error(error.message);
            return res.json({ error: error.message });
          } else {
            console.error("Unknown error:", error);
            return res.json({ error: "An unknown error occurred" });
          }
        }

        // delete the file after reading
        await deleteFile(key);
        return res.json({
          message: "File uploaded successfully",
          success: true,
          headers: headers,
          worksheetData: worksheetData,
        });
      }
    } else {
      return res.json({ error: "File is null" });
    }
  } catch (error) {
    return res.json({ error: "Failed to upload excel file", message: error });
  }
}
