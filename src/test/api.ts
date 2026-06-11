import { NextRequest, NextResponse } from "next/server";
import type { AuthenticatedUser } from "@/lib/auth-middleware";

export const testUser: AuthenticatedUser = {
  id: "1",
  name: "Test User",
  email: "test@example.com",
  admin: false,
  superAdmin: false,
  canUpload: true,
  canCreate: true,
  canViewDeck: true,
  canUploadDeck: true,
  canAdd: true,
  canRemove: true,
  canEdit: true,
  isActive: true,
  mustChangePassword: false,
};

type JsonRequestOptions = {
  method?: string;
  headers?: HeadersInit;
};

export function jsonRequest(path: string, body?: unknown, init?: JsonRequestOptions) {
  return new NextRequest(`http://localhost${path}`, {
    method: init?.method ?? "POST",
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });
}

export function formRequest(path: string, values: Record<string, FormDataEntryValue>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(values)) {
    formData.set(key, value);
  }

  return new NextRequest(`http://localhost${path}`, {
    method: "POST",
    body: formData,
  });
}

export function getRequest(path: string) {
  return new NextRequest(`http://localhost${path}`, { method: "GET" });
}

export async function responseJson<T = Record<string, unknown>>(response: Response) {
  return response.json() as Promise<T>;
}

export function authResponse(status = 401, error = "Authentication required") {
  return NextResponse.json({ error, success: false }, { status });
}

export function permissionResponse(permission = "canCreate") {
  return NextResponse.json(
    { error: `Permission required: ${permission}`, success: false },
    { status: 403 },
  );
}

export function routeParams(id: string) {
  return { params: Promise.resolve({ id }) };
}
