import React from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { FaDownload } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaFileUpload } from "react-icons/fa";
import Modal from "@/components/Modal";

const Decks = () => {
  const params = useParams();
  const { clientId } = params;

  const { data: decks, isLoading } = useQuery({
    queryKey: ["decks", clientId],
    queryFn: async () => {
      const response = await apiClient.get(`/decks/getDecks`, {
        params: {
          clientId: clientId,
        },
      });
      if (response.status === 200) {
        return response.data.decks;
      } else {
        throw new Error(response.data.error);
      }
    },
    staleTime: 0,
  });

  return (
    <div className=" mx-8 my-4">
      <div className=" flex justify-between items-center">
        <h3 className=" text-xl font-bold">Decks (coming soon)</h3>
        <button className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded shadow-md transition duration-200">
          <FaFileUpload className="text-blue-500 cursor-pointer" />
          <span className="ml-2 text-blue-500">Upload New Deck</span>
        </button>
      </div>

      <table className="w-full mt-4 table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-700">
              Deck Name
            </th>
            <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-700">
              Date Uploaded
            </th>
            <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-700">
              Last Updated
            </th>
            <th className="px-4 py-2 border border-gray-300 font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td
                colSpan={4}
                className="text-center border border-gray-300 px-4 py-2"
              >
                Loading...
              </td>
            </tr>
          ) : decks && decks.length > 0 ? (
            decks.map((deck: any) => (
              <tr key={deck.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">
                  {deck.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(deck.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(deck.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <div className="flex gap-4">
                    <div className=" bg-green-400 w-14 h-14 rounded-lg flex items-center justify-center hover:bg-green-500">
                      <FaDownload className=" cursor-pointer" />
                    </div>
                    <div className=" bg-blue-400 w-14 h-14 rounded-lg flex items-center justify-center hover:bg-blue-500">
                      <GrDocumentUpdate className=" cursor-pointer" />
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="text-center border border-gray-300 px-4 py-2"
              >
                No decks found for this client.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Decks;
