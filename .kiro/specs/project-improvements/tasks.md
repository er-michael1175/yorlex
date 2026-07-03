# Implementation Plan: Project Improvements

## Overview

This plan implements the six-dimension quality refactor of the Yorlex Next.js site (TypeScript, React 19, Next.js 16 App Router, Tailwind v4) defined in the design document. The work is sequenced so the typed support layer (`lib/`) is built and verified first, then consumed by routes, components, and shared UI. Property-based tests (fast-check) validate the pure support layer; example, snapshot, and smoke checks cover tooling, rendered-output equivalence, and component interactions. Every change preserves the existing Brand_Design and rendered DOM/CSS.

## Tasks

- [x] 1. Declare dependencies and set up the testing toolchain
  - Add `framer-motion` (`12.42.0`) and `lucide-react` (`1.21.0`) to `package.json` `dependencies` with version strings resolving to the installed versions
  - Install and configure the test runner (Vitest) with `fast-check` and a DOM environment for component/snapshot tests
  - Add `test`, `test:run`, `lint`, and `typecheck` scripts to `package.json`
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Build the typed SEO support layer
  - [x] 2.1 Create `lib/seo.ts` interfaces and site defaults
    - Define `OgImage`, `PageSeo`, `SiteSeoDefaults` interfaces and the `SITE` defaults singleton
    - Implement `buildMetadata(page)` as a pure function that merges page config with `SITE` defaults and returns a fully-populated Next `Metadata` (title, description, openGraph.{title,description,images,url}, alternates.canonical all present and non-empty)
    - Define the `PAGE_SEO` per-route override map
    - _Requirements: 4.1, 4.2, 4.3, 4.7_

  - [ ]* 2.2 Write property test for metadata field bounds and title uniqueness
    - **Property 1: Metadata field bounds and title uniqueness**
    - **Validates: Requirements 4.1**

  - [ ]* 2.3 Write property test for Open Graph completeness and image dimensions
    - **Property 2: Open Graph completeness and image dimensions**
    - **Validates: Requirements 4.2**

  - [ ]* 2.4 Write property test for default fallback of omitted fields
    - **Property 3: Default fallback for omitted fields**
    - **Validates: Requirements 4.3**

  - [ ]* 2.5 Write property test for exactly one absolute canonical URL
    - **Property 4: Exactly one absolute canonical URL**
    - **Validates: Requirements 4.7**

- [x] 3. Build the public route registry and sitemap/robots
  - [x] 3.1 Create `lib/routes.ts` registry
    - Define `PublicRoute` interface and the `PUBLIC_ROUTES` constant enumerating every public route exactly once (absolute paths, no trailing slash except `/`)
    - _Requirements: 4.4_

  - [x] 3.2 Implement `app/sitemap.ts` and `app/robots.ts`
    - Implement `sitemap()` mapping `PUBLIC_ROUTES` to entries with absolute URLs (`${baseUrl}${path}`), each route appearing exactly once
    - Implement `robots()` returning crawl directives plus an absolute `sitemap: ${baseUrl}/sitemap.xml` reference
    - _Requirements: 4.4, 4.5_

  - [ ]* 3.3 Write property test for sitemap exact, absolute route cover
    - **Property 5: Sitemap is an exact, absolute cover of public routes**
    - **Validates: Requirements 4.4**

  - [ ]* 3.4 Write unit tests for robots output
    - Assert crawl rules and an absolute sitemap URL are emitted
    - _Requirements: 4.5_

- [x] 4. Build the image catalog and contrast support layer
  - [x] 4.1 Create `lib/images.ts` image catalog
    - Define `ImageAsset` interface and `IMAGE_CATALOG` enumerating every rendered image with `role` (content/decorative) and `alt` enforcing the alt-text rules
    - _Requirements: 3.2, 3.3_

  - [ ]* 4.2 Write property test for image alt-text rules by role
    - **Property 6: Image alt-text rules by role**
    - **Validates: Requirements 3.2, 3.3**

  - [x] 4.3 Create `lib/contrast.ts` contrast helper
    - Implement `contrastRatio(fg, bg)` using WCAG relative-luminance ratio, and define `TEXT_COLOR_PAIRS` for the approved foreground/background token combinations in use
    - _Requirements: 3.9_

  - [ ]* 4.4 Write property test for text contrast meeting WCAG thresholds
    - **Property 7: Text contrast meets WCAG thresholds**
    - **Validates: Requirements 3.9**

