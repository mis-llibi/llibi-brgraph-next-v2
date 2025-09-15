import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { FaDownload } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import UploadDeck from "@/components/decks/UploadDeck";
import EditDeck from "@/components/decks/EditDeck";
import ViewDeck from "@/components/decks/ViewDeck";
import LoadingSpinner from "@/components/LoadingSpinner";

const Decks = () => {
  const params = useParams();
  const { clientId } = params;
  const queryClient = useQueryClient();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState<{
    id: number;
    name: string;
    description: string;
    key: string;
  } | null>(null);
  const [selectedViewDeck, setSelectedViewDeck] = useState<{
    id: number;
    name: string;
    key: string;
  } | null>(null);
  const [downloadingDeckId, setDownloadingDeckId] = useState<number | null>(
    null
  );

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

  const handleUploadSuccess = () => {
    // Refresh the decks list after successful upload
    queryClient.invalidateQueries({ queryKey: ["decks", clientId] });
    setShowUploadModal(false);
  };

  const handleEditSuccess = () => {
    // Refresh the decks list after successful edit
    queryClient.invalidateQueries({ queryKey: ["decks", clientId] });
    setShowEditModal(false);
    setSelectedDeck(null);
  };

  const handleEditDeck = (deck: {
    id: number;
    name: string;
    description: string;
    key: string;
  }) => {
    setSelectedDeck(deck);
    setShowEditModal(true);
  };

  const handleViewDeck = (deck: { id: number; name: string; key: string }) => {
    setSelectedViewDeck(deck);
    setShowViewModal(true);
  };

  const handleDownload = async (deck: {
    id: number;
    key: string;
    name: string;
  }) => {
    setDownloadingDeckId(deck.id);
    try {
      // Create a download API call to get the file
      const response = await fetch(
        `/api/protected/decks/downloadDeck?key=${encodeURIComponent(deck.key)}`
      );

      if (!response.ok) {
        throw new Error("Download failed");
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a download URL and trigger download
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = deck.name.endsWith(".pptx")
        ? deck.name
        : `${deck.name}.pptx`;

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download the deck. Please try again.");
    } finally {
      setDownloadingDeckId(null);
    }
  };

  return (
    <div className=" mx-8 my-4">
      <div className=" flex justify-between items-center">
        <h3 className=" text-xl font-bold">Decks</h3>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-2 px-4 rounded shadow-md transition duration-200"
        >
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
              Description
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
                colSpan={5}
                className="text-center border border-gray-300 px-4 py-2"
              >
                Loading...
              </td>
            </tr>
          ) : decks && decks.length > 0 ? (
            decks.map(
              (deck: {
                id: number;
                name: string;
                description: string;
                key: string;
                createdAt: string;
                updatedAt: string;
              }) => (
                <tr key={deck.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {deck.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {deck.description || "No description"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {new Date(deck.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {new Date(deck.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex gap-4 w-full justify-evenly">
                      <div
                        className={`relative bg-green-400 w-12 h-12 rounded-lg flex items-center justify-center group cursor-pointer transition-colors duration-200 ${
                          downloadingDeckId === deck.id
                            ? "bg-green-500 cursor-wait"
                            : "hover:bg-green-500"
                        }`}
                        title={
                          downloadingDeckId === deck.id
                            ? "Downloading..."
                            : "Download Deck"
                        }
                        onClick={() =>
                          downloadingDeckId === null && handleDownload(deck)
                        }
                      >
                        {downloadingDeckId === deck.id ? (
                          <LoadingSpinner size="md" color="white" />
                        ) : (
                          <FaDownload className="cursor-pointer" />
                        )}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {downloadingDeckId === deck.id
                            ? "Downloading..."
                            : "Download"}
                        </div>
                      </div>
                      <div
                        className="relative bg-blue-400 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-500 group cursor-pointer"
                        title="Edit Deck"
                        onClick={() => handleEditDeck(deck)}
                      >
                        <FaEdit className="cursor-pointer" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          Edit
                        </div>
                      </div>
                      <div
                        className="relative bg-purple-400 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-purple-500 group cursor-pointer"
                        title="View Deck"
                        onClick={() => handleViewDeck(deck)}
                      >
                        <FaRegEye className="cursor-pointer" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          View
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center border border-gray-300 px-4 py-2"
              >
                No decks found for this client.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Upload Deck Modal */}
      <UploadDeck
        show={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        clientId={clientId as string}
        onSuccess={handleUploadSuccess}
      />

      {/* Edit Deck Modal */}
      <EditDeck
        show={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedDeck(null);
        }}
        deck={selectedDeck}
        onSuccess={handleEditSuccess}
      />

      {/* View Deck Modal */}
      <ViewDeck
        show={showViewModal}
        onClose={() => {
          setShowViewModal(false);
          setSelectedViewDeck(null);
        }}
        deck={selectedViewDeck}
      />
    </div>
  );
};

export default Decks;
