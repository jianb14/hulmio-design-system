# Hulmio UI

Named React components for considered interfaces. This local preview includes
**104 component families** and **1,147 working examples**, with useful visual variants and richer controls. Version 0.1.0 is **not published on npm**; the local package name
does not reserve a registry name.

## Install locally

From the `hulmio` repository folder, run `npm install` then `npm run pack:ui`.
Copy `artifacts/hulmio-ui-0.1.0.tgz` to your other React project:

```sh
npm install ./hulmio-ui-0.1.0.tgz
```

Import the stylesheet once. React and React DOM `^19.1.1` are peer dependencies.
The package uses ES modules, includes TypeScript declarations, and works without
Tailwind or gallery CSS. Other React versions and SSR-framework integrations have
not been verified. Native form controls support refs and native attributes.

```tsx
import { Button, Input, Modal, DialogClose } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Modal
        title="Your first Hulmio modal"
        description="The same components you see in the gallery."
        trigger={<Button>Open example</Button>}
      >
        <DialogClose asChild>
          <Button variant="outline">Got it</Button>
        </DialogClose>
      </Modal>
    </div>
  );
}
```

## Customize in your app

Components accept native props, `className`, and `style`. Button keeps semantic
`variant`, `size`, `shape`, `loading`, and `disabled` props. Decorative named
presets are excluded. Use semantic `variant` props for the visual styles.
Use `Button`, `Input`, `Card`, `Badge`, and `Tabs` as the base components.

```tsx
<Button className="checkout-action" style={{ borderRadius: 18 }}>
  Continue
</Button>
<Input className="checkout-email" label="Email" type="email" />
```

Load your CSS after the package stylesheet. Override shared tokens globally or on
a wrapper to theme one part of your app. Set tokens on `html` for portaled content.

```css
:root {
  --hulmio-primary: #243f88;
  --hulmio-primary-hover: #1c326d;
  --hulmio-on-primary: #fff;
  --hulmio-input-focus: #aeb7cd;
  --hulmio-radius-md: 12px;
  --hulmio-font-family: "Your font", sans-serif;
}
.checkout-action[data-hulmio-ui] { padding-inline: 24px; }
.checkout-email .input-shell { min-height: 48px; }
```

`Input.className` styles the field wrapper; `Input.style` and native attributes go
to the inner input. Target `.input-shell` through your own wrapper class to customize
its border or surface. Text fields show a 2px ring with a 2px gap when focused.
Action controls keep keyboard focus indicators and have no ring while pressed.

Variants: `primary`, `secondary`, `outline`, `ghost`, `link`, `destructive`,
`soft`, `success`, `warning`, `information`. Sizes: `xs`, `sm`, `md`, `lg`, `xl`.
Input adds `variant="outline|filled|underline"` and `controlSize="sm|md|lg"`; native numeric `size` remains supported. Tabs adds `variant="segmented|underline|pill"`; Card adds `variant="default|outlined|soft"`. Badge adds `variant="solid|soft|outline"`; an explicit variant wins over the legacy `outline` boolean.

The default input ring uses the current `--hulmio-focus` color with a 2px gap. `--hulmio-input-focus` remains an optional consumer override.

Search inputs suppress the browser's built-in clear decoration. Use `clearable`
for one labeled clear action with an inset hover background; clearing returns
focus to the field. Coarse-pointer targets retain their larger touch area.

Use `ButtonLink` for navigation. Badge/alert tones are
`neutral | primary | success | warning | danger | info`.

## Component index

