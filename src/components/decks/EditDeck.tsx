import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import Dropzone from "react-dropzone";
import useFile from "@/hooks/useFile";
import LoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";
import "animate.css";

type Deck = {
  id: number;
  name: string;
  description: string;
  key: string;
};

type Props = {
  onClose: () => void;
  show: boolean;
  deck: Deck | null;
  onSuccess?: () => void;
};

const EditDeck = ({ onClose, show, deck, onSuccess }: Props) => {
  const { file, setFile } = useFile();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // PowerPoint file types
  const fileTypes = ["ppt", "pptx"];
  const acceptedMimeTypes = [
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  // Update form when deck prop changes
  useEffect(() => {
    if (deck) {
      setName(deck.name);
      setDescription(deck.description || "");
    }
  }, [deck]);

  // Reset form when modal closes
  useEffect(() => {
    if (!show) {
      setFile(null);
      setName("");
      setDescription("");
    }
  }, [show, setFile]);

  const handleSave = async () => {
    if (!deck) return;

    if (!name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Name Required",
        text: "Please enter a name for the deck.",
      });
      return;
    }

    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Confirm Changes",
      text: file
        ? "Are you sure you want to update this deck? This will replace the existing file."
        : "Are you sure you want to update this deck information?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });

    if (!result.isConfirmed) return;

    setIsSaving(true);

    try {
      const formData = new FormData();
      formData.append("id", deck.id.toString());
      formData.append("name", name.trim());
      formData.append("description", description.trim());

      // Only append file if a new file was selected
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch("/api/protected/decks/updateDeck", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          text: "Your deck has been updated successfully!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        // Reset form and close modal
        setFile(null);
        onSuccess?.();
        onClose();
      } else {
        throw new Error(result.error || "Update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
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
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    if (!isSaving) {
      setFile(null);
      onClose();
    }
  };

  if (!deck) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop={isSaving ? "static" : true}
      keyboard={!isSaving}
    >
      <Modal.Header>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">Edit Deck</h3>
          {!isSaving && (
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
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div>
            <label
              htmlFor="editDeckName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Deck Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="editDeckName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter deck name"
              disabled={isSaving}
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label
              htmlFor="editDeckDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="editDeckDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Enter deck description (optional)"
              disabled={isSaving}
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Replace PowerPoint File (Optional)
            </label>
            <p className="text-sm text-gray-600 mb-3">
              Leave empty to keep the current file, or upload a new file to
              replace it.
            </p>
            <Dropzone
              onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}
              disabled={isSaving}
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
                        isSaving ? "opacity-50 cursor-not-allowed" : ""
                      }`,
                    })}
                  >
                    <input
                      {...getInputProps({
                        accept: acceptedMimeTypes.join(","),
                        id: "editDeckFile",
                      })}
                    />
                    <div className="flex flex-col items-center">
                      {file ? (
                        <div className="flex flex-col items-center">
                          <p className="text-gray-700 text-center cursor-default">
                            New file &quot;{file.name}&quot; selected for
                            replacement.
                          </p>
                          <p className="text-gray-500 text-center mt-2 text-sm">
                            You can drag/drop a different file or click here to
                            change it.
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
                            {!isDragActive && " to replace current file"}
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
            disabled={isSaving}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving || !name.trim()}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center gap-2"
          >
            {isSaving && <LoadingSpinner size="sm" color="white" />}
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditDeck;
