export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth, requireSuperAdmin } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";
import { generateSecurePassword } from "@/lib/permissions";
import { sendCredentialsEmail } from "@/lib/email";

// POST /api/protected/admin-management/[id]/reset-password - Reset admin password (SuperAdmin only)
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

  // Check if user is superadmin
  const superAdminCheck = requireSuperAdmin(user);
  if (superAdminCheck) return superAdminCheck;

  try {
    const adminId = parseInt(params.id);

    if (isNaN(adminId)) {
      return NextResponse.json({ error: "Invalid admin ID" }, { status: 400 });
    }

    // Prevent resetting own password
    if (adminId === parseInt(user.id)) {
      return NextResponse.json(
        { error: "Cannot reset your own password through this method" },
        { status: 400 }
      );
    }

    // Check if admin exists
    const targetAdmin = await prisma.user.findUnique({
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
      },
    });

    if (!targetAdmin) {
      return NextResponse.json(
        { error: "Administrator not found" },
        { status: 404 }
      );
    }

    // Generate new secure password
    const newPassword = generateSecurePassword(12);
    const hashedPassword = await hashPassword(newPassword);

    // Update admin password
    await prisma.user.update({
      where: { id: adminId },
      data: {
        password: hashedPassword,
        mustChangePassword: true,
      },
    });

    // Send email with new credentials
    try {
      await sendCredentialsEmail({
        to: targetAdmin.email,
        name: targetAdmin.name,
        email: targetAdmin.email,
        password: newPassword,
        role: "admin",
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
        "Administrator password reset successfully. New credentials have been sent via email.",
    });
  } catch (error) {
    console.error("Error resetting admin password:", error);
    return NextResponse.json(
      { error: "Failed to reset administrator password" },
      { status: 500 }
    );
  }
}
