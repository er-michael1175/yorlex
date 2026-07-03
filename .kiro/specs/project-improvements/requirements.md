# Requirements Document

## Introduction

The Yorlex corporate marketing website is an existing Next.js 16 (App Router) application built with React 19, TypeScript 5, and Tailwind CSS v4. This specification scopes a comprehensive improvement effort to raise the overall quality of the project without changing its visual design language (brand purple `#a100ff`, sharp 0px "architectural" corners) or removing existing functionality.

The improvement effort targets six quality dimensions discovered during exploration:

1. **Dependency and build health** - undeclared runtime dependencies (`framer-motion`, `lucide-react`) that would break a clean install.
2. **Code quality and linting** - unused imports, deprecated Tailwind v4 class usages, hardcoded color values, and `any` types.
3. **Accessibility** - raw `<img>` usage, missing alt text, focus states, ARIA attributes, and keyboard navigation on interactive components.
4. **SEO and metadata** - missing per-page metadata, Open Graph data, structured data, sitemap, and robots configuration.
5. **Performance** - externally CDN-loaded 3D background using a polling loop, unoptimized images, and missing script-loading strategy.
6. **Consistency and maintainability** - repeated UI patterns, inconsistent styling, and `any`-typed code.

The scope is limited to improving the existing codebase. No new pages, content, or product features are introduced.

## Glossary

- **Project**: The Yorlex Next.js website codebase located at the repository root.
- **Build_System**: The Next.js build and the npm dependency resolution process (`npm install`, `next build`).
- **Package_Manifest**: The `package.json` file declaring the Project's dependencies and devDependencies.
- **Linter**: The ESLint configuration (`eslint.config.mjs`) and the `next lint` / `eslint` process used to detect code-quality issues.
- **Component**: A reusable React component under `components/` (`Header.tsx`, `Footer.tsx`, `ThreeBg.tsx`).
- **Page**: A route segment under `app/` that exports a default page component.
- **Background_Effect**: The animated Vanta.js globe rendered by `ThreeBg.tsx`.
- **Interactive_Element**: A user-operable UI control such as the navigation dropdown, search modal, or mobile drawer.
- **Image_Element**: Any rendered image in the Project, whether a raw `<img>` tag or a `next/image` component.
- **Metadata**: The Next.js route metadata (title, description, keywords, Open Graph, structured data) associated with a Page.
- **Tailwind_Token**: A design token defined in `globals.css` via the Tailwind v4 `@theme` block (for example `brand-purple`).
- **Brand_Design**: The existing visual design language (brand purple `#a100ff`, sharp 0px corners, fonts, and layout) that improvements must preserve.

## Requirements

### Requirement 1: Dependency and Build Health

**User Story:** As a developer setting up the Project on a new machine, I want all runtime dependencies declared in the manifest, so that a clean install produces a working build.

#### Acceptance Criteria

1. THE Package_Manifest SHALL declare every package imported by Project source code, excluding language and framework built-in modules that require no installation, as an entry under `dependencies` or `devDependencies`.
2. THE Package_Manifest SHALL declare `framer-motion` as a dependency with a version string that resolves to the same version currently present in `node_modules`.
3. THE Package_Manifest SHALL declare `lucide-react` as a dependency with a version string that resolves to the same version currently present in `node_modules`.
4. WHEN `npm install` is run against a clean environment (no pre-existing `node_modules` directory) using the Package_Manifest, THE Build_System SHALL install every package required to compile the Project and SHALL terminate with a success exit code of 0.
5. WHEN `next build` is run after a clean install completes, THE Build_System SHALL complete the production build and SHALL terminate with a success exit code of 0.
6. IF `next build` encounters a module that cannot be resolved to an installed package, THEN THE Build_System SHALL terminate with a non-zero exit code and SHALL emit an error indicating the unresolved module.

### Requirement 2: Code Quality and Linting

**User Story:** As a developer maintaining the Project, I want the codebase free of lint warnings and deprecated usages, so that the code stays clean and forward-compatible.

#### Acceptance Criteria

1. WHEN the Linter is run against the entire Project, THE Linter SHALL complete and report exactly zero errors.
2. WHEN the Linter is run against the entire Project, THE Linter SHALL complete and report exactly zero warnings.
3. THE Project SHALL contain zero `React` import statements in any file that does not reference the `React` identifier in its body.
4. THE Project SHALL replace every occurrence of the deprecated Tailwind v4 utility classes with their current equivalents, including `flex-shrink-0` replaced by `shrink-0`, `h-[1px]` replaced by `h-px`, and `bg-gradient-to-r` replaced by `bg-linear-to-r`, leaving zero occurrences of the deprecated forms.
5. WHERE a hardcoded brand color value is used in a utility class, THE Project SHALL replace the hardcoded value with the corresponding Tailwind_Token (for example `via-[#a100ff]/20` replaced by `via-brand-purple/20`), leaving zero hardcoded brand color values in utility classes.
6. THE Component `ThreeBg.tsx` SHALL contain zero `any` type annotations, with each prior `any` replaced by a specific type describing the value.
7. WHEN the code-quality changes are applied, THE Project SHALL produce rendered output for each page whose DOM structure and computed visual styles (layout, color, and spacing) are identical to the baseline rendered output captured before the changes.

### Requirement 3: Accessibility

**User Story:** As a user relying on assistive technology, I want the site to be operable by keyboard and screen reader, so that I can access all content and controls.

