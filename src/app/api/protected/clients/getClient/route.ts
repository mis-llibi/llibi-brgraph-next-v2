export const dynamic = "force-dynamic";
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId");
  if (clientId) {
    try {
      const client = await prisma.clients.findFirst({
        where: {
          id: +clientId,
        },
        include: {
          insurer: true,
        },
      });
      if (client) {
        const masterlist = await prisma.uploads.findMany({
          where: { type: "masterlist", clientId: client.id },
          orderBy: {
            year: "asc",
          },
        });

        const utilization = await prisma.uploads.findMany({
          where: { type: "utilization", clientId: client.id },
          orderBy: {
            year: "asc",
          },
        });

        const datasets = await prisma.datasets.findMany({
          where: { clientId: client.id },
          include: {
            uploads: {
              where: { clientId: client.id },
              orderBy: {
                updatedAt: "desc",
              },
            },
          },
          orderBy: {
            title: "asc",
          },
        });

        const formattedDatasets = datasets.map((dataset) => {
          const masterlistUpload = dataset.uploads.find(
            (upload) => upload.type === "masterlist"
          );
          const utilizationUpload = dataset.uploads.find(
            (upload) => upload.type === "utilization"
          );

          return {
            id: dataset.id,
            title: dataset.title,
            hasMasterlist: Boolean(masterlistUpload),
            hasUtilization: Boolean(utilizationUpload),
            masterlistUploadId: masterlistUpload?.id ?? null,
            utilizationUploadId: utilizationUpload?.id ?? null,
            masterlistUpload: masterlistUpload ?? null,
            utilizationUpload: utilizationUpload ?? null,
          };
        });

        // const decks = await prisma.decks.findMany({
        //   where: { clientId: client.id },
        // });

        const clientData = {
          ...client,
          masterlist: masterlist,
          utilization: utilization,
          datasets: formattedDatasets,
          //decks: decks,
        };

        return NextResponse.json({ client: clientData }, { status: 200 });
      } else {
        return NextResponse.json(
          {
            error: "Client not found",
          },
          {
            status: 404,
          }
        );
      }
    } catch (error) {
      return NextResponse.json({ error: error });
    }
  } else {
    return NextResponse.json(
      { error: "No client id detected" },
      { status: 400 }
    );
  }
}
