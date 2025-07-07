import {
  S3Client,
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { env } from "./env";
import { streamToBuffer } from "@/lib/helper/streamToBuffer";
import { Readable } from "node:stream";
import { Workbook } from "exceljs";

export const s3 = new S3Client({
  region: env.DO_SPACES_REGION,
  endpoint: env.DO_SPACES_ENDPOINT,
  credentials: {
    accessKeyId: env.DO_SPACES_ACCESS_KEY,
    secretAccessKey: env.DO_SPACES_SECRET_KEY,
  },
});

export async function saveFile(file: File) {
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

export async function readFile(key: string) {
  const command = new GetObjectCommand({ Bucket: env.BUCKET_NAME, Key: key });
  const response = await s3.send(command);

  const stream = response.Body as Readable;
  const buffer = await streamToBuffer(stream);

  const workbook = new Workbook();
  // @ts-expect-error: TypeScript misinterprets Buffer generics, but this works fine
  await workbook.xlsx.load(buffer);
  return workbook.getWorksheet(1);
}

export async function deleteFile(key: string) {
  await s3.send(new DeleteObjectCommand({ Bucket: env.BUCKET_NAME, Key: key }));
  return;
}

export async function uploadDeck(file: File, clientId: string) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const key = `brgraphv2/decks/${clientId}/${Date.now()}-${file.name}`;
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
