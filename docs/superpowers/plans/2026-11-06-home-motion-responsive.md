# Homepage motion and responsive polish

**Goal:** Improve homepage entrances and responsive composition, add breathing room below playground tabs, use slim theme-aware scrollbars throughout the gallery, and keep only the search field's bottom focus indicator.

**Architecture:** Retain the six homepage sections, existing identity and shared React components. Use the existing Web Animations/IntersectionObserver hook; remove scroll-driven hero scaling, reveal content once near viewport entry, preserve card rotation, and respect reduced motion. Compose the mobile hero as a layered showcase with offset supporting cards instead of a plain vertical stack. Keep scrollbar and search styling in website CSS, including portaled dialogs.

**Approach:** Refine the existing composition and motion rather than add another animation library or rebuild the homepage. The user has delegated design choices; implement directly in the active checkout while preserving all unrelated local changes. No staging, commit, publication or deployment.

**Tech stack:** React 19, TypeScript, CSS, WAAPI, existing Playwright/Chrome.

## Tasks

- [x] Capture the reported hero scale, playground spacing, mobile composition and search focus before editing.
- [x] Refine `src/lib/useHomeMotion.ts`: once-only short fade/translation entrances, mobile support, no clipping/scale entrance effects, immediate reduced-motion cancellation, static hero background.
- [x] Refine `src/styles/home.css`: generous tab/content spacing without clipped forms, mobile/tablet layered hero, deliberate responsive category/assembly layouts and working touch controls.
- [x] Refine `src/styles/website.css`: global narrow scrollbars with theme-derived colors; search input has no rectangular outline and retains its bottom focus indicator.
- [x] Update existing homepage motion regressions for the intended viewport trigger and mobile behavior. Check reduced-motion cancellation, fast scrolling, rotation preservation, bounded playground interaction and overflow at 320/390/768/1440/1920px.
- [x] Run production build, full existing Playwright suite and production browser screenshots in light/dark mode. Review screenshots and record outcomes in `docs/WORK-LOG.md`.

## Review focus

- Repeated playground switching must keep a fixed height and a fully visible form.
- Visible content must never be rehidden during fast scrolling or restored motion preferences.
- Keyboard focus must stay visible; search uses an underline while close/results retain their focus styling.
- Mobile supporting cards must stay readable and must not overlap interactive playground controls.
- Nested theme previews and portaled dialogs must receive scrollbar colors appropriate to their own theme.

## Verification ledger

- Baseline browser capture reproduced desktop hero scale changing from 1 to 1.01531 at450px scroll, cramped form spacing and a rectangular2px native search outline. Root scrollbar styling was still automatic.
- First focused run:20 passed. Browser measurements after polish: no horizontal overflow or internal playground scrolling at320/390/768/1440/1920px; hero scale stays unset; form heading gap approximately20–32px in transformed viewport coordinates.
- Independent review identified a16px mobile category snap from CSS/WAAPI translate collision and the Documentation link being partially covered at1024px. Both regressions reproduced in new tests, then passed after moving the static card stagger to relative top positioning and refining compact-desktop card widths/placement. Hit tests cover768/1024/1199/1200/1280/1360/1440px.
- Ruling: retain the established one-motif direction (seed1745989387), forest/lime palette, typography, actual UI fragments and six sections. No redraw, new assets, dependency, API or package-style changes are needed.
- Ruling: isolated test result folders are required for concurrent test invocations. The first full development-server run encountered trace-file ENOENT cleanup errors because a focused run reused its output directory. Final checks use a separate production configuration and output directory.
- Final production build: exit 0; only the existing large-chunk advisory remains. Final production Playwright run: **76 passed (4.6m)**. Independent final review: no important findings.
- Final browser capture: no horizontal overflow or playground stage overflow at 320/390/768/1440/1920px; correct bottom-only search focus and thin theme-derived scrollbars in light/dark and nested theme previews; no page errors.
- Production WAAPI recording: 33 animated and visibly faded targets at both 1440px and 390px, all finishing at full opacity; zero animations with reduced motion. Artifact: `artifacts/home-polish-final/motion-recording.json`.
- Final inspector: 0 FAIL / 7 documented style warnings with existing product-UI/WAAPI allowances. All nine contact sheets and supplemental direct screenshots reviewed; critique: `.taste-skill/home-motion-critique.md`.
- Scoped `git diff --check`: exit 0. Public package source unchanged; independent package consumer check not repeated. Browser checks use Chrome; Safari/Firefox remain untested.
