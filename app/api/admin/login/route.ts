import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createAdminSession } from "@/lib/session";

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export async function POST(request: Request) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      { error: "Admin login is not configured on the server." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { email, password } = (body ?? {}) as Record<string, unknown>;

  const emailValid =
    typeof email === "string" &&
    safeCompare(email.trim().toLowerCase(), adminEmail.trim().toLowerCase());
  const passwordValid = typeof password === "string" && safeCompare(password, adminPassword);

  if (!emailValid || !passwordValid) {
    return NextResponse.json({ error: "Incorrect email or password" }, { status: 401 });
  }

  await createAdminSession();
  return NextResponse.json({ success: true });
}
