import { redirect } from "next/navigation";
import DashboardPage from "@/components/dashboard/Dashboard";
import { requirePageAuth } from "@/lib/auth-middleware";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const authResult = await requirePageAuth({
    signInRedirect: "/api/auth/signin?callbackUrl=/dashboard",
    passwordChangeRedirect: "/change-password",
  });

  const redirectTo = authResult.redirectTo;
  if (redirectTo) {
    redirect(redirectTo);
  }

  return <DashboardPage />;
}
