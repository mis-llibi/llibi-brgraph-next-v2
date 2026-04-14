import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { prisma } from '@/lib/prisma';

export interface AuthenticatedUser {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  superAdmin: boolean;
  canUpload: boolean;
  canCreate: boolean;
  canViewDeck: boolean;
  canUploadDeck: boolean;
  canAdd: boolean;
  canRemove: boolean;
  canEdit: boolean;
  isActive: boolean;
  mustChangePassword: boolean;
}

export interface PageAuthOptions {
  signInRedirect?: string;
  passwordChangeRedirect?: string;
}

export type PageAuthResult =
  | { user: AuthenticatedUser; redirectTo?: never }
  | { user?: never; redirectTo: string };

/**
 * Middleware to check authentication and return user session
 */
export async function requireAuth(): Promise<{ user: AuthenticatedUser } | NextResponse> {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Fetch fresh user data from database to ensure current permissions
    const user = await prisma.user.findUnique({
      where: { id: parseInt(session.user.id) },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
        superAdmin: true,
        canUpload: true,
        canCreate: true,
        canViewDeck: true,
        canUploadDeck: true,
        canAdd: true,
        canRemove: true,
        canEdit: true,
        isActive: true,
        mustChangePassword: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 403 }
      );
    }

    return {
      user: {
        ...user,
        id: user.id.toString(),
      } as AuthenticatedUser
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

/**
 * Check authentication for server-rendered pages and return a redirect target when needed.
 */
export async function requirePageAuth(
  options: PageAuthOptions = {}
): Promise<PageAuthResult> {
  const {
    signInRedirect = '/api/auth/signin?callbackUrl=/dashboard',
    passwordChangeRedirect = '/change-password',
  } = options;

  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return { redirectTo: signInRedirect };
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(session.user.id) },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
        superAdmin: true,
        canUpload: true,
        canCreate: true,
        canViewDeck: true,
        canUploadDeck: true,
        canAdd: true,
        canRemove: true,
        canEdit: true,
        isActive: true,
        mustChangePassword: true,
      },
    });

    if (!user || !user.isActive) {
      return { redirectTo: signInRedirect };
    }

    if (user.mustChangePassword) {
      return { redirectTo: passwordChangeRedirect };
    }

    return {
      user: {
        ...user,
        id: user.id.toString(),
      } as AuthenticatedUser,
    };
  } catch (error) {
    console.error('Page authentication error:', error);
    return { redirectTo: signInRedirect };
  }
}

/**
 * Check if user is a SuperAdmin
 */
export function requireSuperAdmin(user: AuthenticatedUser): NextResponse | null {
  if (!user.superAdmin) {
    return NextResponse.json(
      { error: 'SuperAdmin access required' },
      { status: 403 }
    );
  }
  return null;
}

/**
 * Check if user is an Admin (admin or superAdmin)
 */
export function requireAdmin(user: AuthenticatedUser): NextResponse | null {
  if (!user.admin && !user.superAdmin) {
    return NextResponse.json(
      { error: 'Admin access required' },
      { status: 403 }
    );
  }
  return null;
}

/**
 * Check if user has specific permission
 */
export function requirePermission(
  user: AuthenticatedUser,
  permission: keyof Pick<AuthenticatedUser, 'canUpload' | 'canCreate' | 'canViewDeck' | 'canUploadDeck' | 'canAdd' | 'canRemove' | 'canEdit'>
): NextResponse | null {
  // SuperAdmin always has all permissions
  if (user.superAdmin) return null;
  
  if (!user[permission]) {
    return NextResponse.json(
      { error: `Permission required: ${permission}` },
      { status: 403 }
    );
  }
  return null;
}

/**
 * Check if user can manage other users (admin with canAdd/canRemove/canEdit or superadmin)
 */
export function requireUserManagement(user: AuthenticatedUser): NextResponse | null {
  // SuperAdmin can always manage users
  if (user.superAdmin) return null;
  
  // Admin must have user management permissions
  if (!user.admin || (!user.canAdd && !user.canRemove && !user.canEdit)) {
    return NextResponse.json(
      { error: 'User management permissions required' },
      { status: 403 }
    );
  }
  return null;
}

/**
 * Check if user can manage admins (only superadmin)
 */
export function requireAdminManagement(user: AuthenticatedUser): NextResponse | null {
  if (!user.superAdmin) {
    return NextResponse.json(
      { error: 'SuperAdmin access required for admin management' },
      { status: 403 }
    );
  }
  return null;
}