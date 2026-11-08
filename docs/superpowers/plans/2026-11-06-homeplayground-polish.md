# Hulmio playground, navbar and scroll polish

**Goal:** Apply the supplied navbar reference, remove visible badge bullets and replace the unbounded task demo with a product-relevant component playground.

**Architecture:** Keep React 19, the shared Hulmio components, current identity/routes and six homepage sections. The new fixed-height playground opens with a composed form and switches between Form, Button, Input, Badge and Tabs, changes their real variants and shows matching JSX and documentation links. A distinct settings composition completes the assembly sequence. It has no appendable list. Navbar state fixes stay scoped to the website. Public optional Badge dot support remains compatible while all visible/copied website examples are dot-free.

**Motion diagnosis:** The previous observer starts 24px inside the viewport, then applies up to 400ms delay and an opacity reset. Start scroll entrances 240px before the viewport, remove scroll delays, shorten motion, use distinct heading/row/picture/code treatments, and skip entrances when fast scrolling has already placed content well inside the screen. Preserve authored transforms and static smaller-screen/reduced-motion fallbacks.

## Tasks

- [x] Navbar: border-only search hover, centered keycap, no press transform, filled GitHub glyph plus compact genuine count inside a soft pill (navbar_states agent).
- [x] Badge: remove visible dot callers, Dot gallery design and badge artwork circle without changing family/example counts (badge_cleanup agent).
- [x] Replace the two task workspaces with a fixed-height interactive component playground and a distinct settings composition; remove obsolete compositions and their CSS; improve hero supporting copy.
- [x] Implement timely varied entrances and retain desktop assembly, reduced motion, keyboard focus and mobile layouts.
- [x] Verify regressions first, production build, full suite, installed package/examples and screenshots at 390/768/1440/1920px. Record results in work log.

## Review focus

Repeated playground interaction must never increase its height or cover later sections. Navbar changes must preserve keyboard focus, search dismissal and shared Button press feedback elsewhere. Fast scrolling must never cause readable content to suddenly become hidden. Copyable snippets must match the real component variant; full examples remain in component documentation. Preserve GitHub cache/error behavior and existing API overrides.

No publication, deployment or commits are included.

## Verification ledger

- Reproduced the pre-fix regressions: missing bounded playground, entrances not triggered before viewport arrival, badge dots, search hover/press, keycap and GitHub treatment. Red logs are retained under `artifacts/redesign/` and focused agent outputs.
- `npm.cmd run build`: exit 0. Final TypeScript check and Vite build also exit 0 after the last CSS/fragment changes. Existing gallery bundle-size warnings remain.
- Final `npm.cmd test`: **73 passed (6.0m)**. Evidence: `artifacts/redesign/homeplayground-accepted-tests.log`. Includes 320px overflow, complete visible form and repeated fixed-height playground interaction.
- `npm.cmd run check:package`: exit 0; independent tarball install, 84 public families, all 167 compiled examples, strict declarations, standalone CSS, customization, overlays, mobile/reduced-motion and page errors.
- Tarball SHA-256: `316239FE900D133FFA13A34490209E666CF6CA245580ABCA753EA465EEED7942` (public package unchanged; gallery examples are dot-free).
- Production capture at 390/768/1440/1920px: no horizontal overflow, no clipped playground form, no page errors, zero scroll-induced layout shift. All 27 nonhero entrance targets started ahead of viewport arrival with zero delay; heading/row/picture/code presets differ. Smaller-screen and reduced-motion layouts remain static/readable.
- Independent read-only review found no important findings in this scope. Navbar agent's 12 tests and initial root's 11 focused tests passed before final integration; the complete final run above supersedes them.
- Visual inspector: 0 FAIL / 7 WARN with the documented actual-UI, navigation-border and WAAPI allowances. Screenshots and critique: `.taste-skill/homeplayground-final/`, `.taste-skill/homeplayground-critique.md`; final critique 7.9/10. The source's genuine GitHub count/cache/unavailable behavior is preserved.
- `git diff --check`: exit 0. No staging, commit, publication or deployment.

Detailed logs/screenshots/recording: `artifacts/redesign/homeplayground-*`.
