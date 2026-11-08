# Full-library validation

Verified on 2026-11-08, Asia/Manila. The implementation retains Hulmio styling
and covers 104 families, 1,147 runnable examples, all 639 pinned HeroUI v3.2.7
reference sections, and all 32 Hulmio-only checklists.

- `npm run check:coverage`: passed. Every registered copyable source exactly
  matches its renderer's TSX file; all required mappings and stable IDs exist.
- `npm run build`: passed for the package and gallery.
- `npm run check:package`: passed using an independently installed tarball.
  All 1,147 examples compile with strict public types; standalone styling,
  host styles, forms, dates, color editing, Sheet, toast queues, portals,
  themes, mobile layout and reduced motion pass their consumer checks.
- Browser coverage includes 119 current checks. The complete initial 118-test
  run passed 113 checks and found five issues. Affected suites were rerun after
  corrections; the final 13-check run and branding recheck both passed with
  zero failures. No identified failure remains unresolved. Exact run records
  are in `HEROUI-IMPLEMENTATION.json`.
- Every component page mounts every registered example and passes runtime/React
  error, duplicate-ID and label-association checks. Stateful features use shared
  interaction tests; example counts alone are not behavioral evidence.
- Inspected 24 screenshots of Button, Input and AlertDialog at 1440px, 768px and
  390px in light/dark themes, including open confirmation dialogs. The page index,
  previews, source containers and dialogs fit the viewport.
- Fresh source review and follow-ups report no remaining Important findings.

The immutable research snapshot stays separate from this implementation evidence.
Generating examples again deliberately resets the generated tracker's verification
status until the changed sources are checked.
