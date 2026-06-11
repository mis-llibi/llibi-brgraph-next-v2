import { describe, expect, it } from "vitest";
import type { AuthenticatedUser } from "./auth-middleware";
import {
  requireAdmin,
  requireAdminManagement,
  requirePermission,
  requireSuperAdmin,
  requireUserManagement,
} from "./auth-middleware";

const baseUser: AuthenticatedUser = {
  id: "1",
  name: "Test User",
  email: "test@example.com",
  admin: false,
  superAdmin: false,
  canUpload: false,
  canCreate: false,
  canViewDeck: false,
  canUploadDeck: false,
  canAdd: false,
  canRemove: false,
  canEdit: false,
  isActive: true,
  mustChangePassword: false,
};

async function responseJson(response: Response) {
  return response.json() as Promise<{ error: string }>;
}

describe("auth permission helpers", () => {
  it("allows super admins through every permission helper", () => {
    const user = { ...baseUser, superAdmin: true };

    expect(requireSuperAdmin(user)).toBeNull();
    expect(requireAdmin(user)).toBeNull();
    expect(requirePermission(user, "canUpload")).toBeNull();
    expect(requireUserManagement(user)).toBeNull();
    expect(requireAdminManagement(user)).toBeNull();
  });

  it("rejects non-admin users from admin-only helpers", async () => {
    const response = requireAdmin(baseUser);

    expect(response?.status).toBe(403);
    await expect(responseJson(response as Response)).resolves.toEqual({
      error: "Admin access required",
    });
  });

  it("requires explicit permissions for non-super-admin users", async () => {
    const response = requirePermission(baseUser, "canCreate");

    expect(response?.status).toBe(403);
    await expect(responseJson(response as Response)).resolves.toEqual({
      error: "Permission required: canCreate",
    });
    expect(requirePermission({ ...baseUser, canCreate: true }, "canCreate")).toBeNull();
  });

  it("allows admin user management when at least one management permission is present", () => {
    expect(requireUserManagement({ ...baseUser, admin: true })).not.toBeNull();
    expect(requireUserManagement({ ...baseUser, admin: true, canEdit: true })).toBeNull();
  });

  it("reserves admin management for super admins", async () => {
    const response = requireAdminManagement({ ...baseUser, admin: true });

    expect(response?.status).toBe(403);
    await expect(responseJson(response as Response)).resolves.toEqual({
      error: "SuperAdmin access required for admin management",
    });
  });
});
