export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DateTime } from "luxon";
import { readFile, deleteFile, s3 } from "@/lib/s3";
import { env } from "@/lib/env";
import { PutObjectCommand } from "@aws-sdk/client-s3";

import { NextResponse as res, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to Intellicare */

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
          "Member_Account",
          "Member_Type",
          "Diagnosis",
          "Claim_Type",
          "Admission_Date",
          "Provider_Name",
          "Provider_Type",
          "Approved_Claim_Amount",
          "Class_Plan_Level",
          "Maximum_Benefit_Limit",
          "Date_of_Birth",
          "Relationship",
          "ICD_10_Code",
        ];
        const requiredColumns = [
          "PY",
          "Diagnosis",
          "Claim_Type",
          "Admission_Date",
          "Approved_Claim_Amount",
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
            if (!keep.includes(headers[colNumber - 1])) return;
            rowObject[headers[colNumber - 1]] = cell.value;
          });

          worksheetData.push(rowObject);
        });

        try {
          await prisma.$transaction(async (tx) => {
            await tx.intellicare.deleteMany({
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
              const typedData = data as any;
              // Replace "\n" with " " in the row data
              for (const key in typedData) {
                if (typeof typedData[key] === "string") {
                  typedData[key] = typedData[key].replace(/\n/g, " ");
                }
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

              // check all BIRTHDATE if valid, if not still continue but do not process

              if (typedData.Date_of_Birth) {
                const birthdate = DateTime.fromISO(
                  typedData.Date_of_Birth.toISOString(),
                  {
                    zone: "utc",
                    setZone: false,
                  },
                );

                if (!birthdate.isValid) {
                  throw new Error(
                    `Invalid birthdate. Check row ${idx + 1}'s BIRTHDATE`,
                  );
                } else {
                  typedData.Date_of_Birth = birthdate.toFormat(
                    "yyyy-MM-dd'T'HH:mm:ss'Z'",
                  );
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

              typedData.Maximum_Benefit_Limit = parseFloat(
                typedData.Maximum_Benefit_Limit,
              );

              if (isNaN(typedData.Maximum_Benefit_Limit)) {
                throw new Error(
                  `Invalid Maximum Benefit Limit. Check row ${
                    idx + 1
                  }'s Maximum Benefit Limit`,
                );
              }

              typedData.clientId = +clientId;
            });

            // insert all data to masterlist
            await tx.intellicare.createMany({
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
          if (error instanceof PrismaClientKnownRequestError) {
            console.error(error.message);
            return res.json({ error: error.message });
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
    console.error("Failed to upload excel file:", error);
    return res.json({ error: "Failed to upload excel file" });
  }
}

async function saveFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const key = `brgraphv2/utilization/${Date.now()}-${file.name}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: key,
      Body: buffer,
      ACL: "public-read",
      ContentType: file.type,
    }),
  );

  return {
    key,
    url: `${env.CDN_URL}/${key}`,
  };
}