| Family | Public exports | Examples |
| --- | --- | --- |
| Button | `Button` | 4 |
| Icon button | `IconButton` | 2 |
| Button group | `ButtonGroup` | 2 |
| Input | `Input` | 8 |
| Textarea | `Textarea` | 2 |
| OTP input | `OtpInput`, `NativeOtpInput` | 2 |
| Form | `Form` | 1 |
| Date & time | `DatePicker`, `DateRangePicker`, `NativeDatePicker`, `NativeDateRangePicker` | 3 |
| Upload | `FileUpload`, `NativeFileUpload` | 2 |
| Tag Input | `TagInput` | 1 |
| Color Picker | `ColorPicker` | 1 |
| Checkbox | `Checkbox` | 2 |
| Radio | `Radio`, `RadioGroup` | 2 |
| Switch | `Switch` | 2 |
| Select | `Select`, `NativeSelect` | 2 |
| Combobox | `Combobox`, `NativeCombobox` | 2 |
| Multi Select | `MultiSelect`, `NativeMultiSelect` | 2 |
| Slider | `Slider`, `NativeSlider` | 2 |
| Rating | `Rating` | 2 |
| Badge & tag | `Badge` | 2 |
| Avatar | `Avatar`, `AvatarGroup` | 3 |
| Card | `Card` | 3 |
| Data table | `DataTable` | 1 |
| Accordion | `Accordion` | 2 |
| Timeline | `Timeline` | 1 |
| Chart | `Chart` | 6 |
| Carousel | `Carousel` | 1 |
| Tabs | `Tabs` | 4 |
| Breadcrumbs | `Breadcrumbs` | 1 |
| Pagination | `Pagination` | 2 |
| Stepper | `Stepper` | 2 |
| Dropdown | `DropdownMenu` | 2 |
| Command | `CommandPalette` | 1 |
| Alert | `Alert` | 2 |
| Toast | `Toast` | 2 |
| Progress | `Progress` | 3 |
| Skeleton | `Skeleton` | 2 |
| Spinner | `Spinner` | 2 |
| Empty State | `EmptyState` | 2 |
| Dialog | `Dialog`, `Modal`, `DialogClose` | 2 |
| Drawer | `Drawer` | 2 |
| Tooltip | `Tooltip` | 2 |
| Popover | `Popover` | 1 |
| Layout | `Container`, `Stack`, `Grid`, `Split` | 1 |
| Kanban | `Kanban` | 1 |
| Toggle | `Toggle` | 2 |
| Toggle Group | `ToggleGroup` | 1 |
| Number Input | `NumberInput`, `NativeNumberInput` | 2 |
| Field | `Field` | 1 |
| Label | `Label` | 1 |
| Separator | `Separator` | 2 |
| Collapsible | `Collapsible` | 1 |
| Scroll Area | `ScrollArea` | 1 |
| Aspect Ratio | `AspectRatio` | 2 |
| Kbd | `Kbd` | 2 |
| Typography | `Text`, `Heading` | 2 |
| Toolbar | `Toolbar` | 1 |
| Navbar | `Navbar` | 1 |
| Sidebar | `Sidebar` | 1 |
| Button Link | `ButtonLink` | 2 |
| Alert Dialog | `AlertDialog` | 1 |
| Input Group | `InputGroup`, `InputGroupInput`, `InputGroupAddon` | 2 |
| Item | `Item`, `ItemGroup`, `ItemContent`, `ItemTitle`, `ItemDescription`, `ItemActions` | 2 |
| Table | `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption` | 1 |
| Hover Card | `HoverCard` | 2 |
| Context Menu | `ContextMenu` | 2 |
| Menubar | `Menubar` | 2 |
| Navigation Menu | `NavigationMenu` | 2 |
| Tree View | `TreeView` | 2 |
| Calendar | `Calendar` | 2 |
| Range calendar | `RangeCalendar` | 2 |
| List Box | `ListBox` | 2 |
| Checkbox Card | `CheckboxCard` | 2 |
| Radio Card | `RadioCard` | 2 |
| Color Swatch Picker | `ColorSwatchPicker` | 2 |
| Chip | `Chip` | 3 |
| Stat | `Stat` | 3 |
| Data List | `DataList` | 2 |
| Image | `Image` | 3 |
| Code Block | `CodeBlock` | 2 |
| Meter | `Meter` | 2 |
| Clipboard | `Clipboard` | 1 |
| Resizable | `Resizable`, `ResizablePanel`, `ResizableHandle` | 2 |
| Scroll Shadow | `ScrollShadow` | 2 |

## Composable building blocks

`InputGroup` wraps `InputGroupInput` and optional `InputGroupAddon` elements in
source order. Addons accept icons, prefix/suffix text, or real buttons. Supply a
label with `htmlFor`/`id`, or an `aria-label` on the input; name and native form
validation work normally. Input refs target the native input. Decorative icons
should use `aria-hidden`. Group styles reflect focus, disabled and invalid states.

