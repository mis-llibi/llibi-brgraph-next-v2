// Div-based layout version for html2canvas compatibility (patched with line-height centering)

import React from "react";
import useToggleSize from "@/hooks/useToggleSize";

type Props = {
  data: CompanyBRReport[];
  year: string;
};

type CompanyBRReport = {
  company: string;
  employees: number;
  employees_percentage: number;
  dependents: number;
  dependents_percentage: number;
  spouse: number;
  spouse_percentage: number;
  child: number;
  child_percentage: number;
  parent: number;
  parent_percentage: number;
  sibling: number;
  sibling_percentage: number;
  companyTotal: number;
  companyTotalPercentage: number;
};

const titleColors = [
  {
    header: "#002161",
    content: "#dae8f9",
    text: "#002161",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
  {
    header: "#810100",
    content: "#fbe2d5",
    text: "#810100",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
  {
    header: "#0071c1",
    content: "#d0e5f7",
    text: "#00335f",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
  {
    header: "#f3ab84",
    content: "#feeadf",
    text: "#814f28",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
  {
    header: "#7030a0",
    content: "#e3d5f3",
    text: "#3c1760",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
  {
    header: "#000101",
    content: "#e8e8e8",
    text: "#000101",
    total: "#bfbfbf",
    default: "#f3f2f3",
  },
];

const Table1 = (props: Props) => {
  const { fontSize, setFontSize } = useToggleSize({ initial: 78 });

  if (!props.data.length) return null;

  return (
    <>
      <label
        htmlFor="default-range"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>
      <input
        id="default-range"
        type="range"
        value={fontSize}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        min={24}
        max={100}
        onChange={(e) => {
          const value = e.target.value;
          setFontSize(+value);
        }}
      />

      <div
        id="table1-capture"
        className="w-fit"
        style={{
          zoom: 0.3,
        }}
      >
        {props.data.map((company, i) => {
          const colors =
            i !== props.data.length - 1
              ? titleColors[i]
              : titleColors[titleColors.length - 1];

          const rows = [
            {
              label: "Employees",
              value: company.employees,
              percent: company.employees_percentage,
            },
            {
              label: "Dependents",
              value: company.dependents,
              percent: company.dependents_percentage,
            },
            {
              label: "Spouse",
              value: company.spouse,
              percent: company.spouse_percentage,
            },
            {
              label: "Child",
              value: company.child,
              percent: company.child_percentage,
            },
            {
              label: "Parent",
              value: company.parent,
              percent: company.parent_percentage,
            },
            {
              label: "Sibling",
              value: company.sibling,
              percent: company.sibling_percentage,
            },
            {
              label: "Total",
              value: company.companyTotal,
              percent: company.companyTotalPercentage,
            },
          ];

          return (
            <div key={i} className=" aptos-font">
              {/* Header Row */}
              <div className="grid grid-cols-4 w-[2468px] h-[160px] text-[78px] font-bold text-white aptos-font">
                <div
                  className="text-center leading-[160px] col-span-2"
                  style={{
                    backgroundColor: colors.header,
                    fontSize: company.company !== "COMBINED" ? fontSize : 78,
                  }}
                >
                  {company.company.split("-")[0].length > 4
                    ? company.company.split("-")[0]
                    : company.company}
                </div>
                <div
                  className="text-center leading-[160px] bg-white"
                  style={{
                    color: i === 0 ? colors.header : "",
                  }}
                >
                  {i === 0 ? props.year : ""}
                </div>
                <div
                  className="text-center leading-[160px] bg-white"
                  style={{
                    color: i === 0 ? colors.header : "",
                  }}
                >
                  {i === 0 ? "% to Total" : ""}
                </div>
              </div>

              {/* Data Rows */}
              {rows.map((row, j) => {
                const isTotal = row.label === "Total";
                const isHighlight = ["Employees", "Dependents"].includes(
                  row.label
                );

                const bgColor = isTotal
                  ? colors.total
                  : isHighlight
                  ? colors.content
                  : colors.default;

                const textColor = colors.text;

                return (
                  <div
                    key={j}
                    className="grid grid-cols-4 w-[2468px] h-[146px] text-[78px] border border-gray-400 aptos-font"
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                      fontWeight: isTotal || isHighlight ? "bold" : "normal",
                    }}
                  >
                    <div className="text-center leading-[146px] border border-gray-300 col-span-2">
                      {row.label}
                    </div>
                    <div className="text-center leading-[146px] border border-gray-300">
                      {row.value}
                    </div>
                    <div className="text-center leading-[146px] border border-gray-300">
                      {row.percent}%
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Table1;
