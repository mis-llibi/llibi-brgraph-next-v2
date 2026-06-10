"use client";

import { useBRReportStore } from "@/lib/store";
import React, { useEffect, useState, useRef } from "react";
import { Chart1, Chart2, Chart4 } from "./charts/charts";
import { Table1, Table3, Table4, Table5, Table6 } from "./tables/tables";
import { useRouter } from "next/navigation";
import domtoimage from "dom-to-image-more";
import JSZip from "jszip";
import apiClient from "@/lib/axios";
import { parse } from "papaparse";
import { convertInsurer } from "@/lib/insurers";

const Page = () => {
  const data = useBRReportStore((s) => s.data);
  const hasHydrated = useBRReportStore((s) => s.hasHydrated);
  const router = useRouter();
  const [customIllnesses, setCustomIllnesses] = useState({
    data: [],
    totals: [],
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const charts = [
    "chart1-capture",
    "chart2-capture",
    "chart3-capture",
    "chart4-capture",
    "chart5-capture",
    "chart6-capture",
  ];
  const tables = [
    "table1-capture",
    "table2-capture",
    "table3-capture",
    "table4-capture",
    "table5-capture",
    "table6-capture",
  ];

  const exportTableAsImage = async () => {
    const zip = new JSZip();

    const chartPromises = charts.map(async (id) => {
      const element = document.getElementById(id);
      if (element) {
        const container = document.getElementById(id + "-container");
        if (container) {
          container.style.zoom = "1";
          const dataUrl = await domtoimage.toPng(element, {
            style: {
              border: "none",
              outline: "none",
              boxShadow: "none",
              background: "transparent",
            },
          });
          const base64Data = dataUrl.split(",")[1];
          zip.file(`${id}.png`, base64Data, { base64: true });
        }
      }
    });

    const tablePromises = tables.map(async (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.zoom = "1"; // Reset zoom for accurate capture
        const dataUrl = await domtoimage.toPng(element, {
          style: {
            border: "none",
            outline: "none",
            boxShadow: "none",
            background: "transparent",
          },
        });
        const base64Data = dataUrl.split(",")[1];
        zip.file(`${id}.png`, base64Data, { base64: true });
        element.style.zoom = "0.3"; // Restore zoom after capture
      }
    });

    await Promise.all([...chartPromises, ...tablePromises]);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    const fileName = (data.lastData.clientName as string)
      .replace(/[^a-zA-Z0-9 ]/g, "") // remove special characters
      .split(" ")
      .map((e: string) => e.trim())
      .join("");
    link.download = `${fileName}.zip`;
    link.click();
  };

  const fetchCustomIllnesses = async () => {
    if (data.insurerId === 1) {
      const response = await apiClient.get(
        `/generate/checkCustomIllnesses/intellicare?clientId=${data.lastData.clientId}&py=${data.lastData.py}`
      );
      if (response.data.success) {
        console.log("Custom illnesses data:", response.data.data);
        console.log("Custom illnesses totals:", response.data.totals);
        setCustomIllnesses({
          data: response.data.data,
          totals: response.data.totals,
        });
      }
    } else if (data.insurerId === 2) {
      const response = await apiClient.get(
        `/generate/checkCustomIllnesses/maxicare?clientId=${data.lastData.clientId}&py=${data.lastData.py}`
      );
      if (response.data.success) {
        console.log("Custom illnesses data:", response.data.data);
        console.log("Custom illnesses totals:", response.data.totals);
        setCustomIllnesses({
          data: response.data.data,
          totals: response.data.totals,
        });
      }
    } else if (data.insurerId === 3) {
      const response = await apiClient.get(
        `/generate/checkCustomIllnesses/philcare?clientId=${data.lastData.clientId}&py=${data.lastData.py}`
      );
      if (response.data.success) {
        console.log("Custom illnesses data:", response.data.data);
        console.log("Custom illnesses totals:", response.data.totals);
        setCustomIllnesses({
          data: response.data.data,
          totals: response.data.totals,
        });
      }
    }
  };

  useEffect(() => {
    if (hasHydrated && !data) {
      router.push("/");
    } else {
      if (!data?.lastData) return;
      fetchCustomIllnesses();
    }
  }, [hasHydrated, data]);

  if (!hasHydrated) {
    return <p>Loading...</p>; // avoid flicker
  }

  if (!data) return null;

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const cleanedRows = results.data.map((row: any) => {
          const {
            Member_Type,
            Diagnosis,
            ICD_10_Code,
            claimAmount,
            claimAmount_percentage,
            claimCount,
            claimCount_percentage,
            averageClaimAmount,
          } = row;

          return {
            Member_Type: Member_Type?.trim(),
            Diagnosis: Diagnosis?.trim(),
            ICD_10_Code: ICD_10_Code?.trim(),
            claimAmount: parseInt(claimAmount),
            claimAmount_percentage: parseFloat(claimAmount_percentage),
            claimCount: parseInt(claimCount),
            claimCount_percentage: parseFloat(claimCount_percentage),
            averageClaimAmount: parseInt(averageClaimAmount),
          };
        });

        const insurer = convertInsurer(data.lastData.insurerId);

        await apiClient.post(`/generate/importT5/${insurer.toLowerCase()}`, {
          clientId: data.lastData.clientId,
          py: data.lastData.py,
          rows: cleanedRows,
        });

        alert("Import complete");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
    });
  };

  return (
    <div className="relative flex flex-col aptos-font p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-8">{data.lastData.clientName}</h1>
        <div>
          <button
            className=" bg-green-400 hover:bg-green-500 px-4 py-2 rounded-xl"
            onClick={exportTableAsImage}
          >
            Download Charts and Tables
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 divide-y-2 w-full">
        <Chart1
          data={data.chart1}
          chartTitle="Demographics by Member Type"
          years={data.py}
        />
        <br />
        <div className="w-7/12">
          <Table1 data={data.chart1} year={data.py} />
        </div>
        <Chart2
          data={data.chart2}
          chartTitle="Claims by Amount and Count"
          years={data.py}
        />
        <div className="w-7/12 p-4">
          <Table3 data={data.chart3} year={data.py[0]} />
        </div>
        <Chart4 chartTitle="Claims by Demographic" data={data.chart4} />
        <div className="w-7/12 p-4">
          <Table4 data={data.chart4} />
        </div>
        <div className="w-7/12 p-4">
          <div className="w-1/2 flex justify-between mb-4">
            <input
              type="file"
              accept=".csv"
              onChange={handleImport}
              className="hidden"
              ref={fileInputRef}
            />
            <button
              className=" rounded-xl bg-green-400 px-2 py-1 hover:bg-green-500"
              onClick={async () => {
                const insurer = convertInsurer(data.lastData.insurerId);
                const response = await apiClient.post(
                  `/generate/exportT5/${insurer.toLowerCase()}`,
                  {
                    clientId: data.lastData.clientId,
                    datasetId: data.lastData.datasetId,
                    title: data.lastData.title,
                  },
                  {
                    responseType: "blob",
                  }
                );

                const blob = new Blob([response.data], {
                  type: "text/csv",
                });
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement("a");
                a.href = url;
                a.download = `table5-export.csv`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url); // cleanup
              }}
            >
              {" "}
              Export Data (CSV)
            </button>
            <button
              className=" rounded-xl bg-blue-400 px-2 py-1 hover:bg-blue-500"
              onClick={() => fileInputRef.current?.click()}
            >
              {" "}
              Import Data (CSV)
            </button>
          </div>
          {customIllnesses.data.length > 0 ? (
            <Table5
              data={customIllnesses.data}
              totals={customIllnesses.totals}
            />
          ) : (
            <Table5 data={data.chart5.data} totals={data.chart5.total} />
          )}
        </div>
        <div className="w-7/12 p-4">
          <Table6 data={data.chart6.data} totals={data.chart6.total} />
        </div>
      </div>
    </div>
  );
};

export default Page;
