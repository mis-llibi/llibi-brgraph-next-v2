"use client";
import Swal from "sweetalert2";
import apiClient from "@/lib/axios";

type uploadMasterlistRequest = {
  file: File;
  id: number;
  year: string;
  insurerId: number;
};

type UploadUtilizationRequest = {
  file: File;
  id: number;
  year: string;
  insurerId: number;
};

type response = {
  message: string;
  success: boolean;
};

export const UploadUtilizationFile = async (
  data: UploadUtilizationRequest
): Promise<boolean> => {
  console.log(data.file, data.id, data.year, data.insurerId);
  try {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("id", data.id.toString());
    formData.append("year", data.year);
    formData.append("insurerId", data.insurerId.toString());
    const insurer = (
      data.insurerId === 1
        ? "intellicare"
        : data.insurerId === 2
        ? "maxicare"
        : "unknown"
    ) as string;

    const response = await apiClient.post(`/utilization/${insurer}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      Swal.fire({
        icon: "success",
        title: "Upload Complete",
        text: response.data.message,
      });

      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: response.data.error,
      });
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const UploadMasterlistFile = async (
  data: uploadMasterlistRequest
): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("id", data.id.toString());
    formData.append("year", data.year);
    formData.append("insurerId", data.insurerId.toString());
    const insurer = (
      data.insurerId === 1
        ? "intellicare"
        : data.insurerId === 2
        ? "maxicare"
        : "unknown"
    ) as string;

    const response = await apiClient.post(`/masterlist/${insurer}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) {
      Swal.fire({
        icon: "success",
        title: "Upload Complete",
        text: response.data.message,
      });

      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: response.data.error,
      });
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
};
