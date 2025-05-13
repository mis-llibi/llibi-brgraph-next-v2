"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import xmark from "./icons/xmark.svg";
import check from "./icons/check.svg";
import Image from "next/image";
import apiClient from "@/lib/axios";
import type { clients } from "../../../../prisma/generated/client";
import { useRouter } from "next/navigation";

const Page = () => {
  const [searchClient, setSearchClient] = useState<{
    id?: number;
    client_name: string;
  } | null>(null);
  const [clients, setClients] = useState<clients[]>([]);
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const filterClients = clients.filter((client) => {
    const clientNameLower = client.client_name.toLowerCase();
    const searchClientLower = searchClient?.client_name.toLowerCase();
    return (
      clientNameLower.includes(searchClientLower || "") &&
      clientNameLower !== searchClientLower
    );
  });

  const handleClick = (client: clients) => {
    setSearchClient(client);
  };

  const handleSearch = async () => {
    console.log(searchClient);
    try {
      const response = await apiClient.get("/clients/getClientId", {
        params: {
          clientId: searchClient?.id,
        },
      });
      if (response.status === 200) {
        router.push(response.data.redirectURL);
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.error("Failed to fetch client", error);
    }
  };
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await apiClient.get("/clients");
        setClients(response.data);
      } catch (error) {
        console.error("Failed to fetch clients", error);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className=" grow">
      <div className="px-4 sm:px-6 lg:px-8 pt-2 w-full mx-auto ">
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8 border-b  w-full ">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              Generate BR Report
            </h1>
          </div>
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Permissions Checker */}
            <div className="grid grid-cols-2 gap-4 items-center p-4 bg-white ">
              <div className="flex items-center">
                {user?.canUpload ? (
                  <Image priority src={check} alt="check" />
                ) : (
                  <Image priority src={xmark} alt="xmark" />
                )}
                <span className="text-sm text-gray-500">
                  Can Upload BR Reports
                </span>
              </div>
              <div className="flex items-center">
                {user?.canCreate ? (
                  <Image priority src={check} alt="check" />
                ) : (
                  <Image priority src={xmark} alt="xmark" />
                )}
                <span className="text-sm text-gray-500">
                  Can Create BR Reports
                </span>
              </div>
              <div className="flex items-center">
                {user?.canUploadDeck ? (
                  <Image priority src={check} alt="check" />
                ) : (
                  <Image priority src={xmark} alt="xmark" />
                )}
                <span className="text-sm text-gray-500">Can Upload Deck</span>
              </div>
              <div className="flex items-center">
                {user?.canViewDeck ? (
                  <Image priority src={check} alt="check" />
                ) : (
                  <Image priority src={xmark} alt="xmark" />
                )}
                <span className="text-sm text-gray-500">Can View Deck</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-node flex flex-col justify-center items-center py-8">
          <img src={"/logo.svg"} alt="Logo" className="w-72 h-36" />
          <div className="relative flex flex-col items-center justify-center">
            <input
              type="text"
              placeholder="Input Client Name"
              className="w-96 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchClient?.client_name || ""}
              onChange={(e) => {
                setSearchClient({
                  ...searchClient,
                  client_name: e.target.value,
                });
              }}
            />
            {searchClient && (
              <ul className="absolute top-10 w-96 border border-gray-300 rounded-lg mt-2 bg-white z-10">
                {filterClients.map((client, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleClick(client);
                    }}
                  >
                    {client.client_name}
                  </li>
                ))}
              </ul>
            )}
            <button
              className="h-10 w-32 flex justify-center px-6 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              onClick={handleSearch}
            >
              <span className="text-center mt-auto mb-auto">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
