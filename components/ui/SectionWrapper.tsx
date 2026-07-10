"use client";

import React from "react";
import { motion } from "framer-motion";
import { getSectionSpacing } from "@/lib/design-tokens";
import { useScrollReveal } from "@/components/hooks/useScrollReveal";
import { staggerContainer } from "@/lib/animation-variants";

export interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "white" | "dark" | "gradient" | "grid";
  spacing?: "compact" | "default" | "generous" | "none";
  animate?: boolean;
  id?: string;
}

function getBackgroundClasses(
  background: SectionWrapperProps["background"]
): string {
  switch (background) {
    case "white":
      return "bg-white";
    case "dark":
      return "bg-surface-dark";
    case "gradient":
      return "bg-[radial-gradient(ellipse_at_top,rgba(159,198,40,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(159,198,40,0.05)_0%,transparent_50%)]";
    case "grid":
      return "architectural-grid";
    case "default":
    default:
      return "";
  }
}

export function SectionWrapper({
  children,
  className = "",
  background = "default",
  spacing = "default",
  animate = false,
  id,
}: SectionWrapperProps) {
  const spacingClass = getSectionSpacing(spacing);
  const backgroundClass = getBackgroundClasses(background);
  const { ref, isInView } = useScrollReveal();

  const sectionClasses = [spacingClass, backgroundClass, className]
    .filter(Boolean)
    .join(" ");

  if (animate) {
    return (
      <section
        id={id}
        ref={ref as React.RefObject<HTMLElement>}
        className={sectionClasses}
      >
        <motion.div
          className="max-w-7xl mx-auto px-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
