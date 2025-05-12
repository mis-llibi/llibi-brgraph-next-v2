"use client";

import { useBRReportStore } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { Chart1, Chart2, Chart4 } from "./charts/charts";
import { Table1, Table3, Table4, Table5, Table6 } from "./tables/tables";
import { useRouter } from "next/navigation";
import domtoimage from "dom-to-image-more";
import JSZip from "jszip";

const Page = () => {
  const data = useBRReportStore((s) => s.data);
  const hasHydrated = useBRReportStore((s) => s.hasHydrated);
  const router = useRouter();
  const [show, setShow] = useState<"json" | "report" | "output">("report");
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
          container.style.zoom = "0.3";
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
    link.download = "report-assets.zip";
    link.click();
  };

  useEffect(() => {
    if (hasHydrated && !data) {
      router.push("/");
    }
  }, [hasHydrated, data]);

  if (!hasHydrated) {
    return <p>Loading...</p>; // avoid flicker
  }

  if (!data) return null;

  return (
    <div className="relative flex flex-col aptos-font">
      <div className="fixed right-7 bottom-3 z-60 flex flex-col gap-4 text-center">
        <div
          className=" rounded-full px-4 py-2 bg-blue-400  cursor-pointer"
          onClick={() =>
            setShow((prev) => {
              if (prev === "json") return "report";
              else return "json";
            })
          }
        >
          {show === "json" ? "Show Report" : "Show Data"}
        </div>
        <div
          className={`rounded-full px-4 py-2 bg-red-400  cursor-pointer ${
            show === "json" ? "hidden" : ""
          }`}
          onClick={() =>
            setShow((prev) => {
              if (prev === "report") return "output";
              else return "report";
            })
          }
        >
          {show === "report"
            ? "Show Output"
            : show === "output" && "Show Report"}
        </div>
        <div
          className=" rounded-full px-4 py-2 bg-green-400 hover:bg-green-500 cursor-pointer"
          onClick={exportTableAsImage}
        >
          Download all
        </div>
      </div>
      {show === "json" ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <>
          <h1>BR Report</h1>
          {show === "report" && (
            <>
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
              <Chart4 data={data.chart4} />
              <div className="w-7/12 p-4">
                <Table4 data={data.chart4} />
              </div>
              <div className="w-7/12 p-4">
                <Table5 data={data.chart5.data} totals={data.chart5.total} />
              </div>
              <div className="w-7/12 p-4">
                <Table6 data={data.chart6.data} totals={data.chart6.total} />
              </div>
            </>
          )}
          <div
            id="output-body"
            className="mt-6"
            style={{
              zoom: 0.3,
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Page;
