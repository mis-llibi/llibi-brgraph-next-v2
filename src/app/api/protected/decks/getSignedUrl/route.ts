export const dynamic = "force-dynamic";
import { NextResponse as res, NextRequest } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/s3";
import { env } from "@/lib/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!key) {
    return res.json({ error: "File key is required" }, { status: 400 });
  }

  try {
    // Create a signed URL that expires in 1 hour
    const command = new GetObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: key,
    });

    const signedUrl = await getSignedUrl(s3, command, {
      expiresIn: 3600, // 1 hour in seconds
    });

    return res.json({
      success: true,
      signedUrl,
      // Office Online Viewer URL format
      viewerUrl: `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        signedUrl
      )}`,
    });
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return res.json(
      { error: "Failed to generate signed URL" },
      { status: 500 }
    );
  }
}
