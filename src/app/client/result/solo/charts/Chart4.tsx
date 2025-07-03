import React, { useState } from "react";
import StackedBarChartTemplate from "@/components/charts/StackedBarChartTemplate";

type RelationshipData = {
  Relationship: string;
  headcount: number;
  claimAmount: number;
  claimCount: number;
  claimAverage: number;
  personAverage: number;
};

const colorSet = [
  { bg: "#002161" },
  { bg: "#0170c1" },
  { bg: "#810100" },
  { bg: "#f3ab84" },
  { bg: "#7033a1" },
];

type Props = {
  data: RelationshipData[];
  chartTitle: string;
};

const Chart4: React.FC<Props> = ({ data, chartTitle }) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(20);
  const labels = ["Head Count", "Claim Count", "Claim Amount"];

  const datasets = data.map((item, index) => ({
    label: item.Relationship,
    data: [
      Math.round((item.headcount / total("headcount")) * 100),
      Math.round((item.claimCount / total("claimCount")) * 100),
      Math.round((item.claimAmount / total("claimAmount")) * 100),
    ],
    backgroundColor: colorSet[index % colorSet.length].bg,
  }));

  function total(field: keyof RelationshipData) {
    return data.reduce((acc, item) => acc + (item[field] as number), 0);
  }

  const chartData = {
    labels,
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
      <div className="w-fit" id="chart4-capture-container">
        <StackedBarChartTemplate
          data={chartData}
          bodySize={bodySize}
          legendSize={legendSize}
          id="chart4-capture"
        />
      </div>
    </div>
  );
};

export default Chart4;
