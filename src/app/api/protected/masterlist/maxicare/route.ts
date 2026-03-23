export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { saveFile, readFile, deleteFile } from "@/lib/s3";

import { NextResponse, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to Intellicare */

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
    console.log("Starting process");

    if (file) {
      console.log("Uploading File...");
      const { key } = await saveFile(file);
      console.log("Reading File...");
      const worksheet = await readFile(key);
      if (!worksheet) {
        return NextResponse.json({ error: "Failed to read excel file" });
      } else {
        const worksheetData: unknown[] = [];
        const headers: string[] = [];
        const keep = [
          "PY",
          "POLICYNO",
          "STATUSDESC",
          "MEMBERTYPE",
          "MBL",
          "REALDESC",
          "EMPNO",
          "CARD_NO",
          "COMPANY",
        ];
        const requiredColumns = ["PY", "COMPANY", "MEMBERTYPE", "REALDESC"];
        // get headers first (from 1st column)
        worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
          let header = cell.value?.toString() || "";
          header = header.replace(/\//g, "_");
          header = header.trim();
          header = header.replace(/ /g, "_");
          header = header.replace(/\./g, "_");
          headers.push(header);
        });

        // Validate that all required columns are present
        const missingColumns = requiredColumns.filter(
          (col) => !headers.includes(col),
        );
        if (missingColumns.length > 0) {
          return NextResponse.json({
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
              case "POLICYNO":
                rowObject.ACCOUNT_NO = cell.value;
                break;
              case "STATUSDESC":
                rowObject.STATUS = cell.value === "ACTIVE" ? "A" : "C";
                break;
              case "MEMBERTYPE":
                rowObject.MEMBER_TYPE = cell.value;
                break;
              case "MBL":
                rowObject.LIMIT = cell.value;
                break;
              case "REALDESC":
                rowObject.RELATION = cell.value;
                break;
              case "EMPNO":
                rowObject.EE_ID = cell.value;
                break;
              case "CARD_NO":
                rowObject.CARD_NO = cell.value;
                break;
              case "COMPANY":
                rowObject.COMPANY = cell.value;
                break;
              default:
                rowObject[headers[colNumber - 1]] = cell.value;
                if (!rowObject.COMPANY) {
                  rowObject.COMPANY = company?.client_name;
                }
                break;
            }
          });

          worksheetData.push(rowObject);
        });

        try {
          // prisma transaction
          await prisma.$transaction(async (tx) => {
            // delete all masterlist with the same PY
            await tx.maxicareMasterlist.deleteMany({
              where: {
                clientId: +clientId,
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
              const typedData = data as any;
              const rowNumber = idx + 2;

              if (!typedData.PY || !typedData.PY.toString().trim()) {
                throw new Error(
                  `Missing required field PY at row ${rowNumber}. Value: "${typedData.PY}"`,
                );
              }

              if (typedData.PY !== (year as string)) {
                throw new Error(
                  `PY does not match the year at row ${rowNumber}. Column: PY. Value: "${typedData.PY}"`,
                );
              }

              if (
                typedData.STATUS &&
                typeof typedData.STATUS === "string" &&
                typedData.STATUS.length > 1
              ) {
                throw new Error(
                  `Invalid STATUS at row ${rowNumber}. Column: STATUS expects max length 1, got "${typedData.STATUS}"`,
                );
              }

              if (
                typedData.MEMBER_TYPE &&
                typeof typedData.MEMBER_TYPE === "string" &&
                typedData.MEMBER_TYPE.length > 1
              ) {
                throw new Error(
                  `Invalid MEMBER_TYPE at row ${rowNumber}. Column: MEMBER_TYPE expects max length 1, got "${typedData.MEMBER_TYPE}"`,
                );
              }

              for (const [column, value] of Object.entries(typedData)) {
                if (typeof value === "string" && value.length > 191) {
                  throw new Error(
                    `Value too long at row ${rowNumber}. Column: ${column}. Length: ${value.length}. Value: "${value.slice(0, 80)}..."`,
                  );
                }
              }

              // convert all LIMIT to float value (2 decimal places)
              const limitValue = typedData.LIMIT?.toString() || "0";
              const limit = parseFloat(limitValue);
              if (isNaN(limit)) {
                throw new Error(
                  `Invalid LIMIT at row ${rowNumber}. Column: LIMIT. Value: "${typedData.LIMIT}"`,
                );
              }

              typedData.clientId = +clientId;
            });

            // insert all data to masterlist
            await tx.maxicareMasterlist.createMany({
              data: worksheetData as any,
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
          message: "File uploaded successfully",
          success: true,
          headers: headers,
          worksheetData: worksheetData,
        });
      }
    } else {
      return NextResponse.json({ error: "File is null" });
    }
  } catch (error) {
    return NextResponse.json({
      error: "Failed to upload excel file",
      message: error,
    });
  }
}
