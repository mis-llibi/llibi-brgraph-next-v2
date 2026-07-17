import React from "react";
import type { Dataset } from "@/types/Client/client";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";
import DatasetTitleCombobox from "./DatasetTitleCombobox";

import "animate.css";

type Props = {
  datasets: Dataset[];
  insurerId: number;
};

const UploadUtilization = ({ datasets, insurerId }: Props) => {
  const { file, setFile } = useFile();
  const fileTypes = ["xlsx", "xls", "csv"];

  return (
    <div className="flex flex-col h-full w-full gap-3">
      <div className="mt-2">
        <DatasetTitleCombobox
          datasets={datasets}
          inputId="utilizationDatasetTitle"
          hiddenInputId="utilizationDatasetId"
        />
      </div>
      <div>
        <a href={`/api/protected/downloadUtilTemp?insurerId=${insurerId}`}>
          <span className=" text-blue-500 underline">
            Click here to download example template
          </span>
        </a>
      </div>
      <div>
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
                    id: "utilizationFile",
                  })}
                />
                <div className="flex flex-col items-center">
                  {file ? (
                    <div className="flex flex-col items-center">
                      <p className="text-gray-700 text-center cursor-default">
                        File &quot;{file.name}&quot; is uploaded.
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

export default UploadUtilization;
