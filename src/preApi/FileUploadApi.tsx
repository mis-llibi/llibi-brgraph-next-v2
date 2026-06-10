"use client";
import Swal from "sweetalert2";
import apiClient from "@/lib/axios";

type uploadMasterlistRequest = {
  file: File;
  id: number;
  insurerId: number;
  datasetId?: number;
  datasetTitle?: string;
};

type UploadUtilizationRequest = {
  file: File;
  id: number;
  insurerId: number;
  datasetId?: number;
  datasetTitle?: string;
};

export const UploadUtilizationFile = async (
  data: UploadUtilizationRequest
): Promise<boolean> => {
  console.log("Processing upload...");
  try {
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("id", data.id.toString());
    formData.append("insurerId", data.insurerId.toString());
    if (data.datasetId) {
      formData.append("dataset_id", data.datasetId.toString());
    } else if (data.datasetTitle) {
      formData.append("dataset_title", data.datasetTitle);
    }
    const insurer = (
      data.insurerId === 1
        ? "intellicare"
        : data.insurerId === 2
        ? "maxicare"
        : data.insurerId === 3
        ? "philcare"
        : "unknown"
    ) as string;

    console.log("Insurer: ", insurer);

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
    formData.append("insurerId", data.insurerId.toString());
    if (data.datasetId) {
      formData.append("dataset_id", data.datasetId.toString());
    } else if (data.datasetTitle) {
      formData.append("dataset_title", data.datasetTitle);
    }
    const insurer = (
      data.insurerId === 1
        ? "intellicare"
        : data.insurerId === 2
        ? "maxicare"
        : data.insurerId === 3
        ? "philcare"
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
