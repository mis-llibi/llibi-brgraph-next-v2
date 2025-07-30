"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

type Props = {
  data: ChartData<"bar">;
  bodySize: number;
  legendSize: number;
  id: string;
};

const HorizontalStackedBarChart = ({
  data,
  bodySize,
  legendSize,
  id,
}: Props) => {
  const [options, setOptions] = useState<ChartOptions<"bar">>({});

  useEffect(() => {
    setOptions({
      responsive: true,
      indexAxis: "y",
      devicePixelRatio: 3,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 12,
          bottom: 16,
          left: 20,
          right: 50,
        },
      },
      scales: {
        y: {
          stacked: true,
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            color: "#94a3b8",
            font: { size: bodySize, weight: "bold", family: "Aptos" },
            padding: 20,
          },
        },
        x: {
          stacked: true,
          max: 100,
          grid: {
            display: true,
          },
          border: {
            display: false,
          },
          ticks: {
            display: true,
            color: "#013474",
            font: { size: 16, family: "Aptos", weight: "bold" },
            stepSize: 20, // tick every 20%
            callback: (v) => `${v}%`,
          },
        },
      },
      plugins: {
        datalabels: {
          clamp: true,
          color: "white",
          backgroundColor: (ctx) => {
            const val = ctx.dataset.data[0] as number;
            return val === 0 ? null : (ctx.dataset.backgroundColor as string);
          },
          formatter: (value, ctx) => {
            const total = ctx.chart.data.datasets
              .map((ds) => ds.data[ctx.dataIndex] as number)
              .reduce((a, b) => a + b, 0);

            const pct = (value / total) * 100;

            if (pct < 1) {
              return Math.round(pct) > 0
                ? `${Math.round(pct)}%`
                : `${pct.toFixed(1)}%`;
            }

            return `${Math.round(pct)}%`;
          },
          font: { size: bodySize, weight: "bold", family: "Aptos" },
          anchor: "center",
          align: (ctx) => {
            const datasetIndex = ctx.datasetIndex;
            const allDatasets = ctx.chart.data.datasets;

            const prev1 =
              datasetIndex > 0
                ? (allDatasets[datasetIndex - 1].data[0] as number)
                : null;
            const prev2 =
              datasetIndex > 1
                ? (allDatasets[datasetIndex - 2].data[0] as number)
                : null;

            if (
              prev1 !== null &&
              prev1 < 10 &&
              (prev2 === null || prev2 >= 10)
            ) {
              return "top"; // Push label higher (above bar)
            }

            return "center"; // Default
          },
          offset: (ctx) => {
            const datasetIndex = ctx.datasetIndex;
            const allDatasets = ctx.chart.data.datasets;

            const prev1 =
              datasetIndex > 0
                ? (allDatasets[datasetIndex - 1].data[0] as number)
                : null;
            const prev2 =
              datasetIndex > 1
                ? (allDatasets[datasetIndex - 2].data[0] as number)
                : null;

            // Only offset more if in top alignment and previous is <10% and not stacked with another small one
            if (
              prev1 !== null &&
              prev1 < 10 &&
              (prev2 === null || prev2 >= 10)
            ) {
              return 50; // push higher — adjust value if needed
            }

            return 0; // default position
          },
        },
        legend: {
          position: "bottom",
          labels: {
            font: { size: legendSize, family: "Aptos" },
          },
        },
        tooltip: {
          callbacks: {
            title: () => "", // disables title
            label: (context) => {
              const total = context.chart.data.datasets
                .map((ds) => ds.data[context.dataIndex] as number)
                .reduce((a, b) => a + b, 0);

              const value = context.raw as number;
              const pct = (value / total) * 100;

              const formatted =
                pct < 1
                  ? Math.round(pct) > 0
                    ? `${Math.round(pct)}%`
                    : `${pct.toFixed(1)}%`
                  : `${Math.round(pct)}%`;

              return `${context.dataset.label}: ${formatted}`;
            },
          },
          bodyColor: "#222",
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
        },
      },
    });
  }, [data, bodySize, legendSize]);

  return (
    <div
      className="relative w-[700px] h-[400px] overflow-hidden"
      id={id + "-container"}
    >
      <Bar data={data} options={options} plugins={[ChartDataLabels]} id={id} />
    </div>
  );
};

export default HorizontalStackedBarChart;
