# Hulmio visual refinement implementation plan

> For agentic workers: use executing-plans for shared changes and focused parallel agents for independent navbar/artwork work.

**Goal:** Apply the user's typography, theme, radius, navigation, code-panel, content and motion corrections.

**Architecture:** Preserve the shared React package, 84 families, existing routes, green/lime palette and local preview. Onest becomes the primary sans; Google Sans Flex becomes secondary. Use six product-focused homepage sections. Keep customization and native alternatives.

**Spec:** Latest user request and supplied HeroUI code-panel/catalog screenshots in this conversation.

## Constraints

- Remove high contrast from the package, website, examples and active documentation; migrate old saved contrast preferences to light.
- Self-host Onest with its OFL license. Remove Instrument Serif use and cursive styling.
- Default rectangular surfaces and interactive rows use the input's 10px radius token. Preserve explicit shape/radius APIs, circles, pills and joined edges.
- Code excerpts fade at the bottom with a compact centered expand button over the excerpt; expanded source remains complete, accessible and copyable.
- Navbar has a longer search, aligned wordmark, real GitHub stars and a border only after scrolling.
- Homepage has overview, category browsing, assembly, variants, combined theme/customization and installation. No repetitive slogans or redundant full-screen compositions.
- Entrance animation must preserve authored transforms, run once, stop on reduced motion and avoid scroll-induced layout shifts.
- Every catalog family has a distinguishable static illustration.

## Tasks

- [x] Primary/secondary font assets and documentation; remove high contrast across public tokens and consumers.
- [x] Unify default radii in shared and website CSS, retaining explicit shape semantics and consumer overrides.
- [x] Centered overlay code expand/collapse treatment and full-source copy verification.
- [x] Navbar refinements, live GitHub count, scroll border, legacy preference migration (navbar_polish agent).
- [x] Audit and distinguish all 84 catalog illustrations (catalog_artwork_polish agent).
- [x] Shorter factual homepage and stable, staggered motion; retain functional UI and reduced-motion/mobile fallbacks.
- [x] Build, full Playwright suite, independent package installation, production screenshots, motion inspection, docs/work log.

## Review focus

Legacy theme preferences, unavailable GitHub API, explicit square/pill shapes, transformed elements entering the viewport, and complete code copying while collapsed.

No publishing, deployment, staging or commits are included.

## Verification ledger

- `npm.cmd run build`: exit 0; shared JS/CSS/types and production website build pass. Vite retains its comprehensive-gallery chunk-size warning.
- `npm.cmd test`: all 62 tests pass (5.2m), including the 84-family raster uniqueness check, keyboard/pointer/touch controls, focus, code copying, shape/radius behavior and navigation migration.
- `npm.cmd test -- tests/homepage-redesign.spec.ts`: all 5 pass (41.9s) after the final homepage wording, 12px code and scoped native color-scheme polish.
- `npm.cmd run check:package`: exit 0; fresh installed tarball, 84 public families, 167 compiled examples, strict declarations, standalone CSS, host isolation, consumer overrides, overlays, mobile and reduced motion.
- Package artifact: `artifacts/hulmio-ui-0.1.0.tgz`, 57,021 bytes, SHA-256 `316239FE900D133FFA13A34490209E666CF6CA245580ABCA753EA465EEED7942`.
- Production screenshots: 390, 768, 1440 and 1920px; code collapsed/expanded, distinct catalog navigation art, dark homepage/customizer and assembly stages 0/1/2. Final capture asserts the current hero copy, 12px homepage code and scoped native light controls on a dark page.
- Browser recording: 33 desktop entrance targets, 0 smaller-screen entrances, 0 scroll-induced layout shift and no page errors at all four widths. Reduced-motion panels are all visible and non-inert.
- Independent review: no remaining important issues after the desktop-only animation gate fix.
- Design inspector: before/after/critique recorded under `.taste-skill/refinement-*`. Final meter: 0 FAIL / 7 WARN with documented allowances for actual component UI, requested borders and the inspector's missed WAAPI targets. Critique: 7.8/10; retained brand direction with working product interfaces.
- `git diff --check`: exit 0. Working changes remain uncommitted.

Logs and final visual evidence: `artifacts/redesign/refinement-*`.
