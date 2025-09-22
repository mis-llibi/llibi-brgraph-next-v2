import React from "react";
import type { SearchInputProps } from "../types/search.types";

/**
 * Accessible search input component with keyboard navigation support
 */
export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onFocus,
  onKeyDown,
  placeholder = "Input Client Name",
  className = "",
  disabled = false,
  "aria-expanded": ariaExpanded = false,
  "aria-controls": ariaControls,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`
        w-96 h-12 px-4 rounded-lg border border-gray-300 
        focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
        disabled:bg-gray-100 disabled:cursor-not-allowed
        transition-colors duration-200
        ${className}
      `.trim()}
      value={value}
      onChange={handleChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
      role="combobox"
      aria-autocomplete="list"
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      autoComplete="off"
    />
  );
};
