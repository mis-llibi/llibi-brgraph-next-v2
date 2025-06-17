import React, { useState } from "react";
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
  const [bodySize, setBodySize] = useState(20);
  const color = {
    bg: "#002161",
    hover: "#002161",
    bg2: "#810100",
  };

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
    },
  ];

  const chartData = {
    labels: years, // Use the years array directly as labels
    datasets,
  };

  return (
    <div className="border p-2">
      <h2 className="text-xl font-semibold mb-4">{chartTitle}</h2>
      <div className="flex flex-col gap-2 mb-4 w-1/4 justify-start">
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
        />
      </div>
    </div>
  );
};

export default Chart2;
