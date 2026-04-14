export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth-middleware";
import { prisma } from "@/lib/prisma";
import { comparePassword, hashPassword } from "@/lib/hash";

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export async function POST(request: Request) {
  const authResult = await requireAuth();

  if (authResult instanceof NextResponse) {
    return authResult;
  }

  const { user } = authResult;

  try {
    const { currentPassword, newPassword, confirmPassword } =
      (await request.json()) as ChangePasswordRequest;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        {
          error:
            "Current password, new password, and confirmation are required",
        },
        { status: 400 },
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters long" },
        { status: 400 },
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "New password and confirmation do not match" },
        { status: 400 },
      );
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: parseInt(user.id) },
      select: {
        id: true,
        password: true,
      },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isCurrentPasswordValid = await comparePassword(
      currentPassword,
      currentUser.password,
    );

    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 400 },
      );
    }

    const isSameAsCurrent = await comparePassword(
      newPassword,
      currentUser.password,
    );
    if (isSameAsCurrent) {
      return NextResponse.json(
        { error: "New password must be different from your current password" },
        { status: 400 },
      );
    }

    const hashedNewPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: currentUser.id },
      data: {
        password: hashedNewPassword,
        mustChangePassword: false,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return NextResponse.json(
      { error: "Failed to change password" },
      { status: 500 },
    );
  }
}
