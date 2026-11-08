# Custom controls and native alternatives

The primary Hulmio controls now use custom surfaces and interactions. Import the
package stylesheet once:

```tsx
import "hulmio-ui/styles.css";
import {
  Combobox, MultiSelect, DatePicker, DateRangePicker, Slider,
  NumberInput, OtpInput, FileUpload,
} from "hulmio-ui";
```

All controls expose visible labels, hints or helper text, error text, disabled
states, and native form names. Use `value` plus the appropriate callback for a
controlled field; use `defaultValue` for local state. File selection uses `files`
and `defaultFiles`. Uncontrolled values respond to their form's reset event.

## APIs

| Export | Value and callback | Ref | Additional behavior |
| --- | --- | --- | --- |
| `Combobox` / `ComboboxProps` | `string`; `onValueChange(string)` | `HTMLInputElement` | Searchable options, Arrow keys/Enter/Escape, disabled options, `allowsCustomValue` (default `true`), `emptyText` |
| `MultiSelect` / `MultiSelectProps` | `string[]`; `onValueChange(string[])` | `HTMLSelectElement` | Searchable options, removable chips, Backspace removes the final chip when search is empty, `placeholder`, `emptyText`, `readOnly` |
| `DatePicker` / `DatePickerProps` | ISO date `string`; native `onChange(event)` or `onValueChange(string)` | `HTMLInputElement` | Editable date segments and a calendar popover, `min`, `max`, `clearable`, `variant`, `controlSize` |
| `DateRangePicker` / `DateRangePickerProps` | `{ start: string; end: string }`; `onValueChange(range)` or `onRangeChange(range)` | `HTMLFieldSetElement` | Editable start/end segments, calendar range selection, `min`, `max`, `readOnly` |
| `Slider` / `SliderProps<T>` | `number` or `number[]`; `onValueChange(T)` | `HTMLInputElement` | One thumb for a number, two thumbs for a two-number array, `thumbLabels`, `formatOptions`, native keyboard adjustment |
| `NumberInput` / `NumberInputProps` | Native numeric input `value`; native `onChange(event)` or `onValueChange(number \| null)` | `HTMLInputElement` | Custom decrement/increment buttons, native `min`, `max`, `step` and numeric validity, `variant`, `controlSize` |
| `OtpInput` / `OtpInputProps` | `string`; `onValueChange(string)` or native `onChange(event)` | `HTMLInputElement` | Individual slots, paste, selection, Backspace, `length` (default 6), `masked`, `onComplete(string)` |
| `FileUpload` / `FileUploadProps` | `files?: File[]`, `defaultFiles?: File[]`; `onFilesChange(File[])` | `HTMLInputElement` | File picker/dropzone, native `accept` and `multiple`, `maxSize` in bytes, `maxFiles`, removable local file list |

`SliderValue` is also exported. `ControlOption` remains
`{ value: string; label: string; disabled?: boolean }`, and `DateRange` remains
`{ start: string; end: string }`.

The custom slider accepts a positive numeric `step`. `step="any"` uses a one-unit
increment; use `NativeSlider` if browser-defined continuous stepping is required.

## Examples

