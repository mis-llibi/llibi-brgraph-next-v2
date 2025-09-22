import React from "react";
import Image from "next/image";
import type { PermissionStatusProps } from "../types/search.types";
import checkIcon from "../icons/check.svg";
import xmarkIcon from "../icons/xmark.svg";

interface PermissionItemProps {
  hasPermission: boolean;
  label: string;
}

/**
 * Individual permission status item
 */
const PermissionItem: React.FC<PermissionItemProps> = ({
  hasPermission,
  label,
}) => (
  <div className="flex items-center space-x-2">
    <div className="flex-shrink-0 w-4 h-4">
      <Image
        priority
        src={hasPermission ? checkIcon : xmarkIcon}
        alt={hasPermission ? "Granted" : "Denied"}
        width={16}
        height={16}
        className={hasPermission ? "text-green-600" : "text-red-600"}
      />
    </div>
    <span
      className={`text-sm ${
        hasPermission ? "text-green-700" : "text-gray-500"
      }`}
    >
      {label}
    </span>
  </div>
);

/**
 * Displays user permissions in a clean grid layout
 */
export const PermissionStatus: React.FC<PermissionStatusProps> = ({
  permissions,
  className = "",
}) => {
  const permissionItems = [
    { key: "canUpload", label: "Can Upload BR Reports" },
    { key: "canCreate", label: "Can Create BR Reports" },
    { key: "canUploadDeck", label: "Can Upload Deck" },
    { key: "canViewDeck", label: "Can View Deck" },
  ] as const;

  return (
    <div
      className={`
        grid grid-cols-2 gap-4 items-center p-4 bg-white rounded-lg 
        ${className}
      `.trim()}
      role="region"
      aria-label="User permissions"
    >
      {permissionItems.map(({ key, label }) => (
        <PermissionItem
          key={key}
          hasPermission={Boolean(permissions[key])}
          label={label}
        />
      ))}
    </div>
  );
};
