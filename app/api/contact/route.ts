import { NextResponse } from "next/server";
import { addSubmission } from "@/lib/contactStore";
import { sendContactNotification } from "@/lib/mailer";
import { validateContactEmail } from "@/lib/emailValidation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { type, name, email, message, areaOfInterest } = (body ?? {}) as Record<string, unknown>;

  if (
    (type !== "client" && type !== "general") ||
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const emailCheck = await validateContactEmail(email.trim());
  if (!emailCheck.valid) {
    return NextResponse.json({ error: emailCheck.reason }, { status: 400 });
  }

  const submission = await addSubmission({
    type,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    areaOfInterest: typeof areaOfInterest === "string" ? areaOfInterest : undefined,
  });

  const emailResult = await sendContactNotification(submission);

  return NextResponse.json({ success: true, emailSent: emailResult.sent });
}
