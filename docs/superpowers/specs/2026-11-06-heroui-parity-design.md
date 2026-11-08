# Complete component examples and behavior parity with HeroUI

Date: 2026-11-06, Asia/Manila. Status: **owner-approved; implemented and validated**.

Builder review: a fresh software-engineering reviewer reported no important
unanswered questions. The approved scope is implemented; see [validation evidence](../../HEROUI-VALIDATION.md).

This records the approved scope for the owner's request. Implementation and
verification evidence are tracked separately in HEROUI-IMPLEMENTATION.json. Existing staged and unstaged work must be preserved; this document
does not authorize committing, publishing, pushing or deploying it.

## Intent and success

The owner finds Hulmio's component pages incomplete. They want the depth of
HeroUI's documentation across the entire library: Basic, component-specific
variants, sizes, icons, controlled examples, validation, loading, disabled states,
and real compositions such as social buttons. Hulmio keeps its own design.

Success means someone can find each reference use case, interact with it, copy
its actual source, and use the same public Hulmio API in another React app. A
page with matching headings and nonfunctional controls does not meet the request.
Neither does a Button-only expansion.

## Verified baseline and fixed reference

- The evaluated catalog and example registry contain **84 families and 167
  examples**. These counts were obtained by loading the actual TypeScript data,
  including `additional.ts` and `variantExamples.ts`.
- HeroUI **v3.2.7**, the version in the owner's screenshots, is the reference.
  Tag commit: `7cb1642606c6f96f424dad78a961ccf45436be72`.
- All **73 English React component documents** at that commit were retrieved.
  The tree contains 74 MDX files including the component index. There are **566
  named example sections**, including the five advanced Autocomplete examples,
  in addition to Basic usage and customization examples. A section can contain
  several controls or a code composition; it is not a count of completed demos.
- The comparison identifies **20 reference families without a dedicated Hulmio
  entry**, and **32 existing Hulmio families without a reference counterpart**.
  Mappings are starting points, not proof that their APIs are equivalent.

The complete targets, current example names, source links, source hashes, preview
identifiers, and API prop names are recorded in:

- [Coverage checklist](../../HEROUI-PARITY.md)
- [Structured snapshot](../../research/heroui-v3.2.7-coverage.json)

Those files are normative for scope. Their `not-verified` status is deliberate:
research does not establish implementation parity. New HeroUI releases do not
change this fixed target during implementation.

## Approaches

1. **Expand package APIs and documentation together — recommended.** Work through
   every reference use case and every existing Hulmio family. Add the real shared
   behavior first when missing, then the live example, copyable source and docs.
   This is a substantial library expansion, but it meets the full request.
2. **Expand only the gallery.** This is smaller, but leaves copied examples unable
   to reproduce features absent from the package. It does not meet the request.
3. **Use HeroUI components under Hulmio styling.** This can reuse more behavior,
   but introduces a second design-system dependency and changes Hulmio's API and
   distribution strategy. The existing Radix and React Aria foundations already
   provide most of the necessary building blocks.

The owner approved the full design and approach 1 in chat. Implementation keeps
React 19, TypeScript, the npm workspace, Vite, existing dependencies where useful,
and the current `hulmio-ui` distribution workflow.

## Scope

### Existing library

All 84 existing families remain in scope. Their current routes, exports and
working examples are retained. Reference-backed families receive every relevant
reference example section. The 32 Hulmio-only families receive the explicit
component-specific checklist in `HEROUI-PARITY.md`, including relevant states,
controlled use, keyboard behavior and edge cases.

Do not manufacture irrelevant states for informational primitives. A Separator
does not need a loading state; a form control does need its required, disabled,
invalid, controlled and form-value behavior where applicable.

### Dedicated missing entries

Add these 20 entries, with public exports and their own example sections:

| Area | New entries |
| --- | --- |
| Actions and navigation | CloseButton, Link, DisclosureGroup |
| Forms | CheckboxGroup, Description, ErrorMessage, FieldError, Fieldset, SearchField, TextField |
| Date and time | DateField, TimeField |
| Color | ColorArea, ColorField, ColorSlider, ColorSwatch |
| Selection | Autocomplete, TagGroup |
| Surfaces and overlays | Surface, Sheet |

These are new catalog entries, not a requirement for 20 independent behavior
implementations. For example CloseButton can compose IconButton; SearchField can
share the Input implementation; field helpers can share validation context.
The proposed inventory becomes 104 families. Existing grouped pages for
DatePicker/DateRangePicker, Avatar/AvatarGroup and linear/circular Progress may
retain their routes as long as every mapped use case is clearly discoverable.

### Content equivalence

Match the reference's example topics, their ordering and demonstrated capability.
Use common functional headings such as Variants, Sizes and Loading State. Write
Hulmio-specific prose, example data and code. Keep its existing extra variants,
sizes and useful examples as additional sections. Do not reproduce marketing,
newsletter or unrelated showcase content from the reference site.