- [x] 5. Checkpoint - Ensure all support-layer tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Capture baseline rendered output for equivalence testing
  - [ ]* 6.1 Capture baseline DOM + class snapshots for every page
    - Snapshot each page's rendered DOM structure, text content, and applied CSS classes before any code changes, to be reused for equivalence assertions
    - _Requirements: 2.7, 6.4_

- [ ] 7. Wire SEO metadata into layout and pages
  - [x] 7.1 Configure `metadataBase` and site-wide defaults in `app/layout.tsx`
    - Set `metadataBase` so relative og:image/canonical paths resolve to absolute URLs, and apply site-wide default metadata
    - _Requirements: 4.2, 4.3, 4.7_

  - [-] 7.2 Split client pages into server wrappers that export metadata
    - For each page currently marked `"use client"` that needs metadata, move interactive bodies into colocated client components and make `page.tsx` a server component exporting `metadata` from `buildMetadata`
    - Preserve identical rendered DOM/CSS for each affected page
    - _Requirements: 4.1, 4.2, 4.7, 2.7, 6.4_

  - [-] 7.3 Add Organization JSON-LD to the home page
    - Emit schema.org Organization structured data on the home page
    - _Requirements: 4.6_

  - [ ]* 7.4 Write unit test for Organization JSON-LD
    - Validate the emitted structured data against the schema.org Organization type
    - _Requirements: 4.6_

- [x] 8. Rebuild the Background_Effect as event-driven
  - [x] 8.1 Create `lib/vanta.ts` types and config
    - Define `VantaGlobeConfig`, `VantaEffect`, `VantaGlobeFactory` types and the `VANTA_GLOBE_CONFIG` constant using the existing color/scale values
    - _Requirements: 5.6, 2.6_

  - [x] 8.2 Reimplement `components/ThreeBg.tsx` with `next/script`
    - Load Three.js then Vanta GLOBE via `next/script` with `strategy="afterInteractive"`; initialize exactly once in `onLoad` guarded by a ref flag; remove the `setInterval` polling loop
    - Add a 10s timeout + `onError` fallback that renders the page without the effect and throws no error; tear down via `effect.destroy()` on unmount; eliminate all `any` annotations
    - _Requirements: 5.1, 5.2, 5.3, 5.5, 5.6, 5.7, 2.6_

  - [ ]* 8.3 Write unit tests for Background_Effect lifecycle
    - Mock script `onLoad`/`onError`/timeout: assert single factory call, graceful failure with no throw, config equals baseline values, and `destroy()` on unmount
    - _Requirements: 5.2, 5.5, 5.6, 5.7_

- [ ] 9. Add accessibility hooks and upgrade Header
  - [x] 9.1 Implement `components/hooks/useFocusTrap` and `useDismissable`
    - `useFocusTrap(active)` confines Tab/Shift+Tab within the active container; `useDismissable` closes on `Escape` within 200ms and restores focus to the trigger, or to `document.body` when the trigger is detached
    - _Requirements: 3.5, 3.6, 3.7_

  - [-] 9.2 Apply accessibility upgrades to `components/Header.tsx`
    - Add `aria-haspopup`/`aria-expanded` to the Capabilities trigger; make the search modal `role="dialog"` `aria-modal="true"` with a labelled input using `useFocusTrap` + `useDismissable`; add `aria-expanded`/`aria-controls` to the mobile drawer trigger; add a visible `focus-visible` ring (≥2px, ≥3:1 contrast) in brand purple
    - _Requirements: 3.4, 3.5, 3.6, 3.7, 3.8_

  - [ ]* 9.3 Write interaction tests for focus trap, Escape, and ARIA state
    - Test modal focus trap cycling, Escape close + focus restore (including trigger-gone fallback to body), and aria-expanded/role/aria-modal toggling on open/close
    - _Requirements: 3.5, 3.6, 3.7, 3.8_

