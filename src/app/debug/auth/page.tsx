"use client";

import { useEffect, useState } from "react";

type DebugPayload = {
  ok: boolean;
  env: {
    hasAuthSecret: boolean;
    hasNextAuthSecret: boolean;
    hasNextAuthUrl: boolean;
  };
  request: {
    pathname: string;
    host: string | null;
    cookieHeaderPresent: boolean;
  };
  token: Record<string, unknown> | null;
  session: Record<string, unknown> | null;
};

export default function AuthDebugPage() {
  const [data, setData] = useState<DebugPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const response = await fetch("/api/debug/auth-session", {
          cache: "no-store",
        });

        const payload = (await response.json()) as DebugPayload;

        if (!isMounted) return;

        if (!response.ok) {
          setError("Failed to load auth debug data.");
          return;
        }

        setData(payload);
      } catch (fetchError) {
        if (!isMounted) return;

        console.error("Failed to fetch auth debug data:", fetchError);
        setError("Unable to fetch auth debug data.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold">Auth Debug</h1>
        <p className="mt-2 text-sm text-slate-400">
          Temporary diagnostics for the password-change redirect flow.
        </p>

        <section className="mt-6 rounded-lg border border-slate-800 bg-slate-900 p-4">
          {loading && <p className="text-sm text-slate-400">Loading...</p>}
          {error && <p className="text-sm text-red-300">{error}</p>}
          {data && (
            <pre className="overflow-auto text-xs leading-6 text-slate-200">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
