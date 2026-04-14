"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

interface PasswordChangeFormProps {
  forceChange?: boolean;
}

export default function PasswordChangeForm({
  forceChange = false,
}: PasswordChangeFormProps) {
  const { data: session } = useSession();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/protected/account/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to change password.");
        return;
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      if (forceChange) {
        setSuccessMessage(
          "Password changed successfully. Please sign in again with your new password.",
        );

        await signOut({
          callbackUrl: "/api/auth/signin?callbackUrl=/dashboard",
        });
        return;
      }

      setSuccessMessage("Password changed successfully.");
    } catch (submitError) {
      console.error("Error changing password:", submitError);
      setError("Unexpected error while changing password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">
        {forceChange ? "Change Temporary Password" : "Change Password"}
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        {forceChange
          ? "For security, you must set a new password before continuing."
          : "Update your account password."}
      </p>

      {session?.user?.email && (
        <p className="mt-2 text-sm text-slate-500">
          Signed in as {session.user.email}
        </p>
      )}

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
            minLength={8}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-slate-500 focus:outline-none"
            minLength={8}
            required
          />
        </div>

        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : "Update Password"}
        </button>
      </form>
    </div>
  );
}
