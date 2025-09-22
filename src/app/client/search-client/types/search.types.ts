export interface ClientSearchResult {
  id: number;
  name: string;
  description?: string;
  insurerName?: string;
  matchScore?: number;
}

export interface SearchState {
  query: string;
  results: ClientSearchResult[];
  selectedIndex: number;
  isLoading: boolean;
  error: string | null;
  showSuggestions: boolean;
}

export interface UserPermissions {
  canUpload?: boolean;
  canCreate?: boolean;
  canUploadDeck?: boolean;
  canViewDeck?: boolean;
  canEdit?: boolean;
  canRemove?: boolean;
  superAdmin?: boolean;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

export interface SuggestionsListProps {
  suggestions: ClientSearchResult[];
  selectedIndex: number;
  onSelect: (client: ClientSearchResult) => void;
  isVisible: boolean;
  id?: string;
}

export interface PermissionStatusProps {
  permissions: UserPermissions;
  className?: string;
}
