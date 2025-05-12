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
  width: number;
  height: number;
  bodySize: number;
  legendSize: number;
  id?: string;
}

const StackedBarChartTemplate: React.FC<StackedBarChartTemplateProps> = ({
  data,
  width,
  height,
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
              color: "#94a3b8",
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
            color: "white",
            formatter: (value: number) => (value === 0 ? "" : `${value}%`),
            font: { size: bodySize },
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: { size: legendSize },
              padding: 16,
            },
          },
          tooltip: { enabled: false },
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
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <canvas ref={canvasRef} id={id}></canvas>
    </div>
  );
};

export default StackedBarChartTemplate;
