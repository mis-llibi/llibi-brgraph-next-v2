import React, { useState } from "react";
import HorizontalStackedBarChart from "@/components/charts/HorizontalStackedBarChart";
import { ChartData } from "chart.js";

type DataItem = {
  employees_percentage: number;
  spouse_percentage: number;
  child_percentage: number;
  parent_percentage: number;
  sibling_percentage: number;
  dependents: number;
  dependents_percentage: number;
  company: string;
  employees: number;
  spouse: number;
  child: number;
  parent: number;
  sibling: number;
  other?: number;
};

type Props = {
  chartTitle: string;
  data: DataItem[][];
  years: string[]; // Changed from single year to array of years
};

const Chart1 = ({ chartTitle, data, years }: Props) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(20);
  console.log("Chart1 data:", data);
  // Validate data and years arrays match
  if (data.length !== years.length) {
    console.error("Data and years arrays must have the same length");
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-3xl">Data mismatch error</h1>
      </div>
    );
  }

  // Flatten the data array from [][] to []
  const filteredData = data.map((value) =>
    value.filter((item) => item.company === "COMBINED")
  );

  const flattenedData = filteredData.flat();

  const processedData = flattenedData.map((entry) => {
    const total =
      entry.employees +
      entry.spouse +
      entry.child +
      entry.parent +
      entry.sibling +
      (entry?.other ?? 0);

    return {
      employees: (entry.employees / total) * 100,
      spouse: (entry.spouse / total) * 100,
      child: (entry.child / total) * 100,
      parent: (entry.parent / total) * 100,
      sibling: (entry.sibling / total) * 100,
      other: entry?.other ? (entry.other / total) * 100 : undefined,
    };
  });

  console.log(flattenedData);

  const datasets = [
    {
      label: "Employees",
      data: processedData.map((value) => value.employees),
      backgroundColor: "#002161",
      stack: "stack1",
    },
    {
      label: "Spouse",
      data: processedData.map((value) => value.spouse),
      backgroundColor: "#0071c1",
      stack: "stack1",
    },
    {
      label: "Child",
      data: processedData.map((value) => value.child),
      backgroundColor: "#810100",
      stack: "stack1",
    },
    {
      label: "Parent",
      data: processedData.map((value) => value.parent),
      backgroundColor: "#f3ab84",
      stack: "stack1",
    },
    {
      label: "Sibling",
      data: processedData.map((value) => value.sibling),
      backgroundColor: "#7030a0",
      stack: "stack1",
    },
  ];

  if (processedData.some((value) => (value.other ?? 0) > 0)) {
    datasets.push({
      label: "Other",
      data: processedData.map((value) => value?.other ?? 0),
      backgroundColor: "#ff6b9d",
      stack: "stack1",
    });
  }

  const chartData: ChartData<"bar"> = {
    labels: years, // Use all years as labels
    datasets,
  };

  console.log(chartData);

  return data.length > 0 ? (
    <div className="border p-2">
      <h1 className=" text-xl bold">{chartTitle}</h1>
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
        data={chartData}
        bodySize={bodySize}
        legendSize={legendSize}
        id="chart1-capture"
      />
    </div>
  ) : (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl">No chart available</h1>
    </div>
  );
};

export default Chart1;
