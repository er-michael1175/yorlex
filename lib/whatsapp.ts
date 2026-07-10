export function getWhatsAppUrl(message: string = "Hi Yorlex, I'd like to get in touch."): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
