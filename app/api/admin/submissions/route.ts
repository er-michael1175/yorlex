import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/session";
import { deleteSubmission, listSubmissions, markHandled } from "@/lib/contactStore";

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const submissions = await listSubmissions();
  return NextResponse.json({ submissions });
}

export async function PATCH(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, handled } = (await request.json()) as { id?: string; handled?: boolean };
  if (typeof id !== "string" || typeof handled !== "boolean") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  await markHandled(id, handled);
  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = (await request.json()) as { id?: string };
  if (typeof id !== "string") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  await deleteSubmission(id);
  return NextResponse.json({ success: true });
}
