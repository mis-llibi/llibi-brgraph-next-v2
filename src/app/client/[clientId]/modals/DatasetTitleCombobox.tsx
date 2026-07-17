import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import type { Dataset } from "@/types/Client/client";

type Props = {
  datasets: Dataset[];
  inputId: string;
  hiddenInputId: string;
};

const DatasetTitleCombobox = ({
  datasets,
  inputId,
  hiddenInputId,
}: Props) => {
  const [datasetTitle, setDatasetTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const normalizedTitle = datasetTitle.trim().toLowerCase();
  const selectedDataset = datasets.find(
    (dataset) => dataset.title.trim().toLowerCase() === normalizedTitle
  );
  const filteredDatasets = useMemo(
    () =>
      datasets.filter((dataset) =>
        dataset.title.toLowerCase().includes(normalizedTitle)
      ),
    [datasets, normalizedTitle]
  );

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const chooseDataset = (dataset: Dataset) => {
    setDatasetTitle(dataset.title);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <label
        htmlFor={inputId}
        className="mb-2 block text-left text-sm font-semibold text-slate-700"
      >
        Dataset title
      </label>
      <div className="relative">
        <input
          id={inputId}
          role="combobox"
          aria-autocomplete="list"
          aria-controls={`${inputId}-options`}
          aria-expanded={isOpen}
          autoComplete="off"
          className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          value={datasetTitle}
          onChange={(event) => {
            setDatasetTitle(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
            }
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setIsOpen(true);
            }
          }}
          placeholder="Choose an existing title or type a new one"
        />
        <button
          type="button"
          aria-label={isOpen ? "Close dataset options" : "Open dataset options"}
          className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-slate-500 transition hover:text-slate-700"
          onClick={() => setIsOpen((open) => !open)}
        >
          <FiChevronDown
            aria-hidden="true"
            className={`h-5 w-5 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <input
        id={hiddenInputId}
        type="hidden"
        value={selectedDataset?.id ?? ""}
        readOnly
      />

      {isOpen && (
        <div
          id={`${inputId}-options`}
          role="listbox"
          className="absolute z-50 mt-2 max-h-52 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white p-1.5 text-left shadow-xl shadow-slate-900/10"
        >
          {filteredDatasets.length > 0 ? (
            filteredDatasets.map((dataset) => {
              const isSelected = selectedDataset?.id === dataset.id;

              return (
                <button
                  key={dataset.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm transition ${
                    isSelected
                      ? "bg-indigo-50 font-semibold text-indigo-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => chooseDataset(dataset)}
                >
                  <span>{dataset.title}</span>
                  {isSelected && (
                    <FiCheck aria-hidden="true" className="h-4 w-4" />
                  )}
                </button>
              );
            })
          ) : (
            <div className="px-3 py-3">
              <p className="text-sm font-medium text-slate-700">
                {datasetTitle.trim()
                  ? `Use “${datasetTitle.trim()}” as a new title`
                  : "No existing dataset titles"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {datasetTitle.trim()
                  ? "This dataset will be created when the file is uploaded."
                  : "Type a title to create your first dataset."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DatasetTitleCombobox;
