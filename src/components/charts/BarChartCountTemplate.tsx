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
  width: number;
  height: number;
  bodySize: number;
  legendSize: number;
  id: string;
}

const BarChartCountTemplate: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  bodySize,
  legendSize,
  id,
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
        layout: {
          padding: { top: 12, bottom: 16, left: 20, right: 20 },
        },
        scales: {
          y: {
            border: { display: false },
            ticks: {
              maxTicksLimit: 5,
              callback: (value: any) => Math.round(value),
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
            ticks: {
              maxTicksLimit: 5,
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
            align: "center",
            anchor: "center",
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
    <div style={{ width: `${width}px` }}>
      <div style={{ width: `${width}px`, height: `${height}px` }}>
        <canvas ref={canvasRef} id={id}></canvas>
      </div>
    </div>
  );
};

export default BarChartCountTemplate;
