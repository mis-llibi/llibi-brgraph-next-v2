import crypto from "crypto";

/**
 * Generate a secure random password
 * @param length - Length of the password (default: 12)
 * @returns Generated password string
 */
export function generateSecurePassword(length: number = 12): string {
  const charset =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    password += charset[randomIndex];
  }

  // Ensure password contains at least one uppercase, lowercase, number, and special char
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  if (!hasUpper || !hasLower || !hasNumber || !hasSpecial) {
    // Regenerate if missing required character types
    return generateSecurePassword(length);
  }

  return password;
}

/**
 * Get human-readable permission names for email display
 * @param user - User object with permission flags
 * @returns Array of permission descriptions
 */
export function getPermissionDescriptions(user: {
  admin?: boolean;
  superAdmin?: boolean;
  canUpload?: boolean;
  canCreate?: boolean;
  canViewDeck?: boolean;
  canUploadDeck?: boolean;
  canAdd?: boolean;
  canRemove?: boolean;
  canEdit?: boolean;
}): string[] {
  const permissions: string[] = [];

  if (user.superAdmin) {
    permissions.push("Super Administrator - Full system access");
    permissions.push("Can manage administrators and users");
    permissions.push("Can delete decks and sensitive data");
    return permissions;
  }

  if (user.admin) {
    permissions.push("Administrator - Can manage users");
    if (user.canAdd) permissions.push("Can add new users");
    if (user.canRemove) permissions.push("Can remove users");
    if (user.canEdit) permissions.push("Can edit user details");
  }

  // User permissions
  if (user.canUpload) permissions.push("Can upload data files");
  if (user.canCreate) permissions.push("Can create graphs and reports");
  if (user.canViewDeck) permissions.push("Can view presentation decks");
  if (user.canUploadDeck) permissions.push("Can upload presentation decks");

  return permissions.length > 0 ? permissions : ["Basic user access"];
}

/**
 * Determine user role based on flags
 */
export function getUserRole(user: {
  admin?: boolean;
  superAdmin?: boolean;
}): "superadmin" | "admin" | "user" {
  if (user.superAdmin) return "superadmin";
  if (user.admin) return "admin";
  return "user";
}
