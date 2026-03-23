import React, { useState } from "react";
import BarChartCountTemplate from "@/components/charts/BarChartCountTemplate";

type Props = {
  chartTitle: string;
  data: {
    totalClaim: number;
    claimCount: number;
  };
  year: string;
};

const Chart2 = ({ chartTitle, data, year }: Props) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(20);
  const [thickness, setThickness] = useState(70);
  const [yAxisMax, setYAxisMax] = useState(0); // 0 means auto-scale
  const [yAxisMax2, setYAxisMax2] = useState(0);

  const color = {
    bg: "#002161",
    hover: "#002161",
    bg2: "#810100",
  };
  const labels = [year];

  const datasets = [
    {
      label: "Claim Amount",
      data: [data.totalClaim],
      backgroundColor: color.bg,
      hoverBackgroundColor: color.hover,
      yAxisID: "y",
      barThickness: thickness,
    },
    {
      label: "Claim Count",
      data: [data.claimCount],
      backgroundColor: color.bg2,
      borderColor: color.bg2,
      type: "line",
      tension: 0.4,
      yAxisID: "y-axis-2",
      barThickness: thickness,
    },
  ];

  const chartData = {
    labels,
    datasets,
  };
  return (
    <div className="border p-2">
      <h2 className="text-xl font-semibold mb-4">{chartTitle}</h2>
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Chart 2 Customization
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Legend Font Size
            </label>
            <input
              type="number"
              min={10}
              max={100}
              value={legendSize}
              onChange={(e) => setLegendSize(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Legend font size"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Body Font Size
            </label>
            <input
              type="number"
              min={10}
              max={100}
              value={bodySize}
              onChange={(e) => setBodySize(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Body font size"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Y-Axis Top Spacing (Blue - Claim Amount)
            </label>
            <input
              type="number"
              min={0}
              step={10000}
              value={yAxisMax}
              onChange={(e) => setYAxisMax(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Auto"
              aria-label="Y-axis maximum value (0 for auto)"
            />
            <small className="block text-gray-500 text-xs mt-1">
              Set higher than data to prevent label cutoff (0 = auto)
            </small>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Y-Axis Top Spacing (Red - Claim Count)
            </label>
            <input
              type="number"
              min={0}
              step={1000}
              value={yAxisMax2}
              onChange={(e) => setYAxisMax2(Number(e.target.value))}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Auto"
              aria-label="Y-axis 2 maximum value (0 for auto)"
            />
            <small className="block text-gray-500 text-xs mt-1">
              Control red line axis spacing (0 = auto)
            </small>
          </div>
        </div>
      </div>
      <div className="w-fit h-fit" id="chart2-capture-container">
        <BarChartCountTemplate
          data={chartData}
          bodySize={bodySize}
          legendSize={legendSize}
          maxY={yAxisMax}
          id={"chart2-capture"}
        />
      </div>
    </div>
  );
};

export default Chart2;
