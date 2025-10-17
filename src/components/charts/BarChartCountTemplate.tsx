import React, { useRef, useEffect, useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface BarChartProps {
  data: any;
  bodySize: number;
  legendSize: number;
  id: string;
  minY2?: number;
  maxY2?: number;
  maxY?: number;
  multi?: boolean;
}

const BarChartCountTemplate: React.FC<BarChartProps> = ({
  data,
  bodySize,
  legendSize,
  id,
  minY2 = 0,
  maxY2 = 0,
  maxY = 0,
  multi = false,
}) => {
  const [chart, setChart] = useState<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        devicePixelRatio: 3,
        layout: {
          padding: { top: 12, bottom: 16, left: 20, right: 20 },
        },
        scales: {
          y: {
            border: { display: false },
            max: maxY === 0 ? undefined : maxY,
            ticks: {
              count: 8,
              callback: (value: any, index, ticks) => {
                // Replace the first tick label with "-"
                if (index === 0) return "-";
                return Math.round(value).toLocaleString();
              },
              color: "#1F2937",
              font: { size: bodySize },
            },
            grid: { color: "#E5E7EB" },
          },
          "y-axis-2": {
            type: "linear",
            position: "right",
            grid: { display: false },
            border: { display: false },
            beginAtZero: false,
            min: minY2 === 0 ? undefined : minY2,
            max: maxY2 === 0 ? undefined : maxY2,
            ticks: {
              count: 6,
              callback: (value: any) => Math.round(value),
              color: "#1F2937",
              font: { size: bodySize, family: "Aptos" },
            },
          },
          x: {
            type: "category",
            border: { display: false },
            grid: { display: false },
            ticks: {
              color: "#1F2937",
              font: { size: bodySize, family: "Aptos" },
            },
          },
        },
        plugins: {
          datalabels: {
            align: (ctx) => {
              const datasetId = (ctx.dataset as any)?.yAxisID;

              return datasetId === "y" ? "end" : "center";
            },
            anchor: (ctx) => {
              const datasetId = (ctx.dataset as any)?.yAxisID;
              return datasetId === "y" ? "end" : "center";
            },
            offset: (ctx) => {
              const datasetId = (ctx.dataset as any)?.yAxisID;
              return datasetId === "y" ? 0 : 0;
            },
            backgroundColor: (context: any) => context.dataset.backgroundColor,
            borderRadius: 4,
            color: "white",
            display: "auto",
            formatter: (value: number) => value.toLocaleString(),
            font: { size: bodySize },
          },
          legend: {
            display: true,
            position: "bottom",
            labels: { font: { size: legendSize } },
          },
          tooltip: {
            enabled: false, // Fully disable tooltip interactivity
          },
        },
        interaction: { mode: "nearest", intersect: false },
        animation: { duration: 500 },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });

    setChart(newChart);
    return () => newChart.destroy();
  }, [data, bodySize, legendSize]);

  return (
    <div>
      <div className="relative w-[700px] h-[400px] overflow-hidden">
        <canvas ref={canvasRef} id={id}></canvas>
      </div>
    </div>
  );
};

export default BarChartCountTemplate;
