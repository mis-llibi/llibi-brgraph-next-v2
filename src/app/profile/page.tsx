import { redirect } from "next/navigation";
import PasswordChangeForm from "@/components/account/PasswordChangeForm";
import { requirePageAuth } from "@/lib/auth-middleware";

export default async function ProfilePage() {
  const authResult = await requirePageAuth({
    signInRedirect: "/api/auth/signin?callbackUrl=/profile",
    passwordChangeRedirect: "/change-password",
  });

  const redirectTo = authResult.redirectTo;
  if (redirectTo) {
    redirect(redirectTo);
  }

  if (!authResult.user) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  const { user } = authResult;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Profile</h1>
          <p className="mt-2 text-sm text-slate-600">
            View your account details and manage security settings.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Name
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {user.name || "-"}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {user.email || "-"}
              </p>
            </div>
          </div>
        </section>

        <PasswordChangeForm />
      </div>
    </main>
  );
}
