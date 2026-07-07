"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation-variants";
import { getTypographyClasses } from "@/lib/design-tokens";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
  gradient?: boolean;
  className?: string;
  delay?: number;
}

/**
 * AnimatedHeading — Premium typography component with scroll-reveal animation.
 *
 * Renders the appropriate heading tag (h1–h4) with Plus Jakarta Sans font,
 * uppercase styling, and an optional gradient text effect. Uses framer-motion
 * fadeUp animation with configurable delay for stagger effects.
 */
export function AnimatedHeading({
  children,
  level,
  gradient = false,
  className = "",
  delay,
}: AnimatedHeadingProps) {
  const typographyClasses = getTypographyClasses(level, { gradient });
  const combinedClassName =
    `${typographyClasses} ${className}`.trim();

  const transitionProps = delay !== undefined ? { delay } : undefined;

  const Tag = `h${level}` as const;
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={combinedClassName}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={transitionProps}
    >
      {children}
    </MotionTag>
  );
}

export type { AnimatedHeadingProps };
