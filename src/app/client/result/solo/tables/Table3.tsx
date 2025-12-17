import React, { useState, useEffect, useMemo } from "react";
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
  const originalCompanies = useMemo(
    () => Array.from(new Set(data.map((entry) => entry.Company))),
    [data]
  );
  console.log("Companies in Table3:", originalCompanies);

  const [companies, setCompanies] = useState<string[]>([]);
  const [showSortingUI, setShowSortingUI] = useState(false);
  const { fontSize, setFontSize } = useToggleSize({ initial: 52 });

  // Initialize companies order, ensuring "Combined" is always last
  useEffect(() => {
    const sortableCompanies = originalCompanies.filter(
      (company) => company !== "Combined"
    );
    const combined = originalCompanies.find(
      (company) => company === "Combined"
    );
    setCompanies([...sortableCompanies, ...(combined ? [combined] : [])]);
  }, [originalCompanies]);

  const moveCompany = (fromIndex: number, toIndex: number) => {
    // Prevent moving "Combined" or moving items past "Combined"
    const isCombinedItem = companies[fromIndex] === "Combined";
    const movingPastCombined =
      toIndex >= companies.length - 1 &&
      companies[companies.length - 1] === "Combined";

    if (isCombinedItem || movingPastCombined) return;

    const newCompanies = [...companies];
    const [movedCompany] = newCompanies.splice(fromIndex, 1);
    newCompanies.splice(toIndex, 0, movedCompany);
    setCompanies(newCompanies);
  };

  const moveUp = (index: number) => {
    if (index > 0) {
      moveCompany(index, index - 1);
    }
  };

  const moveDown = (index: number) => {
    const maxIndex =
      companies[companies.length - 1] === "Combined"
        ? companies.length - 2
        : companies.length - 1;

    if (index < maxIndex) {
      moveCompany(index, index + 1);
    }
  };

  const resetOrder = () => {
    const sortableCompanies = originalCompanies.filter(
      (company) => company !== "Combined"
    );
    const combined = originalCompanies.find(
      (company) => company === "Combined"
    );
    setCompanies([...sortableCompanies, ...(combined ? [combined] : [])]);
  };

  return (
    <>
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Table 3 Customization
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
        </div>

        {/* Company Order Controls */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-900">
              Company Order
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSortingUI(!showSortingUI)}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {showSortingUI ? "Hide" : "Show"} Sorting
              </button>
              <button
                onClick={resetOrder}
                className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Reset Order
              </button>
            </div>
          </div>

          {showSortingUI && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600 mb-3">
                Reorder companies by clicking the arrow buttons.
                &quot;Combined&quot; will always remain at the bottom.
              </p>
              {companies.map((company, index) => {
                const isCombined = company === "Combined";
                const isFirst = index === 0;
                const isLastSortable =
                  index ===
                  companies.length - (companies.includes("Combined") ? 2 : 1);

                return (
                  <div
                    key={company}
                    className={`flex items-center justify-between p-3 rounded border ${
                      isCombined
                        ? "bg-yellow-100 border-yellow-300"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500 w-6">
                        {index + 1}.
                      </span>
                      <span
                        className={`font-medium ${
                          isCombined ? "text-yellow-700" : "text-gray-900"
                        }`}
                      >
                        {company.includes("-") && company.length > 30
                          ? company.split("-")[0] + "..."
                          : company}
                      </span>
                      {isCombined && (
                        <span className="text-xs bg-yellow-200 text-yellow-700 px-2 py-1 rounded">
                          Fixed Position
                        </span>
                      )}
                    </div>

                    {!isCombined && (
                      <div className="flex gap-1">
                        <button
                          onClick={() => moveUp(index)}
                          disabled={isFirst}
                          className={`p-1 rounded ${
                            isFirst
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                          }`}
                          title="Move up"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => moveDown(index)}
                          disabled={isLastSortable}
                          className={`p-1 rounded ${
                            isLastSortable
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                          }`}
                          title="Move down"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
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
