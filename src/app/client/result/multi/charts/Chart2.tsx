import React from "react";
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
      order: 2
    },
    {
      label: "Claim Count",
      data: data.map((item) => item.claimCount),
      backgroundColor: color.bg2,
      borderColor: color.bg2,
      type: "line",
      tension: 0.4,
      yAxisID: "y-axis-2",
      order: 1
    },
  ];

  const chartData = {
    labels: years, // Use the years array directly as labels
    datasets,
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{chartTitle}</h2>
      <div
        className="w-fit h-fit"
        id="chart2-capture-container"
        style={{
          zoom: 0.3,
        }}
      >
        <BarChartCountTemplate
          data={chartData}
          width={1800}
          height={1600}
          bodySize={56}
          legendSize={46}
          id={"chart2-capture"}
        />
      </div>
    </div>
  );
};

export default Chart2;
