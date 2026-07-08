import "server-only";
import { promises as dns } from "dns";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "getnada.com",
  "fakeinbox.com",
  "sharklasers.com",
  "dispostable.com",
  "maildrop.cc",
  "mintemail.com",
  "moakt.com",
]);

function getDomain(email: string): string | null {
  return email.split("@")[1]?.toLowerCase() ?? null;
}

async function domainAcceptsMail(domain: string): Promise<boolean> {
  try {
    const mx = await dns.resolveMx(domain);
    if (mx.length > 0) return true;
  } catch {
    // fall through to A-record fallback (RFC 5321 implicit MX)
  }
  try {
    const a = await dns.resolve4(domain);
    return a.length > 0;
  } catch {
    return false;
  }
}

export async function validateContactEmail(
  email: string
): Promise<{ valid: boolean; reason?: string }> {
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, reason: "That email address doesn't look valid." };
  }

  const domain = getDomain(email);
  if (!domain) {
    return { valid: false, reason: "That email address doesn't look valid." };
  }

  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      reason: "Please use a permanent email address, not a disposable/temporary one.",
    };
  }

  const acceptsMail = await domainAcceptsMail(domain);
  if (!acceptsMail) {
    return {
      valid: false,
      reason: "That email domain doesn't appear to accept mail. Please double-check it.",
    };
  }

  return { valid: true };
}
