import { describe, expect, it, vi } from "vitest";
import {
  debounce,
  filterClients,
  isValidClientSelection,
  normalizeClient,
} from "./search.utils";
import type { ClientSearchResult } from "../types/search.types";

describe("search utilities", () => {
  it("normalizes Prisma client shape for search results", () => {
    expect(
      normalizeClient({
        id: 1,
        client_name: "Acme",
        description: null,
        insurer_id: 2,
      }),
    ).toEqual({
      id: 1,
      name: "Acme",
      description: undefined,
      insurerName: undefined,
    });
  });

  it("filters partial matches and excludes exact matches", () => {
    const clients: ClientSearchResult[] = [
      { id: 1, name: "Acme Holdings" },
      { id: 2, name: "North Acme" },
      { id: 3, name: "Acme" },
      { id: 4, name: "Other Client" },
    ];

    expect(filterClients(clients, "acme")).toEqual([
      { id: 1, name: "Acme Holdings", matchScore: 100 },
      { id: 2, name: "North Acme", matchScore: 80 },
    ]);
  });

  it("validates selectable clients", () => {
    expect(isValidClientSelection(null)).toBe(false);
    expect(isValidClientSelection({ id: 1, name: "" })).toBe(false);
    expect(isValidClientSelection({ id: 1, name: "Acme" })).toBe(true);
  });

  it("debounces function calls", () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const debounced = debounce(callback, 250);

    debounced("first");
    debounced("second");
    vi.advanceTimersByTime(249);
    expect(callback).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith("second");
    vi.useRealTimers();
  });
});