```tsx
import { useState } from "react";
import {
  Combobox, DateRangePicker, FileUpload, MultiSelect,
  NumberInput, OtpInput, Slider,
} from "hulmio-ui";

export function ControlsExample() {
  const [range, setRange] = useState({ start: "2026-11-04", end: "2026-11-08" });
  const [budget, setBudget] = useState([20, 80]);
  const [code, setCode] = useState("");
  return (
    <form>
      <Combobox label="City" name="city" allowsCustomValue={false}
        options={[{ value: "mnl", label: "Manila" }, { value: "ceb", label: "Cebu" }]} />
      <MultiSelect label="Interests" name="interests" defaultValue={["design"]}
        options={[{ value: "design", label: "Design" }, { value: "code", label: "Code" }]} />
      <DateRangePicker label="Trip dates" name="trip" value={range} onValueChange={setRange} />
      <Slider label="Budget" name="budget" value={budget} onValueChange={setBudget}
        thumbLabels={["Minimum budget", "Maximum budget"]} min={0} max={100} step={5} />
      <NumberInput label="Team members" name="members" min={1} max={50} defaultValue={4} />
      <OtpInput label="Verification code" name="code" value={code} onValueChange={setCode} />
      <FileUpload label="Images" name="images" accept="image/*" multiple
        maxSize={5 * 1024 * 1024} maxFiles={4} />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Migration and form behavior

- The previous implementations are exported as `NativeCombobox`,
  `NativeMultiSelect`, `NativeDatePicker`, `NativeDateRangePicker`, `NativeSlider`,
  `NativeNumberInput`, `NativeOtpInput`, and `NativeFileUpload`, with corresponding
  `Native…Props` types. Renaming imports to these exports preserves the previous
  browser controls and native ref targets.
- `Combobox` keeps free text by default. Its `value` is the option's `value` when
  an option is selected and the typed string for free text. The visible input
  displays the option's `label`. Use `onValueChange` to observe both typing and
  option selection. Native `onChange` also observes both, receiving the option's
  value when an option is selected.
- `MultiSelect` still forwards its ref and native `onChange` to an actual
  `<select multiple>`, which is visually hidden. Its visible search field is
  separate. Use `onValueChange` for application state, or read
  `event.target.selectedOptions` in the native callback. Each selection submits
  under the same `name`; use `FormData.getAll(name)`.
- `DatePicker` retains `type="date"` and `onChange={event =>
  setDate(event.target.value)}`. It exposes ISO `YYYY-MM-DD` strings even though
  its visible date segments follow the user's locale. Its ref now targets the
  visually hidden native ISO input used for form integration. The visible date
  editor is a group of spinbuttons. Use the native alternative for code that
  requires native picker methods such as `showPicker()`.
- `DatePicker` with `type="time"`, `"datetime-local"`, `"month"`, or `"week"`
  intentionally retains the native implementation. These types also support
  `onValueChange`.
- `DateRangePicker` also retains `start`, `end`, `defaultStart`, `defaultEnd`, and
  `onRangeChange` for existing examples. Prefer `value`/`defaultValue` for new
  code; `value` takes precedence over `start`/`end`. A selected range submits as
  `${name}-start` and `${name}-end`. Partial date edits are committed when both
  endpoints are complete.
- `Slider` keeps a native range-input ref for its first thumb. Native `onChange`
  receives the first value through an input event bridge; use `onValueChange`
  for range changes. A scalar submits under `name`. A two-thumb range submits
  as `${name}-start` and `${name}-end`.
- `Slider` forwards native focus, blur and keyboard callbacks to its first
  thumb input, including `autoFocus`, `tabIndex` and `title`.
- `OtpInput` now accepts digits by default; pass `pattern="^[a-zA-Z0-9]+$"` and
  `inputMode="text"` for alphanumeric codes. Pasted spaces and hyphens are
  removed. `onComplete` runs when the code reaches `length`. The native
  `onChange` callback receives the complete normalized string through an input
  event bridge. Delivery and verification belong to the consuming app.
- `FileUpload` validates both picker selections and dropped files. With
  `multiple`, valid new files append to the list and identical entries are
  ignored. Invalid batches leave previously accepted files intact and set
  native validity plus an inline error. The next valid selection or removal
  clears that error. Removal updates the actual input's `FileList`. Browsers
  supporting `DataTransfer` are required for this custom form synchronization.
  `accept` checks MIME types, wildcard MIME groups, and filename extensions;
  the consuming server must perform its own validation when files are sent.

Selected files stay on the device. The component has no upload transport,
network requests, invented progress, or success claims.

## Styling and accessibility

Custom styles are included by `hulmio-ui/styles.css` and are scoped with
`data-hulmio-ui`. They use the existing forest/lime semantic theme variables and
inherit the consuming application's font. Place `data-hulmio-theme` on `html`
so portaled options and calendars inherit the active theme. For a theme scoped
to a subtree, pass an element inside that subtree as `portalContainer` to
`Combobox`, `MultiSelect`, `DatePicker` or `DateRangePicker`.

Input focus uses a 2px outline with a 2px gap and
`var(--hulmio-input-focus, var(--hulmio-focus))`. Invalid focus uses
`--hulmio-danger`. Actions retain keyboard focus indicators; being pressed or
selected alone does not add a ring. Reduced-motion settings disable decorative
transitions and the OTP caret animation.

`tests/custom-controls.spec.ts` exercises the gallery's custom controls. The
package build, browser checks, and independent tarball consumer check are run
centrally after gallery and export integration.
