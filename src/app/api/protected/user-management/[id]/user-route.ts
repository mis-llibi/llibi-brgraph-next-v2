export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireUserManagement } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";

// GET /api/protected/user-management/[id] - Get specific user (Admin+ only)
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user has user management permissions
  const userMgmtCheck = requireUserManagement(user);
  if (userMgmtCheck) return userMgmtCheck;

  try {
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const targetUser = await prisma.user.findUnique({
      where: {
        id: userId,
        admin: false,
        superAdmin: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        canUpload: true,
        canCreate: true,
        canViewDeck: true,
        canUploadDeck: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        createdBy: true,
        creator: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user: targetUser });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT /api/protected/user-management/[id] - Update user (Admin+ with canEdit only)
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user has user management permissions
  const userMgmtCheck = requireUserManagement(user);
  if (userMgmtCheck) return userMgmtCheck;

  // Check if user has canEdit permission (unless superadmin)
  if (!user.superAdmin && !user.canEdit) {
    return NextResponse.json(
      { error: "Permission to edit users is required" },
      { status: 403 }
    );
  }

  try {
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const body = await request.json();
    const {
      name,
      email,
      canUpload,
      canCreate,
      canViewDeck,
      canUploadDeck,
      isActive,
    } = body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
        admin: false,
        superAdmin: false,
      },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check for email conflicts (if email is being changed)
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findFirst({
        where: {
          email,
          id: { not: userId },
        },
      });

      if (emailExists) {
        return NextResponse.json(
          { error: "Email is already in use by another user" },
          { status: 409 }
        );
      }
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(typeof canUpload === "boolean" && { canUpload }),
        ...(typeof canCreate === "boolean" && { canCreate }),
        ...(typeof canViewDeck === "boolean" && { canViewDeck }),
        ...(typeof canUploadDeck === "boolean" && { canUploadDeck }),
        ...(typeof isActive === "boolean" && { isActive }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        canUpload: true,
        canCreate: true,
        canViewDeck: true,
        canUploadDeck: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE /api/protected/user-management/[id] - Delete user (Admin+ with canRemove only)
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user has user management permissions
  const userMgmtCheck = requireUserManagement(user);
  if (userMgmtCheck) return userMgmtCheck;

  // Check if user has canRemove permission (unless superadmin)
  if (!user.superAdmin && !user.canRemove) {
    return NextResponse.json(
      { error: "Permission to remove users is required" },
      { status: 403 }
    );
  }

  try {
    const userId = parseInt(params.id);

    if (isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
        admin: false,
        superAdmin: false,
      },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Delete the user
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
