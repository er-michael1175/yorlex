"use client";

import React from "react";
import { motion } from "framer-motion";
import { resolveCardVariant } from "@/lib/design-tokens";
import { hoverLift, hoverGlow } from "@/lib/animation-variants";

export interface GradientCardProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "featured" | "glass";
  hover?: "glow" | "lift" | "border" | "none";
  className?: string;
  as?: "div" | "article" | "a";
  href?: string;
}

export function GradientCard({
  children,
  variant = "default",
  hover = "border",
  className = "",
  as = "div",
  href,
}: GradientCardProps) {
  const tokens = resolveCardVariant(variant);

  const baseClasses = [
    tokens.bg,
    tokens.border,
    tokens.text,
    "rounded-2xl",
    "p-8",
    "transition-colors duration-300",
    hover === "border" ? tokens.hoverBorder : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Determine hover animation variant
  const getHoverProps = () => {
    switch (hover) {
      case "glow":
        return { variants: hoverGlow, initial: "rest", whileHover: "hover" };
      case "lift":
        return { variants: hoverLift, initial: "rest", whileHover: "hover" };
      case "border":
      case "none":
      default:
        return {};
    }
  };

  const hoverProps = getHoverProps();

  // Polymorphic rendering: use anchor when as="a" and href is provided
  if (as === "a" && href) {
    return (
      <motion.a href={href} className={baseClasses} {...hoverProps}>
        {children}
      </motion.a>
    );
  }

  if (as === "article") {
    return (
      <motion.article className={baseClasses} {...hoverProps}>
        {children}
      </motion.article>
    );
  }

  return (
    <motion.div className={baseClasses} {...hoverProps}>
      {children}
    </motion.div>
  );
}
