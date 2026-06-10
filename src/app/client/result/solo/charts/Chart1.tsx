import React, { useState } from "react";
import HorizontalStackedBarChart from "@/components/charts/HorizontalStackedBarChart";
import { ChartData } from "chart.js";
import { filterNonZeroChartData, generateChartDatasets } from "@/lib/helper/chartDataFilter";

type Props = {
  chartTitle: string;
  data: any[];
  year: string;
};

const Chart1 = (props: Props) => {
  const [legendSize, setLegendSize] = useState(16);
  const [bodySize, setBodySize] = useState(20);
  const raw = props.data[props.data.length - 1];

  // Use helper utility to filter out zero values and generate chart data
  const chartData = filterNonZeroChartData(raw);
  const datasets = generateChartDatasets(chartData);

  const data: ChartData<"bar"> = {
    labels: [props.year],
    datasets,
  };

  return props.data.length > 0 ? (
    <div className="border p-2">
      <h1 className=" text-xl bold">{props.chartTitle}</h1>
      <hr className="my-4" />
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 w-full max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Chart 1 Customization
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
