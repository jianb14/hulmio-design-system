# HeroUI Coverage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Implement the approved full-library HeroUI v3.2.7 example and behavior coverage with Hulmio styling.
**Architecture:** Shared package implementations power generated, directly imported TSX examples. The gallery embeds the exact actual example source as text and lazy-loads its renderer. A pinned coverage registry maps every required reference section to its actual implementation.
**Tech Stack:** Existing React 19/TypeScript/Vite, React Aria, Radix, Playwright.
**Spec:** docs/superpowers/specs/2026-11-06-heroui-parity-design.md

## Global Constraints

- Preserve all 84 existing families, native props, refs, callback contracts, routes, current examples and local user changes.
- Add 20 dedicated entries; retain `private: true` and package version 0.1.0.
- Match all pinned use cases; do not create generic headings without matching behavior.
- Keep Hulmio tokens and component visuals, light/dark, keyboard/focus and reduced motion.
- Source/renderers must agree; no runtime eval or copied private gallery dependencies.
- No Git commits, staging changes, deployment or publication. Work in the current feature checkout: the approved project and its uncommitted source live here. Baseline archive is retained in the ignored task workspace.

## Review Focus

- Controlled empty values and native reset must not get stuck on stale defaults.
- Pending operations must recover on failure and prevent duplicate submissions.
- Changing only the example query must preserve mounted demos and focus.
- Portaled overlays must inherit the selected theme and restore opener focus.
- Bounds, empty collections and stable IDs must survive filtering/sorting/removal.

### Task 1: Domain APIs and source-backed examples

**Files:** Domain ownership is in `.superpowers/sdd/2026-11-06-heroui-parity/*-brief.md`. New focused modules extend existing exports; the root owns index.ts, styles.css, catalogs, registry and integration.
**Interfaces:** Each domain builder exports `buildDomain(snapshot)` from `scripts/parity/<domain>.mjs`, returning `{ family, referenceId, title, imports, setup?, body, slug? }[]`. `imports` is comma-separated package export identifiers, `setup` is function-scope TypeScript, `body` is JSX. Use `React.useState`/`React.useEffect` where needed. Examples may import named lucide icons through `icons?: string`, and external package imports through `extraImports?: string`.
- [x] Write and run failing behavior/type checks for new interaction contracts.
- [x] Upgrade the public APIs and add all domain examples from the pinned requiredSections, plus Basic and a real customization example.
- [x] Run targeted TypeScript checks and self-review, recording remaining gaps honestly in the domain report.
- [x] Review each domain and resolve Important findings before calling its coverage verified.

### Task 2: Gallery, action APIs and additional Hulmio families

**Files:** packages/ui/src/Button.tsx, Actions.tsx, actions.css; scripts/parity/actions.mjs, extras.mjs, generate-parity.mjs; src/lib/parityCatalog.ts, parityExamples.ts; src/examples/**; src/components/SourceExample.tsx; src/pages/ComponentGallery.tsx; src/styles/library.css; src/App.tsx.
**Interfaces:** Extend LibraryDesign with optional `id`, `sourcePath`, `referenceId`; preserve `code`, `name`, `exportName`. Generated examples import the actual package, default-export their renderer, and the generator reads actual TSX files to supply `code`.
- [x] Add failing Playwright checks for section navigation without reset, loading recovery, copy/render equality and mobile overflow.
- [x] Implement full action coverage and the 32 Hulmio-only family checklists with meaningful standalone examples.
- [x] Generate TSX and an exact-source registry from domain builders; assert every reference section has exactly one coverage mapping.
- [x] Add 20 entries, preserve prior examples, add Usage/Examples/Customization/API/accessibility and responsive page index.
- [x] Run gallery behavior checks and resolve all mismatches in the generated example compilation.

### Task 3: Integration, documentation and package verification

**Files:** scripts/verify-package.mjs and domain consumer checks; tests/parity.spec.ts; README.md; packages/ui/README.md; docs/COMPONENT-COVERAGE.md; docs/WORK-LOG.md; docs/HEROUI-IMPLEMENTATION.json.
**Interfaces:** Actual generated inventory drives counts; immutable research snapshot remains distinct from verified implementation evidence.
- [x] Build package and gallery, run all Playwright checks, then run independent packed-consumer compilation/runtime verification.
- [x] Inspect 1440px, 768px and 390px screenshots in both themes; fix layout/interaction issues and rerun affected checks.
- [x] Fresh whole-change review, fix Important issues with behavior evidence, update implementation tracker and actual docs/counts.
- [x] Report completion only after every required section and behavior passes. Never publish or commit existing user work.

Completion evidence: [Full-library validation](../../HEROUI-VALIDATION.md). All identified failures were resolved and checked in affected reruns.
