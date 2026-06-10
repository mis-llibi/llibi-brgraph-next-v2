import React, { useMemo, useState } from "react";
import type { ClientData } from "@/types/Client/client";
import type { generateOneYearRequest } from "@/preApi/GenerateReportApi";
import { generateOneYear } from "@/preApi/GenerateReportApi";
import useLoading from "@/hooks/useLoading";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { useBRReportStore } from "@/lib/store";

type Props = {
  client: ClientData;
};

const NewAccount = ({ client }: Props) => {
  const { loading, setLoading } = useLoading();
  const router = useRouter();
  const [selectedDatasetId, setSelectedDatasetId] = useState<string>("");

  const completeDatasets = useMemo(
    () =>
      (client.datasets || []).filter(
        (dataset) => dataset.hasMasterlist && dataset.hasUtilization
      ),
    [client.datasets]
  );

  const selectedDataset = completeDatasets.find(
    (dataset) => dataset.id === Number(selectedDatasetId)
  );

  const handleSubmit = async (payload: generateOneYearRequest) => {
    setLoading(true);
    const response = await generateOneYear(payload);
    setLoading(false);

    if (response.success && response.data) {
      useBRReportStore.getState().setData({
        ...response.data,
        py: payload.title,
        clientId: client.id,
        insurerId: client.insurer_id,
        lastData: {
          clientId: client.id,
          clientName: client.client_name,
          insurerId: client.insurer_id,
          datasetId: payload.datasetId,
          title: payload.title,
          py: payload.title,
        },
      });
      router.push("/client/result/solo");
    }
  };

  return (
    <div className="flex flex-row my-6 items-end">
      <div className="flex flex-col">
        <span className="text-sm font-bold">Dataset Title</span>
        <select
          className="h-10 w-72 mt-2"
          onChange={(e) => setSelectedDatasetId(e.target.value)}
          value={selectedDatasetId}
        >
          <option value="">Select Dataset</option>
          {completeDatasets.map((dataset) => (
            <option key={dataset.id} value={dataset.id}>
              {dataset.title}
            </option>
          ))}
        </select>
      </div>

      <div className="ml-8">
        <button
          className={`bg-blue-500 text-white px-4 py-2 h-10 rounded-lg transition ${
            !selectedDataset
              ? "cursor-not-allowed bg-slate-400 !text-slate-600"
              : "cursor-pointer"
          }`}
          onClick={() => {
            if (!selectedDataset) return;
            handleSubmit({
              insurer_id: client.insurer_id,
              clientId: client.id,
              datasetId: selectedDataset.id,
              title: selectedDataset.title,
            });
          }}
          disabled={!selectedDataset}
        >
          Create
        </button>
      </div>
      <LoadingOverlay loading={loading} />
    </div>
  );
};

export default NewAccount;
