"use client";

import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { ICON_NAMES } from "@/lib/content/iconMap";

function labelFor(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

function isLongText(key: string, value: string): boolean {
  return value.length > 60 || /desc|subheading|message|body|address|addr/i.test(key);
}

function blankTemplate(sample: unknown): unknown {
  if (typeof sample === "string") return "";
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(sample)) out[k] = blankTemplate(v);
    return out;
  }
  return "";
}

export function FieldEditor({
  fieldKey,
  value,
  onChange,
}: {
  fieldKey: string;
  value: unknown;
  onChange: (next: unknown) => void;
}) {
  if (typeof value === "string") {
    if (fieldKey === "icon") {
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white rounded-lg border border-yorlex-border text-yorlex-ink py-2 px-3 text-sm focus:border-yorlex-green focus:outline-none"
        >
          {ICON_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      );
    }
    if (isLongText(fieldKey, value)) {
      return (
        <textarea
          value={value}
          rows={3}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white rounded-lg border border-yorlex-border text-yorlex-ink py-2 px-3 text-sm focus:border-yorlex-green focus:outline-none resize-y"
        />
      );
    }
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white rounded-lg border border-yorlex-border text-yorlex-ink py-2 px-3 text-sm focus:border-yorlex-green focus:outline-none"
      />
    );
  }

  if (typeof value === "number") {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full bg-white rounded-lg border border-yorlex-border text-yorlex-ink py-2 px-3 text-sm focus:border-yorlex-green focus:outline-none"
      />
    );
  }

  if (typeof value === "boolean") {
    return (
      <label className="inline-flex items-center gap-2 text-sm text-yorlex-body">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        {value ? "Yes" : "No"}
      </label>
    );
  }

  if (Array.isArray(value)) {
    const items = value;
    return (
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="border border-yorlex-border rounded-xl p-4 bg-yorlex-canvas-alt/40 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-yorlex-muted">
                #{idx + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => {
                    const next = [...items];
                    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
                    onChange(next);
                  }}
                  className="p-1 text-yorlex-muted hover:text-yorlex-ink disabled:opacity-30 transition-colors"
                  aria-label="Move up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  disabled={idx === items.length - 1}
                  onClick={() => {
                    const next = [...items];
                    [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
                    onChange(next);
                  }}
                  className="p-1 text-yorlex-muted hover:text-yorlex-ink disabled:opacity-30 transition-colors"
                  aria-label="Move down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onChange(items.filter((_, i) => i !== idx))}
                  className="p-1 text-yorlex-muted hover:text-red-500 transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <FieldEditor
              fieldKey={fieldKey}
              value={item}
              onChange={(next) => {
                const copy = [...items];
                copy[idx] = next;
                onChange(copy);
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => onChange([...items, blankTemplate(items[items.length - 1] ?? "")])}
          className="flex items-center gap-1.5 text-xs font-semibold text-yorlex-green hover:text-yorlex-green-dark transition-colors"
        >
          <Plus className="h-3.5 w-3.5" />
          Add item
        </button>
      </div>
    );
  }

  if (value && typeof value === "object") {
    return (
      <div className="space-y-3 pl-3 border-l-2 border-yorlex-border">
        {Object.entries(value as Record<string, unknown>).map(([k, v]) => (
          <div key={k}>
            <label className="block text-xs font-semibold text-yorlex-muted mb-1">
              {labelFor(k)}
            </label>
            <FieldEditor
              fieldKey={k}
              value={v}
              onChange={(next) => onChange({ ...(value as Record<string, unknown>), [k]: next })}
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
}
