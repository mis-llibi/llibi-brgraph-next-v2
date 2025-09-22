import React from "react";
import type { SuggestionsListProps } from "../types/search.types";

/**
 * Accessible suggestions dropdown component
 */
export const SuggestionsList: React.FC<SuggestionsListProps> = ({
  suggestions,
  selectedIndex,
  onSelect,
  isVisible,
  id = "suggestions-list",
}) => {
  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <ul
      id={id}
      role="listbox"
      className="
        absolute top-12 w-96 border border-gray-300 rounded-lg mt-2 bg-white z-10
        shadow-lg max-h-60 overflow-y-auto
      "
    >
      {suggestions.map((client, index) => (
        <li
          key={client.id}
          role="option"
          aria-selected={index === selectedIndex}
          className={`
            px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0
            transition-colors duration-150
            ${
              index === selectedIndex
                ? "bg-blue-50 text-blue-900 border-blue-200"
                : "hover:bg-gray-50 text-gray-900"
            }
          `.trim()}
          onClick={() => onSelect(client)}
          onMouseEnter={() => {
            // Optional: Update selected index on hover for better UX
          }}
        >
          <div className="flex flex-col">
            <span className="font-medium text-sm">{client.name}</span>
            
          </div>
        </li>
      ))}
    </ul>
  );
};
