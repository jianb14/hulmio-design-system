# HeroUI v3.2.7 coverage target for Hulmio

Research snapshot: 2026-11-06, Asia/Manila. **Approved, pinned scope.** Implementation and validation are recorded separately in [HEROUI-IMPLEMENTATION.json](HEROUI-IMPLEMENTATION.json) and [the work log](WORK-LOG.md).

Reference: [HeroUI v3.2.7 source](https://github.com/heroui-inc/heroui/tree/v3.2.7/apps/docs/content/docs/en/react/components), commit `7cb1642606c6f96f424dad78a961ccf45436be72`.

Baseline: **84 Hulmio families / 167 gallery examples**. The reference contains **73 component documents / 566 named example sections**, plus Basic usage, customization, anatomy, API and accessibility guidance. Named sections can include multiple controls or code compositions; these counts are not a claim of finished demos.

The goal is matching use-case coverage with Hulmio visuals and working public APIs. Existing Hulmio-only families also receive explicit examples. Heading and prop names below identify requirements; explanatory prose and code will be written for Hulmio.

The [machine-readable inventory](research/heroui-v3.2.7-coverage.json) records every reference page, pinned source, source hash, preview identifier, API prop name and Hulmio baseline example. Its research-time statuses are preserved; use the implementation tracker for current evidence.

## HeroUI reference coverage

Each entry below also requires Basic usage, appropriate anatomy, customization with Hulmio CSS/tokens, real API documentation and accessibility guidance. The mappings identify existing starting points, not verified feature equivalence.

### Accordion

Reference: [documentation](https://heroui.com/en/docs/react/components/accordion) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/accordion.mdx).

Existing Hulmio starting point: `accordion`.
Current `accordion` examples: Native accordion; Accordion multiple and disabled.

Required example sections: Surface; Without Separator; Multiple Expanded; Disabled State; Controlled; Custom Indicator; Render Function; FAQ Layout.

Status: **not verified**.

### Alert

Reference: [documentation](https://heroui.com/en/docs/react/components/alert) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/alert.mdx).

Existing Hulmio starting point: `alert`.
Current `alert` examples: Inline alert; Alert tones.

The reference puts its examples in Basic usage; inspect that composition as well as the API.

Status: **not verified**.

### AlertDialog

Reference: [documentation](https://heroui.com/en/docs/react/components/alert-dialog) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/alert-dialog.mdx).

Existing Hulmio starting point: `alert-dialog`.
Current `alert-dialog` examples: Delete confirmation.

Required example sections: Statuses; Placements; Sizes; Controlled State; Custom Icon; Custom Trigger; Backdrop Variants; Custom Backdrop; Dismiss Behavior; Close Methods; Custom Animations; Custom Portal.

Status: **not verified**.

### Autocomplete

Reference: [documentation](https://heroui.com/en/docs/react/components/autocomplete) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28pickers%29/autocomplete.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Variants; Full Width; With Description; Required; Disabled; With Disabled Options; Allows Empty Collection; With Sections; Multiple Select; Controlled; Controlled Multiple; Controlled Open State; Asynchronous Filtering; Custom Indicator; Custom Value; In Surface; Virtualization; User Selection; User Selection Multiple; Location Search; Tag Group Selection; Email Recipients.

Status: **not verified**.

### Avatar

Reference: [documentation](https://heroui.com/en/docs/react/components/avatar) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28media%29/avatar.mdx).

Existing Hulmio starting point: `avatar`.
Current `avatar` examples: Initial avatar; Avatar group; Avatar sizes and status.

Required example sections: Sizes; Colors; Variants; Fallback Content.

Status: **not verified**.

### AvatarGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/avatar-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28media%29/avatar-group.mdx).

Existing Hulmio starting point: `avatar`.
Current `avatar` examples: Initial avatar; Avatar group; Avatar sizes and status.

Required example sections: Max; With Count; Sizes; Grid; Overlap.

Status: **not verified**.

### Badge

Reference: [documentation](https://heroui.com/en/docs/react/components/badge) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28data-display%29/badge.mdx).

Existing Hulmio starting point: `badge`.
Current `badge` examples: Badge; Badge styles and tones.

Required example sections: Variants; Sizes; Colors; Placements; Dot Badge; With Content.

Status: **not verified**.

### Breadcrumbs

Reference: [documentation](https://heroui.com/en/docs/react/components/breadcrumbs) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/breadcrumbs.mdx).

Existing Hulmio starting point: `breadcrumbs`.
Current `breadcrumbs` examples: Breadcrumb trail.

Required example sections: Navigation Levels; Disabled State; Custom Separator; Render Function.

Status: **not verified**.

### Button

Reference: [documentation](https://heroui.com/en/docs/react/components/button) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28buttons%29/button.mdx).

Existing Hulmio starting point: `button`.
Current `button` examples: Variants; Sizes; Shapes and icons; States and full width.

Required example sections: Variants; Sizes; With Icons; Icon Only; Loading; Loading State; Full Width; Disabled State; Social Buttons; Render Function; Adding custom variants; Adding Ripple Effect.

Status: **not verified**.

### ButtonGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/button-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28buttons%29/button-group.mdx).

Existing Hulmio starting point: `button-group`.
Current `button-group` examples: Joined actions; Outlined and mixed actions.

Required example sections: Variants; Sizes; Orientation; With Icons; Full Width; Disabled State; Without Separator.

Status: **not verified**.

### Calendar

Reference: [documentation](https://heroui.com/en/docs/react/components/calendar) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/calendar.mdx).

Existing Hulmio starting point: `inline-calendar`.
Current `inline-calendar` examples: Appointment date; Unavailable dates.

Required example sections: Disabled; Read Only; Default Value; Year Picker; Controlled; Min and Max Dates; Unavailable Dates; Weeks in Month; Week View; Day View; Multiple Selection; Focused Value; Cell Indicators; Custom Navigation Icons; Multiple Months; Real-World Example; International Calendars.

Status: **not verified**.

### Card

Reference: [documentation](https://heroui.com/en/docs/react/components/card) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28layout%29/card.mdx).

Existing Hulmio starting point: `card`.
Current `card` examples: Card; Card surface variants; Profile and product cards.

Required example sections: Variants; Horizontal Layout; With Avatar; With Images; With Form.

Status: **not verified**.

### Checkbox

Reference: [documentation](https://heroui.com/en/docs/react/components/checkbox) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/checkbox.mdx).

Existing Hulmio starting point: `checkbox`.
Current `checkbox` examples: Checkbox; Checkbox states.

Required example sections: Variants; Full Rounded; Disabled; External Label; With Description; Default Selected; Invalid; Controlled; Indeterminate; Form Integration; Render Props; Render Function; Custom Indicator.

Status: **not verified**.

### CheckboxGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/checkbox-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/checkbox-group.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: In Surface; Disabled; Indeterminate; Controlled; Validation; Features and Add-ons Example; With Custom Indicator; Render Function.

Status: **not verified**.

### Chip

Reference: [documentation](https://heroui.com/en/docs/react/components/chip) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28data-display%29/chip.mdx).

Existing Hulmio starting point: `chip`.
Current `chip` examples: Chip variants; Removable chips; Selectable chip.

Required example sections: Variants; Statuses; With Icons.

Status: **not verified**.

### CloseButton

Reference: [documentation](https://heroui.com/en/docs/react/components/close-button) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28buttons%29/close-button.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Interactive; With Custom Icon.

Status: **not verified**.

### ColorArea

Reference: [documentation](https://heroui.com/en/docs/react/components/color-area) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-area.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: With Dots; Color Space & Channels; Disabled; Controlled; Render Function.

Status: **not verified**.

### ColorField

Reference: [documentation](https://heroui.com/en/docs/react/components/color-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-field.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Variants; On Surface; With Description; Required Field; Disabled State; Full Width; Validation; Channel Editing; Controlled; Form Example; Render Function.

Status: **not verified**.

### ColorPicker

Reference: [documentation](https://heroui.com/en/docs/react/components/color-picker) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-picker.mdx).

Existing Hulmio starting point: `color-picker`.
Current `color-picker` examples: Native color picker.

Required example sections: Controlled; With Swatches; With Fields; With Sliders.

Status: **not verified**.

### ColorSlider

Reference: [documentation](https://heroui.com/en/docs/react/components/color-slider) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-slider.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Disabled; Vertical; Controlled; HSL Channels; Alpha Channel; RGB Channels; Render Function.

Status: **not verified**.

### ColorSwatch

Reference: [documentation](https://heroui.com/en/docs/react/components/color-swatch) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-swatch.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Sizes; Shapes; Transparency; Render Function; Accessibility.

Status: **not verified**.

### ColorSwatchPicker

Reference: [documentation](https://heroui.com/en/docs/react/components/color-swatch-picker) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28colors%29/color-swatch-picker.mdx).

Existing Hulmio starting point: `color-swatch-picker`.
Current `color-swatch-picker` examples: Circle swatches; Square swatches.

Required example sections: Variants; Sizes; Disabled; Stack Layout; Default Value; Controlled; Custom Indicator; Render Function.

Status: **not verified**.

### ComboBox

Reference: [documentation](https://heroui.com/en/docs/react/components/combo-box) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28pickers%29/combo-box.mdx).

Existing Hulmio starting point: `combobox`.
Current `combobox` examples: Searchable combobox; Combobox disabled and empty.

Required example sections: Full Width; With Description; Required; Disabled; With Disabled Options; With Sections; Controlled; Controlled Input Value; Asynchronous Loading; Default Selected Key; Allows Custom Value; Custom Indicator; Custom Value; Custom Filtering; Render Function; Menu Trigger; Form Value; Validation Behavior; Custom Validation; Read Only; Multiple Selection; In Surface.

Status: **not verified**.

### DateField

Reference: [documentation](https://heroui.com/en/docs/react/components/date-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/date-field.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: With Icons; Variants; In Surface; With Description; Required Field; Disabled State; Full Width; Validation; Granularity; Controlled; Form Example; With Validation; Render Function.

Status: **not verified**.

### DatePicker

Reference: [documentation](https://heroui.com/en/docs/react/components/date-picker) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/date-picker.mdx).

Existing Hulmio starting point: `calendar`.
Current `calendar` examples: Date picker; Date range; Date limits and native time fields.

Required example sections: Disabled; Controlled; Validation; Format Options; Form Example; Custom Indicator; Render Function; International Calendar.

Status: **not verified**.

### DateRangePicker

Reference: [documentation](https://heroui.com/en/docs/react/components/date-range-picker) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/date-range-picker.mdx).

Existing Hulmio starting point: `calendar`.
Current `calendar` examples: Date picker; Date range; Date limits and native time fields.

Required example sections: Disabled; Controlled; Validation; Format Options; Form Example; Custom Indicator; Render Function; International Calendar.

Status: **not verified**.

### Description

Reference: [documentation](https://heroui.com/en/docs/react/components/description) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/description.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: With Form Fields; Integration with TextField.

Status: **not verified**.

### Disclosure

Reference: [documentation](https://heroui.com/en/docs/react/components/disclosure) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/disclosure.mdx).

Existing Hulmio starting point: `collapsible`.
Current `collapsible` examples: Native disclosure.

Required example sections: Render Function.

Status: **not verified**.

### DisclosureGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/disclosure-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/disclosure-group.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Controlled.

Status: **not verified**.

### Drawer

Reference: [documentation](https://heroui.com/en/docs/react/components/drawer) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/drawer.mdx).

Existing Hulmio starting point: `drawer`.
Current `drawer` examples: Side drawer; Drawer positions.

Required example sections: Placement; Non-Dismissable; Scrollable Content; Controlled State; With Form; Navigation Drawer; Backdrop Variants.

Status: **not verified**.

### Dropdown

Reference: [documentation](https://heroui.com/en/docs/react/components/dropdown) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28collections%29/dropdown.mdx).

Existing Hulmio starting point: `dropdown`.
Current `dropdown` examples: Action menu; Grouped menu actions.

Required example sections: With Icons; With Descriptions; With Disabled Items; With Sections; With Multiple Selection; Controlled; Controlled Open State; With Single Selection; Single With Custom Indicator; With Section Level Selection; With Keyboard Shortcuts; With Submenus; With Custom Submenu Indicator; Custom Trigger; Long Press Trigger.

Status: **not verified**.

### ErrorMessage

Reference: [documentation](https://heroui.com/en/docs/react/components/error-message) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/error-message.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

The reference puts its examples in Basic usage; inspect that composition as well as the API.

Status: **not verified**.

### FieldError

Reference: [documentation](https://heroui.com/en/docs/react/components/field-error) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/field-error.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Basic Validation; With Dynamic Messages; Custom Validation Logic; Multiple Error Messages.

Status: **not verified**.

### Fieldset

Reference: [documentation](https://heroui.com/en/docs/react/components/fieldset) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/fieldset.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: In Surface.

Status: **not verified**.

### Form

Reference: [documentation](https://heroui.com/en/docs/react/components/form) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/form.mdx).

Existing Hulmio starting point: `form`.
Current `form` examples: Native form.

Required example sections: Render Function.

Status: **not verified**.

### Input

Reference: [documentation](https://heroui.com/en/docs/react/components/input) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/input.mdx).

Existing Hulmio starting point: `input`.
Current `input` examples: Input; Filled input; Underline input; Input sizes; Password and search; Readonly and disabled; Invalid input; Affixes and input types.

Required example sections: Variants; In Surface; Full Width; Input Types; Controlled.

Status: **not verified**.

### InputGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/input-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/input-group.mdx).

Existing Hulmio starting point: `input-group`.
Current `input-group` examples: Search with an action; Input group prefixes.

Required example sections: Variants; In Surface; Loading State; Required Field; Disabled State; Full Width; Text Prefix; Text Suffix; Icon Prefix and Text Suffix; Copy Button Suffix; Icon Prefix and Copy Button; Password Toggle; Keyboard Shortcut; Badge Suffix; Validation; With Prefix Icon; With Suffix Icon; With Prefix and Suffix; With TextArea; Usage Example; TextArea Usage Example.

Status: **not verified**.

### InputOTP

Reference: [documentation](https://heroui.com/en/docs/react/components/input-otp) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/input-otp.mdx).

Existing Hulmio starting point: `otp-input`.
Current `otp-input` examples: One-time code; OTP lengths and masked codes.

Required example sections: Variants; In Surface; Disabled State; Four Digits; Controlled; On Complete; Form Example; With Pattern; With Validation.

Status: **not verified**.

### Kbd

Reference: [documentation](https://heroui.com/en/docs/react/components/kbd) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28typography%29/kbd.mdx).

Existing Hulmio starting point: `kbd`.
Current `kbd` examples: Keyboard notation; Keyboard combinations.

Required example sections: Variants; Navigation Keys; Inline Usage; Instructional Text; Special Keys.

Status: **not verified**.

### Label

Reference: [documentation](https://heroui.com/en/docs/react/components/label) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/label.mdx).

Existing Hulmio starting point: `label`.
Current `label` examples: Native label.

Required example sections: With Required Indicator; With Disabled State; With Invalid State.

Status: **not verified**.

### Link

Reference: [documentation](https://heroui.com/en/docs/react/components/link) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/link.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Icon Placement; Text Decoration with Tailwind CSS; Custom Icon; Render Function.

Status: **not verified**.

### ListBox

Reference: [documentation](https://heroui.com/en/docs/react/components/list-box) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28collections%29/list-box.mdx).

Existing Hulmio starting point: `list-box`.
Current `list-box` examples: Team selection; Multiple selection.

Required example sections: With Disabled Items; With Sections; Multi Select; Controlled; Virtualization; Custom Check Icon; Render Function.

Status: **not verified**.

### Meter

Reference: [documentation](https://heroui.com/en/docs/react/components/meter) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/meter.mdx).

Existing Hulmio starting point: `meter`.
Current `meter` examples: Storage meter; Tones and sizes.

Required example sections: Sizes; Colors; Without Label; Custom Value Scale.

Status: **not verified**.

### Modal

Reference: [documentation](https://heroui.com/en/docs/react/components/modal) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/modal.mdx).

Existing Hulmio starting point: `dialog`.
Current `dialog` examples: Modal dialog; Destructive confirmation.

Required example sections: Sizes; Placement; Scroll Behavior; Controlled State; With Form; Custom Trigger; Backdrop Variants; Custom Backdrop; Dismiss Behavior; Close Methods; Custom Animations; Custom Portal.

Status: **not verified**.

### NumberField

Reference: [documentation](https://heroui.com/en/docs/react/components/number-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/number-field.mdx).

Existing Hulmio starting point: `number-input`.
Current `number-input` examples: Native number input; Number limits and stepper states.

Required example sections: Variants; In Surface; With Description; Required Field; Disabled State; Full Width; Validation; Controlled; Step Values; Format Options; Form Example; With Validation; Custom Icons; With Chevrons; Render Function.

Status: **not verified**.

### Pagination

Reference: [documentation](https://heroui.com/en/docs/react/components/pagination) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/pagination.mdx).

Existing Hulmio starting point: `pagination`.
Current `pagination` examples: Numbered pagination; Pagination boundaries.

Required example sections: Sizes; Disabled; Simple (Previous / Next); Controlled; With Ellipsis; With Summary; Custom Icons.

Status: **not verified**.

### Popover

Reference: [documentation](https://heroui.com/en/docs/react/components/popover) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/popover.mdx).

Existing Hulmio starting point: `popover`.
Current `popover` examples: Context popover.

Required example sections: With Arrow; Interactive Content; Placement; Render Function.

Status: **not verified**.

### ProgressBar

Reference: [documentation](https://heroui.com/en/docs/react/components/progress-bar) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/progress-bar.mdx).

Existing Hulmio starting point: `progress`.
Current `progress` examples: Linear progress; Circular progress; Progress states.

Required example sections: Sizes; Colors; Without Label; Indeterminate; Custom Value Scale.

Status: **not verified**.

### ProgressCircle

Reference: [documentation](https://heroui.com/en/docs/react/components/progress-circle) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/progress-circle.mdx).

Existing Hulmio starting point: `progress`.
Current `progress` examples: Linear progress; Circular progress; Progress states.

Required example sections: Sizes; Colors; Indeterminate; With Label; Custom SVG Props.

Status: **not verified**.

### RadioGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/radio-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/radio-group.mdx).

Existing Hulmio starting point: `radio`.
Current `radio` examples: Radio group; Radio disabled states.

Required example sections: Horizontal Orientation; Variants; In Surface; Disabled; Controlled; Uncontrolled; Validation; Delivery & Payment; Custom Indicator; Render Function.

Status: **not verified**.

### RangeCalendar

Reference: [documentation](https://heroui.com/en/docs/react/components/range-calendar) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/range-calendar.mdx).

Existing Hulmio starting point: `range-calendar`.
Current `range-calendar` examples: Trip dates; Unavailable range dates.

Required example sections: Disabled; Year Picker; Default Value; Controlled; Min and Max Dates; Unavailable Dates; Anchor-Based Unavailable Dates; Weeks in Month; Week View; Day View; Allows Non-Contiguous Ranges; Read Only; Invalid; Focused Value; Cell Indicators; Real-World Example; Multiple Months; International Calendars.

Status: **not verified**.

### ScrollShadow

Reference: [documentation](https://heroui.com/en/docs/react/components/scroll-shadow) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28utilities%29/scroll-shadow.mdx).

Existing Hulmio starting point: `scroll-shadow`.
Current `scroll-shadow` examples: Vertical notes; Horizontal boards.

Required example sections: Orientation; Shadow Size; With Card; Hide Scroll Bar; Visibility Change.

Status: **not verified**.

### SearchField

Reference: [documentation](https://heroui.com/en/docs/react/components/search-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/search-field.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Variants; In Surface; With Description; Required Field; Disabled State; Full Width; Validation; Controlled; Form Example; With Validation; Custom Icons; With Keyboard Shortcut; Render Function.

Status: **not verified**.

### Select

Reference: [documentation](https://heroui.com/en/docs/react/components/select) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28pickers%29/select.mdx).

Existing Hulmio starting point: `select`, `multi-select`.
Current `select` examples: Custom select; Select placeholder and errors.
Current `multi-select` examples: Searchable multiple select; Multi-select disabled and empty.

Required example sections: Variants; Full Width; With Description; Required; Disabled; With Disabled Options; Multiple Select; With Sections; Controlled; Controlled Multiple; Controlled Open State; Asynchronous Loading; Custom Indicator; With Clear Button; Custom Value; Render Function; In Surface.

Status: **not verified**.

### Separator

Reference: [documentation](https://heroui.com/en/docs/react/components/separator) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28layout%29/separator.mdx).

Existing Hulmio starting point: `separator`.
Current `separator` examples: Semantic separator; Separator directions.

Required example sections: Variants; With Surface; Vertical; With Content; Decorative; Render Function.

Status: **not verified**.

### Sheet

Reference: [documentation](https://heroui.com/en/docs/react/components/sheet) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/sheet.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Placements; Snap Points; Snap Points (Sequential); Snap Points (Custom Fade); Backdrop Variants; Non-Dismissable; Scrollable Content; With Form; Detached; Controlled State; Handle Only; Nested Sheets; Professions Picker.

Status: **not verified**.

### Skeleton

Reference: [documentation](https://heroui.com/en/docs/react/components/skeleton) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/skeleton.mdx).

Existing Hulmio starting point: `skeleton`.
Current `skeleton` examples: Loading placeholder; Skeleton layouts.

Required example sections: Text Content; User Profile; List Items; Grid; Single Shimmer; Animation Types.

Status: **not verified**.

### Slider

Reference: [documentation](https://heroui.com/en/docs/react/components/slider) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28controls%29/slider.mdx).

Existing Hulmio starting point: `slider`.
Current `slider` examples: Single-value slider; Range, steps and disabled sliders.

Required example sections: Steps; Marks; Steps and Marks; Range with Steps and Marks; Vertical Steps and Marks; Disabled; Range Slider Anatomy; Vertical; Range; Controlled Value; Custom Value Formatting; Custom Output; Render Function.

Status: **not verified**.

### Spinner

Reference: [documentation](https://heroui.com/en/docs/react/components/spinner) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28feedback%29/spinner.mdx).

Existing Hulmio starting point: `spinner`.
Current `spinner` examples: Loading spinner; Spinner sizes.

Required example sections: Colors; Sizes; Speed.

Status: **not verified**.

### Surface

Reference: [documentation](https://heroui.com/en/docs/react/components/surface) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28layout%29/surface.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Variants; With Form Components.

Status: **not verified**.

### Switch

Reference: [documentation](https://heroui.com/en/docs/react/components/switch) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28controls%29/switch.mdx).

Existing Hulmio starting point: `switch`.
Current `switch` examples: Switch; Switch states.

Required example sections: Sizes; With Icons; Disabled; Without Label; With Description; Default Selected; Controlled; Label Position; Group; Group Horizontal; Form Integration; Render Props; Render Function.

Status: **not verified**.

### Table

Reference: [documentation](https://heroui.com/en/docs/react/components/table) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28data-display%29/table.mdx).

Existing Hulmio starting point: `table`, `simple-table`.
Current `table` examples: Interactive data table.
Current `simple-table` examples: Recent invoices.

Required example sections: Secondary Variant; Async Loading; Sorting; Selection; Expandable Rows; Pagination; Column Resizing; Empty State; Virtualization; TanStack Table; Custom Cells.

Status: **not verified**.

### Tabs

Reference: [documentation](https://heroui.com/en/docs/react/components/tabs) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28navigation%29/tabs.mdx).

Existing Hulmio starting point: `tabs`.
Current `tabs` examples: Tabs; Underline tabs; Pill tabs; Vertical tabs and disabled.

Required example sections: Vertical; Overflow; Disabled Tab; With Separator; Secondary Variant; Secondary Variant Vertical; Alignment; Render Function.

Status: **not verified**.

### TagGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/tag-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28collections%29/tag-group.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: Sizes; Variants; Disabled; Selection Modes; Controlled; With Error Message; With List Data; With Prefix; With Remove Button; Render Function.

Status: **not verified**.

### TextArea

Reference: [documentation](https://heroui.com/en/docs/react/components/text-area) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/text-area.mdx).

Existing Hulmio starting point: `textarea`.
Current `textarea` examples: Textarea; Textarea validation and readonly.

Required example sections: Variants; In Surface; Full Width; Controlled; Rows and Resizing.

Status: **not verified**.

### TextField

Reference: [documentation](https://heroui.com/en/docs/react/components/text-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28forms%29/text-field.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: In Surface; With Description; Required Field; Disabled State; Full Width; Validation; Controlled; Error Message; TextArea; Input Types; Render Function.

Status: **not verified**.

### TimeField

Reference: [documentation](https://heroui.com/en/docs/react/components/time-field) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28date-and-time%29/time-field.mdx).

Add a dedicated Hulmio entry and public API; compose existing primitives where they already fit.

Required example sections: With Icons; On Surface; With Description; Required Field; Disabled State; Full Width; Validation; Controlled; Form Example; With Validation; Render Function.

Status: **not verified**.

### Toast

Reference: [documentation](https://heroui.com/en/docs/react/components/toast) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/toast.mdx).

Existing Hulmio starting point: `toast`.
Current `toast` examples: Status toast; Toast messages.

Required example sections: Variants; Placements; Expanded Stack; Simple Toasts; Custom Indicators; Custom Toast Rendering; Promise & Loading; Callbacks; Custom Queues; Setup.

Status: **not verified**.

### ToggleButton

Reference: [documentation](https://heroui.com/en/docs/react/components/toggle-button) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28buttons%29/toggle-button.mdx).

Existing Hulmio starting point: `toggle`.
Current `toggle` examples: Pressable toggle; Toggle states.

Required example sections: Variants; Icon Only; Sizes; Disabled; Controlled.

Status: **not verified**.

### ToggleButtonGroup

Reference: [documentation](https://heroui.com/en/docs/react/components/toggle-button-group) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28buttons%29/toggle-button-group.mdx).

Existing Hulmio starting point: `toggle-group`.
Current `toggle-group` examples: Single-selection toggles.

Required example sections: Sizes; Orientation; Full Width; Disabled; Without Separator; Detached; Selection Mode; Controlled.

Status: **not verified**.

### Toolbar

Reference: [documentation](https://heroui.com/en/docs/react/components/toolbar) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28layout%29/toolbar.mdx).

Existing Hulmio starting point: `toolbar`.
Current `toolbar` examples: Action toolbar.

Required example sections: Vertical; Attached; With ButtonGroup.

Status: **not verified**.

### Tooltip

Reference: [documentation](https://heroui.com/en/docs/react/components/tooltip) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28overlays%29/tooltip.mdx).

Existing Hulmio starting point: `tooltip`.
Current `tooltip` examples: Focus and hover tooltip; Tooltip positions.

Required example sections: Placement; With Arrow; Custom Triggers; Render Function.

Status: **not verified**.

### Typography

Reference: [documentation](https://heroui.com/en/docs/react/components/typography) / [pinned v3.2.7 source](https://raw.githubusercontent.com/heroui-inc/heroui/7cb1642606c6f96f424dad78a961ccf45436be72/apps/docs/content/docs/en/react/components/%28typography%29/typography.mdx).

Existing Hulmio starting point: `typography`.
Current `typography` examples: Semantic typography; Heading hierarchy and text.

Required example sections: Scale; Primitives; Prose; Render Props.

Status: **not verified**.

## Basic compositions that headings alone do not describe

- Alert: all reference status tones, default and custom indicators, action buttons, title-only content, dismiss controls, loading indicator, and persistent content.
- ErrorMessage: standalone error content, custom error content, integration with field validation, and announcement semantics.
- Form: submit and reset, native versus ARIA validation, custom validators, per-field server error mapping, and clearing those errors on edit.
- Label: required, disabled and invalid appearances must correspond to the actual associated control, including labels in groups.
- Every other Basic preview is also part of the target. A heading list cannot substitute for reading the linked demo and API.

## Existing Hulmio families without a HeroUI counterpart

These requirements are Hulmio additions, not claims about HeroUI. Retain existing working behavior and expose each applicable example independently.

### Icon button (`icon-button`)

Current examples: Icon button; Icon sizes and shapes.

Required example sections: Basic; Variants; Sizes; Shapes; Icon only accessible labels; Loading; Disabled; Tooltips; Keyboard focus.

Status: **not verified**.

### File upload (`upload`)

Current examples: Local file selection; File restrictions.

Required example sections: Basic; Single and multiple files; Accepted file types; Max size and validation; Drag and drop; Selected file list and remove; Controlled files; Disabled; Form reset; Upload progress composition.

Status: **not verified**.

### Tag input (`tag-input`)

Current examples: Editable tags.

Required example sections: Basic; Controlled; Default tags; Add and remove; Duplicate handling; Keyboard interactions; Disabled; Read only; Validation; Form reset.

Status: **not verified**.

### Rating (`rating`)

Current examples: Star rating; Rating readonly and disabled.

Required example sections: Basic; Controlled; Different scales; Custom icons; Read only; Disabled; Required and validation; Keyboard and form values.

Status: **not verified**.

### Timeline (`timeline`)

Current examples: Activity timeline.

Required example sections: Basic; With descriptions; With timestamps; Custom indicators; Long content; Empty collection; Responsive layout.

Status: **not verified**.

### Chart (`chart`)

Current examples: Bar chart; Line chart; Area chart; Donut chart; Heatmap chart; Scatter chart.

Required example sections: Bar; Line; Area; Donut; Heatmap; Scatter; Custom colors; Readable data table; Empty data; Single datum; Zero values; Large values; Responsive sizing.

Status: **not verified**.

### Carousel (`carousel`)

Current examples: Manual carousel.

Required example sections: Basic; Previous and next; Keyboard navigation; First and last slides; Custom controls; Slide indicators; Responsive sizing; Reduced motion.

Status: **not verified**.

### Stepper (`stepper`)

Current examples: Project stepper; Completed and final steps.

Required example sections: Basic; Controlled; Current and completed steps; Optional steps; Disabled steps; Validation composition; Vertical orientation; Responsive layout.

Status: **not verified**.

### Command palette (`command`)

Current examples: Command palette.

Required example sections: Basic; Search and filter; No results; Groups; Keyboard shortcuts; Disabled commands; Custom command content; Controlled open; Selection feedback; Focus restoration.

Status: **not verified**.

### Empty state (`empty-state`)

Current examples: Empty collection; Empty search and error states.

Required example sections: Basic; With icon; With action; No search results; Error and retry; Empty collection; Compact composition.

Status: **not verified**.

### Layout primitives (`layout`)

Current examples: Responsive composition.

Required example sections: Container widths; Stack directions and alignment; Grid columns and gaps; Responsive grid; Split ratios; Nested composition; Long content and overflow.

Status: **not verified**.

### Kanban board (`kanban`)

Current examples: Keyboard-friendly board.

Required example sections: Basic; Add and edit composition; Move items between columns; Keyboard operation; Controlled board; Empty columns; Disabled moves; Long content; Responsive overflow.

Status: **not verified**.

### Field (`field`)

Current examples: Connected field.

Required example sections: Basic; Label and description; Required; Invalid and errors; Disabled child; Read only child; Custom control; Nested or grouped controls with explicit associations.

Status: **not verified**.

### Scroll area (`scroll-area`)

Current examples: Contained scrolling.

Required example sections: Basic; Max height; Horizontal scrolling; Both axes; Keyboard focus; Long content; Nested scroll areas; Responsive overflow.

Status: **not verified**.

### Aspect ratio (`aspect-ratio`)

Current examples: Landscape frame; Aspect ratio formats.

Required example sections: Basic; Landscape; Square; Portrait; With image; With video placeholder; Responsive container.

Status: **not verified**.

### Navbar (`navbar`)

Current examples: Navigation bar.

Required example sections: Basic; With brand; Navigation links; Active item; Action area; Mobile collapse; Keyboard navigation; Long labels.

Status: **not verified**.

### Sidebar (`sidebar`)

Current examples: Section navigation.

Required example sections: Basic; Grouped links; Active item; With icons; Collapsed rail composition; Mobile overlay composition; Long navigation; Keyboard focus.

Status: **not verified**.

### Button link (`button-link`)

Current examples: Navigation link; Button link variants.

Required example sections: Basic; Variants; Sizes; With icons; Full width; External links; Disabled link semantics; Keyboard focus.

Status: **not verified**.

### Item (`item`)

Current examples: Project files; Item surface variants.

Required example sections: Basic; Variants; With icon; With description; With actions; With avatar or image; Grouped items; Long content; Responsive actions.

Status: **not verified**.

### Hover card (`hover-card`)

Current examples: Profile preview; Top placement.

Required example sections: Basic; Placements; Custom trigger; Open and close delays; Controlled open; Interactive content; Custom portal; Focus and Escape behavior.

Status: **not verified**.

### Context menu (`context-menu`)

Current examples: Project actions; Advanced actions.

Required example sections: Basic; With icons; Disabled items; Grouped sections; Checkbox items; Radio items; Submenus; Shortcuts; Keyboard operation; Custom portal.

Status: **not verified**.

### Menubar (`menubar`)

Current examples: Application menu; Advanced application menu.

Required example sections: Basic; Groups; With icons; Disabled items; Checkbox and radio items; Submenus; Shortcuts; Controlled state; Keyboard navigation.

Status: **not verified**.

### Navigation menu (`navigation-menu`)

Current examples: Dropdown navigation; Vertical navigation.

Required example sections: Basic; With descriptions; With icons; Horizontal and vertical; Active link; Custom trigger; Controlled open; Keyboard and Escape; Responsive layout.

Status: **not verified**.

### Tree view (`tree-view`)

Current examples: Project files; Multiple selection.

Required example sections: Basic; Nested nodes; Single selection; Multiple selection; Controlled selection; Controlled expansion; Disabled nodes; Custom icons; Empty tree; Keyboard navigation.

Status: **not verified**.

### Checkbox card (`checkbox-card`)

Current examples: Outline choices; Soft choices.

Required example sections: Basic; Variants; With description; With icon; Checked and unchecked; Disabled; Controlled; Group composition; Validation and form reset.

Status: **not verified**.

### Radio card (`radio-card`)

Current examples: Outline plans; Soft plans.

Required example sections: Basic; Variants; With description; With icon; Selected and unselected; Disabled; Controlled group; Horizontal and vertical; Validation and form reset.

Status: **not verified**.

### Stat (`stat`)

Current examples: Default stats; Outlined stats; Soft stats.

Required example sections: Basic; Variants; With icon; Positive and negative changes; Custom formatting; Compact grid; Responsive layout.

Status: **not verified**.

### Data list (`data-list`)

Current examples: Horizontal details; Vertical details.

Required example sections: Basic; Horizontal; Vertical; Custom labels and values; With actions; Long values; Responsive wrapping; Empty details.

Status: **not verified**.

### Image (`image`)

Current examples: Landscape image; Contain image; Fallback image.

Required example sections: Basic; Fit modes; Aspect ratios; Loading; Fallback and error; Custom fallback; Alt text and decorative image; Responsive sizing.

Status: **not verified**.

### Code block (`code-block`)

Current examples: TypeScript example; Line numbers.

Required example sections: Basic; Languages; Line numbers; Copy feedback; Long lines and scrolling; Custom colors; Empty code; Accessible label.

Status: **not verified**.

### Clipboard (`clipboard`)

Current examples: Copy a command.

Required example sections: Basic; Custom label; Controlled value; Copied feedback; Copy failure; Keyboard operation; Unavailable clipboard fallback.

Status: **not verified**.

### Resizable (`resizable`)

Current examples: Horizontal panels; Vertical panels.

Required example sections: Basic; Horizontal; Vertical; Nested panels; Min and max sizes; Collapsed panels; Controlled layout; Keyboard resizing; Responsive container.

Status: **not verified**.

## Completion rules

- A section is complete only when the live example, public package API, copyable compiling source and behavior check agree.
- A generic disabled/loading label is insufficient if the reference demonstrates a specific interaction, collection state or composition.
- Existing examples count only after inspection; the baseline counts do not imply parity.
- All source imports must be available from the packed `hulmio-ui` package and work with its CSS alone.
- Keep this research snapshot fixed. Track implementation results separately, with test evidence, so later HeroUI updates do not silently move the target.
