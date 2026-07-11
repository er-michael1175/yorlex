import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO["/services/marketing"]);

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
