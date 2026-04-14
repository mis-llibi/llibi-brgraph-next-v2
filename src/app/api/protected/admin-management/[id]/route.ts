export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireSuperAdmin } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";

// GET /api/protected/admin-management/[id] - Get specific admin (SuperAdmin only)
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    const admin = await prisma.user.findUnique({
      where: {
        id: adminId,
        OR: [{ admin: true }, { superAdmin: true }],
      },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
        superAdmin: true,
        canAdd: true,
        canRemove: true,
        canEdit: true,
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

    if (!admin) {
      return NextResponse.json(
        { error: "Administrator not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ admin });
  } catch (error) {
    console.error("Error fetching admin:", error);
    return NextResponse.json(
      { error: "Failed to fetch administrator" },
      { status: 500 },
    );
  }
}

// PUT /api/protected/admin-management/[id] - Update admin (SuperAdmin only)
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    // Prevent self-modification
    if (adminId === parseInt(user.id)) {
      return NextResponse.json(
        { error: "Cannot modify your own account" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      canAdd,
      canRemove,
      canEdit,
      isActive,
      admin,
      isAdmin,
      superAdmin,
      isSuperAdmin,
    } = body;

    const nextIsAdmin =
      typeof isAdmin === "boolean"
        ? isAdmin
        : typeof admin === "boolean"
          ? admin
          : undefined;

    const nextIsSuperAdmin =
      typeof isSuperAdmin === "boolean"
        ? isSuperAdmin
        : typeof superAdmin === "boolean"
          ? superAdmin
          : undefined;

    const shouldForceFullAccess = nextIsSuperAdmin === true;

    // Check if admin exists
    const existingAdmin = await prisma.user.findUnique({
      where: {
        id: adminId,
        OR: [{ admin: true }, { superAdmin: true }],
      },
    });

    if (!existingAdmin) {
      return NextResponse.json(
        { error: "Administrator not found" },
        { status: 404 },
      );
    }

    // Check for email conflicts (if email is being changed)
    if (email && email !== existingAdmin.email) {
      const emailExists = await prisma.user.findFirst({
        where: {
          email,
          id: { not: adminId },
        },
      });

      if (emailExists) {
        return NextResponse.json(
          { error: "Email is already in use by another user" },
          { status: 409 },
        );
      }
    }

    // Update admin
    const updatedAdmin = await prisma.user.update({
      where: { id: adminId },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(typeof canAdd === "boolean" && {
          canAdd: shouldForceFullAccess ? true : canAdd,
        }),
        ...(typeof canRemove === "boolean" && {
          canRemove: shouldForceFullAccess ? true : canRemove,
        }),
        ...(typeof canEdit === "boolean" && {
          canEdit: shouldForceFullAccess ? true : canEdit,
        }),
        ...(shouldForceFullAccess && {
          canAdd: true,
          canRemove: true,
          canEdit: true,
        }),
        ...(typeof isActive === "boolean" && { isActive }),
        ...(typeof nextIsAdmin === "boolean" && { admin: nextIsAdmin }),
        ...(typeof nextIsSuperAdmin === "boolean" && {
          superAdmin: nextIsSuperAdmin,
        }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
        superAdmin: true,
        canAdd: true,
        canRemove: true,
        canEdit: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      admin: updatedAdmin,
      message: "Administrator updated successfully",
    });
  } catch (error) {
    console.error("Error updating admin:", error);
    return NextResponse.json(
      { error: "Failed to update administrator" },
      { status: 500 },
    );
  }
}

// DELETE /api/protected/admin-management/[id] - Delete admin (SuperAdmin only)
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    // Prevent self-deletion
    if (adminId === parseInt(user.id)) {
      return NextResponse.json(
        { error: "Cannot delete your own account" },
        { status: 400 },
      );
    }

    // Check if admin exists
    const existingAdmin = await prisma.user.findUnique({
      where: {
        id: adminId,
        OR: [{ admin: true }, { superAdmin: true }],
      },
    });

    if (!existingAdmin) {
      return NextResponse.json(
        { error: "Administrator not found" },
        { status: 404 },
      );
    }

    // Delete the admin
    await prisma.user.delete({
      where: { id: adminId },
    });

    return NextResponse.json({
      success: true,
      message: "Administrator deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting admin:", error);
    return NextResponse.json(
      { error: "Failed to delete administrator" },
      { status: 500 },
    );
  }
}
