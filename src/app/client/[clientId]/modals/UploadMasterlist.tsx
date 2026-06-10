import React, { useState } from "react";
import type { Dataset } from "@/types/Client/client";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";

import "animate.css";

type Props = {
  datasets: Dataset[];
  insurerId: number;
};

const UploadMasterlist = ({ datasets, insurerId }: Props) => {
  const [datasetTitle, setDatasetTitle] = useState("");
  const { file, setFile } = useFile();
  const fileTypes = ["xlsx", "xls", "csv"];
  const selectedDataset = datasets.find(
    (dataset) => dataset.title === datasetTitle.trim()
  );

  return (
    <div className="flex flex-col h-full w-full gap-3">
      <div className="mt-2">
        <span className="">Dataset Title: </span>
        <input
          className="h-10 w-72 border rounded px-2"
          list="masterlistDatasetOptions"
          id="masterlistDatasetTitle"
          value={datasetTitle}
          onChange={(e) => setDatasetTitle(e.target.value)}
          placeholder="Choose or type a title"
        />
        <input
          id="masterlistDatasetId"
          type="hidden"
          value={selectedDataset?.id ?? ""}
          readOnly
        />
        <datalist id="masterlistDatasetOptions">
          {datasets.map((dataset) => (
            <option key={dataset.id} value={dataset.title} />
          ))}
        </datalist>
      </div>
      <div>
        <a href={`/api/protected/downloadMasterTemp?insurerId=${insurerId}`}>
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
                    id: "masterFile",
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

export default UploadMasterlist;
