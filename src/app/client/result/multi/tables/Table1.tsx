import React, { useEffect, useState, useRef } from "react";
import useToggleSize from "@/hooks/useToggleSize";

type Props = {
  data: CompanyBRReport[][];
  year: string[];
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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editableRef = useRef<HTMLDivElement | null>(null);

  const { fontSize, setFontSize } = useToggleSize({ initial: 78 });

  const flattened = props.data.flatMap((yearData, index) => {
    return yearData.map((companyData) => ({
      ...companyData,
      year: props.year[index],
    }));
  });

  // Group by company name
  const grouped = flattened.reduce<Record<string, (typeof flattened)[0][]>>(
    (acc, curr) => {
      if (!acc[curr.company]) {
        acc[curr.company] = [];
      }
      acc[curr.company].push(curr);
      return acc;
    },
    {}
  );

  // Combine the data for each company
  const combined = Object.entries(grouped).map(([company, entries]) => {
    const result: Record<string, any> = { company };

    entries.forEach((entry) => {
      const year = entry.year;
      Object.keys(entry).forEach((key) => {
        if (key !== "company" && key !== "year") {
          result[`${key}_${year}`] = entry[key as keyof typeof entry];
        }
      });
    });

    return result;
  });

  // sort make sure the last item is always "COMBINED"
  const sortedData = combined.sort((a, b) => {
    if (a?.company === "COMBINED") return 1;
    if (b?.company === "COMBINED") return -1;
    return 0;
  });

  const rows = [
    { label: "Employees", key: "employees" },
    { label: "Dependents", key: "dependents" },
    { label: "Spouse", key: "spouse" },
    { label: "Child", key: "child" },
    { label: "Parent", key: "parent" },
    { label: "Sibling", key: "sibling" },
    { label: "Total", key: "companyTotal" },
  ];

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
        {sortedData.map((company, i) => {
          const colors =
            i !== sortedData.length - 1
              ? titleColors[i]
              : titleColors[titleColors.length - 1];

          return (
            <div key={i} className="aptos-font">
              {/* Header Row */}
              <div className="grid grid-cols-6 w-[2468px] h-[160px] text-[78px] font-bold text-white aptos-font">
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

                {props.year.map((year, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div
                        className="text-center leading-[160px] bg-white"
                        style={{
                          color: i === 0 ? colors.header : "",
                        }}
                      >
                        {i === 0 ? year : ""}
                      </div>
                      <div
                        className="text-center leading-[160px] bg-white"
                        style={{
                          color: i === 0 ? colors.header : "",
                        }}
                      >
                        {i === 0 ? "% to Total" : ""}
                      </div>
                    </React.Fragment>
                  );
                })}
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
                    className="grid grid-cols-6 w-[2468px] h-[146px] text-[78px] border border-gray-400 aptos-font"
                    style={{
                      backgroundColor: bgColor,
                      color: textColor,
                      fontWeight: isTotal || isHighlight ? "bold" : "normal",
                    }}
                  >
                    <div className="text-center leading-[146px] border border-gray-300 col-span-2">
                      {row.label}
                    </div>
                    {props.year.map((year, idx) => (
                      <React.Fragment key={year}>
                        <div className="text-center leading-[146px] border border-gray-300">
                          {company[`${row.key}_${year}`] ?? 0}
                        </div>
                        <div className="text-center leading-[146px] border border-gray-300">
                          {!isTotal
                            ? company[`${row.key}_percentage_${year}`] ?? 0
                            : company[`${row.key}Percentage_${year}`] ?? 0}
                          %
                        </div>
                      </React.Fragment>
                    ))}
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
