import React from "react";

type ClaimRow = {
  Member_Type: string;
  Diagnosis: string;
  claimAmount: number;
  claimAmount_percentage: number;
  claimCount: number;
  claimCount_percentage: number;
  averageClaimAmount: number;
};

type ColorTheme = {
  header: string;
  text: string;
  content_odd: string;
  content_even: string;
};

type Props = {
  data: ClaimRow[];
  totals: Omit<ClaimRow, "Diagnosis">[];
};

const table5Colors: ColorTheme[] = [
  {
    header: "#002161",
    text: "#f3f2f3",
    content_odd: "#f3f3f2",
    content_even: "#d9d8d8",
  },
  {
    header: "#8a0101",
    text: "#f3f2f3",
    content_odd: "#f3f3f2",
    content_even: "#d9d8d8",
  },
  {
    header: "#8a0101",
    text: "#f3f2f3",
    content_odd: "#f3f3f2",
    content_even: "#d9d8d8",
  },
  {
    header: "#8a0101",
    text: "#f3f2f3",
    content_odd: "#f3f3f2",
    content_even: "#d9d8d8",
  },
];

const firstColumnWidth = "35%";
const remainingWidth = `${(100 - parseInt(firstColumnWidth)) / 5}%`;

const formatNum = (num: number | string) =>
  parseFloat(num as string).toLocaleString();

const Table5: React.FC<Props> = ({ data, totals }) => {
  const memberTypes = Array.from(
    new Set(data.map((d) => d.Member_Type).filter(Boolean))
  );

  return (
    <div id="table5-capture" className="w-fit" style={{ zoom: 0.3 }}>
      {memberTypes.map((memberType, i) => {
        const rows = data.filter((d) => d.Member_Type === memberType);
        const color = table5Colors[i] ?? table5Colors[0];
        const total: Omit<ClaimRow, "Diagnosis"> = totals[i];

        const totalRow: ClaimRow = {
          ...total,
          Diagnosis: "Total",
        };

        const displayRows = [...rows, totalRow];

        return (
          <div key={i} className="mb-4 aptos-font text-center">
            {/* Header Row */}
            <div
              className="flex text-[62px] font-bold border border-white"
              style={{ width: "3584px" }}
            >
              <div
                className="text-start underline flex items-center pl-4 bg-white"
                style={{
                  width: firstColumnWidth,
                  color: color.header,
                }}
              >
                {memberType.length < 5
                  ? memberType === "P"
                    ? "PRINCIPAL"
                    : "DEPENDENT"
                  : memberType.toUpperCase()}
              </div>
              {[
                "Claim Amount",
                "% to Total",
                "Claim Count",
                "% to Total",
                "Average Cost per Claim",
              ].map((label, j) => (
                <div
                  key={j}
                  className="flex items-center justify-center border-l border-white text-white"
                  style={{
                    width: remainingWidth,
                    backgroundColor: color.header,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {displayRows.map((row, j) => {
              const isTotal = row.Diagnosis.toLowerCase() === "total";
              const bg = isTotal
                ? color.header
                : j % 2 === 0
                ? color.content_odd
                : color.content_even;
              const textColor = isTotal ? "white" : color.header;

              return (
                <div
                  key={j}
                  className="flex text-[62px] border-t border-white"
                  style={{
                    width: "3584px",
                    backgroundColor: bg,
                    color: textColor,
                  }}
                >
                  <div
                    className="text-start pl-4 flex items-center border-r border-white"
                    style={{ width: firstColumnWidth }}
                  >
                    {row.Diagnosis}
                  </div>
                  <div
                    className="flex items-center justify-center border-r border-white"
                    style={{ width: remainingWidth }}
                  >
                    {formatNum(row.claimAmount)}
                  </div>
                  <div
                    className="flex items-center justify-center border-r border-white"
                    style={{ width: remainingWidth }}
                  >
                    {row.claimAmount_percentage}%
                  </div>
                  <div
                    className="flex items-center justify-center border-r border-white"
                    style={{ width: remainingWidth }}
                  >
                    {formatNum(row.claimCount)}
                  </div>
                  <div
                    className="flex items-center justify-center border-r border-white"
                    style={{ width: remainingWidth }}
                  >
                    {row.claimCount_percentage}%
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{ width: remainingWidth }}
                  >
                    {formatNum(row.averageClaimAmount)}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table5;
