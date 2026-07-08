"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Check, Loader2, AlertTriangle } from "lucide-react";
import { FieldEditor } from "./FieldEditor";
import AdminNav from "../AdminNav";

function labelFor(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

const AUTOSAVE_DELAY_MS = 600;

type Status = "idle" | "pending" | "saving" | "saved" | "error" | "conflict";

export default function ContentEditor({
  page,
  label,
  initialContent,
  initialVersion,
}: {
  page: string;
  label: string;
  initialContent: Record<string, unknown>;
  initialVersion: number;
}) {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<Status>("idle");

  const contentRef = useRef(content);
  const versionRef = useRef(initialVersion);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);
  const conflictedRef = useRef(false);

  async function saveNow() {
    if (conflictedRef.current) return;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setStatus("saving");
    try {
      const res = await fetch(`/api/admin/content/${page}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: contentRef.current, version: versionRef.current }),
      });
      if (res.status === 409) {
        conflictedRef.current = true;
        setStatus("conflict");
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      versionRef.current = data.version;
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  useEffect(() => {
    contentRef.current = content;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (conflictedRef.current) return;
    setStatus("pending");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(saveNow, AUTOSAVE_DELAY_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    function handleBeforeUnload(e: BeforeUnloadEvent) {
      if (status === "pending" || status === "saving") {
        e.preventDefault();
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [status]);

  return (
    <div className="flex-grow bg-yorlex-canvas min-h-[calc(100vh-64px)] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <AdminNav />

        <Link
          href="/admin/content"
          className="inline-flex items-center gap-1.5 text-sm text-yorlex-muted hover:text-yorlex-ink transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          All pages
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="font-plus-jakarta text-2xl font-bold text-yorlex-ink">
            Edit {label}
          </h1>
          <div className="flex items-center gap-4">
            <StatusIndicator status={status} />
            <button
              type="button"
              onClick={saveNow}
              disabled={status === "saving" || status === "conflict"}
              className="flex items-center gap-2 bg-yorlex-green hover:bg-yorlex-green-dark disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <Save className="h-4 w-4" />
              Save now
            </button>
          </div>
        </div>

        {status === "conflict" ? (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
            <AlertTriangle className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-700">
                This page was edited elsewhere (likely another open tab).
              </p>
              <p className="text-sm text-red-600 mt-1">
                To avoid overwriting those changes, further edits here won&apos;t save.{" "}
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="underline font-semibold"
                >
                  Reload this page
                </button>{" "}
                to see the latest version and continue editing.
              </p>
            </div>
          </div>
        ) : (
          <p className="text-xs text-yorlex-muted mb-6 -mt-4">
            Changes save automatically a moment after you stop editing — no need to remember to save.
          </p>
        )}

        <div className={`bg-white border border-yorlex-border rounded-2xl p-6 space-y-6 ${status === "conflict" ? "opacity-60 pointer-events-none" : ""}`}>
          {Object.entries(content).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-semibold text-yorlex-ink mb-1.5">
                {labelFor(key)}
              </label>
              <FieldEditor
                fieldKey={key}
                value={value}
                onChange={(next) => setContent((prev) => ({ ...prev, [key]: next }))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusIndicator({ status }: { status: Status }) {
  if (status === "pending") {
    return <span className="text-sm text-yorlex-muted">Unsaved changes…</span>;
  }
  if (status === "saving") {
    return (
      <span className="flex items-center gap-1.5 text-sm text-yorlex-muted">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Saving…
      </span>
    );
  }
  if (status === "saved") {
    return (
      <span className="flex items-center gap-1.5 text-sm text-yorlex-green font-medium">
        <Check className="h-3.5 w-3.5" />
        All changes saved
      </span>
    );
  }
  if (status === "error") {
    return <span className="text-sm text-red-500 font-medium">Save failed — click Save now to retry</span>;
  }
  if (status === "conflict") {
    return <span className="text-sm text-red-500 font-medium">Editing paused</span>;
  }
  return null;
}
