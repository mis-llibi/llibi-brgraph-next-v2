import React, { useState, useEffect } from "react";
import BarChartCountTemplate from "@/components/charts/BarChartCountTemplate";

type DataItem = {
  totalClaim: number;
  claimCount: number;
};

type Props = {
  chartTitle: string;
  data: DataItem[];
  years: string[]; // Separate array for years/labels
};

const Chart2 = ({ chartTitle, data, years }: Props) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(14);
  const [thickness, setThickness] = useState(70);
  const [yAxisMax, setYAxisMax] = useState(0);
  const [yAxisMax2, setYAxisMax2] = useState(0);
  const color = {
    bg: "#002161",
    hover: "#002161",
    bg2: "#810100",
  };

  const dataY2 = data.map((item) => item.claimCount);
  const minY2 = Math.floor(Math.min(...dataY2) / 100) * 100;
  const maxY2 = Math.ceil(Math.max(...dataY2) / 50) * 50;

  // Validate that data and years arrays have the same length
  if (data.length !== years.length) {
    console.error("Data and years arrays must have the same length");
    return null;
  }

  const datasets = [
    {
      label: "Claim Amount",
      data: data.map((item) => item.totalClaim),
      backgroundColor: color.bg,
      hoverBackgroundColor: color.hover,
      yAxisID: "y",
      order: 2,
      barThickness: thickness,
    },
    {
      label: "Claim Count",
      data: data.map((item) => item.claimCount),
      backgroundColor: color.bg2,
      borderColor: color.bg2,
      type: "line",
      tension: 0.4,
      yAxisID: "y-axis-2",
      order: 1,
      barThickness: thickness,
    },
  ];

  const chartData = {
    labels: years, // Use the years array directly as labels
    datasets,
  };

  return (
    <div className="border p-2">
      <h2 className="text-xl font-semibold mb-4">{chartTitle}</h2>
      <div className="flex flex-col gap-2 mb-4 w-2/4 justify-start">
        <div>
          <label className="mr-2">Legend Font Size</label>
          <input
            type="number"
            min={10}
            max={100}
            value={legendSize}
            onChange={(e) => setLegendSize(Number(e.target.value))}
            className="w-16"
            aria-label="Legend font size"
          />
        </div>
        <div>
          <label className="mr-2">Body Font Size</label>
          <input
            type="number"
            min={10}
            max={100}
            value={bodySize}
            onChange={(e) => setBodySize(Number(e.target.value))}
            className="mb-2 w-16 text-center"
            aria-label="Body font size"
          />
        </div>
        <div>
          <label className="mr-2">Y-Axis Top Spacing (Blue)</label>
          <input
            type="number"
            min={0}
            step={10000}
            value={yAxisMax}
            onChange={(e) => setYAxisMax(Number(e.target.value))}
            className="w-24 text-center"
            placeholder="Auto"
            aria-label="Y-axis maximum value (0 for auto)"
          />
          <small className="block text-gray-500 text-xs mt-1">
            Set higher than data to prevent label cutoff (0 = auto)
          </small>
        </div>
        <div>
          <label className="mr-2">Y-Axis Top Spacing (Red)</label>
          <input
            type="number"
            min={0}
            step={1000}
            value={yAxisMax2}
            onChange={(e) => setYAxisMax2(Number(e.target.value))}
            className="w-24 text-center"
            placeholder="Auto"
            aria-label="Y-axis maximum value (0 for auto)"
          />
        </div>
      </div>
      <div
        className="w-full max-w-full h-[400px]"
        id="chart2-capture-container"
      >
        <BarChartCountTemplate
          data={chartData}
          bodySize={bodySize}
          legendSize={legendSize}
          id="chart2-capture"
          minY2={minY2}
          maxY2={yAxisMax2}
          maxY={yAxisMax}
          multi
        />
      </div>
    </div>
  );
};

export default Chart2;
