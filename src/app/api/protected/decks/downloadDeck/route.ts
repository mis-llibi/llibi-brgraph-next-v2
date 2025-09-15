export const dynamic = "force-dynamic";
import { NextResponse as res, NextRequest } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";
import { env } from "@/lib/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!key) {
    return res.json({ error: "File key is required" }, { status: 400 });
  }

  try {
    // Get the file from S3
    const command = new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: key,
    });

    const response = await s3.send(command);

    if (!response.Body) {
      return res.json({ error: "File not found" }, { status: 404 });
    }

    // Convert the stream to a buffer
    const chunks: Uint8Array[] = [];
    const reader = response.Body.transformToWebStream().getReader();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    const buffer = Buffer.concat(chunks);

    // Set appropriate headers for file download
    const headers = new Headers();
    headers.set(
      "Content-Type",
      response.ContentType || "application/octet-stream"
    );
    headers.set("Content-Length", buffer.length.toString());
    headers.set("Content-Disposition", "attachment");

    return new Response(buffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    return res.json({ error: "Failed to download file" }, { status: 500 });
  }
}
