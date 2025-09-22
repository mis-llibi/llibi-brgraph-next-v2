"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { ClientSearchContainer } from "./components/ClientSearchContainer";
import { PermissionStatus } from "./components/PermissionStatus";
import type { UserPermissions } from "./types/search.types";

/**
 * Main search client page component with clean architecture
 */
const ClientSearchPage: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user;

  // Type-safe user permissions
  const userPermissions: UserPermissions = {
    canUpload: user?.canUpload,
    canCreate: user?.canCreate,
    canUploadDeck: user?.canUploadDeck,
    canViewDeck: user?.canViewDeck,
    canEdit: user?.canEdit,
    canRemove: user?.canRemove,
    superAdmin: user?.superAdmin,
  };

  return (
    <div className="grow">
      <div className="px-4 sm:px-6 lg:px-8 pt-2 w-full mx-auto">
        {/* Page Header */}
        <header className="sm:flex sm:justify-between sm:items-center mb-8 border-b w-full">
          {/* Page Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              Generate BR Report
            </h1>
          </div>

          {/* User Permissions Display */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <PermissionStatus permissions={userPermissions} />
          </div>
        </header>

        {/* Main Search Interface */}
        <main>
          <ClientSearchContainer />
        </main>
      </div>
    </div>
  );
};

export default ClientSearchPage;