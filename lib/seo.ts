import type { Metadata } from "next";

/**
 * SEO support layer.
 *
 * `buildMetadata` is a pure, total function: it never throws and always returns
 * a Next `Metadata` object whose `title`, `description`,
 * `openGraph.{title,description,images,url}`, and `alternates.canonical` are all
 * present and non-empty. Missing page fields fall back to the site-wide `SITE`
 * defaults.
 */

export interface OgImage {
  /** absolute or root-relative; resolved against metadataBase */
  url: string;
  /** >= 1200 */
  width: number;
  /** >= 630 */
  height: number;
  /** 1..125 chars */
  alt: string;
}

export interface PageSeo {
  /** Route path, e.g. "/services/technology". Used as canonical + og:url. */
  path: string;
  /** 1..60 chars; unique across pages */
  title?: string;
  /** 1..160 chars */
  description?: string;
  ogImage?: OgImage;
}

export interface SiteSeoDefaults {
  /** absolute, e.g. "https://www.yorlex.com" */
  baseUrl: string;
  /** e.g. "%s | Yorlex" */
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImage: OgImage;
}

/** Site-wide SEO defaults (singleton). */
export const SITE: SiteSeoDefaults = {
  baseUrl: "https://www.yorlex.com",
  titleTemplate: "%s | Yorlex",
  defaultTitle: "Yorlex Enterprise — Multi-Disciplinary Excellence",
  defaultDescription:
    "Yorlex architects resilient systems and strategic frameworks for the global enterprise.",
  defaultOgImage: {
    url: "/hero-bg.png",
    width: 1200,
    height: 630,
    alt: "Yorlex Enterprise",
  },
};

/** Maximum length bounds for resolved metadata text fields. */
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;
const ALT_MAX = 125;
const OG_IMAGE_MIN_WIDTH = 1200;
const OG_IMAGE_MIN_HEIGHT = 630;

/**
 * Resolves a possibly-absent/empty text value to a non-empty string bounded to
 * `max` characters, falling back to `fallback` when the value is missing/blank.
 */
function resolveText(value: string | undefined, fallback: string, max: number): string {
  const trimmed = typeof value === "string" ? value.trim() : "";
  const base = trimmed.length > 0 ? trimmed : fallback.trim();
  return base.length > max ? base.slice(0, max).trim() : base;
}

/**
 * Builds an absolute URL by resolving `path` against `baseUrl`. Returns the
 * (normalized) base URL if resolution fails, guaranteeing a non-empty absolute
 * string is always produced.
 */
function absoluteUrl(baseUrl: string, path: string): string {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  try {
    return new URL(path, normalizedBase).toString();
  } catch {
    try {
      return new URL(normalizedBase).toString();
    } catch {
      return baseUrl;
    }
  }
}

/** Resolves an OgImage, applying defaults and enforcing minimum dimensions. */
function resolveOgImage(image: OgImage | undefined): OgImage {
  const source = image ?? SITE.defaultOgImage;
  const url = source.url && source.url.trim().length > 0 ? source.url : SITE.defaultOgImage.url;
  const width = Number.isFinite(source.width)
    ? Math.max(source.width, OG_IMAGE_MIN_WIDTH)
    : SITE.defaultOgImage.width;
  const height = Number.isFinite(source.height)
    ? Math.max(source.height, OG_IMAGE_MIN_HEIGHT)
    : SITE.defaultOgImage.height;
  const alt = resolveText(source.alt, SITE.defaultOgImage.alt, ALT_MAX);
  return { url, width, height, alt };
}

/**
 * Pure: merges page config with `SITE` defaults and returns a fully-populated
 * Next `Metadata`. Never throws; all required fields are always present and
 * non-empty.
 */
