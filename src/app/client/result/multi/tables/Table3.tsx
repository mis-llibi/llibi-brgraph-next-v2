import React from "react";
import useToggleSize from "@/hooks/useToggleSize";

type ClaimType = {
  Company: string;
  Claim_Type: string;
  claimAmount: number;
  claimCount: number;
  averageClaimAmount: number;
  claimAmount_percentage: number;
  claimCount_percentage: number;
};

type ColorTheme = {
  header: string;
  total: string;
  content: string;
};

type Props = {
  data: ClaimType[];
  year: string;
};

const table3Colors: ColorTheme[] = [
  { header: "#002161", total: "#bebfbe", content: "#f3f3f2" },
  { header: "#810100", total: "#bebfbe", content: "#f3f3f2" },
  { header: "#000101", total: "#bebfbe", content: "#f3f3f2" },
  { header: "#000101", total: "#bebfbe", content: "#f3f3f2" },
];

const Table3 = ({ data, year }: Props) => {
  const companies = Array.from(new Set(data.map((entry) => entry.Company)));
  const { fontSize, setFontSize } = useToggleSize({ initial: 52 });

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
        id="table3-capture"
        className="w-fit aptos-font"
        style={{ zoom: 0.3 }}
      >
        {companies.map((company, i) => {
          const rows = data.filter((entry) => entry.Company === company);
          const color =
            table3Colors[i] ?? table3Colors[table3Colors.length - 1];

          return (
            <div key={i} className="">
              {/* Header Row */}
              <div
                className="grid grid-cols-8 w-[3584px] h-[120px] text-[52px] font-bold text-white border-white"
                style={{ color: color.header }}
              >
                <div
                  className="col-span-2 flex items-center justify-center leading-[120px] text-white border-white"
                  style={{
                    backgroundColor: color.header,
                    fontSize: company !== "Combined" ? fontSize : 58,
                  }}
                >
                  {company.includes("-") && company.length > 30
                    ? company.split("-")[0]
                    : company}
                </div>
                <div
                  className="flex items-center justify-center border-white"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  Claim Amount
                </div>
                <div
                  className="flex items-center justify-center border-white"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  % to Total
                </div>
                <div
                  className="flex items-center justify-center border-white"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  Claim Count
                </div>
                <div
                  className="flex items-center justify-center border-white"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  % to Total
                </div>
                <div
                  className="flex items-center justify-center col-span-2 border-white"
                  style={{
                    backgroundColor: "white",
                  }}
                >
                  Ave Cost per Claim
                </div>
              </div>

              {/* Data Rows */}
              {rows.map((row, j) => {
                const bgColor = color.content;

                return (
                  <div
                    key={j}
                    className="grid grid-cols-8 w-[3584px] h-[110px] text-[52px] border-none "
                    style={{
                      backgroundColor: bgColor,
                      color: color.header,
                    }}
                  >
                    <div className="flex items-center justify-center border border-white col-span-2">
                      {row.Claim_Type}
                    </div>
                    <div className="flex items-center justify-center border border-white">
                      {row.claimAmount.toLocaleString()}
                    </div>
                    <div className="flex items-center justify-center border border-white">
                      {row.claimAmount_percentage}%
                    </div>
                    <div className="flex items-center justify-center border border-white">
                      {row.claimCount}
                    </div>
                    <div className="flex items-center justify-center border border-white">
                      {row.claimCount_percentage}%
                    </div>
                    <div className="flex items-center justify-center border border-white col-span-2">
                      {row.averageClaimAmount.toLocaleString()}
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

export default Table3;
