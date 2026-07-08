"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Mail, Check, Trash2, Inbox } from "lucide-react";
import type { ContactSubmission } from "@/lib/contactStore";

export default function AdminDashboard({
  initialSubmissions,
}: {
  initialSubmissions: ContactSubmission[];
}) {
  const router = useRouter();
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  async function toggleHandled(id: string, handled: boolean) {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, handled } : s))
    );
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, handled }),
    });
  }

  async function handleDelete(id: string) {
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  const unhandledCount = submissions.filter((s) => !s.handled).length;

  return (
    <div className="flex-grow bg-yorlex-canvas min-h-[calc(100vh-64px)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-plus-jakarta text-2xl font-bold text-yorlex-ink">
              Contact Inbox
            </h1>
            <p className="font-inter text-sm text-yorlex-muted mt-1">
              {unhandledCount} unread · {submissions.length} total
            </p>
          </div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 bg-yorlex-navy hover:bg-yorlex-navy-elevated text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors disabled:opacity-60"
          >
            <LogOut className="h-4 w-4" />
            {loggingOut ? "Signing out…" : "Sign Out"}
          </button>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white border border-yorlex-border rounded-2xl p-16 flex flex-col items-center text-center">
            <Inbox className="h-8 w-8 text-yorlex-muted mb-3" />
            <p className="font-inter text-sm text-yorlex-muted">
              No inquiries yet. New submissions from the Contact page will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div
                key={s.id}
                className={`bg-white border rounded-2xl p-6 transition-colors ${
                  s.handled ? "border-yorlex-border opacity-60" : "border-yorlex-green/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-plus-jakarta font-bold text-yorlex-ink">{s.name}</span>
                      <span className="font-inter text-[10px] font-bold uppercase tracking-wide text-yorlex-green bg-yorlex-green-soft px-2 py-0.5 rounded-full">
                        {s.type === "client" ? "Client Engagement" : "General Inquiry"}
                      </span>
                    </div>
                    <a
                      href={`mailto:${s.email}`}
                      className="flex items-center gap-1.5 font-inter text-xs text-yorlex-muted hover:text-yorlex-green transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {s.email}
                    </a>
                    {s.areaOfInterest && (
                      <p className="font-inter text-xs text-yorlex-muted mt-1">
                        Interest: {s.areaOfInterest}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleHandled(s.id, !s.handled)}
                      className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                        s.handled
                          ? "border-yorlex-border text-yorlex-muted hover:border-yorlex-green hover:text-yorlex-green"
                          : "border-yorlex-green text-yorlex-green bg-yorlex-green-soft"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5" />
                      {s.handled ? "Mark unread" : "Mark handled"}
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      aria-label="Delete"
                      className="text-yorlex-muted hover:text-red-500 transition-colors p-1.5"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="font-inter text-sm text-yorlex-body mt-4 leading-relaxed whitespace-pre-wrap">
                  {s.message}
                </p>
                <p className="font-inter text-[11px] text-yorlex-muted mt-3">
                  {new Date(s.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
