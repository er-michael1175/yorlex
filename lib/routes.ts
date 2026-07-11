/**
 * Public route registry — single source of truth for every public page route.
 *
 * Consumed by the SEO/metadata layer and by `app/sitemap.ts` so the sitemap can
 * enumerate each public route exactly once (Requirement 4.4) and canonical URLs
 * stay aligned with the routes that actually exist under `app/`.
 *
 * Dynamic route segments (e.g. `app/services/[slug]`) are intentionally excluded;
 * only concrete, statically-addressable pages are listed here.
 */

export interface PublicRoute {
  /** Absolute path with a leading slash and no trailing slash (except the root "/"). */
  path: string;
  changeFrequency?: "weekly" | "monthly";
  priority?: number; // 0..1
  /** ISO date (YYYY-MM-DD) this route's content was last actually edited. Bump on real content changes. */
  lastModified: string;
}

export const PUBLIC_ROUTES: readonly PublicRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0, lastModified: "2026-07-12" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-11" },
  { path: "/about/leadership", changeFrequency: "monthly", priority: 0.6, lastModified: "2026-07-11" },
  { path: "/careers", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-12" },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-12" },
  { path: "/engagement-models", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-11" },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5, lastModified: "2026-07-12" },
  { path: "/industries", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-11" },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3, lastModified: "2026-07-12" },
  { path: "/process", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-11" },
  { path: "/services", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-07-11" },
  { path: "/services/finance", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-11" },
  { path: "/services/management", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-11" },
  { path: "/services/marketing", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-11" },
  { path: "/services/technology", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-07-11" },
  { path: "/services/support", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-11" },
  { path: "/success-stories", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-07-11" },
  { path: "/success-stories/revenue-optimization", changeFrequency: "monthly", priority: 0.6, lastModified: "2026-07-11" },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3, lastModified: "2026-07-12" },
] as const;
