import React from "react";
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
    },
    {
      label: "Claim Count",
      data: [data.claimCount],
      backgroundColor: color.bg2,
      borderColor: color.bg2,
      type: "line",
      tension: 0.4,
      yAxisID: "y-axis-2",
    },
  ];

  const chartData = {
    labels,
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
