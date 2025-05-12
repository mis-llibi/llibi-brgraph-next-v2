import React from "react";
import HorizontalStackedBarChart from "@/components/charts/HorizontalStackedBarChart";
import { ChartData } from "chart.js";
import { ValueType } from "exceljs";

type DataItem = {
  employees_percentage: number;
  spouse_percentage: number;
  child_percentage: number;
  parent_percentage: number;
  sibling_percentage: number;
  dependents: number;
  dependents_percentage: number;
  company: string;
};

type Props = {
  chartTitle: string;
  data: DataItem[][];
  years: string[]; // Changed from single year to array of years
};

const Chart1 = ({ chartTitle, data, years }: Props) => {
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

  console.log(flattenedData);

  const chartData: ChartData<"bar"> = {
    labels: years, // Use all years as labels
    datasets: [
      {
        label: "Employees",
        data: flattenedData.map((value) => value.employees_percentage),
        backgroundColor: "#002161",
        stack: "stack1",
      },
      {
        label: "Spouse",
        data: flattenedData.map((value) => value.spouse_percentage),
        backgroundColor: "#0071c1",
        stack: "stack1",
      },
      {
        label: "Child",
        data: flattenedData.map((value) => value.child_percentage),
        backgroundColor: "#810100",
        stack: "stack1",
      },
      {
        label: "Parent",
        data: flattenedData.map((value) => value.parent_percentage),
        backgroundColor: "#f3ab84",
        stack: "stack1",
      },
      {
        label: "Sibling",
        data: flattenedData.map((value) => value.sibling_percentage),
        backgroundColor: "#7030a0",
        stack: "stack1",
      },
    ],
  };

  console.log(chartData);

  return data.length > 0 ? (
    <div>
      <h1>{chartTitle}</h1>
      <HorizontalStackedBarChart
        data={chartData}
        width={1458}
        height={1164}
        bodySize={56}
        legendSize={46}
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