`ItemGroup` is a native `ul` and `Item` is an `li`. Compose content with
`ItemContent`, `ItemTitle`, `ItemDescription`, and `ItemActions`. Choose
`variant="default"`, `"outline"`, or `"muted"` on each Item. Use real links or
buttons for actions; the row itself does not impersonate an interactive element.

`Table` wraps a native table in a keyboard-focusable horizontal scroll container.
Build its structure with the exported Table parts. Give it a `TableCaption`;
`TableHead` defaults to `scope="col"` and accepts `scope="row"` for row headers.
Native attributes, children and refs are forwarded. Use `DataTable` when you need
built-in filtering, sorting, selection, editing or pagination.

`AlertDialog` accepts required `title`, `description`, and `onConfirm`, an
optional ref-capable `trigger`, `confirmLabel`, `cancelLabel`, `destructive`,
children, and `open`/`defaultOpen`/`onOpenChange`. Focus starts on Cancel. Outside
clicks do not dismiss it; Escape and Cancel close without calling `onConfirm`.
Confirm accepts a synchronous callback or a promise. It prevents duplicate confirmation, stays open while pending, and shows a rejected operation as an inline error so the user can retry. Controlled state remains app-owned; use onOpenChange to accept successful closure. `portalContainer` supports a themed subtree. With no trigger,
the app should restore focus to its own opener when the controlled dialog closes.

