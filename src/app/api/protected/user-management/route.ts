export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireUserManagement } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";
import {
  generateSecurePassword,
  getPermissionDescriptions,
} from "@/lib/permissions";
import { sendCredentialsEmail } from "@/lib/email";

// GET /api/protected/user-management - List all regular users (Admin+ only)
export async function GET() {
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user has user management permissions
  const userMgmtCheck = requireUserManagement(user);
  if (userMgmtCheck) return userMgmtCheck;

  try {
    const users = await prisma.user.findMany({
      where: {
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST /api/protected/user-management - Create new user (Admin+ with canAdd only)
export async function POST(request: Request) {
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  // Check if user has user management permissions
  const userMgmtCheck = requireUserManagement(user);
  if (userMgmtCheck) return userMgmtCheck;

  // Check if user has canAdd permission (unless superadmin)
  if (!user.superAdmin && !user.canAdd) {
    return NextResponse.json(
      { error: "Permission to add users is required" },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, canUpload, canCreate, canViewDeck, canUploadDeck } =
      body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Generate secure password
    const tempPassword = generateSecurePassword(12);
    const hashedPassword = await hashPassword(tempPassword);

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        admin: false,
        superAdmin: false,
        canUpload: canUpload || false,
        canCreate: canCreate || false,
        canViewDeck: canViewDeck || false,
        canUploadDeck: canUploadDeck || false,
        canAdd: false,
        canRemove: false,
        canEdit: false,
        isActive: true,
        mustChangePassword: true,
        createdBy: parseInt(user.id),
      },
    });

    // Prepare email data
    const permissions = getPermissionDescriptions(newUser);

    // Send credentials email
    try {
      await sendCredentialsEmail({
        to: email,
        name,
        email,
        password: tempPassword,
        role: "user",
        permissions,
        createdBy: user.name,
      });
    } catch (emailError) {
      console.error("Failed to send credentials email:", emailError);
      // Continue even if email fails - user is created
    }

    // Return user data without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = newUser;

    return NextResponse.json({
      success: true,
      user: userData,
      message:
        "User created successfully. Credentials have been sent via email.",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
