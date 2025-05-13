export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "../../../../../../prisma/generated/client/runtime/library";
import { Workbook } from "exceljs";
import { promises as fs } from "fs";
import { DateTime } from "luxon";

import { NextResponse as res, NextRequest } from "next/server";

/* This route and any of its subroutes is designed for anything related to maxicare */

// This route is for uploading the utilization of a client
export async function POST(req: NextRequest) {
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

  try {
    const company = await prisma.clients.findUnique({
      select: {
        client_name: true,
      },
      where: {
        id: +clientId,
      },
    });
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
        return res.json({ error: "Failed to read excel file" });
      } else {
        const worksheetData: any[] = [];
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

        worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
          const rowObject: { [key: string]: any } = {};
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
              // Replace "\n" with " " in the row data
              for (const key in data) {
                if (typeof data[key] === "string") {
                  data[key] = data[key].replace(/\n/g, " ");
                }
              }

              // check if Admission_Date is valid
              const admissionDate = DateTime.fromISO(
                data.Admission_Date.toISOString(),
                {
                  zone: "utc",
                  setZone: false,
                }
              );

              // check if Admission_Date is within the year
              if (
                admissionDate < DateTime.fromISO(yearStartDate) ||
                admissionDate > DateTime.fromISO(yearEndDate)
              ) {
                throw new Error(
                  `Admission Date is not within the year. Check row ${
                    idx + 1
                  }'s Admission Date`
                );
              }

              if (!admissionDate.isValid) {
                throw new Error(
                  `Invalid Admission Date. Check row ${
                    idx + 1
                  }'s Admission Date`
                );
              } else {
                data.Admission_Date = admissionDate.toFormat(
                  "yyyy-MM-dd'T'HH:mm:ss'Z'"
                );

                // get month (ex. April) and check if it already exists. If not, add it to the months array
                const month = admissionDate.toFormat("LLL");
                if (!months.includes(month)) {
                  months.push(month);
                }
              }

              // parse approved claim amount and maximum benefit limit to float
              data.Approved_Claim_Amount = parseFloat(
                data.Approved_Claim_Amount
              );

              if (isNaN(data.Approved_Claim_Amount)) {
                throw new Error(
                  `Invalid Approved Claim Amount. Check row ${
                    idx + 1
                  }'s Approved Claim Amount`
                );
              }

              data.clientId = +clientId;
            });

            // insert all data to masterlist
            await tx.maxicare.createMany({
              data: worksheetData,
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
        } catch (error: any) {
          // delete the file after reading
          await deleteFile(name, extension);
          if (error instanceof PrismaClientKnownRequestError) {
            console.error(error.message);
          } else {
            console.error(error.message);
          }

          return res.json({ error: error.message });
        }

        // delete the file after reading
        await deleteFile(name, extension);
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
    return res.json({ error: "Failed to upload excel file" });
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
