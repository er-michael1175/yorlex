import React from "react";
import Link from "next/link";

interface LogoProps {
  /** "dark" = ink wordmark for light backgrounds; "light" = white wordmark for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Yorlex brand mark — the crossed-bar "YX" glyph, paired with the wordmark.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-yorlex-ink";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/brand/logo-mark.png"
        alt=""
        width={52}
        height={52}
        className="shrink-0"
      />
      <span className={`text-4xl font-bold tracking-tight ${textColor}`}>Yorlex</span>
    </Link>
  );
}
