import { prisma } from "@/lib/prisma";

type ResolveDatasetForUploadParams = {
  clientId: number;
  insurerId: number;
  datasetId?: number;
  datasetTitle?: string;
};

export function getDatasetSelection(formData: FormData) {
  const datasetIdInput = formData.get("dataset_id");
  const datasetTitleInput = formData.get("dataset_title");

  const datasetId =
    typeof datasetIdInput === "string" && datasetIdInput.trim()
      ? Number(datasetIdInput)
      : undefined;

  if (datasetId !== undefined && (!Number.isInteger(datasetId) || datasetId <= 0)) {
    throw new Error("dataset_id must be a positive integer");
  }

  const datasetTitle =
    typeof datasetTitleInput === "string"
      ? datasetTitleInput.trim()
      : undefined;

  return { datasetId, datasetTitle };
}

export async function resolveDatasetForUpload({
  clientId,
  insurerId,
  datasetId,
  datasetTitle,
}: ResolveDatasetForUploadParams) {
  if (datasetId) {
    const dataset = await prisma.datasets.findFirst({
      where: { id: datasetId, clientId },
    });

    if (!dataset) {
      throw new Error("Selected dataset_id does not exist for this client");
    }

    return dataset;
  }

  if (!datasetTitle) {
    throw new Error("Provide either dataset_id or dataset_title");
  }

  return prisma.datasets.upsert({
    where: {
      clientId_title: {
        clientId,
        title: datasetTitle,
      },
    },
    update: {
      insurerId,
    },
    create: {
      clientId,
      insurerId,
      title: datasetTitle,
    },
  });
}
