"use client";
import apiClient from "@/lib/axios";

export type generateOneYearRequest = {
  insurer_id: number;
  clientId: number;
  datasetId: number;
  title: string;
};

export const generateOneYear = async (
  data: generateOneYearRequest
): Promise<{
  success: boolean;
  data?: any;
}> => {
  const res = await apiClient.post("/generate/new", data);

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
  console.log("From API", data);
  const res = await apiClient.post("/generate/old", data);

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
