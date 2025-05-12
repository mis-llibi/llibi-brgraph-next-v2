import React from "react";
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
};

const Chart4: React.FC<Props> = ({ data }) => {
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
    <div
      className="w-fit"
      id="chart4-capture-container"
      style={{
        zoom: 0.3,
      }}
    >
      <StackedBarChartTemplate
        data={chartData}
        height={1550}
        width={1500}
        bodySize={62}
        legendSize={54}
        id="chart4-capture"
      />
    </div>
  );
};

export default Chart4;
