import React, { useRef } from "react";
import Image from "next/image";
import { useClientSearch } from "../hooks/useClientSearch";
import { SearchInput } from "./SearchInput";
import { SuggestionsList } from "./SuggestionsList";
import { LoadingSpinner, ErrorMessage } from "./LoadingSpinner";

/**
 * Main client search container component
 */
export const ClientSearchContainer: React.FC = () => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const {
    searchState,
    selectedClient,
    handleQueryChange,
    handleClientSelect,
    handleKeyDown,
    handleSearch,
    handleFocus,
    canSearch,
  } = useClientSearch();

  const { query, results, selectedIndex, isLoading, error, showSuggestions } =
    searchState;

  return (
    <div className="flex flex-col justify-center items-center py-8">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.svg"
          alt="Company Logo"
          width={288}
          height={144}
          className="w-72 h-36"
          priority
        />
      </div>

      {/* Search Interface */}
      <div
        className="relative flex flex-col items-center justify-center"
        ref={searchContainerRef}
      >
        {/* Error Message */}
        {error && (
          <div className="mb-4">
            <ErrorMessage message={error} />
          </div>
        )}

        {/* Search Input */}
        <SearchInput
          value={query}
          onChange={handleQueryChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          aria-expanded={showSuggestions}
          aria-controls="client-suggestions"
        />

        {/* Suggestions Dropdown */}
        <SuggestionsList
          id="client-suggestions"
          suggestions={results}
          selectedIndex={selectedIndex}
          onSelect={handleClientSelect}
          isVisible={showSuggestions}
        />

        {/* Search Button */}
        <button
          className={`
            h-10 w-32 flex justify-center items-center px-6 mt-4 rounded-lg
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
            ${
              canSearch
                ? "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                : "text-gray-400 bg-gray-200 cursor-not-allowed"
            }
          `.trim()}
          onClick={handleSearch}
          disabled={!canSearch}
          type="button"
        >
          {isLoading ? (
            <LoadingSpinner size="sm" className="text-white" />
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>
    </div>
  );
};
