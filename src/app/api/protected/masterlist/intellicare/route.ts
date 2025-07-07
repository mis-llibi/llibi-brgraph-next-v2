export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Workbook } from "exceljs";
import { DateTime } from "luxon";
import { s3 } from "@/lib/s3";
import { env } from "@/lib/env";

import { NextResponse, NextRequest } from "next/server";
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

import { streamToBuffer } from "@/lib/helper/streamToBuffer";
import { Readable } from "node:stream";

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
    if (file) {
      console.log("Uploading File...");
      const { key } = await saveFile(file);
      console.log("Reading File...");
      const worksheet = await readFile(key);
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
    console.log(error)
    return NextResponse.json({ error: "Failed to upload excel file" });
  }
}

async function saveFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const key = `brgraphv2/masterlist/${Date.now()}-${file.name}`;
  await s3.send(
    new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: key,
      Body: buffer,
      ACL: "public-read",
      ContentType: file.type,
    })
  );

  return {
    key,
    url: `${env.CDN_URL}/${key}`,
  };
}

async function readFile(key: string) {
  const command = new GetObjectCommand({ Bucket: env.BUCKET_NAME, Key: key });
  const response = await s3.send(command);

  const stream = response.Body as Readable;
  const buffer = await streamToBuffer(stream);

  const workbook = new Workbook();
  // @ts-expect-error: TypeScript misinterprets Buffer generics, but this works fine
  await workbook.xlsx.load(buffer);
  return workbook.getWorksheet(1);
}

async function deleteFile(key:string) {
  await s3.send(new DeleteObjectCommand({ Bucket: env.BUCKET_NAME, Key: key}))
  return;
}
