import { Readable } from "node:stream";
export async function streamToBuffer(readable: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of readable) {
    chunks.push(
      typeof chunk === "string" ? Buffer.from(chunk, "utf-8") : chunk
    );
  }
  return Buffer.concat(chunks);
}
  
