import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { ClientSearchResult, SearchState } from "../types/search.types";
import {
  filterClients,
  KEYBOARD_KEYS,
  isValidClientSelection,
} from "../utils/search.utils";
import { useClients, useClientNavigation } from "./useClients";

/**
 * Debounce function specifically for search
 */
const debounceSearch = (
  func: (query: string) => void,
  delay: number
): ((query: string) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (query: string) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(query), delay);
  };
};

/**
 * Main hook for client search functionality
 */
export const useClientSearch = () => {
  const router = useRouter();
  const {
    data: clients = [],
    isLoading: isLoadingClients,
    error: clientsError,
  } = useClients();
  const { getRedirectUrl } = useClientNavigation();

  // Search state
  const [searchState, setSearchState] = useState<SearchState>({
    query: "",
    results: [],
    selectedIndex: -1,
    isLoading: false,
    error: null,
    showSuggestions: false,
  });

  // Selected client for navigation
  const [selectedClient, setSelectedClient] =
    useState<ClientSearchResult | null>(null);

  // Debounced search function
  const debouncedSearch = useMemo(
    () =>
      debounceSearch((query: string) => {
        const results = filterClients(clients, query);
        setSearchState((prev) => ({
          ...prev,
          results,
          selectedIndex: results.length > 0 ? 0 : -1,
        }));
      }, 300),
    [clients]
  );

  // Handle query changes
  const handleQueryChange = useCallback(
    (query: string) => {
      setSearchState((prev) => ({
        ...prev,
        query,
        showSuggestions: query.trim().length > 0,
        error: null,
      }));

      if (query.trim()) {
        debouncedSearch(query);
      } else {
        setSearchState((prev) => ({
          ...prev,
          results: [],
          selectedIndex: -1,
        }));
      }
    },
    [debouncedSearch]
  );

  // Handle client selection
  const handleClientSelect = useCallback((client: ClientSearchResult) => {
    setSelectedClient(client);
    setSearchState((prev) => ({
      ...prev,
      query: client.name,
      showSuggestions: false,
      selectedIndex: -1,
      results: [],
    }));
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const { results, selectedIndex, showSuggestions } = searchState;

      if (!showSuggestions || results.length === 0) return;

      switch (event.key) {
        case KEYBOARD_KEYS.ARROW_DOWN:
          event.preventDefault();
          setSearchState((prev) => ({
            ...prev,
            selectedIndex: Math.min(selectedIndex + 1, results.length - 1),
          }));
          break;

        case KEYBOARD_KEYS.ARROW_UP:
          event.preventDefault();
          setSearchState((prev) => ({
            ...prev,
            selectedIndex: Math.max(selectedIndex - 1, 0),
          }));
          break;

        case KEYBOARD_KEYS.ENTER:
          event.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleClientSelect(results[selectedIndex]);
          }
          break;

        case KEYBOARD_KEYS.ESCAPE:
          setSearchState((prev) => ({
            ...prev,
            showSuggestions: false,
            selectedIndex: -1,
          }));
          break;
      }
    },
    [searchState, handleClientSelect]
  );

  // Handle search submission
  const handleSearch = useCallback(async () => {
    if (!isValidClientSelection(selectedClient)) {
      setSearchState((prev) => ({
        ...prev,
        error: "Please select a valid client",
      }));
      return;
    }

    setSearchState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const redirectUrl = await getRedirectUrl(selectedClient.id);
      router.push(redirectUrl);
    } catch (error) {
      setSearchState((prev) => ({
        ...prev,
        isLoading: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to navigate to client",
      }));
    }
  }, [selectedClient, getRedirectUrl, router]);

  // Handle focus events
  const handleFocus = useCallback(() => {
    if (searchState.query.trim()) {
      setSearchState((prev) => ({ ...prev, showSuggestions: true }));
    }
  }, [searchState.query]);

  // Handle blur events
  const handleBlur = useCallback(() => {
    // Delay hiding suggestions to allow click events to fire
    setTimeout(() => {
      setSearchState((prev) => ({ ...prev, showSuggestions: false }));
    }, 150);
  }, []);

  // Reset search
  const resetSearch = useCallback(() => {
    setSearchState({
      query: "",
      results: [],
      selectedIndex: -1,
      isLoading: false,
      error: null,
      showSuggestions: false,
    });
    setSelectedClient(null);
  }, []);

  return {
    // State
    searchState: {
      ...searchState,
      isLoading: searchState.isLoading || isLoadingClients,
      error:
        searchState.error || (clientsError ? "Failed to load clients" : null),
    },
    selectedClient,

    // Actions
    handleQueryChange,
    handleClientSelect,
    handleKeyDown,
    handleSearch,
    handleFocus,
    handleBlur,
    resetSearch,

    // Computed
    canSearch: isValidClientSelection(selectedClient) && !searchState.isLoading,
  };
};
