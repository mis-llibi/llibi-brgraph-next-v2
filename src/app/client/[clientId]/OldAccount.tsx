import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import type { ClientData } from "@/types/Client/client";
import AddDate from "./AddDate";
import { useFinalData } from "./FinalData";
import type { generateOneYearRequest } from "@/preApi/GenerateReportApi";
import { generateMultiYear } from "@/preApi/GenerateReportApi";
import { useBRReportStore } from "@/lib/store";
import { useRouter } from "next/navigation";

type Props = {
  client: ClientData;
};

const OldAccount = ({ client }: Props) => {
  const utilization = client.utilization;
  const masterlist = client.masterlist;
  const router = useRouter();
  const { finalData, setFinalData } = useFinalData();
  const [dates2, setDates2] = useState<any[]>([]);
  const [dates3, setDates3] = useState<any[]>([]);

  useEffect(() => {
    setFinalData([]);
  }, []);

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

  useEffect(() => {
    if (finalData.length === 0) {
      setDates2([]);
      setDates3([]);
    } else if (finalData.length === 1) {
      setDates2(
        dates.filter(
          (date) => date.startOf("day") > finalData[0].endDate.startOf("day")
        )
      );
      setDates3([]);
    } else if (finalData.length === 2) {
      setDates3(
        dates2.filter(
          (date) => date.startOf("day") > finalData[1].endDate.startOf("day")
        )
      );
    }
  }, [finalData]);

  const handleSubmit = async (payload: generateOneYearRequest[]) => {
    //setLoading(true);
    const response = await generateMultiYear(payload);
    //setLoading(false);
    if (response.success && response.data) {
      useBRReportStore
        .getState()
        .setData({ ...response.data, py: finalData.map((value) => value.py) });
      console.log(response.data);
      router.push("/client/result/multi");
    }
  };

  return (
    <div className="grid grid-cols-4 my-6">
      <div
        className={`border-r-2 flex flex-col items-center transition ${
          finalData?.length > 0 ? "bg-green-300" : "bg-slate-300"
        }`}
      >
        <AddDate
          dates={dates}
          nominal={1}
          masterlist={masterlist}
          insurerId={client.insurer_id}
          clientId={client.id}
        />
      </div>
      <div
        className={`border-r-2 flex flex-col items-center transition ${
          finalData?.length > 1 ? "bg-green-300" : "bg-slate-300"
        }`}
      >
        <AddDate
          dates={dates2}
          nominal={2}
          masterlist={masterlist}
          insurerId={client.insurer_id}
          clientId={client.id}
        />
      </div>
      <div
        className={`border-r-2 flex flex-col items-center transition ${
          finalData?.length > 2 ? "bg-green-300" : "bg-slate-300"
        }`}
      >
        <AddDate
          dates={dates3}
          nominal={3}
          masterlist={masterlist}
          insurerId={client.insurer_id}
          clientId={client.id}
        />
      </div>
      <div className="ml-8 m-auto pt-7">
        <button
          className={`bg-blue-500 text-white px-4 py-2 h-10 rounded-lg transition
          ${
            finalData.length < 2
              ? "cursor-not-allowed bg-slate-400 !text-slate-600"
              : "cursor-pointer"
          }`}
          onClick={() => {
            console.log("Final Data", finalData);
            handleSubmit(finalData);
          }}
          disabled={finalData.length < 2}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default OldAccount;
