"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Inbox, FileText } from "lucide-react";

const TABS = [
  { href: "/admin", label: "Inbox", icon: Inbox },
  { href: "/admin/content", label: "Content", icon: FileText },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
      <div className="flex items-center gap-1 bg-white border border-yorlex-border rounded-full p-1">
        {TABS.map((tab) => {
          const active =
            tab.href === "/admin" ? pathname === "/admin" : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                active ? "bg-yorlex-navy text-white" : "text-yorlex-muted hover:text-yorlex-ink"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </Link>
          );
        })}
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
  );
}
