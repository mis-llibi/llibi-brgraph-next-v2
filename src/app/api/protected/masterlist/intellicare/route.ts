export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Workbook } from "exceljs";
import { promises as fs } from "fs";
import { DateTime } from "luxon";

import { NextResponse, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to Intellicare */

// This route is for uploading the masterlist of a client
export async function POST(req: NextRequest) {
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
  try {
    const workbook = new Workbook();
    if (file) {
      const [name, extension] = file.name.split(".");
      console.log("Uploading File...");
      await saveFile(file);
      console.log("Reading File...");
      const worksheet = await workbook.xlsx
        .readFile(`./public/${name}.${extension}`)
        .then(() => {
          return workbook.getWorksheet(1);
        })
        .catch((error) => {
          console.error(error);
          return null;
        });

      if (!worksheet) {
        return NextResponse.json({ error: "Failed to read excel file" });
      } else {
        const worksheetData: any[] = [];
        const headers: string[] = [];
        const keep = [
          "PY",
          "ACCOUNT_NO",
          "STATUS",
          "MEMBER_TYPE",
          "RNB",
          "PREEXIST",
          "LIMIT",
          "BIRTHDATE",
          "AGE",
          "RELATION",
          "EE_ID",
          "CARD_NO",
          "COMPANY",
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

        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
          const rowObject: { [key: string]: any } = {};
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
          // prisma transaction
          await prisma.$transaction(async (tx) => {
            // delete all masterlist with the same PY
            await tx.intellicareMasterlist.deleteMany({
              where: {
                clientId: +clientId,
                PY: worksheetData[0].PY,
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
              if (data.PY !== (year as string)) {
                throw new Error(
                  `PY does not match the year. Check row ${idx + 1}'s PY`
                );
              }

              // check all BIRTHDATE if valid
              const birthdate = DateTime.fromISO(data.BIRTHDATE.toISOString(), {
                zone: "utc",
                setZone: false,
              });

              if (!birthdate.isValid) {
                throw new Error(
                  `Invalid birthdate. Check row ${idx + 1}'s BIRTHDATE`
                );
              } else {
                data.BIRTHDATE = birthdate.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
              }

              // convert all PREEXIST to float value (2 decimal places)
              const preexist = parseFloat(data.PREEXIST);
              if (isNaN(preexist)) {
                throw new Error(
                  `Invalid preexist. Check row ${idx + 1}'s PREEXIST`
                );
              }

              // convert all LIMIT to float value (2 decimal places)
              const limit = parseFloat(data.LIMIT);
              if (isNaN(limit)) {
                throw new Error(`Invalid limit. Check row ${idx + 1}'s LIMIT`);
              }

              data.clientId = +clientId;
            });

            // insert all data to masterlist
            await tx.intellicareMasterlist.createMany({
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
        } catch (error: any) {
          if (error instanceof PrismaClientKnownRequestError) {
            console.error(error.message);
          } else {
            console.error(error.message);
          }

          return NextResponse.json({ error: error.message });
        }

        // delete the file after reading
        await deleteFile(name, extension);
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
    return NextResponse.json({ error: "Failed to upload excel file" });
  }
}

async function saveFile(file: File) {
  const data = await file.arrayBuffer();
  const [name, extension] = file.name.split(".");
  await fs
    .appendFile(`./public/${name}.${extension}`, Buffer.from(data))
    .catch((error) => {
      console.error(error);
    });
  return;
}

async function deleteFile(name: string, extension: string) {
  await fs.unlink(`./public/${name}.${extension}`).catch((error) => {
    console.error(error);
  });
  return;
}
