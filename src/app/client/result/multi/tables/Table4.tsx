import React from "react";

type RelationshipRow = {
  Relationship: string;
  headcount: number;
  claimAmount: number;
  claimCount: number;
  claimAverage: number;
  personAverage: number;
};

type ColorTheme = {
  header: string;
  content_odd: string;
  content_even: string;
};

type Props = {
  data: RelationshipRow[];
};

const color: ColorTheme = {
  header: "#002161",
  content_odd: "#d9d8d8",
  content_even: "#f3f3f2",
};

const firstColumnWidth = "20%";
const remainingWidth = `${(100 - parseInt(firstColumnWidth)) / 5}%`;

const Table4: React.FC<Props> = ({ data }) => {
  if (!data.length) return null;

  const totals = {
    headcount: data.reduce((acc, d) => acc + d.headcount, 0),
    claimCount: data.reduce((acc, d) => acc + d.claimCount, 0),
    claimAmount: data.reduce((acc, d) => acc + d.claimAmount, 0),
    claimAverage: Math.round(
      data.reduce((acc, d) => acc + d.claimAmount, 0) /
        data.reduce((acc, d) => acc + d.claimCount, 0)
    ),
    personAverage: Math.round(
      data.reduce((acc, d) => acc + d.claimAmount, 0) /
        data.reduce((acc, d) => acc + d.headcount, 0)
    ),
  };

  return (
    <div
      id="table4-capture"
      className="w-fit aptos-font "
      style={{ zoom: 0.3 }}
    >
      {/* Header */}
      <div
        className="flex text-[62px] font-bold text-white"
        style={{ width: "2048px", height: "270px" }}
      >
        <div
          className="flex items-center justify-center bg-white"
          style={{ width: firstColumnWidth }}
        />
        {[
          "Head Count",
          "Claim Count",
          "Claim Amount",
          "Average Cost per Claim",
          "Average Cost per Person",
        ].map((col, i) => (
          <div
            key={i}
            className="flex items-center justify-center border-b border-white text-center"
            style={{ width: remainingWidth, backgroundColor: color.header }}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Data Rows */}
      {data.map((row, i) => {
        const bgColor =
          (i + 1) % 2 === 0 ? color.content_even : color.content_odd;
        const values = [
          row.headcount,
          row.claimCount,
          row.claimAmount,
          row.claimAverage,
          row.personAverage,
        ];

        return (
          <div
            key={i}
            className="flex text-[62px]"
            style={{
              width: "2048px",
              height: "180px",
              color: color.header,
            }}
          >
            <div
              className="flex items-center justify-center border-b border-white"
              style={{ width: firstColumnWidth, backgroundColor: bgColor }}
            >
              {row.Relationship}
            </div>
            {values.map((val, j) => (
              <div
                key={j}
                className="flex items-center justify-center border-b border-white"
                style={{ width: remainingWidth, backgroundColor: bgColor }}
              >
                {val.toLocaleString()}
              </div>
            ))}
          </div>
        );
      })}

      {/* TOTAL Row */}
      <div
        className="flex text-[62px] text-white"
        style={{
          width: "2048px",
          height: "180px",
          backgroundColor: color.header,
        }}
      >
        <div
          className="flex items-center justify-center border-b border-white"
          style={{ width: firstColumnWidth }}
        >
          TOTAL
        </div>
        {[
          totals.headcount,
          totals.claimCount,
          totals.claimAmount,
          totals.claimAverage,
          totals.personAverage,
        ].map((val, j) => (
          <div
            key={j}
            className="flex items-center justify-center border-b border-white"
            style={{ width: remainingWidth }}
          >
            {val.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table4;
