import React, { useState } from "react";
import type { ClientData } from "@/types/Client/client";
import NewAccount from "./NewAccount";
import OldAccount from "./OldAccount";

type Props = {
  client: ClientData;
};

const ReportGenerator = ({ client }: Props) => {
  const [selectedAccount, setSelectedAccount] = useState<string>("new");
  return (
    <>
      <div className="justify-start grid grid-cols-5 mx-8">
        <div className=" col-span-5">
          <h2 className="text-2xl font-bold text-slate-950">
            Create BR Report
          </h2>
          <div className="flex flex-col my-6 justify-start">
            <div>
              <h3 className="text-lg text-slate-800">Demographics</h3>
              <p className="text-sm text-slate-800">
                Select if you want to generate from a New or Old Account and
                select the year and month to generate the BR report
              </p>

              <div className="flex flex-row items-center">
                <button
                  className={` font-bold px-4 rounded h-10 mt-4 w-34 mr-4 ${
                    selectedAccount === "new"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                  onClick={() => {
                    setSelectedAccount("new");
                  }}
                >
                  One Year
                </button>
                <button
                  className={` font-bold px-4 rounded h-10 mt-4 w-34 mr-4 ${
                    selectedAccount === "old"
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                  onClick={() => {
                    setSelectedAccount("old");
                  }}
                >
                  2+ Years
                </button>
              </div>
            </div>
          </div>
          {selectedAccount === "new" ? (
            <NewAccount client={client} />
          ) : (
            <OldAccount client={client} />
          )}
        </div>
      </div>
    </>
  );
};

export default ReportGenerator;
