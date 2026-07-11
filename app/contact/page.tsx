import { getPageContent } from "@/lib/contentStore";
import { contactDefaultContent } from "@/lib/content/contact";
import ContactClient from "./ContactClient";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO["/contact"]);

export default async function Contact() {
  const content = await getPageContent("contact", contactDefaultContent);
  return <ContactClient content={content} />;
}
