# Catalog and theme refinement

**Goal:** Preserve Hulmio's existing design while improving theme changes, navigation, catalog accuracy, and narrow-screen readability.

**Architecture:** Keep the current React gallery and shared UI package. Use a native root view-transition crossfade with immediate updates for reduced motion or unsupported browsers. Scope catalog and navbar styling to the website; no package API or token changes.

**Requirements:** Text-only sidebar links; equal 44px square hamburger/theme controls (confirmed by the user); two catalog columns on phones; clear heart/add/more icon artwork; joined action-group artwork without an extra divider; an accessibility foundation using the existing typography, cards and controls.

**Approach:** Refine existing SVG artwork and CSS. Preserve static thumbnails and their distinct silhouettes rather than mounting 84 interactive examples. Add Accessibility to foundation routes, navigation, page titles and command search. No dependencies, publication or deployment.

- [x] Add responsive catalog, sidebar, navbar, theme and foundation regression checks.
- [x] Update App theme handling and text navigation, navbar dimensions, and catalog responsive CSS.
- [x] Correct misleading action illustrations and review all 84 thumbnails in a contact sheet.
- [x] Add the accessibility guide with a keyboard-usable form and authoritative W3C references.
- [x] Run the full gallery suite and production build, inspect screenshots, and resolve reviewer findings. See `docs/WORK-LOG.md` for exact results and the successful stable-server rerun.

**Validation:** Existing static-artwork uniqueness checks, all gallery Playwright tests, production TypeScript/Vite build, screenshots at desktop and 320/390/768px in both themes. Package consumer check is unnecessary because public package source, APIs and CSS are unchanged by this task.

## Responsive follow-up

The owner's later request supersedes the square mobile hover shape above:
use circular hover backgrounds at 900px and below while preserving 44px targets.
Keep category filters in one horizontally scrollable row. Suppress native search
clear decorations in the shared Input and inset its custom clear hover by 4px.
Remove mobile copy-toolbar padding and the empty feedback-label gap.

- [x] Observe the four new/updated browser regressions failing before the fixes.
- [x] Apply the scoped navbar/catalog/copy CSS and shared Input styling.
- [x] Build and run the relevant production-browser checks (35 passed).
- [x] Inspect light/dark screenshots at 320/390/768/1440px and verify touch clearing.
- [x] Verify the distributed package, including its native-search reset and clear hover (84 families and 167 compiled examples passed).
