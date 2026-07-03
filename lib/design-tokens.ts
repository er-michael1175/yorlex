/**
 * Design Token Utility Functions
 *
 * Resolves design tokens into Tailwind CSS class strings for use
 * across the Yorlex component library.
 */

/**
 * Returns the Tailwind vertical padding class for a given spacing tier.
 *
 * - 'compact'   → "py-12 md:py-16"
 * - 'default'   → "py-16 md:py-24"
 * - 'generous'  → "py-20 md:py-28"
 * - 'none'      → ""
 */
export function getSectionSpacing(
  spacing: "compact" | "default" | "generous" | "none"
): string {
  const map: Record<typeof spacing, string> = {
    compact: "py-12 md:py-16",
    default: "py-16 md:py-24",
    generous: "py-20 md:py-28",
    none: "",
  };
  return map[spacing];
}

/**
 * Resolves card variant tokens into Tailwind class strings.
 *
 * Each variant returns an object with bg, border, text, and hoverBorder classes.
 */
export function resolveCardVariant(
  variant: "default" | "dark" | "featured" | "glass"
): { bg: string; border: string; text: string; hoverBorder: string } {
  const variants: Record<
    typeof variant,
    { bg: string; border: string; text: string; hoverBorder: string }
  > = {
    default: {
      bg: "bg-white",
      border: "border border-gray-200",
      text: "text-brand-text",
      hoverBorder: "hover:border-brand-purple",
    },
    dark: {
      bg: "bg-surface-dark",
      border: "border border-white/10",
      text: "text-white",
      hoverBorder: "hover:border-brand-purple",
    },
    featured: {
      bg: "bg-brand-purple",
      border: "border border-brand-purple",
      text: "text-white",
      hoverBorder: "hover:border-white",
    },
    glass: {
      bg: "bg-white/5 backdrop-blur-md",
      border: "border border-white/10",
      text: "text-white",
      hoverBorder: "hover:border-brand-purple",
    },
  };
  return variants[variant];
}

/**
 * Returns Tailwind class strings for heading typography levels.
 *
 * Levels:
 * - 1 → 5xl–7xl, font-black, uppercase, leading-tight, tracking-tight
 * - 2 → 3xl–4xl, font-black, uppercase, tracking-tight
 * - 3 → xl–2xl, font-bold, uppercase
 * - 4 → lg, font-bold, uppercase
 *
 * Options:
 * - gradient: adds gradient text classes (purple → blue)
 * - dark: sets text color to white (otherwise uses brand-text)
 */
export function getTypographyClasses(
  level: 1 | 2 | 3 | 4,
  options?: { gradient?: boolean; dark?: boolean }
): string {
  const baseClasses: Record<1 | 2 | 3 | 4, string> = {
    1: "font-plus-jakarta text-5xl md:text-7xl font-black uppercase leading-tight tracking-tight",
    2: "font-plus-jakarta text-3xl md:text-4xl font-black uppercase tracking-tight",
    3: "font-plus-jakarta text-xl md:text-2xl font-bold uppercase",
    4: "font-plus-jakarta text-lg font-bold uppercase",
  };

  let classes = baseClasses[level];

  if (options?.gradient) {
    classes +=
      " bg-clip-text text-transparent bg-linear-to-r from-brand-purple to-brand-blue";
  } else if (options?.dark) {
    classes += " text-white";
  } else {
    classes += " text-brand-text";
  }

  return classes;
}
