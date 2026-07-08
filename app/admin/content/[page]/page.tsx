import { redirect, notFound } from "next/navigation";
import { verifyAdminSession } from "@/lib/session";
import { getPageContentWithVersion } from "@/lib/contentStore";
import { PAGE_REGISTRY, isPageKey } from "@/lib/content/registry";
import ContentEditor from "../ContentEditor";

export default async function EditPageContent({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const isAuthed = await verifyAdminSession();
  if (!isAuthed) {
    redirect("/admin/login");
  }

  const { page } = await params;
  if (!isPageKey(page)) {
    notFound();
  }

  const registryEntry = PAGE_REGISTRY[page];
  const { content, version } = await getPageContentWithVersion(page, registryEntry.defaults);

  return (
    <ContentEditor
      page={page}
      label={registryEntry.label}
      initialContent={content as Record<string, unknown>}
      initialVersion={version}
    />
  );
}
