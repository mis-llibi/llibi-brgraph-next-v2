import React, { useState } from "react";
import Modal from "../Modal";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";
import Swal from "sweetalert2";
import "animate.css";

type Props = {
  onClose: () => void;
  show: boolean;
  clientId: string;
  onSuccess?: () => void;
};

const UploadDeck = ({ onClose, show, clientId, onSuccess }: Props) => {
  const { file, setFile } = useFile();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // PowerPoint file types
  const fileTypes = ["ppt", "pptx"];
  const acceptedMimeTypes = [
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

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
      formData.append("id", clientId);
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
        setFile(null);
        setName("");
        setDescription("");
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

  const handleClose = () => {
    if (!isUploading) {
      setFile(null);
      setName("");
      setDescription("");
      onClose();
    }
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
          <h3 className="text-xl font-semibold">Upload Deck</h3>
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
            disabled={isUploading || !file || !name.trim()}
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

export default UploadDeck;
