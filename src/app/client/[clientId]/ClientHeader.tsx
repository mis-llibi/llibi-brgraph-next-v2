import React, { useRef } from "react";
import type { ClientData } from "@/types/Client/client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UploadMasterlist from "./modals/UploadMasterlist";
import {
  UploadMasterlistFile,
  UploadUtilizationFile,
} from "@/preApi/FileUploadApi";
import UploadUtilization from "./modals/UploadUtilization";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  client: ClientData;
};

const ClientHeader = ({ client }: Props) => {
  const swalReact = withReactContent(Swal);

  const masterListUploadRef = useRef<HTMLInputElement>(null);
  const utilizationUploadRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  console.log(client);

  const showUploadMasterModal = () => {
    swalReact.fire({
      title: "Upload Masterlist",
      html: (
        <UploadMasterlist
          masterlist={client.masterlist || []}
          ref={masterListUploadRef}
        />
      ),
      showConfirmButton: true,
      confirmButtonText: "Upload",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      preConfirm: async () => {
        swalReact.showLoading();
        const data: HTMLInputElement | null | undefined = swalReact
          .getPopup()
          ?.querySelector("#masterFile");
        const year: HTMLSelectElement | null | undefined = swalReact
          ?.getPopup()
          ?.querySelector("#masterlistYear");

        if (data && data.files && data.files.length > 0 && year) {
          await UploadMasterlistFile({
            file: data.files[0],
            id: client.id,
            year: year.value,
            insurerId: client.insurer_id,
          });
        }

        swalReact.hideLoading();
      },
      width: 600,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `,
      },
    });
  };

  const showUploadUtilModal = () => {
    console.log(queryClient.getQueryCache());
    swalReact.fire({
      title: "Upload Utilization",
      html: (
        <UploadUtilization
          utilization={client.utilization || []}
          ref={utilizationUploadRef}
        />
      ),
      showConfirmButton: true,
      confirmButtonText: "Upload",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      preConfirm: async () => {
        swalReact.showLoading();
        const data: HTMLInputElement | null | undefined = swalReact
          .getPopup()
          ?.querySelector("#utilizationFile");
        const year: HTMLSelectElement | null | undefined = swalReact
          ?.getPopup()
          ?.querySelector("#utilizationYear");

        if (data && data.files && data.files.length > 0 && year) {
          const success = await UploadUtilizationFile({
            file: data.files[0],
            id: client.id,
            year: year.value,
            insurerId: client.insurer_id,
          });
          await queryClient.invalidateQueries({ queryKey: ["client"] });
          await queryClient.refetchQueries({ queryKey: ["client"] });
        }

        swalReact.hideLoading();
      },
      width: 600,
      showClass: {
        popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `,
      },
      hideClass: {
        popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `,
      },
    });
  };

  return (
    <div className="flex flex-col justify-center w-full border-b">
      <div className="justify-start px-8 grid grid-cols-2 ">
        <div>
          <h2 className="text-3xl font-bold text-slate-950">
            {client?.client_name}
          </h2>
          <h3 className="text-2xl text-slate-800">{client?.insurer?.name}</h3>
          {client?.description ? (
            <p className="text-lg text-slate-800 my-2">{client.description}</p>
          ) : (
            <p className="text-lg text-slate-800 my-2">
              No description available
            </p>
          )}
        </div>
        <div className="flex justify-end flex-row">
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                showUploadMasterModal();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-14 mt-4 w-36 "
            >
              Upload MasterList
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showUploadUtilModal();
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-14 mt-4 w-36"
            >
              Upload Utilization
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                //setShowUploadDeckModal(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded h-14 mt-4 w-36"
            >
              Upload Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