- [ ] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Migrate images to next/image
  - [-] 11.1 Replace raw `<img>` usage with `next/image`
    - Convert content images to `next/image` consuming `IMAGE_CATALOG` alt text; configure `images.remotePatterns` in `next.config.ts` for remote hosts (e.g. `lh3.googleusercontent.com`)
    - _Requirements: 3.1, 5.4_

- [ ] 12. Extract shared UI primitives
  - [ ] 12.1 Create `components/ui/ServiceCard`, `SectionHeading`, `Marquee`, `Tag`
    - Implement typed shared components reproducing the exact class strings used at current call sites
    - _Requirements: 6.1, 6.4_

  - [ ] 12.2 Replace duplicated markup across pages with shared components
    - Swap repeated card/section/marquee/badge markup for the shared components so no duplicate pattern definitions remain, keeping rendered output identical (retain original markup where it cannot be reproduced)
    - _Requirements: 6.1, 6.4, 6.5_

  - [ ]* 12.3 Write snapshot equivalence tests for refactored pages
    - Assert each affected page's DOM structure, text, and CSS classes match the captured baseline
    - _Requirements: 6.4, 2.7_

- [ ] 13. Lint and type-strictness cleanup
  - [ ] 13.1 Remove unused React imports and fix deprecated Tailwind classes
    - Remove `React` imports from files that do not reference `React`; replace `flex-shrink-0`→`shrink-0`, `h-[1px]`→`h-px`, `bg-gradient-to-r`→`bg-linear-to-r`; replace hardcoded brand color literals (e.g. `via-[#a100ff]/20`→`via-brand-purple/20`) with Tailwind tokens
    - _Requirements: 2.3, 2.4, 2.5, 6.2_

  - [ ] 13.2 Eliminate `any` types and suppression directives project-wide
    - Replace all remaining `any` annotations with specific types and remove type-checking suppression directives; ensure `tsc --noEmit` strict mode passes
    - _Requirements: 2.6, 6.3_

  - [ ]* 13.3 Write smoke checks for lint and type cleanliness
    - Run ESLint asserting zero errors and zero warnings (no deprecated Tailwind, no hardcoded brand literals, no raw `<img>`, no unused React); run `tsc --noEmit` asserting no `any` and no suppression directives
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3.1, 6.2, 6.3_

- [ ] 14. Verify clean install and production build
  - [ ]* 14.1 Write clean install + build smoke check
    - In a fresh environment run `npm install` then `next build` asserting exit code 0; optionally remove a dependency to confirm an unresolved-module error surfaces with a non-zero exit code
    - _Requirements: 1.4, 1.5, 1.6_

- [ ] 15. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP.
- Each task references specific requirements for traceability.
- Checkpoints ensure incremental validation.
- Property tests (Properties 1–7) validate the universal invariants of the pure support layer using `fast-check` at 100+ iterations each, one test per property.
- Unit, interaction, snapshot, and smoke tests validate tooling outcomes, rendered-output equivalence, and component behavior that do not vary with generated input.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1"] },
    { "id": 1, "tasks": ["2.1", "3.1", "4.1", "4.3"] },
    { "id": 2, "tasks": ["2.2", "2.3", "2.4", "2.5", "3.2", "4.2", "4.4", "6.1", "8.1"] },
    { "id": 3, "tasks": ["3.3", "3.4", "7.1", "8.2", "9.1"] },
    { "id": 4, "tasks": ["7.2", "7.3", "8.3", "9.2", "11.1"] },
    { "id": 5, "tasks": ["7.4", "9.3", "12.1"] },
    { "id": 6, "tasks": ["12.2", "13.1", "13.2"] },
    { "id": 7, "tasks": ["12.3", "13.3", "14.1"] }
  ]
}
```
