export const dynamic = "force-dynamic";

import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authSecret = process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET;

function safeTokenSnapshot(token: Awaited<ReturnType<typeof getToken>>) {
  if (!token) return null;

  return {
    id: token.id ?? null,
    email: token.email ?? null,
    name: token.name ?? null,
    admin: token.admin ?? null,
    superAdmin: token.superAdmin ?? null,
    isActive: token.isActive ?? null,
    mustChangePassword: token.mustChangePassword ?? null,
  };
}

function safeSessionSnapshot(
  session: Awaited<ReturnType<typeof getServerSession>>,
) {
  if (!session?.user) return null;

  return {
    id: session.user.id ?? null,
    email: session.user.email ?? null,
    name: session.user.name ?? null,
    admin: session.user.admin ?? null,
    superAdmin: session.user.superAdmin ?? null,
    isActive: session.user.isActive ?? null,
    mustChangePassword: session.user.mustChangePassword ?? null,
  };
}

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: authSecret,
  });

  const session = await getServerSession(authOptions);

  return NextResponse.json({
    ok: true,
    env: {
      hasAuthSecret: Boolean(process.env.AUTH_SECRET),
      hasNextAuthSecret: Boolean(process.env.NEXTAUTH_SECRET),
      hasNextAuthUrl: Boolean(process.env.NEXTAUTH_URL),
    },
    request: {
      pathname: request.nextUrl.pathname,
      host: request.headers.get("host"),
      cookieHeaderPresent: request.headers.has("cookie"),
    },
    token: safeTokenSnapshot(token),
    session: safeSessionSnapshot(session),
  });
}
