import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO["/about/leadership"]);

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
