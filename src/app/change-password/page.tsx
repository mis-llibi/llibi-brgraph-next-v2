"use client";

import PasswordChangeForm from "@/components/account/PasswordChangeForm";

export default function ChangePasswordPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <PasswordChangeForm forceChange />
      </div>
    </main>
  );
}
