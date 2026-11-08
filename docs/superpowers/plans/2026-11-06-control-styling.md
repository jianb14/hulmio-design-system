# Consistent controls implementation plan

**Goal:** Match the supplied separated input focus ring, remove rings from pressed actions, and remove decorative component presets.

**Architecture:** Edit the shared `packages/ui` implementation and CSS, then update gallery consumers and package documentation. Preserve semantic variants, native props, refs, and consumer styling hooks.

**Scope:** Button, Input, Badge, Card, and Tabs use one base design. Functional examples (invalid inputs, chart types, date ranges) remain. Remove decorative reference galleries for those five families. Work in the existing dirty checkout to preserve the user's ongoing local work; do not stage, commit, publish, or deploy.

- [x] Add browser regressions for separated rings, pressed versus keyboard focus, and simplified galleries; observe current failures.
- [x] Consolidate field focus styles across shared controls; preserve error colors and keyboard accessibility. A focused text field retains its ring while being edited; pressed action controls do not.
- [x] Remove named decorative exports and styles; update homepage, gallery, usage examples, consumer fixture, and owner/package documentation.
- [x] Run build, full Playwright suite, independent package check, and desktop/mobile visual checks. Record results in the work log.

**Review focus:** Focus inside input addons; custom select open state; disabled/invalid controls; dark and contrast themes; consumer CSS overrides without gallery styles.
