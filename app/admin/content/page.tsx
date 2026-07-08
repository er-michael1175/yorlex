import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { verifyAdminSession } from "@/lib/session";
import { PAGE_REGISTRY } from "@/lib/content/registry";
import AdminNav from "../AdminNav";

export default async function ContentIndexPage() {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  return (
    <div className="flex-grow bg-yorlex-canvas min-h-[calc(100vh-64px)] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <AdminNav />

        <h1 className="font-plus-jakarta text-2xl font-bold text-yorlex-ink mb-1">
          Site Content
        </h1>
        <p className="font-inter text-sm text-yorlex-muted mb-8">
          Choose a page to edit its text, images, and lists. Changes go live as soon as you save.
        </p>

        <div className="space-y-3">
          {Object.entries(PAGE_REGISTRY).map(([key, { label }]) => (
            <Link
              key={key}
              href={`/admin/content/${key}`}
              className="flex items-center justify-between bg-white border border-yorlex-border rounded-2xl p-5 hover:border-yorlex-green transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yorlex-green-soft text-yorlex-green flex items-center justify-center">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <span className="font-plus-jakarta font-semibold text-yorlex-ink">{label}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-yorlex-muted group-hover:text-yorlex-green transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
