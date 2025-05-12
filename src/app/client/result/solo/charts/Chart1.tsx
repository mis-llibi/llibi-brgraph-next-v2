import React from "react";
import HorizontalStackedBarChart from "@/components/charts/HorizontalStackedBarChart";
import { ChartData } from "chart.js";

type Props = {
  chartTitle: string;
  data: any[];
  year: string;
};

const Chart1 = (props: Props) => {
  const { dependents, dependents_percentage, company, ...chartData } =
    props.data[props.data.length - 1];

  console.log(props.year);

  const data: ChartData<"bar"> = {
    labels: [props.year],
    datasets: [
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
    ],
  };

  return props.data.length > 0 ? (
    <div>
      <h1>{props.chartTitle}</h1>
      <HorizontalStackedBarChart
        data={data}
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
