"use client";

import { type RefObject } from "react";
import { motion } from "framer-motion";
import { useAnimatedCounter } from "@/components/hooks/useAnimatedCounter";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  dark?: boolean;
}

/**
 * StatsCounter — Animated number counter for metrics/social-proof sections.
 *
 * Uses scroll-triggered count-up animation via `useAnimatedCounter` hook.
 * Displays prefix + animated count + suffix on the top line, with a label below.
 * Subtle scale-up on hover via framer-motion.
 */
export function StatsCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  dark = false,
}: StatsCounterProps) {
  const { ref, count } = useAnimatedCounter(value, duration);

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement | null>}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="text-center"
    >
      <p className={`font-plus-jakarta font-black text-4xl md:text-5xl ${dark ? "text-white" : "text-brand-text"}`}>
        {prefix}
        {count}
        {suffix}
      </p>
      <p className={`font-inter text-sm uppercase tracking-wider mt-2 ${dark ? "text-text-on-dark-muted" : "text-text-secondary"}`}>
        {label}
      </p>
    </motion.div>
  );
}

export type { StatsCounterProps };
