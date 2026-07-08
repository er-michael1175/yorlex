import { getPageContent } from "@/lib/contentStore";
import { contactDefaultContent } from "@/lib/content/contact";
import ContactClient from "./ContactClient";

export default async function Contact() {
  const content = await getPageContent("contact", contactDefaultContent);
  return <ContactClient content={content} />;
}
