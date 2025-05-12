"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import type { ClientData } from "@/types/Client/client";
import ClientHeader from "./ClientHeader";
import ReportGenerator from "./ReportGenerator";
import { FinalDataProvider } from "./FinalData";
import Overview from "@/components/client/Overview";

const Page = () => {
  const params = useParams();
  const { clientId } = params;

  const {
    data: client,
    isLoading,
    isError,
  } = useQuery<ClientData>({
    queryKey: ["client"],
    queryFn: async () => {
      const response = await apiClient.get(`/clients/getClient`, {
        params: {
          clientId: clientId,
        },
      });
      if (response.status === 200) {
        return response.data.client;
      } else {
        throw new Error(response.data.error);
      }
    },
    staleTime: 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FinalDataProvider>
        {client && (
          <>
            <ClientHeader client={client} />
            <div className="flex flex-col justify-center w-full border-b mt-6">
              <ReportGenerator client={client} />
              <Overview client={client} />
            </div>
          </>
        )}
      </FinalDataProvider>
    </>
  );
};

export default Page;
