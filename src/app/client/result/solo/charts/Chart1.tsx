import React, { useState } from "react";
import HorizontalStackedBarChart from "@/components/charts/HorizontalStackedBarChart";
import { ChartData } from "chart.js";

type Props = {
  chartTitle: string;
  data: any[];
  year: string;
};

const Chart1 = (props: Props) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(20);
  const { dependents, dependents_percentage, company, ...raw } =
    props.data[props.data.length - 1];
  const total =
    raw.employees +
    raw.spouse +
    raw.child +
    raw.parent +
    raw.sibling +
    (raw?.other ?? 0);

  const chartData = {
    employees_percentage: (raw.employees / total) * 100,
    spouse_percentage: (raw.spouse / total) * 100,
    child_percentage: (raw.child / total) * 100,
    parent_percentage: (raw.parent / total) * 100,
    sibling_percentage: (raw.sibling / total) * 100,
    other_percentage: ((raw?.other ?? 0) / total) * 100,
    dependents,
    dependents_percentage: (dependents / total) * 100,
    company,
    employees: raw.employees,
    spouse: raw.spouse,
    child: raw.child,
    parent: raw.parent,
    sibling: raw.sibling,
    other: raw?.other ?? 0,
  };

  const datasets = [
    {
      label: "Employees",
      data: [chartData.employees_percentage],
      backgroundColor: "#002161",
      stack: "stack1",
    },
    {
      label: "Spouse",
      data: [chartData.spouse_percentage],
      backgroundColor: "#0071c1",
      stack: "stack1",
    },
    {
      label: "Child",
      data: [chartData.child_percentage],
      backgroundColor: "#810100",
      stack: "stack1",
    },
    {
      label: "Parent",
      data: [chartData.parent_percentage],
      backgroundColor: "#f3ab84",
      stack: "stack1",
    },
    {
      label: "Sibling",
      data: [chartData.sibling_percentage],
      backgroundColor: "#7030a0",
      stack: "stack1",
    },
  ];

  // Only add "Other" dataset if there's actual data
  if (chartData.other_percentage > 0) {
    datasets.push({
      label: "Other",
      data: [chartData.other_percentage],
      backgroundColor: "#ff6b9d",
      stack: "stack1",
    });
  }

  const data: ChartData<"bar"> = {
    labels: [props.year],
    datasets,
  };

  return props.data.length > 0 ? (
    <div className="border p-2">
      <h1 className=" text-xl bold">{props.chartTitle}</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-2 mb-4 w-1/4 justify-start">
        <div>
          <label className=" mr-2">Legend Font Size</label>
          <input
            type="number"
            min={10}
            max={100}
            value={bodySize}
            onChange={(e) => setBodySize(Number(e.target.value))}
            className="w-16"
            aria-label="Body font size"
          />
        </div>
        <div>
          <label className=" mr-2">Body Font Size</label>
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
      <HorizontalStackedBarChart
        data={data}
        bodySize={bodySize}
        legendSize={legendSize}
        id="chart1-capture"
      />
    </div>
  ) : (
    <div className="flex justify-center items-center h-96">
      <h1 className="text-3xl">No chart available</h1>
    </div>
  );
};

export default Chart1;
