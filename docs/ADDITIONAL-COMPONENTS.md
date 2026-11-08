# Additional component APIs

The twenty added families are exported by `hulmio-ui`. Import
`hulmio-ui/styles.css` once. All examples on their component pages include the
imports, local state, and markup needed to run them in a React application.
Styles use scoped `data-hulmio-ui` selectors and inherit Hulmio theme variables.
For portaled menus and hover cards, put `data-hulmio-theme` on `html`, or pass a
themed `portalContainer` to the top-level menu/card.

| Family | Main props and behavior |
| --- | --- |
| `HoverCard` | `trigger`, `children`, `side`, `align`, `open`, `defaultOpen`, `onOpenChange`, `openDelay`, `closeDelay`, `portalContainer`. The trigger must accept a ref and native focus/pointer props. Use a focusable anchor. Preview content is supplementary. |
| `ContextMenu` | `children`, `items: MenuAction[]`, `disabled`, `onOpenChange`, `portalContainer`. Native context-menu gestures open a Radix menu. Children must accept a ref and native trigger props. |
| `Menubar` | `menus: MenubarMenu[]`, `label`, `value`, `defaultValue`, `onValueChange`, `portalContainer`, native div props. Each menu has `id`, `label`, `items`, optional `disabled`. |
| `NavigationMenu` | `items: NavigationMenuItem[]`, `label`, `orientation`, `value`, `defaultValue`, `onValueChange`, native nav props. Items have `id`, `label`, and either `href` or rich `content`, with optional `active`. Links follow ordinary navigation. |
| `TreeView` | `label`, nested `items: TreeViewNode[]`, `selectionMode`, `selectedKeys`, `defaultSelectedKeys`, `onSelectionChange`, `expandedKeys`, `defaultExpandedKeys`, `onExpandedChange`, `onAction`. Nodes have unique `id`, `label`, optional `icon`, `children`, and `disabled`. Supports arrow keys, expansion, and typeahead through React Aria. |
| `Calendar` | `label`, ISO `value`/`defaultValue`, `onValueChange`, ISO `minValue`/`maxValue`, `isDateUnavailable`, `disabled`, `readOnly`, `invalid`, `locale`. `value={null}` clears controlled selection. |
| `RangeCalendar` | Same calendar options with `{ start: string; end: string }` values and `allowsNonContiguousRanges`. `onValueChange` fires with a completed range. |
| `ListBox` | `label`, `options: ListBoxOption[]`, `selectionMode`, `selectedKeys`, `defaultSelectedKeys`, `onSelectionChange`, `disabled`, `emptyMessage`. Options have `id`, `label`, optional `description`, `icon`, and `disabled`. A multiple list uses toggle selection. |
| `CheckboxCard` | Native checkbox input props, `label`, `description`, `icon`, `variant="outline" \| "soft"`, `onCheckedChange`. Ref points to the input. Full label is clickable. |
| `RadioCard` | Native radio input props, `label`, `description`, `icon`, `variant`, `onValueChange`. Group cards with a shared `name` and a labeled fieldset. Ref points to the input. |
| `ColorSwatchPicker` | `label`, `colors: ColorSwatch[]`, `name`, `value`, `defaultValue`, `onValueChange`, `disabled`, `shape="circle" \| "square"`. Each swatch has CSS `value`, human-readable `label`, optional `disabled`. Uses native radios and their keyboard behavior. |
| `Chip` | `variant="solid" \| "soft" \| "outline"`, `tone`, `size`, `onRemove`, `removeLabel`, `disabled`. Add `onSelectedChange` and optional `selected`/`defaultSelected` for a toggle chip. Toggle and remove are separate buttons. |
| `Stat` | `label`, `value`, optional `change`, `trend="up" \| "down" \| "neutral"`, `description`, `variant="default" \| "outlined" \| "soft"`. Uses a semantic description list. |
| `DataList` | `items: DataListItem[]` containing `label`, `value`, optional `id`; `orientation`, `size`, `divided`. Values accept React content. Native description-list props and ref are supported. |
| `Image` | Native image props with required `alt`, optional `fallback`, `caption`, numeric `aspectRatio`, `fit="cover" \| "contain"`, `radius="none" \| "sm" \| "md"`. Lazy loading is default. Failure preserves aspect ratio and alt text. Ref points to the loaded image; class/style apply to its figure. |
| `CodeBlock` | `code`, `language="tsx"`, `showLineNumbers`, native pre props and ref. Syntax highlighting renders text without HTML execution. |
| `Meter` | `label`, `value`, `min=0`, `max=100`, `valueText`, `showValue`, `tone`, `size`. Clamps finite values to a valid range and exposes the measurement with `role="meter"`. Use Progress for task completion. |
| `Clipboard` | `value`, button children, `copiedLabel`, `onCopy`, `onError`, `resetAfter=2000`, and Button props. Writes on click, disables while pending, announces success/failure locally, and cleans up the reset timer. |
| `Resizable` | Group props from `react-resizable-panels`, including `orientation`, `defaultLayout`, `onLayoutChange`, `onLayoutChanged`. Compose `ResizablePanel` and `ResizableHandle`. Panel props include `id`, `defaultSize`, `minSize`, `maxSize`, `collapsible`; handle accepts `label` and separator props. Numbers mean pixels; strings can include percentages. Handles support pointer and keyboard resizing. Give vertical groups an explicit height. |
| `ScrollShadow` | Native div props, `orientation="vertical" \| "horizontal" \| "both"`, `maxHeight=240`, `shadowSize=24`. Focusable by default; supply `aria-label`. Fades update on scroll, resize, and content changes. |

`MenuAction` has `id`, `label`, optional `onSelect`, `disabled`, `destructive`,
`shortcut`, `separatorBefore`, nested `items`, or `checked` plus
`onCheckedChange`. Shortcuts are visual hints; the consuming app registers actual
keyboard shortcuts. Disabled menu actions cannot run.

Calendar values and bounds must be valid `YYYY-MM-DD` strings. They represent
calendar dates without a time zone. Unavailable days are disabled by the calendar
primitive. Validation messages, booking rules, persistence, uploads, and network
requests remain in the consuming application.

The clipboard API needs a secure context and permission from the browser. If a
write fails, the component announces a local error and calls `onError`; keep the
source text available for manual copying. Menus, trees, listboxes, and calendars
delegate keyboard interaction to Radix or React Aria. Native choice cards and
swatches preserve browser form submission and radio-group behavior.

Behavior coverage lives in `tests/additional-components.spec.ts`. The root
integration runs those checks with the complete gallery suite and validates the
packed package and copied examples in an independent consumer.
