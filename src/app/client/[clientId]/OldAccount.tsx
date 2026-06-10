import React, { useMemo, useState } from "react";
import type { ClientData, Dataset } from "@/types/Client/client";
import type { generateOneYearRequest } from "@/preApi/GenerateReportApi";
import { generateMultiYear } from "@/preApi/GenerateReportApi";
import { useBRReportStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import useLoading from "@/hooks/useLoading";
import LoadingOverlay from "@/components/LoadingOverlay";

type Props = {
  client: ClientData;
};

const OldAccount = ({ client }: Props) => {
  const router = useRouter();
  const { loading, setLoading } = useLoading();
  const [selectedDatasetIds, setSelectedDatasetIds] = useState<number[]>([]);

  const completeDatasets = useMemo(
    () =>
      (client.datasets || []).filter(
        (dataset) => dataset.hasMasterlist && dataset.hasUtilization
      ),
    [client.datasets]
  );

  const selectedDatasets = selectedDatasetIds
    .map((id) => completeDatasets.find((dataset) => dataset.id === id))
    .filter((dataset): dataset is Dataset => Boolean(dataset));

  const handleSubmit = async (payload: generateOneYearRequest[]) => {
    setLoading(true);
    const response = await generateMultiYear(payload);
    setLoading(false);

    if (response.success && response.data) {
      const latest = payload[payload.length - 1];
      useBRReportStore.getState().setData({
        ...response.data,
        py: payload.map((value) => value.title),
        clientId: client.id,
        insurerId: client.insurer_id,
        lastData: {
          clientId: client.id,
          clientName: client.client_name,
          insurerId: client.insurer_id,
          datasetId: latest.datasetId,
          title: latest.title,
          py: latest.title,
        },
      });
      router.push("/client/result/multi");
    }
  };

  return (
    <div className="flex flex-col my-6">
      <div className="grid grid-cols-3 gap-3 max-w-4xl">
        {completeDatasets.map((dataset) => {
          const selected = selectedDatasetIds.includes(dataset.id);
          return (
            <label
              key={dataset.id}
              className={`border rounded p-3 cursor-pointer ${
                selected ? "bg-green-100 border-green-500" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selected}
                onChange={(e) => {
                  setSelectedDatasetIds((current) =>
                    e.target.checked
                      ? [...current, dataset.id]
                      : current.filter((id) => id !== dataset.id)
                  );
                }}
              />
              {dataset.title}
            </label>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          className={`bg-blue-500 text-white px-4 py-2 h-10 rounded-lg transition ${
            selectedDatasets.length < 2
              ? "cursor-not-allowed bg-slate-400 !text-slate-600"
              : "cursor-pointer"
          }`}
          onClick={() => {
            const payload = selectedDatasets.map((dataset) => ({
              insurer_id: client.insurer_id,
              clientId: client.id,
              datasetId: dataset.id,
              title: dataset.title,
            }));
            handleSubmit(payload);
          }}
          disabled={selectedDatasets.length < 2}
        >
          Create
        </button>
      </div>
      <LoadingOverlay loading={loading} />
    </div>
  );
};

export default OldAccount;
