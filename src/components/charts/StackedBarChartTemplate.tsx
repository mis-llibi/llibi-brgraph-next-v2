import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(
  BarController,
  BarElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface StackedBarChartTemplateProps {
  data: any;
  bodySize: number;
  legendSize: number;
  id?: string;
}

const StackedBarChartTemplate: React.FC<StackedBarChartTemplateProps> = ({
  data,
  bodySize,
  legendSize,
  id,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    const newChart = new Chart(ctx, {
      type: "bar",
      data,
      options: {
        layout: { padding: { top: 12, bottom: 16, left: 20, right: 20 } },
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            ticks: {
              font: { size: bodySize },
            },
            grid: {
              display: true,
            },
          },
          x: {
            stacked: true,
            ticks: {
              font: { size: bodySize },
              color: "#00005e",
              maxRotation: 0,
            },
            grid: { display: false },
          },
        },
        plugins: {
          datalabels: {
            backgroundColor: (context: any) => {
              const val = context.dataset.data[context.dataIndex];
              return val === 0
                ? "rgba(0,0,0,0)"
                : context.dataset.backgroundColor;
            },
            anchor: "center",
            align: (context: any) => {
              const val = context.dataset.data[context.dataIndex];
              const index = context.datasetIndex;
              const col = context.dataIndex;
              const datasets = context.chart.data.datasets;

              let smallCount = 0;
              for (let i = 0; i < index; i++) {
                const prev = datasets[i].data[col];
                if (prev !== undefined && prev < 10) smallCount++;
              }

              // ✅ Only apply sideways nudge to the SECOND small value
              if (val < 10 && smallCount === 1) {
                return "left";
              }

              return "center";
            },
            offset: (context: any) => {
              const val = context.dataset.data[context.dataIndex];
              const index = context.datasetIndex;
              const col = context.dataIndex;
              const datasets = context.chart.data.datasets;

              let smallCount = 0;
              for (let i = 0; i < index; i++) {
                const prev = datasets[i].data[col];
                if (prev !== undefined && prev < 10) smallCount++;
              }

              if (val < 10 && smallCount === 1) {
                return 25; // ✅ more nudge distance
              }

              return 0;
            },
            color: "white",
            formatter: (value: number) => {
              if (value === 0) return "";

              if (value < 1) {
                return Math.round(value) > 0
                  ? `${Math.round(value)}%`
                  : `${value.toFixed(1)}%`;
              }

              return `${Math.round(value)}%`;
            },
            font: { size: bodySize },
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: { size: legendSize, weight: 600 },
              color: "#00005e",
              padding: 10,
              pointStyle: "rect",
              usePointStyle: true,
            },
          },
          tooltip: { enabled: false },
        },
        interaction: { mode: "nearest", intersect: false },
        animation: { duration: 500 },
        maintainAspectRatio: false,
        responsive: true,
        devicePixelRatio: 3,
        resizeDelay: 200,
      },
    });

    setChart(newChart);
    return () => newChart.destroy();
  }, [data, bodySize, legendSize]);

  return (
    <div className="relative w-[570px] h-[500px] overflow-hidden">
      <canvas ref={canvasRef} id={id}></canvas>
    </div>
  );
};

export default StackedBarChartTemplate;
