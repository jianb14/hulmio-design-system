# Hulmio component coverage

Updated: 2026-11-08, Asia/Manila.

The package implements **104 component families** with **1,147 source-backed examples**. Each catalog entry has static SVG artwork; each detail page has working examples with expandable, copyable source. Public package implementations power both the gallery and consumers.

| Family | Examples |
| --- | --- |
| `button-group` | 11 |
| `button` | 16 |
| `close-button` | 4 |
| `toggle-group` | 11 |
| `toggle` | 9 |
| `tag-group` | 12 |
| `color-area` | 7 |
| `color-field` | 13 |
| `color-picker` | 7 |
| `color-slider` | 9 |
| `color-swatch-picker` | 12 |
| `color-swatch` | 7 |
| `slider` | 17 |
| `switch` | 17 |
| `date-field` | 15 |
| `calendar` | 23 |
| `time-field` | 13 |
| `checkbox-group` | 10 |
| `checkbox` | 17 |
| `description` | 4 |
| `error-message` | 2 |
| `field-error` | 6 |
| `fieldset` | 3 |
| `form` | 4 |
| `input-group` | 25 |
| `otp-input` | 13 |
| `input` | 15 |
| `label` | 6 |
| `number-input` | 19 |
| `radio` | 14 |
| `search-field` | 15 |
| `textarea` | 9 |
| `text-field` | 13 |
| `autocomplete` | 24 |
| `combobox` | 26 |
| `select` | 21 |
| `accordion` | 12 |
| `avatar` | 16 |
| `badge` | 10 |
| `chip` | 8 |
| `breadcrumbs` | 7 |
| `card` | 10 |
| `inline-calendar` | 21 |
| `range-calendar` | 22 |
| `list-box` | 11 |
| `meter` | 8 |
| `progress` | 17 |
| `skeleton` | 10 |
| `spinner` | 7 |
| `separator` | 10 |
| `surface` | 4 |
| `toolbar` | 6 |
| `collapsible` | 4 |
| `disclosure-group` | 3 |
| `link` | 6 |
| `pagination` | 11 |
| `tabs` | 14 |
| `kbd` | 9 |
| `typography` | 8 |
| `scroll-shadow` | 9 |
| `table` | 14 |
| `dropdown` | 19 |
| `alert` | 4 |
| `alert-dialog` | 15 |
| `drawer` | 11 |
| `dialog` | 16 |
| `popover` | 7 |
| `sheet` | 15 |
| `toast` | 14 |
| `tooltip` | 8 |
| `icon-button` | 11 |
| `upload` | 12 |
| `tag-input` | 11 |
| `rating` | 10 |
| `timeline` | 8 |
| `chart` | 19 |
| `carousel` | 9 |
| `stepper` | 10 |
| `command` | 11 |
| `empty-state` | 8 |
| `layout` | 8 |
| `kanban` | 10 |
| `field` | 9 |
| `scroll-area` | 9 |
| `aspect-ratio` | 9 |
| `navbar` | 9 |
| `sidebar` | 9 |
| `button-link` | 10 |
| `item` | 11 |
| `hover-card` | 10 |
| `context-menu` | 12 |
| `menubar` | 11 |
| `navigation-menu` | 11 |
| `tree-view` | 11 |
| `checkbox-card` | 11 |
| `radio-card` | 11 |
| `stat` | 10 |
| `data-list` | 10 |
| `image` | 11 |
| `code-block` | 9 |
| `clipboard` | 8 |
| `resizable` | 11 |
| `multi-select` | 2 |
| `simple-table` | 1 |

Reference topics and baseline mappings are recorded in [HEROUI-PARITY.md](HEROUI-PARITY.md). The [implementation tracker](HEROUI-IMPLEMENTATION.json) records each source file and its verification status.

## Research basis

Coverage was compared with [Radix primitives](https://www.radix-ui.com/primitives/docs/overview/introduction),
[shadcn/ui's component index](https://ui.shadcn.com/docs/components), and
[React Aria](https://react-aria.adobe.com/). They informed the inventory and behavior
expectations; Hulmio retains its own green/lime design language and useful semantic variants.

## Distinguish design, variant, state and composition

- Base components: Button, Input, Card, Badge, and Tabs; customize with native props, className, style, and CSS variables.
- Variant: a semantic treatment such as primary, outline or destructive.
- State: loading, disabled, focus, selection or invalid data as appropriate.
- Composition: a homepage/pattern app workflow composed from package components; app authentication, persistence and requests remain consumer responsibilities.

## Supported limits

- Rich Combobox and MultiSelect use styled searchable lists/chips; Native* alternatives preserve browser behavior.
- Existing date pickers retain date-only ISO strings. SegmentedDatePicker, SegmentedDateRangePicker, DateField and TimeField accept typed DateValue/TimeValue objects with locale and calendar support; parsing and timezone conversion use @internationalized/date.
- Slider supports a numeric value or two-value range, with min/max and step.
- Upload chooses/validates files; apps provide transport, progress and server checks.
- Rich controls support native form bridges and reset handling; controlled values remain owned by the consuming app.
- Field associates a single direct native/ref-capable child; wire grouped/nested
  descriptions explicitly. Native attributes/ref types are in exported Props.
- DataTable is client-side and requires stable rowKey values. It supports virtual rows, selection, sorting, resizing and custom cells; apps supply remote data and persistence.
- Chart scatter/heatmap are categorical visualizations; every chart includes a data table.
- Kanban moves use explicit native controls. Backend persistence and pointer dragging
  are app integrations. Carousel has manual controls, without automatic rotation.
- Toast can be a standalone surface or use ToastProvider with ToastQueue for lifetimes and queued notifications. Apps own network operations. Layout primitives are
  structural helpers; app routing, menu state and business workflows remain app-owned.
- PortalContainer retains explicitly selected subtree themes. Without it, set the
  theme on html. The package inherits fonts and requires no website/Tailwind CSS.
- Compatibility target is React/React DOM ^19.1.1 with bundler-based React apps.
  SSR-framework integrations, assistive-technology certification, other React majors,
  and an exhaustive security audit are not implied by the browser checks.

## Typography sources

Onest is primary and Google Sans Flex is secondary. IBM Plex Mono is used for code.
Font binaries are self-hosted for the website with the corresponding OFL notices.
See public/fonts/SOURCES.json for URLs/hashes and the official
[Google Sans Flex metadata](https://github.com/google/fonts/tree/main/ofl/googlesansflex).
The library tarball contains no website fonts.
