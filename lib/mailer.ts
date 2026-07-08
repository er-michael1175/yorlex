import "server-only";
import nodemailer from "nodemailer";
import type { ContactSubmission } from "./contactStore";

function isEmailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_TO_EMAIL
  );
}

export async function sendContactNotification(
  submission: ContactSubmission
): Promise<{ sent: boolean; reason?: string }> {
  if (!isEmailConfigured()) {
    return { sent: false, reason: "email not configured" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Yorlex Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: submission.email,
      subject: `New ${submission.type === "client" ? "client engagement" : "general inquiry"} from ${submission.name}`,
      text: [
        `Type: ${submission.type}`,
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        submission.areaOfInterest ? `Area of interest: ${submission.areaOfInterest}` : null,
        "",
        submission.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return { sent: true };
  } catch (err) {
    console.error("Failed to send contact notification email:", err);
    return { sent: false, reason: "send failed" };
  }
}
