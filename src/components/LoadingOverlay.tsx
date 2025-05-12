import React from "react";

interface LoadingOverlayProps {
  loading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="p-9 flex flex-col items-center bg-white rounded-lg shadow-lg">
        <div className="flex space-x-4">
          <div
            className="h-5 w-5 bg-blue-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="h-5 w-5 bg-blue-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="h-5 w-5 bg-blue-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"
            style={{ animationDelay: "600ms" }}
          ></div>
          <div
            className="h-5 w-5 bg-blue-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"
            style={{ animationDelay: "900ms" }}
          ></div>
          <div
            className="h-5 w-5 bg-blue-500 rounded-full animate-[bounce_1.5s_infinite_ease-in-out]"
            style={{ animationDelay: "1200ms" }}
          ></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-800">Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
