import type { Variants } from "framer-motion";

/**
 * Shared easing curve used across all animations.
 * Expo ease-out for smooth, premium deceleration.
 */
const expoEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Fade up from 24px below with opacity transition.
 * Used for general scroll-reveal elements.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: expoEase },
  },
};

/**
 * Stagger container that orchestrates child animations.
 * Children stagger at 80ms intervals with a 100ms initial delay.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Individual stagger item — fades up from 20px below.
 * Meant to be used as a child of staggerContainer.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: expoEase },
  },
};

/**
 * Scale in from 95% with fade.
 * Used for modals, cards, or elements that grow into view.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: expoEase },
  },
};

/**
 * Slide in from left with fade.
 * Used for navigation elements or side-panel reveals.
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: expoEase },
  },
};

/**
 * Hover variant that lifts the element up with a purple glow shadow.
 * Use with `initial="rest"` and `whileHover="hover"`.
 */
export const hoverLift: Variants = {
  rest: { y: 0, boxShadow: "0 0 0 rgba(92,122,52,0)" },
  hover: { y: -4, boxShadow: "0 20px 60px rgba(92,122,52,0.1)" },
};

/**
 * Hover variant that adds a green glow around the element.
 * Use with `initial="rest"` and `whileHover="hover"`.
 */
export const hoverGlow: Variants = {
  rest: { boxShadow: "0 0 0 rgba(92,122,52,0)" },
  hover: {
    boxShadow:
      "0 0 40px rgba(92,122,52,0.15), 0 0 80px rgba(92,122,52,0.05)",
  },
};
