/**
 * lib/contrast.ts
 *
 * WCAG 2.x relative-luminance contrast helpers and the catalog of approved
 * foreground/background text color pairs in use across the Yorlex UI.
 *
 * The brand/theme token values mirror those declared in `app/globals.css`
 * (`@theme` block and the `sharp-*` utility classes).
 *
 * Validates: Requirements 3.9
 */

/** A foreground/background text color combination used in the UI. */
export interface ColorPair {
  /** Foreground (text) color as a hex string, e.g. "#ffffff". */
  fg: string;
  /** Background color as a hex string, e.g. "#0d0d0e". */
  bg: string;
  /**
   * Whether this pair is rendered as large text. Large text is >= 24px,
   * or >= 18.66px when bold (WCAG). Large text only requires a 3:1 ratio;
   * normal text requires 4.5:1.
   */
  largeText: boolean;
}

/** WCAG contrast thresholds. */
export const WCAG_NORMAL_TEXT_MIN = 4.5;
export const WCAG_LARGE_TEXT_MIN = 3;

/**
 * Parses a hex color string into an [R, G, B] tuple (values 0..255).
 *
 * Supports both shorthand `#rgb` and full `#rrggbb` forms. A leading `#`
 * is optional. Throws on malformed input so callers fail loudly rather than
 * silently computing against garbage.
 */
export function parseHex(hex: string): [number, number, number] {
  const normalized = hex.trim().replace(/^#/, "").toLowerCase();

  let expanded: string;
  if (/^[0-9a-f]{3}$/.test(normalized)) {
    // #rgb -> #rrggbb
    expanded = normalized
      .split("")
      .map((c) => c + c)
      .join("");
  } else if (/^[0-9a-f]{6}$/.test(normalized)) {
    expanded = normalized;
  } else {
    throw new Error(`Invalid hex color: "${hex}"`);
  }

  return [
    parseInt(expanded.slice(0, 2), 16),
    parseInt(expanded.slice(2, 4), 16),
    parseInt(expanded.slice(4, 6), 16),
  ];
}

/**
 * Converts a single sRGB channel (0..255) to its linearized value, per the
 * WCAG 2.x relative-luminance definition.
 */
function linearizeChannel(channel8bit: number): number {
  const c = channel8bit / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Computes the WCAG relative luminance of a color given its R, G, B channels
 * (each 0..255). Returns a value from 0 (black) to 1 (white).
 *
 * Formula: L = 0.2126*R + 0.7152*G + 0.0722*B (linearized sRGB).
 */
export function relativeLuminance(r: number, g: number, b: number): number {
  const rLin = linearizeChannel(r);
  const gLin = linearizeChannel(g);
  const bLin = linearizeChannel(b);
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * Computes the WCAG contrast ratio between a foreground and background color.
 *
 * The result is in the range 1 (no contrast) to 21 (black on white), per the
 * formula (L_lighter + 0.05) / (L_darker + 0.05).
 *
 * @param fg foreground color as `#rgb` or `#rrggbb`
 * @param bg background color as `#rgb` or `#rrggbb`
 * @returns the contrast ratio, a value in [1, 21]
 */
export function contrastRatio(fg: string, bg: string): number {
  const [fgR, fgG, fgB] = parseHex(fg);
  const [bgR, bgG, bgB] = parseHex(bg);
  const l1 = relativeLuminance(fgR, fgG, fgB);
  const l2 = relativeLuminance(bgR, bgG, bgB);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Approved foreground/background text color pairs actually used in the UI.
 *
 * Derived from the theme tokens and component analysis:
 *  - Dark background (#0d0d0e): hero section, search modal (ThreeBg backgroundColor)
 *  - Brand purple (#a100ff): CTA button bg, support card bg, hover states
 *  - White (#ffffff): card backgrounds, button text, page sections
 *  - Black (#000000): footer bg, primary button bg
 *  - Brand text (#1b1b1b): default body text
 *  - Brand bg (#f9f9f9): page background
 *  - Gray-300 (#d1d5db): hero paragraph text
 *  - Gray-400 (#9ca3af): muted captions, footer links
 *  - Slate-400 (#94a3b8): metric labels, fine print on light bg
 */
export const TEXT_COLOR_PAIRS: readonly ColorPair[] = [
  // Hero heading: white text on dark background (large, >=24px bold)
  { fg: "#ffffff", bg: "#0d0d0e", largeText: true },
  // Hero heading normal inline text on dark background (normal weight sections)
  { fg: "#ffffff", bg: "#0d0d0e", largeText: false },
  // Hero paragraph: gray-300 on dark background (16–18px body, large-ish)
  { fg: "#d1d5db", bg: "#0d0d0e", largeText: true },
  // Brand purple accent text on dark background ("Digital" in hero, large bold)
  { fg: "#a100ff", bg: "#0d0d0e", largeText: true },
  // White text on brand purple (CTA button, support section)
  { fg: "#ffffff", bg: "#a100ff", largeText: false },
  // White text on brand purple (large headings in support section)
  { fg: "#ffffff", bg: "#a100ff", largeText: true },
  // Brand purple on white (metric numbers, active nav links — large bold)
  { fg: "#a100ff", bg: "#ffffff", largeText: true },
  // Muted gray on dark background (search modal suggestions, footer links — large text)
  { fg: "#9ca3af", bg: "#0d0d0e", largeText: true },
  // White text on black (footer headings, primary button text)
  { fg: "#ffffff", bg: "#000000", largeText: false },
  // Black text on white (card headings, body text on card surfaces)
  { fg: "#000000", bg: "#ffffff", largeText: false },
  // Default body text: brand-text (#1b1b1b) on page background (#f9f9f9)
  { fg: "#1b1b1b", bg: "#f9f9f9", largeText: false },
  // Card text: brand-text on white card surfaces (.sharp-card)
  { fg: "#1b1b1b", bg: "#ffffff", largeText: false },
  // Muted descriptive text: gray-500 on white (service descriptions)
  { fg: "#6b7280", bg: "#ffffff", largeText: false },
  // Footer muted text: gray-400 on black (footer link text — small)
  { fg: "#9ca3af", bg: "#000000", largeText: true },
] as const;
