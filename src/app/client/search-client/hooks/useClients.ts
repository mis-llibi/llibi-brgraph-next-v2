import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import type { clients } from "@prisma/client";
import type { ClientSearchResult } from "../types/search.types";
import { normalizeClient } from "../utils/search.utils";

/**
 * Fetches all clients from the API
 */
const fetchAllClients = async (): Promise<clients[]> => {
  const response = await apiClient.get("/clients");
  return response.data;
};

/**
 * Hook for fetching and managing clients data
 */
export const useClients = () => {
  return useQuery({
    queryKey: ["clients", "search"],
    queryFn: fetchAllClients,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    gcTime: 10 * 60 * 1000, // 10 minutes garbage collection
    select: (data: clients[]): ClientSearchResult[] =>
      data.map(normalizeClient),
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

/**
 * Gets client redirect URL for navigation
 */
const getClientRedirectUrl = async (clientId: number): Promise<string> => {
  const response = await apiClient.get("/clients/getClientId", {
    params: { clientId },
  });

  if (response.status !== 200) {
    throw new Error(response.data.error || "Failed to get client redirect URL");
  }

  return response.data.redirectURL;
};

/**
 * Hook for navigating to a specific client
 */
export const useClientNavigation = () => {
  return {
    getRedirectUrl: getClientRedirectUrl,
  };
};
