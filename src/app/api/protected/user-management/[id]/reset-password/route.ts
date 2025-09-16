export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireUserManagement } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";
import { generateSecurePassword } from "@/lib/permissions";
import { sendCredentialsEmail } from "@/lib/email";

// POST /api/protected/user-management/[id]/reset-password - Reset user password (Admin+ with canEdit only)
export async function POST(
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

    // Check if user exists
    const targetUser = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        admin: true,
        superAdmin: true,
      },
    });

    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Non-superadmin cannot reset admin passwords
    if (!user.superAdmin && (targetUser.admin || targetUser.superAdmin)) {
      return NextResponse.json(
        { error: "Cannot reset administrator passwords" },
        { status: 403 }
      );
    }

    // Generate new secure password
    const newPassword = generateSecurePassword(12);
    const hashedPassword = await hashPassword(newPassword);

    // Update user password
    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        mustChangePassword: true,
      },
    });

    // Send email with new credentials
    try {
      await sendCredentialsEmail({
        to: targetUser.email,
        name: targetUser.name,
        email: targetUser.email,
        password: newPassword,
        role: targetUser.admin || targetUser.superAdmin ? "admin" : "user",
        permissions: ["Password has been reset"],
        createdBy: user.name,
      });
    } catch (emailError) {
      console.error("Failed to send password reset email:", emailError);
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      message:
        "Password reset successfully. New credentials have been sent via email.",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { error: "Failed to reset password" },
      { status: 500 }
    );
  }
}