#### Acceptance Criteria

1. THE Project SHALL render content images using the `next/image` component instead of raw `<img>` tags.
2. WHERE an Image_Element conveys content, THE Project SHALL provide a non-empty `alt` attribute of 1 to 125 characters describing the image content.
3. WHERE an Image_Element is decorative, THE Project SHALL provide an empty `alt` attribute (`alt=""`) so that assistive technology skips the image.
4. WHEN a user moves keyboard focus to a focusable Interactive_Element, THE Project SHALL display a focus indicator that has a contrast ratio of at least 3:1 against adjacent background colors and surrounds or underlines the element with a visible boundary of at least 2 CSS pixels.
5. WHEN a user opens the search modal, THE Project SHALL move keyboard focus to the first focusable Interactive_Element inside the modal and confine forward and backward `Tab` navigation to elements within the modal until it is closed.
6. WHEN a user presses `Escape` while the search modal or mobile drawer is open, THE Interactive_Element SHALL close and return keyboard focus to the control that opened it within 200 milliseconds.
7. IF the control that opened the search modal or mobile drawer is no longer present in the document when it closes, THEN THE Project SHALL move keyboard focus to the document body and prevent focus loss (no focus on a hidden or removed element).
8. WHEN the navigation dropdown, search modal, or mobile drawer changes between open and closed states, THE Project SHALL update the ARIA attributes that express expanded/collapsed state and role for that Interactive_Element so the current state is exposed to assistive technology.
9. THE Project SHALL maintain a text-to-background contrast ratio of at least 4.5:1 for normal-size text and at least 3:1 for large-size text, where large-size text is text rendered at 18 point (24 CSS pixels) or larger, or 14 point (18.66 CSS pixels) or larger when bold.

### Requirement 4: SEO and Metadata

**User Story:** As a marketer, I want each page to expose complete metadata, so that search engines and social platforms represent the site accurately.

#### Acceptance Criteria

1. THE Project SHALL define a `title` between 1 and 60 characters and a `description` between 1 and 160 characters in the Metadata of each Page, where the `title` value is unique across all public Pages.
2. THE Project SHALL define Open Graph Metadata for each Page including `og:title`, `og:description`, `og:image`, and `og:url`, where `og:image` references a resolvable image URL with explicit width and height of at least 1200 by 630 pixels.
3. IF a required Metadata field (`title`, `description`, or any Open Graph field) is absent for a Page, THEN THE Project SHALL apply a defined site-wide default value for that field.
4. THE Project SHALL serve a `sitemap.xml` at the site root that enumerates every public Page route exactly once, where each entry includes an absolute URL.
5. THE Project SHALL serve a `robots.txt` at the site root that declares crawl directives and includes an absolute URL reference to the `sitemap.xml` location.
6. THE Project SHALL include structured data on the home Page describing the organization, where the structured data validates against the schema.org Organization type without errors.
7. WHEN a Page is rendered, THE Project SHALL emit exactly one canonical URL for that Page expressed as an absolute URL.

### Requirement 5: Performance

**User Story:** As a site visitor, I want pages to load quickly and efficiently, so that I can browse without delays.

#### Acceptance Criteria

1. THE Background_Effect SHALL initialize using an event-driven mechanism only, without any continuously repeating polling loop (such as `setInterval`).
2. WHEN the third-party 3D libraries finish loading, THE Background_Effect SHALL initialize exactly once within 500 milliseconds, with no more than one active effect instance per Page.
3. THE Project SHALL load external scripts using the Next.js script-loading mechanism (`next/script`) with an explicit loading strategy that does not block the initial Page render.
4. THE Project SHALL serve images through the `next/image` optimization pipeline so that each rendered image is sized to its requested display dimensions and delivered in a format supported by the requesting device.
5. IF a third-party 3D library fails to load within 10 seconds, THEN THE Project SHALL render the affected Page without the Background_Effect, keep the Page interactive, and raise no uncaught runtime error.
6. WHEN Background_Effect initialization succeeds, THE Project SHALL preserve its existing visual appearance using the current configuration values for color, secondary color, background color, and scale.
7. WHEN a Page that renders the Background_Effect unmounts, THE Project SHALL tear down the effect instance so that no orphaned effect instance remains.

### Requirement 6: Consistency and Maintainability

**User Story:** As a developer extending the Project, I want consistent, reusable patterns, so that future changes are predictable and low-effort.

#### Acceptance Criteria

1. WHERE the same card or section UI pattern appears on two or more Pages, THE Project SHALL provide a single shared Component for that pattern and SHALL contain no duplicate markup definitions of that pattern across Pages.
2. THE Project SHALL reference every design value (color, spacing, typography, sizing, and breakpoint) through Tailwind_Tokens, and SHALL contain zero hardcoded design values that duplicate an existing Tailwind_Token.
3. THE Project SHALL apply TypeScript typing to all Component props, state, and exported functions, with zero occurrences of the `any` type and zero type-checking suppression directives used to bypass type checking.
4. WHEN a shared Component is introduced to replace duplicated markup, THE Project SHALL render output for each affected Page that is identical to the pre-refactor output in DOM element structure, text content, and applied CSS classes.
5. IF a shared Component cannot render output identical to the pre-refactor output of an affected Page, THEN THE Project SHALL retain the original Page markup unchanged and SHALL surface a build-time or type-check error indicating the mismatch.
