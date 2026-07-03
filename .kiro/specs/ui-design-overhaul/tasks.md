# Implementation Plan: UI Design Overhaul

## Overview

This plan implements the premium UI design system for the Yorlex website. The approach builds foundation layers first (tokens, hooks, utilities), then constructs reusable components, and finally applies them to pages. Each task builds on previous work, with no orphaned code.

## Tasks

- [x] 1. Set up design token system and utility functions
  - [x] 1.1 Define design tokens in globals.css @theme block
    - Add extended color palette (surface, text, interactive, glow tokens) as CSS custom properties
    - Add spacing tokens (section-compact, section-default, section-generous, content-gap, card-padding)
    - Add animation tokens (ease-out-expo, ease-in-out-smooth, duration-fast/normal/slow, stagger-children)
    - Add typography tokens (display-hero, display-section, display-card, body-large, body-default, label-micro)
    - Ensure all tokens follow the 4px base-unit system for spacing
    - _Requirements: Design token system, Brand identity constraints_

  - [x] 1.2 Create utility functions in `lib/design-tokens.ts`
    - Implement `getSectionSpacing(spacing: 'compact' | 'default' | 'generous'): string`
    - Implement `resolveCardVariant(variant: 'default' | 'dark' | 'featured' | 'glass'): { bg, border, text, hoverBorder }`
    - Implement `getTypographyClasses(level: 1|2|3|4, options?: { gradient?: boolean; dark?: boolean }): string`
    - All functions return valid Tailwind class strings
    - _Requirements: Token resolution functions, Typography hierarchy, Card variant system_

  - [ ]* 1.3 Write property tests for utility functions
    - **Property 1: Section spacing consistency** — For any valid spacing value, `getSectionSpacing` returns a string matching `/^py-\d+$/`
    - **Property 2: Zero border-radius enforcement** — For any valid variant, `resolveCardVariant` returns an object where no value contains "rounded"
    - **Property 3: Heading font-family consistency** — For any level 1-4, `getTypographyClasses` returns a string containing "font-plus-jakarta"
    - **Validates: Properties 1, 2, 3 from design**

  - [ ]* 1.4 Write unit tests for utility functions
    - Test `getSectionSpacing` returns correct class for each spacing tier
    - Test `resolveCardVariant` returns correct bg/border/text/hoverBorder for each variant
    - Test `getTypographyClasses` returns correct classes for each level with and without gradient/dark options
    - _Requirements: Token resolution correctness_

- [x] 2. Implement animation hooks
  - [x] 2.1 Create `useScrollReveal` hook in `components/hooks/useScrollReveal.ts`
    - Implement IntersectionObserver-based scroll detection
    - Accept options for threshold (default 0.15) and rootMargin (default '0px 0px -50px 0px')
    - Return `{ ref, isInView }` — `isInView` transitions to `true` exactly once
    - Disconnect observer after trigger to prevent memory leaks
    - Add fallback: if IntersectionObserver is unavailable, set `isInView = true` immediately
    - Export from `components/hooks/index.ts`
    - _Requirements: Scroll-reveal animation system, Error handling for missing API_

  - [x] 2.2 Create `useAnimatedCounter` hook in `components/hooks/useAnimatedCounter.ts`
    - Implement requestAnimationFrame-based count-up animation
    - Use ease-out-expo curve: `1 - Math.pow(1 - progress, 4)`
    - Accept `target: number` and `duration: number` (default 2000ms)
    - Trigger animation only when element enters viewport (uses `useScrollReveal`)
    - Return `{ ref, count }` where count reaches exact target value
    - Export from `components/hooks/index.ts`
    - _Requirements: Stats counter animation, Animation performance_

  - [x] 2.3 Create animation variants in `lib/animation-variants.ts`
    - Export `fadeUp`, `staggerContainer`, `staggerItem`, `scaleIn`, `slideInLeft` variants
    - Export `hoverLift` and `hoverGlow` hover-state variants
    - All durations ≤ 500ms, all easing uses the expo curve `[0.16, 1, 0.3, 1]`
    - Stagger delay is 80ms between children
    - _Requirements: Framer Motion animation system, Transition duration limits_

  - [ ]* 2.4 Write unit tests for animation hooks
    - Test `useScrollReveal` returns `isInView: false` initially
    - Test `useAnimatedCounter` returns `count: 0` initially
    - Test animation variants have correct structure and timing values
    - _Requirements: Animation behavior correctness_

