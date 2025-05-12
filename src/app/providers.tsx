"use client";
import React from "react";
import { SidebarProvider } from "../contexts/SideBarContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GeneratedDataProvider } from "@/contexts/GeneratedDataContext";

type Props = {
  children: React.ReactNode; // Add children to the props type
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GeneratedDataProvider>
          {children} {/* Render the children inside the SidebarProvider */}
        </GeneratedDataProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default Providers;
