import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { verifyAdminSession } from "@/lib/session";
import { savePageContent, ContentConflictError } from "@/lib/contentStore";
import { isPageKey, PAGE_REGISTRY } from "@/lib/content/registry";

export async function PUT(request: Request, ctx: RouteContext<"/api/admin/content/[page]">) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { page } = await ctx.params;
  if (!isPageKey(page)) {
    return NextResponse.json({ error: "Unknown page" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { content, version } = body as { content?: unknown; version?: unknown };
  if (
    content === undefined ||
    typeof content !== "object" ||
    content === null ||
    Array.isArray(content) ||
    typeof version !== "number"
  ) {
    return NextResponse.json({ error: "Missing content or version" }, { status: 400 });
  }

  try {
    const newVersion = await savePageContent(page, content, version);
    revalidatePath(PAGE_REGISTRY[page].routePath);
    return NextResponse.json({ success: true, version: newVersion });
  } catch (err) {
    if (err instanceof ContentConflictError) {
      return NextResponse.json(
        { error: "This page was edited elsewhere. Reload the page to see the latest version before continuing." },
        { status: 409 }
      );
    }
    throw err;
  }
}
