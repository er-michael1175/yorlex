import { getPageContent } from "@/lib/contentStore";
import { careersDefaultContent } from "@/lib/content/careers";
import CareersClient from "./CareersClient";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO["/careers"]);

export default async function Careers() {
  const content = await getPageContent("careers", careersDefaultContent);
  return <CareersClient content={content} />;
}
