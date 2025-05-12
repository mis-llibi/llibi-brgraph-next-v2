import React, { useEffect, useState, useRef } from "react";
import { DateTime } from "luxon";
import type { ClientData } from "@/types/Client/client";
import { convertInsurer } from "@/lib/insurers";
import type { generateOneYearRequest } from "@/preApi/GenerateReportApi";
import { generateOneYear } from "@/preApi/GenerateReportApi";
import useLoading from "@/hooks/useLoading";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useRouter } from "next/navigation";
import { useGeneratedData } from "@/contexts/GeneratedDataContext";
import { useBRReportStore } from "@/lib/store";

type Props = {
  client: ClientData;
};

const NewAccount = ({ client }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { loading, setLoading } = useLoading();
  const router = useRouter();
  const { data, setData } = useGeneratedData();

  const utilization = client.utilization;
  const dates = utilization
    ? utilization
        .map((utilization) => {
          const [start, end] = utilization.months
            ? utilization.months.split("-")
            : ["", ""];
          const startMonth = DateTime.fromFormat(start, "MMM").month;
          const endMonth = DateTime.fromFormat(end, "MMM").month;
          return Array.from({ length: endMonth - startMonth + 1 }, (_, i) => {
            return DateTime.fromObject({
              year: +utilization.year,
              month: startMonth + i,
              second: 0,
              minute: 0,
              millisecond: 0,
            });
          });
        })
        .flat()
    : [];

  const startingYears = dates
    .filter((date, idx, arr) => {
      return arr.findIndex((d) => d.year === date.year) === idx;
    })
    .map((date) => date.year);

  const [selectedYearStart, setSelectedYearStart] = useState<string>("");

  const startingMonths =
    selectedYearStart !== ""
      ? dates
          .filter((date) => date.year === +selectedYearStart)
          .map((date) => date.month)
      : [];

  const [selectedMonthStart, setSelectedMonthStart] = useState<string>("");
  const startingDate =
    selectedYearStart !== "" && selectedMonthStart !== ""
      ? DateTime.fromObject({
          year: +selectedYearStart,
          month: +selectedMonthStart,
          second: 0,
          minute: 0,
          millisecond: 0,
        })
      : null;

  // filter and map the array to get the remaining dates greater than the starting date
  const dates2 =
    startingDate !== null
      ? dates.filter(
          (date) => date.startOf("day") > startingDate.startOf("day")
        )
      : [];

  const endingYears =
    dates2.length > 0
      ? dates2
          .filter((date, idx, arr) => {
            return arr.findIndex((d) => d.year === date.year) === idx;
          })
          .map((date) => date.year)
      : [];

  const [selectedYearEnd, setSelectedYearEnd] = useState<string>("");

  const endingMonths =
    selectedYearEnd !== ""
      ? dates2
          .filter((date) => date.year === +selectedYearEnd)
          .map((date) => date.month)
      : [];

  const [selectedMonthEnd, setSelectedMonthEnd] = useState<string>("");

  const endingDate =
    selectedYearEnd !== "" && selectedMonthEnd !== ""
      ? DateTime.fromObject({
          year: +selectedYearEnd,
          month: +selectedMonthEnd,
          second: 0,
          minute: 0,
          millisecond: 0,
        })
      : null;

  const masterlist =
    startingDate && endingDate
      ? client.masterlist?.find((masterlist) => {
          const [start, end] = masterlist.year.split("-");
          console.log(start, end);
          const endYear = Number(start.substring(0, 2) + end);
          if (startingDate.year === endingDate.year) {
            return +start === startingDate.year;
          }
          return endingDate.year === endYear;
        })?.year
      : "...";

  const handleSubmit = async (payload: generateOneYearRequest) => {
    setLoading(true);
    const response = await generateOneYear(payload);
    setLoading(false);
    if (response.success && response.data) {
      useBRReportStore.getState().setData({ ...response.data, py: masterlist });
      console.log(response.data);
      router.push("/client/result/solo");
    }
  };

  return (
    <div className="flex flex-row my-6">
      {/* Starting Year Dropdown */}
      <div className="flex flex-col">
        <span className="text-sm font-bold">Starting Year</span>
        <select
          className="h-10 w-36 mt-2"
          onChange={(e) => {
            setSelectedYearStart(e.target.value);
            setSelectedMonthStart("");
            setSelectedYearEnd("");
            setSelectedMonthEnd("");
          }}
          value={selectedYearStart}
        >
          <option value="">Starting Year</option>
          {startingYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Starting Month Dropdown */}
      <div className="flex flex-col ml-4">
        <span className="text-sm font-bold">Starting Month</span>
        <select
          className={`h-10 w-36 mt-2 ${
            selectedYearStart === "" ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
          onChange={(e) => {
            setSelectedMonthStart(e.target.value);
            setSelectedYearEnd("");
            setSelectedMonthEnd("");
          }}
          disabled={selectedYearStart === ""}
          value={selectedMonthStart}
        >
          <option value="">...</option>
          {startingMonths.map((month, idx) => (
            <option key={idx} value={month}>
              {DateTime.fromObject({ month }).toFormat("MMM")}
            </option>
          ))}
        </select>
      </div>

      {/* Ending Year Dropdown */}
      <div className="flex flex-col ml-4">
        <span className="text-sm font-bold">Ending Year</span>
        <select
          className={` h-10 w-36 mt-2 ${
            selectedMonthStart === "" ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
          onChange={(e) => {
            setSelectedYearEnd(e.target.value);
            setSelectedMonthEnd("");
          }}
          disabled={selectedMonthStart === ""}
          value={selectedYearEnd}
        >
          <option value="">...</option>
          {endingYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Ending Month Dropdown */}
      <div className="flex flex-col ml-4">
        <span className="text-sm font-bold">Ending Month</span>
        <select
          className={`h-10 w-36 mt-2 ${
            selectedYearEnd === "" ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
          onChange={(e) => setSelectedMonthEnd(e.target.value)}
          disabled={selectedYearEnd === ""}
          value={selectedMonthEnd}
        >
          <option value="">...</option>
          {endingMonths.map((month, idx) => (
            <option key={idx} value={month}>
              {DateTime.fromObject({ month }).toFormat("MMM")}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col ml-4">
        <span className="text-sm font-bold ">Masterlist</span>
        <div className="w-36 h-10 mt-2 cursor-not-allowed pointer-events-none bg-gray-200 rounded p-2">
          <span ref={ref}>{masterlist ? masterlist : "No MasterList"}</span>
        </div>
      </div>

      <div className="ml-8 m-auto pt-7">
        <button
          className={`bg-blue-500 text-white px-4 py-2 h-10 rounded-lg transition
           ${
             !masterlist || masterlist === "..."
               ? "cursor-not-allowed bg-slate-400 !text-slate-600"
               : "cursor-pointer"
           }`}
          onClick={() => {
            if (startingDate && endingDate && client.id && masterlist) {
              const payload = {
                insurer_id: client.insurer_id,
                startDate: startingDate?.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'"),
                endDate: endingDate?.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'"),
                py: masterlist,
                clientId: client.id,
                insurer: convertInsurer(
                  client.utilization?.find(
                    (data) => data?.year === selectedYearStart
                  )?.insurerId ?? 0
                ),
                masterlist: masterlist,
              };
              handleSubmit(payload);
            }
          }}
          disabled={!masterlist || masterlist === "..."}
        >
          Create
        </button>
      </div>
      <LoadingOverlay loading={loading} />
    </div>
  );
};

export default NewAccount;
