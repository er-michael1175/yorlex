import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO["/services/support"]);

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