The additions take inspiration from the [shadcn/ui component catalog](https://ui.shadcn.com/docs/components)
and use Hulmio's own implementation, APIs, tokens and existing Radix dependency.

## Forms and controlled values

Input keeps native `value/onChange`; rich controls use `onValueChange`, `onCheckedChange`, `onRangeChange`, or `onFilesChange`. `Field` connects a single control with its label, hint, and error.

Combobox and MultiSelect now provide searchable styled options and chips. DatePicker and DateRangePicker provide custom date calendars, Slider supports scalar and range values, NumberInput adds steppers, OTP shows individual slots, and FileUpload provides a local dropzone/list with validation.

The explicit `NativeCombobox`, `NativeMultiSelect`, `NativeDatePicker`, `NativeDateRangePicker`, `NativeSlider`, `NativeNumberInput`, `NativeOtpInput`, and `NativeFileUpload` exports retain browser-native alternatives. Existing NativeSelect is also available. Calendar values are date-only ISO strings and ranges are `{ start, end }`.

Use `value` with the appropriate callback for controlled state, or `defaultValue`
for local state. Uncontrolled controls respond to uncancelled form resets.

| Control | Controlled value | Callback / ref |
| --- | --- | --- |
| Combobox | `string` | `onValueChange`, native `onChange`; input ref |
| MultiSelect | `string[]` | `onValueChange`, native `onChange`; hidden select ref |
| DatePicker | ISO date `string` | `onValueChange`, native `onChange`; hidden ISO input ref |
| DateRangePicker | `{ start, end }` | `onValueChange` / `onRangeChange`; fieldset ref |
| Slider | `number` / `number[]` | `onValueChange`; first thumb input ref |
| NumberInput | native numeric input value | `onChange` / `onValueChange`; input ref |
| OtpInput | `string` | `onValueChange` / `onChange`; input ref |
| FileUpload | `files: File[]` | `onFilesChange`; file input ref |

Combobox displays an option's label and submits its value. Native `onChange`
receives that value for option selections, and the typed string for free text.
MultiSelect submits repeated names; use `FormData.getAll(name)`. Date and slider
ranges submit `${name}-start` and `${name}-end`. Slider forwards native focus,
blur and keyboard callbacks to its first thumb. Native alternatives preserve
the previous browser controls when an app depends on their DOM behavior.

The source repository also contains `docs/CUSTOM-CONTROLS.md`, with migration
examples, ref details, validation and form behavior.


## Data and navigation

DataTable supports local sorting/filtering/pagination, selection, inline editing,
and expanded details. Supply a unique string or finite number in `rowKey`
(default `id`). Callbacks use those identities. `onRowsChange` makes rows
controlled; without it, edits remain local until the rows prop is replaced.
Charts include a readable data table; scatter/heatmap use indexed categorical
values, not arbitrary x/y points or matrices. Kanban uses explicit keyboard-friendly
move controls; persistence belongs to the app. Carousel is manually navigated.
Toast works as a standalone status surface. ToastProvider and ToastQueue supply optional notification lifetimes, actions, promises and queue management.

## Themes and typography

Set `data-hulmio-theme="light"` or `"dark"` on `html`
so default portals inherit the theme. Modal, Drawer, DropdownMenu, Tooltip, Popover
and CommandPalette accept `portalContainer` for an explicitly themed subtree.
Combobox, MultiSelect, DatePicker, DateRangePicker, HoverCard, ContextMenu
and Menubar support this as well. NavigationMenu content stays inside its subtree.
Triggers using Radix asChild take a single ref-capable interactive React element.

The package inherits your app's fonts and makes no font/network requests. Set
`--hulmio-font-family` to override. The website uses self-hosted Onest
as primary, Google Sans Flex as secondary, and IBM Plex Mono for code;
website font files/licenses are separate from the UI tarball. CSS is scoped to
Hulmio components, with keyboard focus, disabled states and reduced-motion rules.

## Preview status

Publication remains guarded by `private: true` and `UNLICENSED`. Choose the
publication license and registry/account settings before a public release.
Backend/authentication/authorization, payment processing, upload services and
specialist enterprise features are outside this UI library. See the repository's
owner guide, coverage notes and work log for current verification and limitations.

## New component families

The additional twenty families cover menus, hover previews, trees, listboxes, inline calendars, choice cards, swatches, chips, stats, data lists, images, code, meters, clipboard actions, resizing, and scroll cues. Every family has public TypeScript declarations and a runnable example in the gallery. The source repository's `docs/ADDITIONAL-COMPONENTS.md` describes detailed contracts and limitations.

## Expanded component examples

The gallery provides 1,147 source-backed examples across 104 families. Each page
separates the default usage, visual options, interactive states, compositions,
customization, actual prop types and accessibility guidance. The reference topic
inventory is pinned to HeroUI v3.2.7; Hulmio uses its own implementation and design.

- `TextField`, `SearchField`, `NumberField`, `CheckboxGroup`, `DateField`, `TimeField`,
  `Fieldset`, `Description`, `ErrorMessage` and `FieldError` support composed forms.
  React Aria field props use `isRequired`, `isDisabled`, `value/onChange` and
  `validationBehavior`. Existing `Input` and native controls retain their APIs.
- `SegmentedDatePicker` and `SegmentedDateRangePicker` explicitly accept DateValue
  objects. The existing `DatePicker` and `DateRangePicker` retain date-only ISO
  strings. Import parsing functions from `@internationalized/date` when using the
  segmented examples; range form names are `startName` and `endName`.
- `ColorArea`, `ColorField`, `ColorSlider`, `ColorSwatch` and `ComposedColorPicker`
  provide pointer/keyboard channel editing. Native `ColorPicker` remains available.
- `Autocomplete`, richer Select/Combobox/MultiSelect, ListBox, Calendar and
  RangeCalendar add the collection, controlled, grouping and virtualized examples.
- `ToastProvider` renders a `ToastQueue`; `toast` uses `defaultToastQueue`. Existing
  `Toast` remains usable as a standalone surface. Queue promises propagate rejection
  to the caller as well as displaying an error; catch them in your app.
- `Sheet` accepts fractional/pixel snap points and a controlled snap index. Its
  handle exposes the same positions to keyboard users. Modal and AlertDialog add
  size, placement, backdrops and explicit dismissal options.
- `DataTable` adds controlled selection/sort, custom cells, resizable columns,
  loading/empty states and virtual rows. `Table` remains the semantic building block.
  Install `@tanstack/react-table` 8.x only for the optional TanStack composition.

Some copied examples import `lucide-react` icons or `@internationalized/date`.
Install those packages in your app when using those examples. Core components still
need only their declared package dependencies and the stylesheet, with no Tailwind.
Async and social examples demonstrate local interactions; apps supply network
requests, authentication, persistence and upload transport.