Customization explains Hulmio's own `className`, `style`, scoped CSS and
`--hulmio-*` tokens. Tailwind can be an optional composition example, but remains
unnecessary for package consumers. API tables describe the actual Hulmio props,
defaults, types and callbacks. Exact HeroUI prop spelling or compound-component
syntax is not required when Hulmio provides the same working use case.

## Package architecture and compatibility

`packages/ui/src` remains the sole public implementation. Gallery code may own
sample data and local state, but cannot supply missing reusable component behavior.
`src/components/ui.tsx` remains a re-export seam. New APIs and types are exported
through `packages/ui/src/index.ts` and use scoped package styles.

Prefer installed React Aria components for calendar, color, internationalization,
form and collection behavior, and installed Radix primitives for matching overlay
and menu behavior. Expose capabilities through focused props or composable parts
only when an actual target example requires them. Do not build a universal schema
or new component framework. Additional dependencies require a demonstrated gap;
the builder may select them without reopening the approved scope.

Compatibility constraints:

- Preserve native props, refs, callback shapes, controlled/uncontrolled behavior,
  form names and uncancelled reset behavior. Old examples must still compile.
- Add new visual variants rather than renaming current ones. Button, for example,
  needs equivalents of tertiary and soft destructive treatment alongside its
  existing ten variants. Keep all five existing sizes and shapes.
- Preserve the existing `Input.className` wrapper and native `style` behavior.
  New TextField/SearchField composition uses the same input internals and correct
  label, description and error associations.
- Keep legacy ISO date-string values and callbacks working. Add explicitly named,
  typed DateValue inputs/callbacks for international calendar and date/time modes;
  represent the mutually exclusive ownership modes in TypeScript. Do not silently
  reinterpret old date-only values as local timestamps or change their callbacks.
- Keep existing Modal/Dialog, Drawer, AlertDialog and native alternatives usable.
  New presentation and dismissal options are additive. Existing default dismissal
  behavior is retained and the reference alternatives are demonstrated explicitly.
- Preserve existing standalone Toast surfaces; add provider/queue and imperative
  notification APIs for the queue examples instead of making a provider mandatory
  for old usage.
- Keep `private: true`, package version 0.1.0, light/dark themes and existing
  supported React versions during this work.

## Required depth by domain

The coverage snapshot specifies each individual section. These are the important
behavior gaps already visible in the current public APIs:

| Domain | Required result |
| --- | --- |
| Button and action groups | Separate Basic, Variants, Sizes, With Icons, Icon Only, Loading, interactive Loading State, Full Width, Disabled State, Social Buttons, render-function composition, custom variants and optional ripple examples. Groups support size/variant inheritance, orientation, width, disabled state and separator options. |
| Fields and forms | Primitive and composed examples; descriptions, validation, controlled values, full width, surface use, adornments, password toggle, clear/copy actions, OTP completion/patterns, number formatting, segmented date/time fields, group validation, native and ARIA validation and per-field server error examples. |
| Collections and menus | Sections, descriptions, icons, disabled entries, single/multiple selection, controlled input/selection/open state, clear/custom value/custom indicator, custom filtering, async loading, empty collections, submenus, long press and virtualization where shown. |
| Calendars | Single/range and multiple selection as specified, year picker, focused dates, min/max, unavailable dates and anchor-dependent ranges, fixed weeks, week/day views, cell indicators, custom navigation, multiple visible months and international calendars. |
| Color controls | Pointer and keyboard channel editing, color areas, field parsing and validation, RGB/HSL/alpha channels, vertical sliders, swatches, transparency, controlled values and composed popover picker. Retain native color-input usage as an explicit alternative. |
| Display and feedback | Anchored notification badges in addition to existing text badges, avatar fallbacks/groups/layouts, card compositions, progress and meter sizes/colors/scales, spinner speed, skeleton layouts/animation modes and accessible loading announcements. |
| Tables | Preserve the simple semantic Table and existing DataTable API. Add real async/loading/empty examples, selection, sorting, expansion, pagination, column resizing, virtualization, custom cells and the reference third-party table integration. A few-row table is not evidence of virtualization. |
| Overlays | Status icons, sizes, placement, scroll behavior, controlled open state, custom triggers/backdrops, opaque/blur/transparent backdrops, configurable dismissal/close methods, custom animation and portal examples. Sheet adds real snap points, nested sheets, handle-only interaction, detached presentation and controlled position. |
| Toasts | Real provider-managed queues, placements, expanded stacks, actions, indicators/rendering, pending-to-success/error promises, callbacks and independent queues, with keyboard dismissal and appropriate announcements. |
| Navigation and layout | Breadcrumb levels/separators/disabled items, pagination sizes/simple/ellipsis/summary/custom icons, overflowing/vertical/aligned tabs, toolbar grouping/orientation and scroll-shadow size/visibility behavior. |

