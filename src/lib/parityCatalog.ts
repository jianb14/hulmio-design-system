// Dedicated additions; existing component routes are retained.
import type { ComponentEntry } from "./catalog";

export const parityCatalog: ComponentEntry[] = [
  {
    "id": "close-button",
    "name": "Close button",
    "category": "Actions",
    "description": "Dismiss content with a clearly labeled action.",
    "variants": [
      "Basic",
      "Interactive",
      "With Custom Icon",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "link",
    "name": "Link",
    "category": "Navigation",
    "description": "Navigate with clear text and optional icons.",
    "variants": [
      "Basic",
      "Icon Placement",
      "Text Decoration with Tailwind CSS",
      "Custom Icon",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "disclosure-group",
    "name": "Disclosure group",
    "category": "Display",
    "description": "Coordinate related expandable sections.",
    "variants": [
      "Basic",
      "Controlled",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "checkbox-group",
    "name": "Checkbox group",
    "category": "Selection",
    "description": "Choose several options with shared validation.",
    "variants": [
      "Basic",
      "In Surface",
      "Disabled",
      "Indeterminate",
      "Controlled",
      "Validation",
      "Features and Add-ons Example",
      "With Custom Indicator",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "description",
    "name": "Description",
    "category": "Forms",
    "description": "Connect supporting instructions to a form control.",
    "variants": [
      "Basic",
      "With Form Fields",
      "Integration with TextField",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "error-message",
    "name": "Error message",
    "category": "Forms",
    "description": "Explain errors with accessible, useful messages.",
    "variants": [
      "Basic",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "field-error",
    "name": "Field error",
    "category": "Forms",
    "description": "Display validation messages for the connected field.",
    "variants": [
      "Basic",
      "Basic Validation",
      "With Dynamic Messages",
      "Custom Validation Logic",
      "Multiple Error Messages",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "fieldset",
    "name": "Fieldset",
    "category": "Forms",
    "description": "Group related controls with a shared legend.",
    "variants": [
      "Basic",
      "In Surface",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "search-field",
    "name": "Search field",
    "category": "Forms",
    "description": "Search with a clear action and connected feedback.",
    "variants": [
      "Basic",
      "Variants",
      "In Surface",
      "With Description",
      "Required Field",
      "Disabled State",
      "Full Width",
      "Validation",
      "Controlled",
      "Form Example",
      "With Validation",
      "Custom Icons",
      "With Keyboard Shortcut",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "text-field",
    "name": "Text field",
    "category": "Forms",
    "description": "Compose labeled text fields with validation.",
    "variants": [
      "Basic",
      "In Surface",
      "With Description",
      "Required Field",
      "Disabled State",
      "Full Width",
      "Validation",
      "Controlled",
      "Error Message",
      "TextArea",
      "Input Types",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "date-field",
    "name": "Date field",
    "category": "Forms",
    "description": "Edit date segments with keyboard and locale support.",
    "variants": [
      "Basic",
      "With Icons",
      "Variants",
      "In Surface",
      "With Description",
      "Required Field",
      "Disabled State",
      "Full Width",
      "Validation",
      "Granularity",
      "Controlled",
      "Form Example",
      "With Validation",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "time-field",
    "name": "Time field",
    "category": "Forms",
    "description": "Edit hours, minutes and seconds in your locale.",
    "variants": [
      "Basic",
      "With Icons",
      "On Surface",
      "With Description",
      "Required Field",
      "Disabled State",
      "Full Width",
      "Validation",
      "Controlled",
      "Form Example",
      "With Validation",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "color-area",
    "name": "Color area",
    "category": "Selection",
    "description": "Adjust two color channels with a precise thumb.",
    "variants": [
      "Basic",
      "With Dots",
      "Color Space & Channels",
      "Disabled",
      "Controlled",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "color-field",
    "name": "Color field",
    "category": "Forms",
    "description": "Enter and validate color values.",
    "variants": [
      "Basic",
      "Variants",
      "On Surface",
      "With Description",
      "Required Field",
      "Disabled State",
      "Full Width",
      "Validation",
      "Channel Editing",
      "Controlled",
      "Form Example",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "color-slider",
    "name": "Color slider",
    "category": "Selection",
    "description": "Adjust individual color channels.",
    "variants": [
      "Basic",
      "Disabled",
      "Vertical",
      "Controlled",
      "HSL Channels",
      "Alpha Channel",
      "RGB Channels",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "color-swatch",
    "name": "Color swatch",
    "category": "Display",
    "description": "Preview colors, including transparency.",
    "variants": [
      "Basic",
      "Sizes",
      "Shapes",
      "Transparency",
      "Render Function",
      "Accessibility",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "autocomplete",
    "name": "Autocomplete",
    "category": "Selection",
    "description": "Filter and choose from a searchable collection.",
    "variants": [
      "Basic",
      "Variants",
      "Full Width",
      "With Description",
      "Required",
      "Disabled",
      "With Disabled Options",
      "Allows Empty Collection",
      "With Sections",
      "Multiple Select",
      "Controlled",
      "Controlled Multiple",
      "Controlled Open State",
      "Asynchronous Filtering",
      "Custom Indicator",
      "Custom Value",
      "In Surface",
      "Virtualization",
      "User Selection",
      "User Selection Multiple",
      "Location Search",
      "Tag Group Selection",
      "Email Recipients",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "tag-group",
    "name": "Tag group",
    "category": "Selection",
    "description": "Select and remove tags as one accessible collection.",
    "variants": [
      "Basic",
      "Sizes",
      "Variants",
      "Disabled",
      "Selection Modes",
      "Controlled",
      "With Error Message",
      "With List Data",
      "With Prefix",
      "With Remove Button",
      "Render Function",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "surface",
    "name": "Surface",
    "category": "Layout",
    "description": "Compose content on a themed surface.",
    "variants": [
      "Basic",
      "Variants",
      "With Form Components",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  },
  {
    "id": "sheet",
    "name": "Sheet",
    "category": "Overlays",
    "description": "Open a movable panel with usable snap positions.",
    "variants": [
      "Basic",
      "Placements",
      "Snap Points",
      "Snap Points (Sequential)",
      "Snap Points (Custom Fade)",
      "Backdrop Variants",
      "Non-Dismissable",
      "Scrollable Content",
      "With Form",
      "Detached",
      "Controlled State",
      "Handle Only",
      "Nested Sheets",
      "Professions Picker",
      "Customization"
    ],
    "notes": "Use the examples and public props below to compose this component in your app."
  }
];
