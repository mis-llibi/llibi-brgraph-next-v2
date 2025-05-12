import React from "react";
import type { ClientData } from "@/types/Client/client";
import { convertInsurer } from "@/lib/insurers";

type Props = {
  client: ClientData;
};

const Overview = ({ client }: Props) => {
  return (
    <div className="mx-8 my-4 ">
      <h2 className="text-2xl font-bold text-slate-950 mb-4">Existing Data</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col justify-center align-middle text-center">
          <h2 className="text-lg font-bold text-slate-800">MasterList</h2>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                  Year
                </th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                  Insurer
                </th>
              </tr>
            </thead>
            <tbody>
              {client?.masterlist && client.masterlist.length > 0 ? (
                client.masterlist.map((data, idx) => (
                  <tr key={idx}>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                      {data.year}
                    </td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                      {convertInsurer(data.insurerId)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="col-span-2">"No data available"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-center align-middle text-center">
          <h2 className="text-lg font-bold text-slate-800">Utilization</h2>
          <table className="table-auto w-full mt-4">
            <thead>
              <tr>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                  Year
                </th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                  Months
                </th>
                <th className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                  Insurer
                </th>
              </tr>
            </thead>
            <tbody>
              {client?.utilization && client.utilization.length > 0 ? (
                client.utilization.map((data, idx) => (
                  <tr key={idx}>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                      {data.year}
                    </td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                      {data.months}
                    </td>
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">
                      {convertInsurer(data.insurerId)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>"No data available"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
