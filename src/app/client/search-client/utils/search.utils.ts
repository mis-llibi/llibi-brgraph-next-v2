import type { clients } from "@prisma/client";
import type { ClientSearchResult } from "../types/search.types";

/**
 * Normalizes Prisma client data to ClientSearchResult format
 */
export const normalizeClient = (client: clients): ClientSearchResult => ({
  id: client.id,
  name: client.client_name,
  description: client.description || undefined,
  insurerName: undefined, // Will be populated by API if needed
});

/**
 * Filters clients based on search query with basic fuzzy matching
 */
export const filterClients = (
  clients: ClientSearchResult[],
  query: string
): ClientSearchResult[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();

  return clients
    .filter((client) => {
      const clientName = client.name.toLowerCase();
      return clientName.includes(searchTerm);
    })
    .map((client) => ({
      ...client,
      matchScore: calculateMatchScore(client.name, searchTerm),
    }))
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 10); // Limit to top 10 results
};

/**
 * Calculates match score for search relevance
 */
const calculateMatchScore = (
  clientName: string,
  searchTerm: string
): number => {
  const name = clientName.toLowerCase();
  const term = searchTerm.toLowerCase();

  if (name === term) return 120;

  // Match at start gets the next-highest score
  if (name.startsWith(term)) return 100;

  // Word boundary match gets high score
  if (name.includes(` ${term}`)) return 80;

  // Contains match gets medium score
  if (name.includes(term)) return 60;

  return 0;
};

/**
 * Debounce utility function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Keyboard navigation key mappings
 */
export const KEYBOARD_KEYS = {
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ENTER: "Enter",
  ESCAPE: "Escape",
  TAB: "Tab",
} as const;

/**
 * Validates if a client result is valid for selection
 */
export const isValidClientSelection = (
  client: ClientSearchResult | null
): client is ClientSearchResult => {
  return (
    client !== null &&
    typeof client.id === "number" &&
    client.name.trim() !== ""
  );
};
