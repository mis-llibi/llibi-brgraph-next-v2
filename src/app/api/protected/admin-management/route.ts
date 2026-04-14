export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireSuperAdmin } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";
import {
  generateSecurePassword,
  getPermissionDescriptions,
  getUserRole,
} from "@/lib/permissions";
import { sendCredentialsEmail } from "@/lib/email";

// GET /api/protected/admin-management - List all admins (SuperAdmin only)
export async function GET() {
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const admins = await prisma.user.findMany({
      where: {
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ admins });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json(
      { error: "Failed to fetch administrators" },
      { status: 500 },
    );
  }
}

// POST /api/protected/admin-management - Create new admin (SuperAdmin only)
export async function POST(request: Request) {
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const body = await request.json();
    const {
      name,
      email,
      canAdd,
      canRemove,
      canEdit,
      isAdmin = true,
      isSuperAdmin = false,
    } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 },
      );
    }

    // Generate secure password
    const tempPassword = generateSecurePassword(12);
    const hashedPassword = await hashPassword(tempPassword);
    const hasFullAccess = Boolean(isSuperAdmin);

    // Create the admin user
    const newAdmin = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        admin: isAdmin,
        superAdmin: isSuperAdmin,
        canAdd: hasFullAccess ? true : canAdd || false,
        canRemove: hasFullAccess ? true : canRemove || false,
        canEdit: hasFullAccess ? true : canEdit || false,
        isActive: true,
        mustChangePassword: true,
        createdBy: parseInt(user.id),
      },
    });

    // Prepare email data
    const permissions = getPermissionDescriptions(newAdmin);
    const role = getUserRole(newAdmin);

    // Send credentials email
    try {
      await sendCredentialsEmail({
        to: email,
        name,
        email,
        password: tempPassword,
        role: role === "superadmin" ? "admin" : "admin", // Both are admin for email purposes
        permissions,
        createdBy: user.name,
      });
    } catch (emailError) {
      console.error("Failed to send credentials email:", emailError);
      // Continue even if email fails - admin is created
    }

    // Return admin data without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...adminData } = newAdmin;

    return NextResponse.json({
      success: true,
      admin: adminData,
      message:
        "Administrator created successfully. Credentials have been sent via email.",
    });
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json(
      { error: "Failed to create administrator" },
      { status: 500 },
    );
  }
}
