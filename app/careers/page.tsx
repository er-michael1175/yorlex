import { getPageContent } from "@/lib/contentStore";
import { careersDefaultContent } from "@/lib/content/careers";
import CareersClient from "./CareersClient";

export default async function Careers() {
  const content = await getPageContent("careers", careersDefaultContent);
  return <CareersClient content={content} />;
}
