import React, { useState } from "react";
import type { Upload } from "@/types/Client/client";
import { DateTime } from "luxon";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";
import Swal from "sweetalert2";

import "animate.css";

type Props = {
  masterlist: Upload[];
  id?: number;
  ref: any;
};

const UploadMasterlist = ({ masterlist, id, ref }: Props) => {
  console.log(masterlist);
  const [selectedYear, setSelectedYear] = useState<{
    year: string | "";
    withData: boolean | false;
  }>();
  const { file, setFile } = useFile();
  const fileTypes = ["xlsx", "xls", "csv"];

  const currentYear = DateTime.now().year;
  const yearList = Array.from({ length: 4 }, (_, i) => {
    const yearEnd = currentYear - i;
    const yearStart = yearEnd - 1;
    const converted = yearStart + "-" + yearEnd.toString().substring(2, 4);
    const withData = masterlist.find((data) => {
      console.log("Checking year:", data.year, "against", converted);
      return data.year === converted;
    });
    return {
      year: converted,
      withData: withData ? true : false,
    };
  });

  return (
    <div className="flex flex-col h-full w-full">
      <div className="mt-2">
        <span className="">Select Year: </span>
        <select
          className="h-10 w-36"
          onChange={async (e) => {
            const selectedYear = yearList.find(
              (year) => year.year === e.target.value
            );
            setSelectedYear(selectedYear);
          }}
          defaultValue={""}
          id="masterlistYear"
        >
          <option value={""}>Select Year</option>
          {yearList.map((value) => (
            <option key={value.year} value={value.year}>
              {value.year} {value.withData && "(with data)"}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6">
        <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <section className="container">
              <div
                {...getRootProps({
                  className:
                    "border-2 border-dashed border-gray-300 p-8 rounded-md flex justify-center items-center cursor-pointer hover:border-indigo-500 transition duration-300 ease-in-out",
                })}
              >
                <input
                  {...getInputProps({
                    accept: fileTypes.map((type) => `.${type}`).join(","),
                    required: true,
                    id: "masterFile",
                  })}
                />
                <div className="flex flex-col items-center">
                  {file ? (
                    <div className="flex flex-col items-center">
                      <p className="text-gray-700 text-center cursor-default">
                        File "{file.name}" is uploaded.
                      </p>
                      <p className="text-gray-500 text-center mt-2 text-sm">
                        You can drag/drop a new file or click here to replace
                        it.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <p className="text-gray-500 text-center cursor-pointer">
                        Drag/Drop a file or{" "}
                        <span className="text-indigo-500">click here</span> to
                        browse
                      </p>
                      {/* allowed file types */}
                      <p className="text-gray-500 text-center mt-2 text-sm">
                        Allowed file types: {fileTypes.toString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default UploadMasterlist;
