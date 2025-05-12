import React, { useState, useEffect, useRef } from "react";
import type { Upload } from "@/types/Client/client";
import { DateTime } from "luxon";
import { useFinalData } from "./FinalData";
import { convertInsurer } from "../../../lib/insurers";

type Props = {
  dates: any[] | null;
  utilization?: Upload[];
  masterlist?: Upload[];
  nominal: number;
  insurerId: number;
  clientId: number;
};

const AddDate = ({
  dates,
  utilization,
  masterlist,
  nominal,
  insurerId,
  clientId,
}: Props) => {
  const [selectedYearStart, setSelectedYearStart] = useState<string>("");
  const [selectedYearEnd, setSelectedYearEnd] = useState<string>("");

  const [selectedMonthStart, setSelectedMonthStart] = useState<string>("");
  const [selectedMonthEnd, setSelectedMonthEnd] = useState<string>("");

  const ref = useRef<HTMLSpanElement>(null);

  const { finalData, setFinalData } = useFinalData();

  const startingYears =
    dates &&
    dates
      .filter((date, idx, arr) => {
        return arr.findIndex((d) => d.year === date.year) === idx;
      })
      .map((date) => date.year);

  const startingMonths =
    selectedYearStart !== "" && dates
      ? dates
          .filter((date) => date.year === +selectedYearStart)
          .map((date) => date.month)
      : [];

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
    startingDate !== null && dates
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

  const endingMonths =
    selectedYearEnd !== ""
      ? dates2
          .filter((date) => date.year === +selectedYearEnd)
          .map((date) => date.month)
      : [];

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

  const masterlistUse =
    startingDate && endingDate && masterlist
      ? masterlist?.find((masterlist) => {
          const [start, end] = masterlist.year.split("-");
          console.log(start, end);
          const endYear = Number(start.substring(0, 2) + end);
          if (startingDate.year === endingDate.year) {
            return +start === startingDate.year;
          }
          return endingDate.year === endYear;
        })?.year
      : "...";

  function ordinal_suffix_of(i: number) {
    const j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  useEffect(() => {
    if (selectedMonthEnd === "") {
      console.log("Resetting final data");
      setFinalData(() => {
        return finalData.filter((data, idx) => idx < nominal - 1);
      });
      return;
    }

    if (nominal === 1) {
      setFinalData([
        {
          insurer_id: insurerId,
          startDate: startingDate,
          endDate: endingDate,
          masterlist: masterlistUse,
          py: masterlistUse,
          clientId: clientId,
          insurer: convertInsurer(insurerId),
        },
      ]);
    } else {
      setFinalData((prevList: any[]) => {
        const newList = prevList.map((data, idx) => {
          if (idx + 1 < nominal) return data;
        });
        if (startingDate && endingDate && masterlistUse)
          newList.push({
            insurer_id: insurerId,
            startDate: startingDate,
            endDate: endingDate,
            masterlist: masterlistUse,
            py: masterlistUse,
            clientId: clientId,
            insurer: convertInsurer(insurerId),
          });

        return newList;
      });
    }
    // setFinalData([
    //   ...finalData,
    //   {
    //     startingDate: startingDate,
    //     endingDate: endingDate,
    //     masterlist: masterlistUse,
    //   },
    // ]);
  }, [selectedMonthEnd]);

  useEffect(() => {
    if (finalData.length < nominal) {
      setSelectedYearStart("");
      setSelectedMonthStart("");
      setSelectedYearEnd("");
      setSelectedMonthEnd("");
    }
  }, [finalData]);

  return (
    <>
      <div className="my-2 flex flex-col">
        <h3 className="text-base font-semibold">
          {ordinal_suffix_of(nominal)} Year
        </h3>
        <select
          className={`h-10 w-36 mt-2 ${
            !dates ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
          onChange={(e) => {
            setSelectedYearStart(e.target.value);
            setSelectedMonthStart("");
            setSelectedYearEnd("");
            setSelectedMonthEnd("");
          }}
          value={selectedYearStart}
          disabled={!dates}
        >
          <option value="">Starting Year</option>
          {startingYears?.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="my-2 flex flex-col">
        <h3 className="text-base font-semibold">
          {ordinal_suffix_of(nominal)} Starting Month
        </h3>
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
      <div className="my-2 flex flex-col">
        <h3 className="text-base font-semibold">
          {ordinal_suffix_of(nominal)} Ending Year
        </h3>
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
      <div className="my-2 flex flex-col">
        <h3 className="text-base font-semibold">
          {ordinal_suffix_of(nominal)} Ending Month
        </h3>
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
      <div className="my-2 flex flex-col pointer-events-none cursor-not-allowed select-none">
        <span className="text-sm font-bold ">Masterlist</span>
        <div className="w-36 h-10 mt-2 cursor-not-allowed pointer-events-none bg-gray-200 rounded p-2">
          <span>{masterlistUse}</span>
        </div>
      </div>
    </>
  );
};

export default AddDate;
