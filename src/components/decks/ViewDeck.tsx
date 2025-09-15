import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import LoadingSpinner from "@/components/LoadingSpinner";
import Swal from "sweetalert2";
import "animate.css";

type Deck = {
  id: number;
  name: string;
  key: string;
};

type Props = {
  onClose: () => void;
  show: boolean;
  deck: Deck | null;
};

const ViewDeck = ({ onClose, show, deck }: Props) => {
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset state when modal closes or deck changes
  useEffect(() => {
    const loadViewerUrl = async () => {
      if (!deck) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/protected/decks/getSignedUrl?key=${encodeURIComponent(
            deck.key
          )}`
        );
        const result = await response.json();

        if (response.ok && result.success) {
          setViewerUrl(result.viewerUrl);
        } else {
          throw new Error(result.error || "Failed to load viewer");
        }
      } catch (error) {
        console.error("Error loading viewer:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to load presentation viewer";
        setError(errorMessage);

        Swal.fire({
          icon: "error",
          title: "Viewer Error",
          text: errorMessage,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (!show || !deck) {
      setViewerUrl(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    // Load the signed URL when modal opens
    loadViewerUrl();
  }, [show, deck]);

  const handleRetry = async () => {
    if (!deck) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/protected/decks/getSignedUrl?key=${encodeURIComponent(deck.key)}`
      );
      const result = await response.json();

      if (response.ok && result.success) {
        setViewerUrl(result.viewerUrl);
      } else {
        throw new Error(result.error || "Failed to load viewer");
      }
    } catch (error) {
      console.error("Error loading viewer:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to load presentation viewer";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setViewerUrl(null);
    setError(null);
    onClose();
  };

  if (!deck) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      fullscreen={true}
      backdrop={true}
      keyboard={true}
    >
      <Modal.Header>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">
            View Presentation: {deck.name}
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            onClick={handleClose}
          >
            ×
          </button>
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className="h-[70vh] w-full">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <LoadingSpinner size="lg" color="primary" />
              <p className="text-gray-600">Loading presentation viewer...</p>
            </div>
          )}

          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-red-500 text-lg">⚠️</div>
              <p className="text-gray-600 text-center">
                Failed to load presentation viewer
              </p>
              <p className="text-red-500 text-sm text-center">{error}</p>
              <button
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Try Again
              </button>
            </div>
          )}

          {viewerUrl && !isLoading && !error && (
            <iframe
              src={viewerUrl}
              className="w-full h-full border-0 rounded-md"
              title={`${deck.name} - PowerPoint Presentation`}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              allowFullScreen
              onLoad={() => {
                console.log("Office viewer loaded successfully");
              }}
              onError={(e) => {
                console.error("Error loading Office viewer:", e);
                setError("Failed to load Office viewer");
              }}
            />
          )}
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-500">
            {viewerUrl && !isLoading && !error && (
              <>
                ✅ Viewing via Microsoft Office Online
                <span className="ml-2 text-xs">
                  (Signed URL expires in 1 hour)
                </span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
          >
            Close
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewDeck;