export function buildMetadata(page: PageSeo): Metadata {
  const path = typeof page?.path === "string" && page.path.length > 0 ? page.path : "/";

  const title = resolveText(page?.title, SITE.defaultTitle, TITLE_MAX);
  const description = resolveText(page?.description, SITE.defaultDescription, DESCRIPTION_MAX);
  const ogImage = resolveOgImage(page?.ogImage);

  const canonical = absoluteUrl(SITE.baseUrl, path);
  const ogImageUrl = absoluteUrl(SITE.baseUrl, ogImage.url);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImageUrl,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
  };
}

/**
 * Per-route SEO overrides. Absent fields resolve to `SITE` defaults via
 * `buildMetadata`. Titles are unique across pages and bounded to 1..60 chars;
 * descriptions are bounded to 1..160 chars.
 */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "Yorlex Enterprise — Multi-Disciplinary Excellence",
    description:
      "Yorlex architects resilient systems and strategic frameworks for the global enterprise.",
  },
  "/about": {
    path: "/about",
    title: "About Yorlex — Who We Are",
    description:
      "Discover the vision, values, and multi-disciplinary expertise that define Yorlex Enterprise.",
  },
  "/about/leadership": {
    path: "/about/leadership",
    title: "Executive Leadership — Yorlex",
    description:
      "Meet the executive leadership team guiding Yorlex's strategy across finance, technology, and operations.",
  },
  "/careers": {
    path: "/careers",
    title: "Careers at Yorlex — Join Our Team",
    description:
      "Explore career opportunities and build the future of enterprise excellence with the Yorlex team.",
  },
  "/contact": {
    path: "/contact",
    title: "Contact Yorlex — Global Engagement",
    description:
      "Connect with Yorlex for global engagement, partnerships, and enterprise consulting inquiries.",
  },
  "/engagement-models": {
    path: "/engagement-models",
    title: "Engagement Models — Yorlex",
    description:
      "Flexible engagement models tailored to how the global enterprise partners with Yorlex.",
  },
  "/faq": {
    path: "/faq",
    title: "Strategic FAQ — Yorlex",
    description:
      "Answers to common strategic questions about working with Yorlex Enterprise.",
  },
  "/industries": {
    path: "/industries",
    title: "Industries We Serve — Yorlex",
    description:
      "Yorlex delivers tailored solutions across finance, technology, healthcare, retail, and more.",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy — Yorlex",
    description:
      "Read how Yorlex collects, uses, and protects personal data across its digital properties.",
  },
  "/process": {
    path: "/process",
    title: "Our Process — Yorlex",
    description:
      "Understand the proven process Yorlex uses to deliver measurable enterprise outcomes.",
  },
  "/services": {
    path: "/services",
    title: "Our Services — Yorlex Solutions",
    description:
      "Explore Yorlex's full suite of finance, technology, marketing, and management solutions.",
  },
  "/services/finance": {
    path: "/services/finance",
    title: "Finance Solutions — Yorlex",
    description:
      "Strategic finance solutions that optimize capital, risk, and revenue for the enterprise.",
  },
  "/services/management": {
    path: "/services/management",
    title: "Management Solutions — Yorlex",
    description:
      "Operational and management solutions that scale enterprise performance with precision.",
  },
  "/services/marketing": {
    path: "/services/marketing",
    title: "Marketing Solutions — Yorlex",
    description:
      "Data-driven marketing solutions that grow brand reach and demand for the enterprise.",
  },
  "/services/technology": {
    path: "/services/technology",
    title: "Technology Solutions — Yorlex",
    description:
      "Resilient technology solutions and platform engineering built for enterprise scale.",
  },
  "/success-stories": {
    path: "/success-stories",
    title: "Success Stories — Yorlex",
    description:
      "Real-world success stories showcasing measurable impact delivered by Yorlex Enterprise.",
  },
  "/success-stories/revenue-optimization": {
    path: "/success-stories/revenue-optimization",
    title: "Revenue Optimization Case Study — Yorlex",
    description:
      "A detailed case study on how Yorlex drove revenue optimization for a global enterprise client.",
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service — Yorlex",
    description:
      "Review the terms of service governing the use of Yorlex's website and digital services.",
  },
};
