"use client";
import Swal from "sweetalert2";
import apiClient from "@/lib/axios";
import { convertInsurer } from "@/lib/insurers";

export type generateOneYearRequest = {
  insurer_id: number;
  startDate: string;
  endDate: string;
  py: string;
  clientId: number;
  insurer: string;
  masterlist: string;
};

export const generateOneYear = async (
  data: generateOneYearRequest
): Promise<{
  success: boolean;
  data?: any;
}> => {
  const insurer = convertInsurer(data.insurer_id);
  let res;
  switch (insurer) {
    case "Intellicare":
      res = await apiClient.post("/generate/new/intellicare", data);
      break;
    case "Maxicare":
      res = await apiClient.post("/generate/new/maxicare", data);
      break;
  }

  if (!res) {
    return {
      success: false,
    };
  }

  if (res.data.success) {
    return {
      success: true,
      data: res.data.data,
    };
  }
  return {
    success: false,
  };
};

export const generateMultiYear = async (
  data: generateOneYearRequest[]
): Promise<{
  success: boolean;
  data?: any;
}> => {
  const insurer = convertInsurer(data[0].insurer_id);
  let res;
  console.log("From API", data);
  switch (insurer) {
    case "Intellicare":
      res = await apiClient.post("/generate/old/intellicare", data);
      break;
    case "Maxicare":
      res = await apiClient.post("/generate/old/maxicare", data);
      break;
  }

  if (!res) {
    return {
      success: false,
    };
  }

  if (res.data.success) {
    return {
      success: true,
      data: res.data.data,
    };
  }
  return {
    success: false,
  };
};
