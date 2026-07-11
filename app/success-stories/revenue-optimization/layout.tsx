import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO["/success-stories/revenue-optimization"]);

export default function RevenueOptimizationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
