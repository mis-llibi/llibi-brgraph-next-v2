// Div-based layout version for html2canvas compatibility (patched with line-height centering)

import React, { useState, useEffect, useRef } from "react";
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
  other?: number;
  other_percentage?: number;
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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editableRef = useRef<HTMLDivElement | null>(null);
  const { fontSize, setFontSize } = useToggleSize({ initial: 78 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        editableRef.current &&
        !editableRef.current.contains(event.target as Node)
      ) {
        setEditingIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!props.data.length) return null;
  if (props.data.length === 2) props.data.pop();
  console.log("Table1 data:", props.data);

  return (
    <>
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Table 1 Customization
        </h3>

        {/* Font Size Control */}
        <div className="mb-4">
          <label
            htmlFor="font-size-input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Header Size (px)
          </label>
          <input
            id="font-size-input"
            type="number"
            value={fontSize}
            min={24}
            max={100}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 24 && value <= 100) {
                setFontSize(value);
              }
            }}
          />
          <small className="block text-gray-500 text-xs mt-1">
            Double-click company names to edit (except COMBINED)
          </small>
        </div>
      </div>

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
          ];

          // Only add "Other" row if there's actual data
          if (company.other && company.other > 0) {
            rows.push({
              label: "Other",
              value: company.other,
              percent: company.other_percentage || 0,
            });
          }

          // Add Total row at the end
          rows.push({
            label: "Total",
            value: company.companyTotal,
            percent: company.companyTotalPercentage,
          });

          return (
            <div key={i} className=" aptos-font">
              {/* Header Row */}
              <div className="grid grid-cols-4 w-[2468px] h-[160px] text-[78px] font-bold text-white aptos-font">
                <div
                  ref={i === editingIndex ? editableRef : null}
                  className="text-center leading-[160px] col-span-2 outline-none"
                  style={{
                    backgroundColor: colors.header,
                    fontSize: company.company !== "COMBINED" ? fontSize : 78,
                  }}
                  contentEditable={i === editingIndex}
                  suppressContentEditableWarning={true}
                  onDoubleClick={() => {
                    if (company.company !== "COMBINED") {
                      setEditingIndex(i);
                    }
                  }}
                  onBlur={() => setEditingIndex(null)}
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
