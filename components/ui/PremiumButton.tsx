"use client";

import React from "react";

export interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

function getVariantClasses(variant: PremiumButtonProps["variant"]): string {
  switch (variant) {
    case "secondary":
      return "bg-transparent border border-brand-border text-brand-text hover:bg-black hover:text-white hover:border-black";
    case "ghost":
      return "bg-transparent border-0 text-brand-text relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100";
    case "gradient":
      return "bg-linear-to-r from-brand-purple to-brand-blue text-white bg-[length:200%_100%] hover:bg-[position:100%_0]";
    case "primary":
    default:
      return "bg-black text-white hover:bg-brand-purple";
  }
}

function getSizeClasses(size: PremiumButtonProps["size"]): string {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-xs";
    case "lg":
      return "px-8 py-4 text-base";
    case "md":
    default:
      return "px-6 py-3 text-sm";
  }
}

/**
 * Spinner component for loading state.
 * CSS-animated rotating circle.
 */
function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin"
      aria-hidden="true"
    />
  );
}

/**
 * PremiumButton — Elevated CTA component with multiple variants,
 * hover animations, loading state, and accessible touch targets.
 *
 * Renders as `<a>` when `href` is provided, `<button>` otherwise.
 * All variants enforce 0px border-radius, uppercase, tracking-wider, font-bold, font-inter.
 */
export function PremiumButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  loading = false,
  className = "",
}: PremiumButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center rounded-none uppercase tracking-wider font-bold font-inter min-h-[44px] min-w-[44px] transition-all duration-300 cursor-pointer";

  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  const loadingClasses = loading ? "pointer-events-none opacity-75" : "";

  const combinedClasses = [
    baseClasses,
    variantClasses,
    sizeClasses,
    loadingClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <span>{children}</span>
          {icon && (
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </>
      )}
    </>
  );

  if (href && !loading) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      disabled={loading}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
