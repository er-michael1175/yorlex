"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Login failed");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex-grow bg-yorlex-navy min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm bg-yorlex-navy-elevated border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="w-12 h-12 rounded-2xl bg-yorlex-green/15 border border-yorlex-green/30 text-yorlex-green flex items-center justify-center mb-6">
          <Lock className="h-5 w-5" />
        </div>
        <h1 className="font-plus-jakarta text-xl font-bold text-white mb-1">Admin Sign In</h1>
        <p className="font-inter text-sm text-white/50 mb-6">
          Restricted access — authorized administrators only.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-inter font-semibold text-xs text-white/60 mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 rounded-lg border border-white/15 text-white py-2.5 px-3 focus:border-yorlex-green focus:outline-none transition-colors font-inter text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="font-inter text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-yorlex-green hover:bg-yorlex-green-dark disabled:opacity-60 text-white py-3 text-sm font-semibold rounded-full transition-colors"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
