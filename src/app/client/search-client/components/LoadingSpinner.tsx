import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Loading spinner component
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600
        ${className}
      `.trim()}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

/**
 * Error message component with optional retry
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  className = "",
}) => (
  <div
    className={`
      p-4 bg-red-50 border border-red-200 rounded-lg text-red-800
      ${className}
    `.trim()}
    role="alert"
  >
    <div className="flex items-center justify-between">
      <span className="text-sm">{message}</span>
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            ml-4 px-3 py-1 text-xs bg-red-600 text-white rounded
            hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
            transition-colors duration-200
          "
        >
          Retry
        </button>
      )}
    </div>
  </div>
);