- [x] 3. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement core UI components
  - [x] 4.1 Create `SectionWrapper` component in `components/ui/SectionWrapper.tsx`
    - Accept props: children, className, background, spacing, animate, id
    - Apply spacing via `getSectionSpacing()` utility
    - Apply max-w-7xl centering with responsive px-6 padding
    - Background variants: default (transparent), white, dark (#0d0d0e), gradient (purple mesh), grid (architectural lines)
    - When `animate=true`, use `useScrollReveal` + framer-motion stagger container
    - Wrap children in `motion.div` with `staggerContainer` variants
    - _Requirements: Section rhythm, Layout constraint (max-w-7xl), Scroll-reveal animation_

  - [x] 4.2 Create `AnimatedHeading` component in `components/ui/AnimatedHeading.tsx`
    - Accept props: children, level (1-4), gradient, className, delay
    - Render correct heading tag (h1-h4) using `getTypographyClasses()` utility
    - Apply Plus Jakarta Sans font, uppercase, tracking-tight brand convention
    - Optional gradient text: bg-clip-text + brand-purple→brand-blue gradient
    - Fade-up animation with configurable delay for stagger effects
    - _Requirements: Typography hierarchy, Heading font consistency, Brand conventions_

  - [x] 4.3 Create `GradientCard` component in `components/ui/GradientCard.tsx`
    - Accept props: children, variant, hover, className, as, href
    - Use `resolveCardVariant()` for variant-specific styles
    - Hover effects: glow (purple box-shadow), lift (translateY -4px), border (color shift), none
    - Maintain 0px border-radius on all variants
    - Support polymorphic rendering (div, article, or anchor tag)
    - Animate hover states with framer-motion `whileHover`
    - _Requirements: Card system, Zero border-radius, Hover micro-interactions_

  - [x] 4.4 Create `PremiumButton` component in `components/ui/PremiumButton.tsx`
    - Accept props: children, variant, size, href, onClick, icon, loading, className
    - Primary: solid black bg, white text, hover → brand-purple bg
    - Secondary: transparent with border, hover → fill black
    - Ghost: no border, text-only with underline reveal on hover
    - Gradient: purple→blue gradient with animated shimmer on hover
    - All variants: 0px border-radius, uppercase, tracking-wider
    - Icon slot with translate-x animation on hover
    - Loading state: spinner icon, disabled interaction
    - Minimum touch target: 44×44px
    - Render as `<a>` when href provided, `<button>` otherwise
    - _Requirements: CTA buttons, Brand constraints, Accessibility (touch targets)_

  - [x] 4.5 Create `StatsCounter` component in `components/ui/StatsCounter.tsx`
    - Accept props: value, suffix, prefix, label, duration
    - Use `useAnimatedCounter` hook for scroll-triggered count-up
    - Display: prefix + animated count + suffix on top, label below
    - Plus Jakarta Sans font-black for the number
    - Subtle scale-up on hover via framer-motion
    - _Requirements: Social proof metrics, Animation system_

  - [x] 4.6 Create `ServiceCard` component in `components/ui/ServiceCard.tsx`
    - Accept props: title, description, icon, href, tags, variant, status
    - Grid span based on variant: large=col-span-8, tall=col-span-4 row-span-2, standard=col-span-4, featured=purple bg
    - Render icon with animated border-glow container on hover
    - Tags as micro-labels (label-micro token) with hover color transition
    - Animated top-border reveal on hover (scaleX from 0 to 1)
    - Status indicator with animated dot when active
    - Stagger-reveal children on scroll enter
    - 0px border-radius maintained
    - _Requirements: Bento grid layout, Service cards, Brand constraints_

  - [ ]* 4.7 Write unit tests for UI components
    - Test SectionWrapper renders with correct spacing classes for each tier
    - Test AnimatedHeading renders correct heading tags (h1-h4) with correct classes
    - Test GradientCard renders correct variant styles and polymorphic elements
    - Test PremiumButton renders as link when href provided, button otherwise
    - Test StatsCounter renders prefix/suffix/label correctly
    - Test ServiceCard renders correct grid span classes per variant
    - _Requirements: Component correctness_

- [x] 5. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Create barrel exports and integrate component library
  - [x] 6.1 Create barrel export file `components/ui/index.ts`
    - Export all 6 core components from single entry point
    - Export types/interfaces for each component's props
    - _Requirements: Component library organization_

  - [x] 6.2 Apply design system to Home page (`app/page.tsx` and `app/HomeContent.tsx`)
    - Replace existing sections with `SectionWrapper` components
    - Use `AnimatedHeading` for all section headings
    - Replace existing cards with `GradientCard` or `ServiceCard` (bento grid)
    - Add `StatsCounter` section with company metrics
    - Replace CTAs with `PremiumButton` (gradient variant for primary CTA)
    - Apply alternating section backgrounds for visual rhythm
    - Ensure scroll-reveal animations on all below-fold sections
    - _Requirements: Home page premium treatment, Visual rhythm, Section consistency_

  - [x] 6.3 Apply design system to About page (`app/about/page.tsx`)
    - Wrap content sections in `SectionWrapper` with appropriate spacing/backgrounds
    - Use `AnimatedHeading` for all page headings
    - Apply `GradientCard` for team/value cards
    - Add `StatsCounter` row for company metrics
    - Ensure alternating backgrounds and scroll-reveal
    - _Requirements: About page consistency, Design system adoption_

  - [x] 6.4 Apply design system to Services page (`app/services/page.tsx`)
    - Replace service cards with `ServiceCard` bento grid layout
    - Wrap in `SectionWrapper` with stagger-reveal
    - Use `AnimatedHeading` for page title
    - Apply `PremiumButton` for service CTAs
    - _Requirements: Services page bento layout, Component consistency_

  - [x] 6.5 Apply design system to Contact page (`app/contact/page.tsx`)
    - Wrap content in `SectionWrapper`
    - Use `AnimatedHeading` for page title
    - Style form inputs consistently with design tokens (0px radius, brand borders)
    - Apply `PremiumButton` for form submission
    - _Requirements: Contact page consistency, Design token usage_

  - [-] 6.6 Apply design system to remaining inner pages
    - Apply `SectionWrapper`, `AnimatedHeading`, and `GradientCard` to: careers, engagement-models, faq, industries, process, privacy, terms, success-stories
    - Ensure consistent spacing, backgrounds, and animation patterns across all pages
    - Use `PremiumButton` for all CTAs site-wide
    - _Requirements: Site-wide design consistency, All pages premium treatment_

- [~] 7. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All components maintain the 0px border-radius brand constraint
- No new dependencies needed — implementation uses existing framer-motion, lucide-react, Tailwind v4, and Vitest + fast-check

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "2.1"] },
    { "id": 2, "tasks": ["1.3", "1.4", "2.2", "2.3"] },
    { "id": 3, "tasks": ["2.4", "4.1", "4.2"] },
    { "id": 4, "tasks": ["4.3", "4.4", "4.5", "4.6"] },
    { "id": 5, "tasks": ["4.7", "6.1"] },
    { "id": 6, "tasks": ["6.2", "6.3", "6.4", "6.5"] },
    { "id": 7, "tasks": ["6.6"] }
  ]
}
```