For the table integration example, any third-party imports must be declared in the
gallery and independent example-consumer dependencies, and documented in that
example's setup. They must not silently become requirements for ordinary consumers.

An async gallery demo uses deterministic local data/promises; it demonstrates the
public loading/error state contract without requiring a server. Actual upload
transport, authentication, account mutations and persistence remain app-owned.
Social examples show real icon assets and local interaction feedback; they do not
pretend to authenticate. Pending examples must prevent duplicate actions and
demonstrate recovery. Controlled confirmation examples must stay open while pending
and after an error, closing only on successful completion or a permitted cancel.

## Gallery and documentation

Each component page becomes a readable sequence of named sections. Preserve the
current Hulmio navbar, component sidebar, typography, green/lime tokens, component
styling, copy feedback and expandable source treatment. This is a content and
behavior expansion, not a new brand or homepage redesign.

```text
Existing navbar
Component sidebar | Component name and description | On this page
                  | Usage + Basic preview          | Usage
                  | Examples                       | Variants
                  |   Variants + preview + code    | Sizes
                  |   Sizes + preview + code       | With Icons
                  |   ...every required example    | ...
                  | Customization                  | API
                  | API + accessibility            |
```

Use one main example column so the full sequence is easy to scan. On wide
desktops, the page index can occupy a quiet right column; on smaller screens use
an inline expandable index. The catalog's existing compact phone grid remains.
Respect the current sticky navbar, readable text sizes, 44px touch targets,
light/dark tokens and reduced-motion settings.

Each example needs a stable identifier independent of its display title. The live
renderer and copyable code must come from the same actual example source, using
Vite raw-source imports or an equivalently direct source mechanism. Avoid an
expanded set of manually synchronized JSX branches and code strings. Prefer
per-family modules so opening one page does not load every demo. Do not evaluate
example text at runtime.

The hash router currently uses `#/components/<id>` and splits query parameters.
Page-index links use an example query such as
`#/components/button?example=loading-state`, followed by explicit element scrolling.
Do not replace the component route with a native `#loading-state` anchor. Updating
only the example query must not reset page state, scroll to the top first, or lose
focus. Direct links, browser Back and keyboard use must work. Existing paths remain
valid.

Keep reset local to the current page and clean up example timers, listeners and
temporary object URLs on unmount/reset. Long tables and code scroll inside their
containers without making the document overflow. Every interactive example has
observable local feedback where its action otherwise would do nothing.

## Evidence and completion

Maintain a separate implementation tracker keyed by reference component and
stable example ID. A requirement becomes verified only when it records:

1. The implemented public export/API and its actual example source.
2. The rendered gallery section and matching copyable source.
3. Appropriate behavior evidence; stateful features need interaction coverage,
   not only screenshots or a heading-count assertion.
4. Independent packed-package compilation and runtime checks where applicable.

Validation must cover:

- Every catalog entry and target section is discoverable; no duplicate IDs,
  placeholder branches, missing exports, console errors or mismatched code.
- All documented examples type-check against the packed package. Retain and
  extend the existing `collectLibrary`/`check:package` workflow; remove stale
  hardcoded 84/167 assertions only as the actual inventory changes.
- Behavior checks for each distinct new interaction contract: controlled values,
  invalid/disabled states, submission/reset, async recovery, selection and menus,
  focus trapping/restoration, portals, toast lifetimes, table virtualization and
  sheet snapping. Reuse tests for shared behavior rather than duplicating tests
  for every cosmetic example.
- Existing test expectations such as four Button sections are updated to the
  approved coverage while preserving their variant, accessibility and copy checks.
- Desktop and mobile checks, screenshots inspected at 1440px, 768px and 390px,
  both themes, keyboard operation and reduced motion. Check the new long-page
  index and deep links as shared navigation changes.
- `npm.cmd run build`, the full `npm.cmd test` suite because shared navigation and
  many APIs change, and `npm.cmd run check:package`. Record actual outcomes and
  unresolved failures without claiming complete parity while required work remains.

Update root/package READMEs, `docs/COMPONENT-COVERAGE.md`, relevant usage docs and
`docs/WORK-LOG.md` to reflect actual exports, counts, behavior and test evidence.
Remove obsolete limitations only after their replacements have been verified.

## Builder decisions and boundaries

The builder chooses file boundaries, exact additive prop names, primitive
composition, test organization and optional dependency versions after checking
the installed APIs and primary documentation. Those are implementation decisions,
not new scope approvals. Work can be delivered in domain-sized batches, but a
completed batch does not complete the full request.

No backend, real social authentication, deployment, npm release, unrelated visual
redesign, changes to user staging, or commitment to matching future HeroUI releases
is included. The research snapshot remains unchanged; product work follows the approved implementation plan.
