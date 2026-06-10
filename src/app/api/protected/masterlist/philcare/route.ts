export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { requireAuth, requirePermission } from "@/lib/auth-middleware";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { saveFile, readFile, deleteFile } from "@/lib/s3";
import {
  getDatasetSelection,
  resolveDatasetForUpload,
} from "@/lib/datasets";

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
    const insurerId = formData.get("insurerId");

    if (!clientId || !insurerId || !file) {
      return NextResponse.json({ error: "Missing required fields" });
    }

    const { datasetId, datasetTitle } = getDatasetSelection(formData);
    const resolvedDataset = await resolveDatasetForUpload({
      clientId: +clientId,
      insurerId: +insurerId,
      datasetId,
      datasetTitle,
    });

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
        const keep = ["Sub Office Name", "Relationship"];
        const requiredColumns = ["Sub Office Name", "Relationship"];

        // get headers first (from 1st row)
        worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell) => {
          let header = cell.value?.toString() || "";
          header = header.trim();
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
            const headerName = headers[colNumber - 1];
            if (!keep.includes(headerName)) return;

            // Map Excel column names to database field names
            switch (headerName) {
              case "Sub Office Name":
                rowObject.SUB_OFFICE_NAME = cell.value;
                break;
              case "Relationship":
                rowObject.RELATIONSHIP = standardizeRelation(
                  cell.value?.toString() || "",
                );
                break;
              default:
                break;
            }
          });

          // Set clientId before pushing
          rowObject.clientId = +clientId;
          rowObject.datasetId = resolvedDataset.id;
          rowObject.PY = resolvedDataset.title;
          worksheetData.push(rowObject);
        });

        try {
          // prisma transaction
          await prisma.$transaction(async (tx) => {
            // Replace masterlist data for this dataset
            await tx.philcareMasterlist.deleteMany({
              where: {
                clientId: +clientId,
                datasetId: resolvedDataset.id,
              },
            });

            await tx.uploads.deleteMany({
              where: {
                clientId: +clientId,
                insurerId: +insurerId,
                datasetId: resolvedDataset.id,
                type: "masterlist",
              },
            });

            worksheetData.forEach((data, idx) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const typedData = data as any;
              const rowNumber = idx + 2;

              if (!typedData.SUB_OFFICE_NAME || !typedData.RELATIONSHIP) {
                throw new Error(
                  `Missing required values at row ${rowNumber}. Required: Sub Office Name, Relationship`,
                );
              }

              for (const [column, value] of Object.entries(typedData)) {
                if (typeof value === "string" && value.length > 255) {
                  throw new Error(
                    `Value too long at row ${rowNumber}. Column: ${column}. Length: ${value.length}. Value: "${value.slice(0, 80)}..."`,
                  );
                }
              }
              typedData.clientId = +clientId;
              typedData.datasetId = resolvedDataset.id;
              typedData.PY = resolvedDataset.title;
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
                datasetId: resolvedDataset.id,
                year: resolvedDataset.title,
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
