import React from "react";
import Link from "next/link";

interface LogoProps {
  /** "dark" = ink wordmark for light backgrounds; "light" = white wordmark for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Yorlex brand mark — a crossed-bar "X" glyph in brand green, paired with the wordmark.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-yorlex-ink";

  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="2"
          y="10.5"
          width="20"
          height="3"
          rx="1.5"
          transform="rotate(45 12 12)"
          fill="var(--color-yorlex-green)"
        />
        <rect
          x="2"
          y="10.5"
          width="20"
          height="3"
          rx="1.5"
          transform="rotate(-45 12 12)"
          fill="var(--color-yorlex-green)"
        />
      </svg>
      <span className={`text-xl font-bold tracking-tight ${textColor}`}>Yorlex</span>
    </Link>
  );
}
