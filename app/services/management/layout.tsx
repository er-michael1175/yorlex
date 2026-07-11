import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO["/services/management"]);

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
