import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";
import Swal from "sweetalert2";
import "animate.css";
import apiClient from "@/lib/axios";

type Props = {
  onClose: () => void;
  show: boolean;
  onSuccess?: () => void;
};

interface Client {
  id: number;
  client_name: string;
}

const UploadDeckWithClientSelect = ({ onClose, show, onSuccess }: Props) => {
  const { file, setFile } = useFile();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedClientId, setSelectedClientId] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [clientSearchTerm, setClientSearchTerm] = useState("");
  const [isClientDropdownOpen, setIsClientDropdownOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [loadingClients, setLoadingClients] = useState(false);

  // PowerPoint file types
  const fileTypes = ["ppt", "pptx"];
  const acceptedMimeTypes = [
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  // Fetch clients when modal opens
  useEffect(() => {
    if (show) {
      fetchClients();
    }
  }, [show]);

  const fetchClients = async () => {
    setLoadingClients(true);
    try {
      const response = await apiClient.get("/clients/getClients");
      if (response.status === 200) {
        setClients(response.data.clients);
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load clients. Please try again.",
      });
    } finally {
      setLoadingClients(false);
    }
  };

  // Filter clients based on search term
  const filteredClients = clients.filter((client) =>
    client.client_name.toLowerCase().includes(clientSearchTerm.toLowerCase())
  );

  const selectedClient = clients.find(
    (client) => client.id.toString() === selectedClientId
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      Swal.fire({
        icon: "error",
        title: "No File Selected",
        text: "Please select a PowerPoint file to upload.",
      });
      return;
    }

    if (!selectedClientId) {
      Swal.fire({
        icon: "error",
        title: "Client Required",
        text: "Please select a client for the deck.",
      });
      return;
    }

    if (!name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Name Required",
        text: "Please enter a name for the deck.",
      });
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("id", selectedClientId);
      formData.append("name", name.trim());
      formData.append("description", description.trim());

      const response = await fetch("/api/protected/decks/uploadDeck", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        Swal.fire({
          icon: "success",
          title: "Upload Successful",
          text: "Your deck has been uploaded successfully!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        // Reset form and close modal
        resetForm();
        onSuccess?.(); // Call the success callback to refresh data
        onClose();
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } finally {
      setIsUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setName("");
    setDescription("");
    setSelectedClientId("");
    setClientSearchTerm("");
    setIsClientDropdownOpen(false);
  };

  const handleClose = () => {
    if (!isUploading) {
      resetForm();
      onClose();
    }
  };

  const handleClientSelect = (client: Client) => {
    setSelectedClientId(client.id.toString());
    setClientSearchTerm(client.client_name);
    setIsClientDropdownOpen(false);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop={isUploading ? "static" : true}
      keyboard={!isUploading}
    >
      <Modal.Header>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">Upload New Deck</h3>
          {!isUploading && (
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              onClick={handleClose}
            >
              ×
            </button>
          )}
        </div>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Selection */}
          <div>
            <label
              htmlFor="clientSelect"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Client <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="clientSelect"
                value={clientSearchTerm}
                onChange={(e) => {
                  setClientSearchTerm(e.target.value);
                  setIsClientDropdownOpen(true);
                  if (!e.target.value) {
                    setSelectedClientId("");
                  }
                }}
                onFocus={() => setIsClientDropdownOpen(true)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder={
                  loadingClients
                    ? "Loading clients..."
                    : "Search and select a client"
                }
                disabled={isUploading || loadingClients}
                required
              />
              {isClientDropdownOpen && !loadingClients && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {filteredClients.length > 0 ? (
                    filteredClients.map((client) => (
                      <div
                        key={client.id}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                        onClick={() => handleClientSelect(client)}
                      >
                        {client.client_name}
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-gray-500">
                      {clientSearchTerm
                        ? "No clients found"
                        : "Start typing to search clients"}
                    </div>
                  )}
                </div>
              )}
            </div>
            {selectedClient && (
              <p className="mt-1 text-sm text-green-600">
                Selected: {selectedClient.client_name}
              </p>
            )}
          </div>

          {/* Name Input */}
          <div>
            <label
              htmlFor="deckName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Deck Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="deckName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter deck name"
              disabled={isUploading}
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="deckDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="deckDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Enter deck description (optional)"
              disabled={isUploading}
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              PowerPoint File <span className="text-red-500">*</span>
            </label>
            <Dropzone
              onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
              disabled={isUploading}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <section className="w-full">
                  <div
                    {...getRootProps({
                      className: `border-2 border-dashed ${
                        isDragActive
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-gray-300"
                      } p-8 rounded-md flex justify-center items-center cursor-pointer hover:border-indigo-500 transition duration-300 ease-in-out ${
                        isUploading ? "opacity-50 cursor-not-allowed" : ""
                      }`,
                    })}
                  >
                    <input
                      {...getInputProps({
                        accept: acceptedMimeTypes.join(","),
                        required: true,
                        id: "deckFile",
                      })}
                    />
                    <div className="flex flex-col items-center">
                      {file ? (
                        <div className="flex flex-col items-center">
                          <p className="text-gray-700 text-center cursor-default">
                            File &quot;{file.name}&quot; is ready to upload.
                          </p>
                          <p className="text-gray-500 text-center mt-2 text-sm">
                            You can drag/drop a new file or click here to
                            replace it.
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <p className="text-gray-500 text-center cursor-pointer">
                            {isDragActive
                              ? "Drop the PowerPoint file here..."
                              : "Drag/Drop a PowerPoint file or "}
                            {!isDragActive && (
                              <span className="text-indigo-500">
                                click here
                              </span>
                            )}
                            {!isDragActive && " to browse"}
                          </p>
                          <p className="text-gray-500 text-center mt-2 text-sm">
                            Allowed file types: {fileTypes.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleClose}
            disabled={isUploading}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isUploading || !file || !name.trim() || !selectedClientId}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2"
          >
            {isUploading && (
              <svg
                className="animate-spin h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isUploading ? "Uploading..." : "Upload Deck"}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default UploadDeckWithClientSelect;
