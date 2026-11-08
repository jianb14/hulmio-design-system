// Generated from actual public Props types by scripts/generate-api.mjs.
export const componentApi: Record<string, { name: string; type: string; required: boolean; defaultValue?: string; description?: string }[]> = {
  "IconButtonProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode | ((state: ButtonRenderState) => ReactNode)",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"rounded\" | \"pill\" | \"square\" | \"circle\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "loading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "spinner",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "spinnerPlacement",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "ripple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPress",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>, state: ButtonRenderState) => ReactElement) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ButtonGroupProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "separated",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    }
  ],
  "CloseButtonProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Close\"",
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode | ((state: ButtonRenderState) => ReactNode)",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "defaultValue": "\"ghost\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "defaultValue": "\"sm\"",
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"rounded\" | \"pill\" | \"square\" | \"circle\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "loading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "spinner",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "spinnerPlacement",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "ripple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPress",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>, state: ButtonRenderState) => ReactElement) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ToggleProps": [
    {
      "name": "pressed",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultPressed",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onPressedChange",
      "type": "((pressed: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ToggleGroupProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "options",
      "type": "ToggleOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | undefined",
      "required": false,
      "defaultValue": "\"single\"",
      "description": ""
    },
    {
      "name": "values",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValues",
      "type": "string[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "onValuesChange",
      "type": "((values: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "detached",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "separated",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    }
  ],
  "ButtonLinkProps": [
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "defaultValue": "\"primary\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ChipProps": [
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | \"solid\" | undefined",
      "required": false,
      "defaultValue": "\"soft\"",
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"neutral\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "selected",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelected",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onSelectedChange",
      "type": "((selected: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onRemove",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "removeLabel",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Remove chip\"",
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "StatProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "change",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trend",
      "type": "\"neutral\" | \"up\" | \"down\" | undefined",
      "required": false,
      "defaultValue": "\"neutral\"",
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"soft\" | \"default\" | \"outlined\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    }
  ],
  "DataListProps": [
    {
      "name": "items",
      "type": "DataListItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "divided",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    }
  ],
  "ImageProps": [
    {
      "name": "alt",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "fallback",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "caption",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "aspectRatio",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fit",
      "type": "\"cover\" | \"contain\" | undefined",
      "required": false,
      "defaultValue": "\"cover\"",
      "description": ""
    },
    {
      "name": "radius",
      "type": "\"sm\" | \"md\" | \"none\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "loadingFallback",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "MeterProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "number",
      "required": true,
      "description": ""
    },
    {
      "name": "min",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "max",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "100",
      "description": ""
    },
    {
      "name": "valueText",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showValue",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"primary\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "showLabel",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    }
  ],
  "ClipboardProps": [
    {
      "name": "value",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": false,
      "defaultValue": "\"Copy\"",
      "description": ""
    },
    {
      "name": "copiedLabel",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Copied\"",
      "description": ""
    },
    {
      "name": "onCopy",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onError",
      "type": "((error: Error) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "resetAfter",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "2000",
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"rounded\" | \"pill\" | \"square\" | \"circle\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "loading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "spinner",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "spinnerPlacement",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "ripple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPress",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>, state: ButtonRenderState) => ReactElement) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ResizableProps": [
    {
      "name": "defaultLayout",
      "type": "Layout | undefined",
      "required": false,
      "description": "Default layout for the Group.\r\n\r\nℹ️ This value allows layouts to be remembered between page reloads.\r\n\r\n⚠️ Slight layout shift may occur when server-rendering panels with percentage-based default sizes.\r\nRefer to the documentation for suggestions on how to minimize the impact of this."
    },
    {
      "name": "disableCursor",
      "type": "boolean | undefined",
      "required": false,
      "description": "This library sets custom mouse cursor styles to indicate drag state.\r\nUse this prop to disable that behavior for Panels and Separators in this group."
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Disable resize functionality."
    },
    {
      "name": "elementRef",
      "type": "Ref<HTMLDivElement | null> | undefined",
      "required": false,
      "description": "Ref attached to the root `HTMLDivElement`."
    },
    {
      "name": "groupRef",
      "type": "Ref<GroupImperativeHandle | null> | undefined",
      "required": false,
      "description": "Exposes the following imperative API:\r\n- `getLayout(): Layout`\r\n- `setLayout(layout: Layout): Layout`\r\n\r\nℹ️ The `useGroupRef` and `useGroupCallbackRef` hooks are exported for convenience use in TypeScript projects."
    },
    {
      "name": "onLayoutChange",
      "type": "((layout: Layout) => void | undefined) | undefined",
      "required": false,
      "description": "Called when the Group's layout is changing.\r\n\r\n⚠️ For layout changes caused by pointer events, this method is called each time the pointer is moved.\r\nFor most cases, it is recommended to use the `onLayoutChanged` callback instead."
    },
    {
      "name": "onLayoutChanged",
      "type": "((layout: Layout, meta: LayoutChangedMeta) => void) | undefined",
      "required": false,
      "description": "Called after the Group's layout has been changed.\r\n\r\nℹ️ For layout changes caused by pointer events, this method is not called until the pointer has been released.\r\nThis method is recommended when saving layouts to some storage api.\r\n\r\nℹ️ The second argument contains meta information about the layout change.\r\nThe `isUserInteraction` attribute signals whether the resize was caused by direct user input.\r\nIt is true for resizes caused by pointer or keyboard input\r\nand false for other triggers (e.g. imperative API calls, initial mount, etc.)\r\nThe `requestedLayout` attribute is the layout before constraints were applied for the current Group size;\r\nprefer it when persisting layouts."
    },
    {
      "name": "resizePreviewMode",
      "type": "ResizePreviewMode | undefined",
      "required": false,
      "description": "Controls whether pointer dragging updates `Panel` sizes immediately,\r\nor renders overlay separator previews until the pointer is released.\r\n\r\nDefaults to `\"panel\"` (immediate resizing); `\"separator\"` defers resizing until release.\r\n\r\nCustomize previews using the `SeparatorOverlay` component."
    },
    {
      "name": "resizeTargetMinimumSize",
      "type": "{ coarse: number; fine: number; } | undefined",
      "required": false,
      "description": "Minimum size of the resizable hit target area (either `Separator` or `Panel` edge).\r\nThis threshold ensures targets are large enough to avoid mis-clicks.\r\n\r\n- Coarse inputs (typically a finger on a touchscreen) have reduced accuracy;\r\nto ensure accessibility and ease of use, hit targets should be larger to prevent mis-clicks.\r\n- Fine inputs (typically a mouse) can be smaller\r\n\r\nℹ️ [Apple interface guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility) suggest `20pt` (`27px`) on desktops and `28pt` (`37px`) for touch devices.\r\nIn practice this seems to be much larger than many of their own applications use though."
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "description": "Specifies the resizable orientation (\"horizontal\" or \"vertical\"); defaults to \"horizontal\""
    }
  ],
  "ResizablePanelProps": [
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": "CSS class name.\r\n\r\n⚠️ Class is applied to nested `HTMLDivElement` to avoid styles that interfere with Flex layout."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "Uniquely identifies this panel within the parent group.\r\nFalls back to `useId` when not provided.\r\n\r\nℹ️ This prop is used to associate persisted group layouts with the original panel.\r\n\r\nℹ️ This value will also be assigned to the `id` and `data-testid` attributes; (an explicit `data-testid` prop will take precedence)."
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": "CSS properties.\r\n\r\n⚠️ The default inline styles cannot be overridden, except for [`overflow`](https://react-resizable-panels.vercel.app/examples/overflow)."
    },
    {
      "name": "collapsedSize",
      "type": "string | number | undefined",
      "required": false,
      "description": "Panel size when collapsed; defaults to 0%."
    },
    {
      "name": "collapsedThreshold",
      "type": "string | number | undefined",
      "required": false,
      "description": "Distance a collapsible panel must be resized past its `minSize` to collapse,\r\nor past its `collapsedSize` to expand.\r\nDefaults to half the distance between `collapsedSize` and `minSize`.\r\n\r\nFor example if a panel declares `collapsedSize=\"5%\"`, `collapsedThreshold=\"5%\"`, and `minSize=\"25%\"`,\r\nit will collapse when resized below 20% and expand when resized above 10%.\r\n\r\nℹ️ Interpretation rules:\r\n- Numbers are interpreted as pixels (e.g. `minSize={200}` is 200 pixels)\r\n- Strings without explicit units are interpreted as percentage (e.g. `minSize=\"50\"` is 50 percent)\r\n- Use explicit units (e.g. \"px\", \"%\", \"em\", \"rem\", \"vh\", or \"vw\") to change interpretation"
    },
    {
      "name": "collapsible",
      "type": "boolean | undefined",
      "required": false,
      "description": "This panel can be collapsed.\r\n\r\nℹ️ A collapsible panel will collapse when its size is less than the specified `minSize`"
    },
    {
      "name": "defaultSize",
      "type": "string | number | undefined",
      "required": false,
      "description": "Default size of Panel within its parent group; default is auto-assigned based on the total number of Panels.\r\n\r\nℹ️ Interpretation rules:\r\n- Numbers are interpreted as pixels (e.g. `defaultSize={200}` is 200 pixels)\r\n- Strings without explicit units are interpreted as percentage (e.g. `defaultSize=\"50\"` is 50 percent)\r\n- Use explicit units (e.g. \"px\", \"%\", \"em\", \"rem\", \"vh\", or \"vw\") to change interpretation\r\n\r\n⚠️ Percentage based sizes may cause slight layout shift when server-rendering.\r\nFor more information see the documentation."
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "When disabled, a panel cannot be resized either directly or indirectly (by resizing another panel)."
    },
    {
      "name": "elementRef",
      "type": "Ref<HTMLDivElement | null> | undefined",
      "required": false,
      "description": "Ref attached to the root `HTMLDivElement`."
    },
    {
      "name": "groupResizeBehavior",
      "type": "\"preserve-relative-size\" | \"preserve-pixel-size\" | undefined",
      "required": false,
      "description": "How should this Panel behave if the parent Group is resized?\r\nDefaults to `preserve-relative-size`.\r\n\r\n- `preserve-relative-size`: Retain the current relative size (as a percentage of the Group)\r\n- `preserve-pixel-size`: Retain its current size (in pixels)\r\n\r\nℹ️ Panel min/max size constraints may impact this behavior.\r\n\r\n⚠️ A Group must contain at least one Panel with `preserve-relative-size` resize behavior."
    },
    {
      "name": "maxSize",
      "type": "string | number | undefined",
      "required": false,
      "description": "Maximum size of Panel within its parent group; defaults to `\"100%\"`.\r\n\r\nℹ️ Interpretation rules:\r\n- Numbers are interpreted as pixels (e.g. `maxSize={200}` is 200 pixels)\r\n- Strings without explicit units are interpreted as percentage (e.g. `maxSize=\"50\"` is 50 percent)\r\n- Use explicit units (e.g. \"px\", \"%\", \"em\", \"rem\", \"vh\", or \"vw\") to change interpretation"
    },
    {
      "name": "minSize",
      "type": "string | number | undefined",
      "required": false,
      "description": "Minimum size of Panel within its parent group; defaults to 0%.\r\n\r\nℹ️ Interpretation rules:\r\n- Numbers are interpreted as pixels (e.g. `minSize={200}` is 200 pixels)\r\n- Strings without explicit units are interpreted as percentage (e.g. `minSize=\"50\"` is 50 percent)\r\n- Use explicit units (e.g. \"px\", \"%\", \"em\", \"rem\", \"vh\", or \"vw\") to change interpretation"
    },
    {
      "name": "onResize",
      "type": "((panelSize: PanelSize, id: string | number | undefined, prevPanelSize: PanelSize | undefined) => void) | undefined",
      "required": false,
      "description": "Called when panel sizes change."
    },
    {
      "name": "panelRef",
      "type": "Ref<PanelImperativeHandle | null> | undefined",
      "required": false,
      "description": "Exposes the following imperative API:\r\n- `collapse(): void`\r\n- `expand(): void`\r\n- `getSize(): PanelSize`\r\n- `isCollapsed(): boolean`\r\n- `resize(size: number | string): void`\r\n\r\nℹ️ The `usePanelRef` and `usePanelCallbackRef` hooks are exported for convenience use in TypeScript projects."
    }
  ],
  "ResizableHandleProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Resize panels\"",
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": "CSS class name.\r\n\r\nℹ️ Use the `data-separator` attribute for custom _hover_ and _active_ styles\r\n\r\n⚠️ The following properties cannot be overridden: `flex-grow`, `flex-shrink`"
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "Uniquely identifies the separator within the parent group.\r\nFalls back to `useId` when not provided.\r\n\r\nℹ️ This value will also be assigned to the `id` and `data-testid` attributes; (an explicit `data-testid` prop will take precedence)."
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": "CSS properties.\r\n\r\nℹ️ Use the `data-separator` attribute for custom _hover_ and _active_ styles\r\n\r\n⚠️ The following properties cannot be overridden: `flex-grow`, `flex-shrink`"
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "When disabled, the separator cannot be used to resize its neighboring panels.\r\n\r\nℹ️ The panels may still be resized indirectly (while other panels are being resized).\r\nTo prevent a panel from being resized at all, it needs to also be disabled."
    },
    {
      "name": "disableDoubleClick",
      "type": "boolean | undefined",
      "required": false,
      "description": "When true, double-clicking this `Separator` will not reset its `Panel` to its default size."
    },
    {
      "name": "elementRef",
      "type": "Ref<HTMLDivElement> | undefined",
      "required": false,
      "description": "Ref attached to the root `HTMLDivElement`."
    },
    {
      "name": "preview",
      "type": "ReactNode",
      "required": false,
      "description": "Overrides the `Group` default preview for this `Separator` when `resizePreviewMode` is \"separator\"."
    }
  ],
  "ScrollShadowProps": [
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | \"both\" | undefined",
      "required": false,
      "defaultValue": "\"vertical\"",
      "description": ""
    },
    {
      "name": "maxHeight",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "240",
      "description": ""
    },
    {
      "name": "shadowSize",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "24",
      "description": ""
    },
    {
      "name": "hideScrollBar",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isEnabled",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "offset",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "1",
      "description": ""
    },
    {
      "name": "onVisibilityChange",
      "type": "((edges: { top: boolean; bottom: boolean; left: boolean; right: boolean; }) => void) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "HoverCardProps": [
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "defaultValue": "\"bottom\"",
      "description": ""
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "openDelay",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "350",
      "description": ""
    },
    {
      "name": "closeDelay",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "150",
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ContextMenuProps": [
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "items",
      "type": "MenuAction[]",
      "required": true,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "MenubarProps": [
    {
      "name": "dir",
      "type": "\"ltr\" | \"rtl\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "menus",
      "type": "MenubarMenu[]",
      "required": true,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Application menu\"",
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "NavigationMenuProps": [
    {
      "name": "dir",
      "type": "\"ltr\" | \"rtl\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "items",
      "type": "NavigationMenuItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Site navigation\"",
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    }
  ],
  "CalendarProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "minValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "maxValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isDateUnavailable",
      "type": "((value: string, anchor?: string) => boolean) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "invalid",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "locale",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"en-US\"",
      "description": ""
    },
    {
      "name": "yearPicker",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "weeksInMonth",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "view",
      "type": "\"month\" | \"week\" | \"day\" | undefined",
      "required": false,
      "defaultValue": "\"month\"",
      "description": ""
    },
    {
      "name": "visibleMonths",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "1",
      "description": ""
    },
    {
      "name": "visibleDuration",
      "type": "DateDuration | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "focusedValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultFocusedValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onFocusChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "firstDayOfWeek",
      "type": "\"sun\" | \"mon\" | \"tue\" | \"wed\" | \"thu\" | \"fri\" | \"sat\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "pageBehavior",
      "type": "\"single\" | \"visible\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectionAlignment",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | undefined",
      "required": false,
      "defaultValue": "\"single\"",
      "description": ""
    },
    {
      "name": "selectedValues",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelectedValues",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSelectedValuesChange",
      "type": "((values: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "cellIndicator",
      "type": "((value: string) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "previousIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "nextIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "CalendarContentsProps": [
    {
      "name": "yearPicker",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "visibleMonths",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "1",
      "description": ""
    },
    {
      "name": "cellIndicator",
      "type": "((value: string) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "previousIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "nextIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnchorChange",
      "type": "((value?: string) => void) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "RangeCalendarProps": [
    {
      "name": "value",
      "type": "DateRange | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "DateRange | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: DateRange) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "allowsNonContiguousRanges",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "cellIndicator",
      "type": "((value: string) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "minValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "maxValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isDateUnavailable",
      "type": "((value: string, anchor?: string) => boolean) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "invalid",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "locale",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"en-US\"",
      "description": ""
    },
    {
      "name": "yearPicker",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "weeksInMonth",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "view",
      "type": "\"month\" | \"week\" | \"day\" | undefined",
      "required": false,
      "defaultValue": "\"month\"",
      "description": ""
    },
    {
      "name": "visibleMonths",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "1",
      "description": ""
    },
    {
      "name": "visibleDuration",
      "type": "DateDuration | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "focusedValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultFocusedValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onFocusChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "firstDayOfWeek",
      "type": "\"sun\" | \"mon\" | \"tue\" | \"wed\" | \"thu\" | \"fri\" | \"sat\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "pageBehavior",
      "type": "\"single\" | \"visible\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectionAlignment",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "previousIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "nextIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "TreeViewProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "items",
      "type": "TreeViewNode[]",
      "required": true,
      "description": ""
    },
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | \"none\" | undefined",
      "required": false,
      "defaultValue": "\"single\"",
      "description": ""
    },
    {
      "name": "selectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSelectionChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "expandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultExpandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onExpandedChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAction",
      "type": "((id: string) => void) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ListBoxProps": [
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "options",
      "type": "ListBoxOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | undefined",
      "required": false,
      "defaultValue": "\"single\"",
      "description": ""
    },
    {
      "name": "selectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSelectionChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "emptyMessage",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"No options\"",
      "description": ""
    },
    {
      "name": "sections",
      "type": "ListBoxSectionData[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { selected: boolean; option: ListBoxOption; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ListBoxOption, state: { selected: boolean; focused: boolean; disabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "virtualized",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "height",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "240",
      "description": ""
    },
    {
      "name": "rowHeight",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "40",
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | FocusStrategy | undefined",
      "required": false,
      "description": "Whether to auto focus the listbox or an option."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ListBox\").ListBoxRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "selectionBehavior",
      "type": "SelectionBehavior | undefined",
      "required": false,
      "description": "How multiple selection should behave in the collection."
    },
    {
      "name": "shouldSelectOnPressUp",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether selection should occur on press up instead of press down."
    },
    {
      "name": "shouldFocusOnHover",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether options should be focused when the user hovers over them."
    },
    {
      "name": "onAction",
      "type": "((key: Key) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a user performs an action on an item. The exact user event depends\non the collection's `selectionBehavior` prop and the interaction modality."
    },
    {
      "name": "escapeKeyBehavior",
      "type": "\"none\" | \"clearSelection\" | undefined",
      "required": false,
      "description": "Whether pressing the escape key should clear selection in the listbox or not.\n\nMost experiences should not modify this option as it eliminates a keyboard user's ability to\neasily clear selection. Only use if the escape key is being handled externally or should not\ntrigger selection clearing contextually."
    },
    {
      "name": "shouldFocusWrap",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether focus should wrap around when the end/start is reached."
    },
    {
      "name": "disabledKeys",
      "type": "Iterable<Key> | undefined",
      "required": false,
      "description": "The item keys that are disabled. These items cannot be selected, focused, or otherwise\ninteracted with."
    },
    {
      "name": "disallowEmptySelection",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the collection allows empty selection."
    },
    {
      "name": "dragAndDropHooks",
      "type": "DragAndDropHooks<NoInfer<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/AdditionalSelection\").ListBoxOption>> | undefined",
      "required": false,
      "description": "The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for\nthe ListBox."
    },
    {
      "name": "renderEmptyState",
      "type": "((props: ListBoxRenderProps) => ReactNode) | undefined",
      "required": false,
      "description": "Provides content to display when there are no items in the list."
    },
    {
      "name": "layout",
      "type": "\"stack\" | \"grid\" | undefined",
      "required": false,
      "description": "Whether the items are arranged in a stack or grid."
    },
    {
      "name": "orientation",
      "type": "Orientation | undefined",
      "required": false,
      "description": "The primary orientation of the items. Usually this is the\ndirection that the collection scrolls."
    },
    {
      "name": "dependencies",
      "type": "readonly any[] | undefined",
      "required": false,
      "description": "Values that should invalidate the item cache when using dynamic collections."
    }
  ],
  "CheckboxCardProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "icon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "onCheckedChange",
      "type": "((checked: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    }
  ],
  "RadioCardProps": [
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "icon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "ColorSwatchPickerProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "colors",
      "type": "ColorSwatch[]",
      "required": true,
      "description": ""
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"square\" | \"circle\" | undefined",
      "required": false,
      "defaultValue": "\"circle\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | \"solid\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "layout",
      "type": "\"grid\" | \"row\" | undefined",
      "required": false,
      "defaultValue": "\"row\"",
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { selected: boolean; color: ColorSwatch; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderSwatch",
      "type": "((color: ColorSwatch, state: { selected: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "AlertDialogProps": [
    {
      "name": "description",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "confirmLabel",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Continue\"",
      "description": ""
    },
    {
      "name": "cancelLabel",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Cancel\"",
      "description": ""
    },
    {
      "name": "destructive",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onConfirm",
      "type": "() => void | Promise<void>",
      "required": true,
      "description": ""
    },
    {
      "name": "onConfirmError",
      "type": "((error: unknown) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"warning\"",
      "description": ""
    },
    {
      "name": "icon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "title",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placement",
      "type": "\"top\" | \"bottom\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"center\"",
      "description": ""
    },
    {
      "name": "backdrop",
      "type": "\"opaque\" | \"blur\" | \"transparent\" | undefined",
      "required": false,
      "defaultValue": "\"opaque\"",
      "description": ""
    },
    {
      "name": "dismissable",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "keyboardDismiss",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "hideCloseButton",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "closeIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "scrollBehavior",
      "type": "\"inside\" | \"outside\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropStyle",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "contentProps",
      "type": "Omit<Omit<DialogPrimitive.DialogContentProps & import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/@types/react/index\").RefAttributes<HTMLDivElement>, \"ref\">, \"children\" | \"className\" | \"style\" | \"title\"> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": "Mount inside a themed subtree instead of document.body."
    }
  ],
  "ButtonProps": [
    {
      "name": "children",
      "type": "ReactNode | ((state: ButtonRenderState) => ReactNode)",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "Variant | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "Size | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"rounded\" | \"pill\" | \"square\" | \"circle\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "loading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "spinner",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "spinnerPlacement",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    },
    {
      "name": "ripple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPress",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>, state: ButtonRenderState) => ReactElement) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "CodeBlockProps": [
    {
      "name": "code",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "language",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"tsx\"",
      "description": ""
    },
    {
      "name": "showLineNumbers",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ColorAreaProps": [
    {
      "name": "showDots",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<ColorAreaRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "xName",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the x channel input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "yName",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the y channel input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the ColorArea with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "colorSpace",
      "type": "ColorSpace | undefined",
      "required": false,
      "description": "The color space that the color area operates in. The `xChannel` and `yChannel` must be in this\ncolor space. If not provided, this defaults to the color space of the `color` or `defaultColor`\nvalue."
    },
    {
      "name": "xChannel",
      "type": "ColorChannel | undefined",
      "required": false,
      "description": "Color channel for the horizontal axis."
    },
    {
      "name": "yChannel",
      "type": "ColorChannel | undefined",
      "required": false,
      "description": "Color channel for the vertical axis."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the ColorArea is disabled."
    },
    {
      "name": "onChange",
      "type": "((value: Color) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes, as the user drags."
    },
    {
      "name": "onChangeEnd",
      "type": "((value: Color) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the user stops dragging."
    },
    {
      "name": "value",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorArea\").ColorAreaRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorArea\").ColorAreaRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorArea\").ColorAreaRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ColorFieldProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<ColorFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "channel",
      "type": "ColorChannel | undefined",
      "required": false,
      "description": "The color channel that this field edits. If not provided,\nthe color is edited as a hex value."
    },
    {
      "name": "colorSpace",
      "type": "ColorSpace | undefined",
      "required": false,
      "description": "The color space that the color field operates in if a `channel` prop is provided.\nIf no `channel` is provided, the color field always displays the color as an RGB hex value."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | null | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | null | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-errormessage",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element that provides an error message for the object."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onCopy",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user copies text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy)."
    },
    {
      "name": "onCut",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user cuts text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut)."
    },
    {
      "name": "onPaste",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user pastes text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste)."
    },
    {
      "name": "onCompositionEnd",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system completes or cancels the current text\ncomposition session. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event)."
    },
    {
      "name": "onCompositionStart",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system starts a new text composition session.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)."
    },
    {
      "name": "onCompositionUpdate",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a new character is received in the current text composition\nsession. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event)."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((color: Color | null) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onBeforeInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is about to be modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event)."
    },
    {
      "name": "onInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "onSelect",
      "type": "ReactEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when text in the input is selected. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event)."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "isWheelDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Enables or disables changing the value with scroll."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | null) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "excludeFromTabOrder",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to exclude the element from the sequential tab order. If true,\nthe element will not be focusable via the keyboard by tabbing. This should\nbe avoided except in rare scenarios where an alternative means of accessing\nthe element or its functionality via the keyboard is available."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorField\").ColorFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorField\").ColorFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorField\").ColorFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ColorSliderProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "showOutput",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<ColorSliderRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onChange",
      "type": "((value: Color) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes, as the user drags."
    },
    {
      "name": "orientation",
      "type": "Orientation | undefined",
      "required": false,
      "description": "The orientation of the Slider."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the whole Slider is disabled."
    },
    {
      "name": "onChangeEnd",
      "type": "((value: Color) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the user stops dragging."
    },
    {
      "name": "colorSpace",
      "type": "ColorSpace | undefined",
      "required": false,
      "description": "The color space that the slider operates in. The `channel` must be in this color space.\nIf not provided, this defaults to the color space of the `color` or `defaultColor` value."
    },
    {
      "name": "channel",
      "type": "ColorChannel",
      "required": true,
      "description": "The color channel that the slider manipulates."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorSlider\").ColorSliderRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorSlider\").ColorSliderRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorSlider\").ColorSliderRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ColorSwatchProps": [
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "shape",
      "type": "\"square\" | \"circle\" | undefined",
      "required": false,
      "defaultValue": "\"square\"",
      "description": ""
    },
    {
      "name": "colorName",
      "type": "string | undefined",
      "required": false,
      "description": "A localized accessible name for the color.\nBy default, a description is generated from the color value,\nbut this can be overridden if you have a more specific color\nname (e.g. Pantone colors)."
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<ColorSwatchRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "color",
      "type": "string | Color | undefined",
      "required": false,
      "description": "The color value to display in the swatch."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorSwatch\").ColorSwatchRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/ColorSwatch\").ColorSwatchRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ComposedColorPickerProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Choose color\"",
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode | ((color: Color) => ReactNode)",
      "required": false,
      "description": ""
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "onChange",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/packages/ui/src/ColorControls\").Color) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    }
  ],
  "LabelProps": [
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "FieldProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "htmlFor",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "FormProps": [
    {
      "name": "validationErrors",
      "type": "import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/@react-types/shared/src/inputs\").ValidationErrors | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TextareaProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showCount",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "CheckboxProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "indeterminate",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullRounded",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { selected: boolean; indeterminate: boolean; disabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderLabel",
      "type": "((state: { selected: boolean; indeterminate: boolean; disabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "RadioProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "RadioGroupProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"vertical\"",
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ControlOption, selected: boolean) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "SwitchProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "onCheckedChange",
      "type": "((checked: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "labelPosition",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "defaultValue": "\"end\"",
      "description": ""
    },
    {
      "name": "thumbIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "renderLabel",
      "type": "((state: { selected: boolean; disabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeSelectProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeComboboxProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeMultiSelectProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeSliderProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: number) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "RatingProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: number) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "max",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "5",
      "description": ""
    },
    {
      "name": "renderIcon",
      "type": "((value: number, filled: boolean) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeOtpInputProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "length",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "6",
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "masked",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "TagInputProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "ColorPickerProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"#284c3f\"",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeDatePickerProps": [
    {
      "name": "type",
      "type": "\"month\" | \"week\" | \"time\" | \"date\" | \"datetime-local\" | undefined",
      "required": false,
      "defaultValue": "\"date\"",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "helper",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "leading",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trailing",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "NativeDateRangePickerProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "start",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "end",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultStart",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "defaultEnd",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "onRangeChange",
      "type": "((range: DateRange) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "min",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "max",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeFileUploadProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "maxSize",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onFilesChange",
      "type": "((files: File[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "NativeNumberInputProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "helper",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "leading",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trailing",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "BadgeProps": [
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"neutral\"",
      "description": ""
    },
    {
      "name": "dot",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "outline",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | \"solid\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "placement",
      "type": "\"top-right\" | \"top-left\" | \"bottom-right\" | \"bottom-left\" | undefined",
      "required": false,
      "defaultValue": "\"top-right\"",
      "description": ""
    },
    {
      "name": "content",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "AvatarProps": [
    {
      "name": "name",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "src",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "number | \"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "status",
      "type": "\"online\" | \"offline\" | \"busy\" | \"away\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"neutral\"",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"soft\" | \"solid\" | undefined",
      "required": false,
      "defaultValue": "\"soft\"",
      "description": ""
    },
    {
      "name": "fallback",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "AvatarGroupProps": [
    {
      "name": "names",
      "type": "string[]",
      "required": true,
      "description": ""
    },
    {
      "name": "max",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "4",
      "description": ""
    },
    {
      "name": "size",
      "type": "number | \"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "layout",
      "type": "\"stack\" | \"grid\" | undefined",
      "required": false,
      "defaultValue": "\"stack\"",
      "description": ""
    },
    {
      "name": "overlap",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "12",
      "description": ""
    },
    {
      "name": "renderCount",
      "type": "((count: number) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "CardProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"soft\" | \"default\" | \"outlined\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    }
  ],
  "AccordionProps": [
    {
      "name": "items",
      "type": "AccordionItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "multiple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "expandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultExpandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "onExpandedChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"default\" | \"surface\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "divided",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { expanded: boolean; item: AccordionItem; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderTitle",
      "type": "((item: AccordionItem, state: { expanded: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "CollapsibleProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    }
  ],
  "TimelineProps": [
    {
      "name": "items",
      "type": "TimelineItem[]",
      "required": true,
      "description": ""
    }
  ],
  "ChartProps": [
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "data",
      "type": "ChartDatum[]",
      "required": true,
      "description": ""
    },
    {
      "name": "variant",
      "type": "ChartVariant | undefined",
      "required": false,
      "defaultValue": "\"bar\"",
      "description": ""
    }
  ],
  "CarouselProps": [
    {
      "name": "items",
      "type": "ReactNode[]",
      "required": true,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Slideshow\"",
      "description": ""
    },
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((index: number) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderControls",
      "type": "((state: { index: number; count: number; previous: () => void; next: () => void; goTo: (index: number) => void; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DataTableProps": [
    {
      "name": "columns",
      "type": "DataTableColumn[]",
      "required": true,
      "description": ""
    },
    {
      "name": "rows",
      "type": "DataTableRow[]",
      "required": true,
      "description": ""
    },
    {
      "name": "caption",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Data\"",
      "description": ""
    },
    {
      "name": "pageSize",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "5",
      "description": ""
    },
    {
      "name": "selectable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "editable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "expandable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "rowKey",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"id\"",
      "description": ""
    },
    {
      "name": "onRowsChange",
      "type": "((rows: DataTableRow[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSelectionChange",
      "type": "((selectedRowIds: DataTableRowId[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderExpanded",
      "type": "((row: DataTableRow) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"secondary\" | \"default\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "loading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "emptyMessage",
      "type": "ReactNode",
      "required": false,
      "defaultValue": "\"No matching rows\"",
      "description": ""
    },
    {
      "name": "resizableColumns",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "virtualized",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "height",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "320",
      "description": ""
    },
    {
      "name": "rowHeight",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "40",
      "description": ""
    },
    {
      "name": "sortDescriptor",
      "type": "DataTableSort | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSortChange",
      "type": "((sort: DataTableSort) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectedRowIds",
      "type": "DataTableRowId[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onColumnResize",
      "type": "((key: string, width: number) => void) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "KanbanProps": [
    {
      "name": "columns",
      "type": "KanbanColumn[]",
      "required": true,
      "description": ""
    },
    {
      "name": "items",
      "type": "KanbanItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "onMove",
      "type": "((itemId: string, columnId: string) => void) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "FieldsetProps": [
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "TextFieldProps": [
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "multiline",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "rows",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<TextFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the value is invalid."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "type",
      "type": "\"search\" | \"text\" | (string & {}) | \"tel\" | \"url\" | \"email\" | \"password\" | undefined",
      "required": false,
      "description": "The type of input to render. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype)."
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "enterKeyHint",
      "type": "\"search\" | \"enter\" | \"done\" | \"go\" | \"next\" | \"previous\" | \"send\" | undefined",
      "required": false,
      "description": "An enumerated attribute that defines what action label or icon to preset for the enter key on\nvirtual keyboards. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "spellCheck",
      "type": "string | undefined",
      "required": false,
      "description": "An enumerated attribute that defines whether the element may be checked for spelling errors.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck)."
    },
    {
      "name": "autoCorrect",
      "type": "string | undefined",
      "required": false,
      "description": "An attribute that takes as its value a space-separated string that describes what, if any, type\nof autocomplete functionality the input should provide. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete)."
    },
    {
      "name": "inputMode",
      "type": "\"none\" | \"search\" | \"text\" | \"tel\" | \"url\" | \"email\" | \"numeric\" | \"decimal\" | undefined",
      "required": false,
      "description": "Hints at the type of data that might be entered by the user while editing the element or its\ncontents. See\n[MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)."
    },
    {
      "name": "aria-activedescendant",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox,\ngroup, or application."
    },
    {
      "name": "aria-autocomplete",
      "type": "\"none\" | \"both\" | \"list\" | \"inline\" | undefined",
      "required": false,
      "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's\nintended value for an input and specifies how predictions would be presented if they are made."
    },
    {
      "name": "aria-controls",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) whose contents or presence are controlled by the current\nelement."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-errormessage",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element that provides an error message for the object."
    },
    {
      "name": "aria-haspopup",
      "type": "boolean | \"grid\" | \"dialog\" | \"menu\" | \"true\" | \"false\" | \"listbox\" | \"tree\" | undefined",
      "required": false,
      "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that\ncan be triggered by an element."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onCopy",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user copies text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy)."
    },
    {
      "name": "onCut",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user cuts text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut)."
    },
    {
      "name": "onPaste",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user pastes text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste)."
    },
    {
      "name": "onCompositionEnd",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system completes or cancels the current text\ncomposition session. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event)."
    },
    {
      "name": "onCompositionStart",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system starts a new text composition session.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)."
    },
    {
      "name": "onCompositionUpdate",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a new character is received in the current text composition\nsession. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event)."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<HTMLInputElement, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<HTMLInputElement, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onBeforeInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is about to be modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event)."
    },
    {
      "name": "onInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "onSelect",
      "type": "ReactEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when text in the input is selected. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event)."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "autoComplete",
      "type": "string | undefined",
      "required": false,
      "description": "Describes the type of autocomplete functionality the input should provide if any. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete)."
    },
    {
      "name": "maxLength",
      "type": "number | undefined",
      "required": false,
      "description": "The maximum number of characters supported by the input. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength)."
    },
    {
      "name": "minLength",
      "type": "number | undefined",
      "required": false,
      "description": "The minimum number of characters required by the input. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength)."
    },
    {
      "name": "pattern",
      "type": "string | undefined",
      "required": false,
      "description": "Regex pattern that the value of the input must match to be valid. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern)."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "validate",
      "type": "((value: string) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "excludeFromTabOrder",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to exclude the element from the sequential tab order. If true,\nthe element will not be focusable via the keyboard by tabbing. This should\nbe avoided except in rare scenarios where an alternative means of accessing\nthe element or its functionality via the keyboard is available."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/TextField\").TextFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/TextField\").TextFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/TextField\").TextFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SearchFieldProps": [
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "clearLabel",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Clear search\"",
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<SearchFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "type",
      "type": "\"search\" | \"text\" | (string & {}) | \"tel\" | \"url\" | \"email\" | \"password\" | undefined",
      "required": false,
      "description": "The type of input to render. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype)."
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "enterKeyHint",
      "type": "\"search\" | \"enter\" | \"done\" | \"go\" | \"next\" | \"previous\" | \"send\" | undefined",
      "required": false,
      "description": "An enumerated attribute that defines what action label or icon to preset for the enter key on\nvirtual keyboards. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "spellCheck",
      "type": "string | undefined",
      "required": false,
      "description": "An enumerated attribute that defines whether the element may be checked for spelling errors.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck)."
    },
    {
      "name": "autoCorrect",
      "type": "string | undefined",
      "required": false,
      "description": "An attribute that takes as its value a space-separated string that describes what, if any, type\nof autocomplete functionality the input should provide. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete)."
    },
    {
      "name": "inputMode",
      "type": "\"none\" | \"search\" | \"text\" | \"tel\" | \"url\" | \"email\" | \"numeric\" | \"decimal\" | undefined",
      "required": false,
      "description": "Hints at the type of data that might be entered by the user while editing the element or its\ncontents. See\n[MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)."
    },
    {
      "name": "aria-activedescendant",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the currently active element when DOM focus is on a composite widget, textbox,\ngroup, or application."
    },
    {
      "name": "aria-autocomplete",
      "type": "\"none\" | \"both\" | \"list\" | \"inline\" | undefined",
      "required": false,
      "description": "Indicates whether inputting text could trigger display of one or more predictions of the user's\nintended value for an input and specifies how predictions would be presented if they are made."
    },
    {
      "name": "aria-controls",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) whose contents or presence are controlled by the current\nelement."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-errormessage",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element that provides an error message for the object."
    },
    {
      "name": "aria-haspopup",
      "type": "boolean | \"grid\" | \"dialog\" | \"menu\" | \"true\" | \"false\" | \"listbox\" | \"tree\" | undefined",
      "required": false,
      "description": "Indicates the availability and type of interactive popup element, such as menu or dialog, that\ncan be triggered by an element."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onCopy",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user copies text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy)."
    },
    {
      "name": "onCut",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user cuts text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut)."
    },
    {
      "name": "onPaste",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user pastes text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste)."
    },
    {
      "name": "onCompositionEnd",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system completes or cancels the current text\ncomposition session. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event)."
    },
    {
      "name": "onCompositionStart",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system starts a new text composition session.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)."
    },
    {
      "name": "onCompositionUpdate",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a new character is received in the current text composition\nsession. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event)."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<HTMLInputElement, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<HTMLInputElement, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onBeforeInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is about to be modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event)."
    },
    {
      "name": "onInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)."
    },
    {
      "name": "onSubmit",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the SearchField is submitted."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "onSelect",
      "type": "ReactEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when text in the input is selected. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event)."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "autoComplete",
      "type": "string | undefined",
      "required": false,
      "description": "Describes the type of autocomplete functionality the input should provide if any. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete)."
    },
    {
      "name": "maxLength",
      "type": "number | undefined",
      "required": false,
      "description": "The maximum number of characters supported by the input. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength)."
    },
    {
      "name": "minLength",
      "type": "number | undefined",
      "required": false,
      "description": "The minimum number of characters required by the input. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength)."
    },
    {
      "name": "pattern",
      "type": "string | undefined",
      "required": false,
      "description": "Regex pattern that the value of the input must match to be valid. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern)."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: string) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "excludeFromTabOrder",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to exclude the element from the sequential tab order. If true,\nthe element will not be focusable via the keyboard by tabbing. This should\nbe avoided except in rare scenarios where an alternative means of accessing\nthe element or its functionality via the keyboard is available."
    },
    {
      "name": "onClear",
      "type": "(() => void) | undefined",
      "required": false,
      "description": "Handler that is called when the clear button is pressed."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/SearchField\").SearchFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/SearchField\").SearchFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/SearchField\").SearchFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "CheckboxGroupProps": [
    {
      "name": "options",
      "type": "CheckboxGroupOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"vertical\"",
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { isSelected: boolean; isIndeterminate: boolean; isDisabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<CheckboxGroupRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "string[] | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "string[] | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-errormessage",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element that provides an error message for the object."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: string[]) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: string[]) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/Checkbox\").CheckboxGroupRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/Checkbox\").CheckboxGroupRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/Checkbox\").CheckboxGroupRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DateFieldProps": [
    {
      "name": "className",
      "type": "ClassNameOrFunction<DateFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "T | null | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T> | null) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "minValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The minimum allowed date that a user may select."
    },
    {
      "name": "maxValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The maximum allowed date that a user may select."
    },
    {
      "name": "isDateUnavailable",
      "type": "((date: DateValue) => boolean) | undefined",
      "required": false,
      "description": "Callback that is called for each date of the calendar. If it returns true, then the date is\nunavailable."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "autoComplete",
      "type": "string | undefined",
      "required": false,
      "description": "Describes the type of autocomplete functionality the input should provide if any. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete)."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T>) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "placeholderValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "A placeholder date that influences the format of the placeholder shown when no value is\nselected. Defaults to today's date at midnight."
    },
    {
      "name": "hourCycle",
      "type": "12 | 24 | undefined",
      "required": false,
      "description": "Whether to display the time in 12 or 24 hour format. By default, this is determined by the\nuser's locale."
    },
    {
      "name": "granularity",
      "type": "Granularity | undefined",
      "required": false,
      "description": "Determines the smallest unit that is displayed in the date picker. By default, this is `\"day\"`\nfor dates, and `\"minute\"` for times."
    },
    {
      "name": "hideTimeZone",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to hide the time zone abbreviation."
    },
    {
      "name": "shouldForceLeadingZeros",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to always show leading zeros in the month, day, and hour fields.\nBy default, this is determined by the user's locale."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TimeFieldProps": [
    {
      "name": "className",
      "type": "ClassNameOrFunction<DateFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "T | null | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useTimeFieldState\").MappedTimeValue<T> | null) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "minValue",
      "type": "TimeValue | null | undefined",
      "required": false,
      "description": "The minimum allowed time that a user may select."
    },
    {
      "name": "maxValue",
      "type": "TimeValue | null | undefined",
      "required": false,
      "description": "The maximum allowed time that a user may select."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useTimeFieldState\").MappedTimeValue<T>) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "placeholderValue",
      "type": "T | undefined",
      "required": false,
      "description": "A placeholder time that influences the format of the placeholder shown when no value is\nselected. Defaults to 12:00 AM or 00:00 depending on the hour cycle."
    },
    {
      "name": "hourCycle",
      "type": "12 | 24 | undefined",
      "required": false,
      "description": "Whether to display the time in 12 or 24 hour format. By default, this is determined by the\nuser's locale."
    },
    {
      "name": "granularity",
      "type": "\"hour\" | \"minute\" | \"second\" | undefined",
      "required": false,
      "description": "Determines the smallest unit that is displayed in the time picker."
    },
    {
      "name": "hideTimeZone",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to hide the time zone abbreviation."
    },
    {
      "name": "shouldForceLeadingZeros",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to always show leading zeros in the hour field.\nBy default, this is determined by the user's locale."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DateField\").DateFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "NumberFieldProps": [
    {
      "name": "decrementIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "incrementIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<NumberFieldRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "number | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onCopy",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user copies text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy)."
    },
    {
      "name": "onCut",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user cuts text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut)."
    },
    {
      "name": "onPaste",
      "type": "ClipboardEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the user pastes text. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste)."
    },
    {
      "name": "onCompositionEnd",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system completes or cancels the current text\ncomposition session. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event)."
    },
    {
      "name": "onCompositionStart",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a text composition system starts a new text composition session.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event)."
    },
    {
      "name": "onCompositionUpdate",
      "type": "CompositionEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when a new character is received in the current text composition\nsession. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event)."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: number) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onBeforeInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is about to be modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event)."
    },
    {
      "name": "onInput",
      "type": "FormEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when the input value is modified. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "onSelect",
      "type": "ReactEventHandler<HTMLInputElement> | undefined",
      "required": false,
      "description": "Handler that is called when text in the input is selected. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event)."
    },
    {
      "name": "minValue",
      "type": "number | undefined",
      "required": false,
      "description": "The smallest value allowed for the input."
    },
    {
      "name": "maxValue",
      "type": "number | undefined",
      "required": false,
      "description": "The largest value allowed for the input."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "step",
      "type": "number | undefined",
      "required": false,
      "description": "The amount that the input value changes with each increment or decrement \"tick\"."
    },
    {
      "name": "isWheelDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Enables or disables changing the value with scroll."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: number) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "decrementAriaLabel",
      "type": "string | undefined",
      "required": false,
      "description": "A custom aria-label for the decrement button. If not provided, the localized string \"Decrement\"\nis used."
    },
    {
      "name": "incrementAriaLabel",
      "type": "string | undefined",
      "required": false,
      "description": "A custom aria-label for the increment button. If not provided, the localized string \"Increment\"\nis used."
    },
    {
      "name": "formatOptions",
      "type": "Intl.NumberFormatOptions | undefined",
      "required": false,
      "description": "Formatting options for the value displayed in the number field.\nThis also affects what characters are allowed to be typed by the user."
    },
    {
      "name": "commitBehavior",
      "type": "\"validate\" | \"snap\" | undefined",
      "required": false,
      "description": "Controls the behavior of the number field when the user blurs the field after editing. 'snap'\nwill clamp the value to the min/max values, and snap to the nearest step value. 'validate' will\nnot clamp the value, and will validate that the value is within the min/max range and on a\nvalid step."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/NumberField\").NumberFieldRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/NumberField\").NumberFieldRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/NumberField\").NumberFieldRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TagGroupProps": [
    {
      "name": "items",
      "type": "TagGroupItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "renderTag",
      "type": "((item: TagGroupItem, state: TagRenderProps) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "style",
      "type": "React.CSSProperties | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement."
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", undefined> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "selectionMode",
      "type": "SelectionMode | undefined",
      "required": false,
      "description": "The type of selection that is allowed in the collection."
    },
    {
      "name": "selectedKeys",
      "type": "Iterable<Key> | \"all\" | undefined",
      "required": false,
      "description": "The currently selected keys in the collection (controlled)."
    },
    {
      "name": "defaultSelectedKeys",
      "type": "Iterable<Key> | \"all\" | undefined",
      "required": false,
      "description": "The initial selected keys in the collection (uncontrolled)."
    },
    {
      "name": "onSelectionChange",
      "type": "((keys: Selection) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the selection changes."
    },
    {
      "name": "selectionBehavior",
      "type": "SelectionBehavior | undefined",
      "required": false,
      "description": "How multiple selection should behave in the collection."
    },
    {
      "name": "shouldSelectOnPressUp",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether selection should occur on press up instead of press down."
    },
    {
      "name": "onAction",
      "type": "((key: Key) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a user performs an action on an item. The exact user event depends\non the collection's `selectionBehavior` prop and the interaction modality."
    },
    {
      "name": "escapeKeyBehavior",
      "type": "\"none\" | \"clearSelection\" | undefined",
      "required": false,
      "description": "Whether pressing the escape key should clear selection in the TagGroup or not.\n\nMost experiences should not modify this option as it eliminates a keyboard user's ability to\neasily clear selection. Only use if the escape key is being handled externally or should not\ntrigger selection clearing contextually."
    },
    {
      "name": "disabledKeys",
      "type": "Iterable<Key> | undefined",
      "required": false,
      "description": "The item keys that are disabled. These items cannot be selected, focused, or otherwise\ninteracted with."
    },
    {
      "name": "disallowEmptySelection",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the collection allows empty selection."
    },
    {
      "name": "onRemove",
      "type": "((keys: Set<Key>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a user deletes a tag."
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SegmentedDatePickerProps": [
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<DatePickerRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "name",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "value",
      "type": "T | null | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T> | null) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "minValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The minimum allowed date that a user may select."
    },
    {
      "name": "maxValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The maximum allowed date that a user may select."
    },
    {
      "name": "isDateUnavailable",
      "type": "((date: DateValue) => boolean) | undefined",
      "required": false,
      "description": "Callback that is called for each date of the calendar. If it returns true, then the date is\nunavailable."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "firstDayOfWeek",
      "type": "\"sun\" | \"mon\" | \"tue\" | \"wed\" | \"thu\" | \"fri\" | \"sat\" | undefined",
      "required": false,
      "description": "The day that starts the week."
    },
    {
      "name": "pageBehavior",
      "type": "PageBehavior | undefined",
      "required": false,
      "description": "Controls the behavior of paging. Pagination either works by advancing the visible page by\nvisibleDuration (default) or one unit of visibleDuration."
    },
    {
      "name": "autoComplete",
      "type": "string | undefined",
      "required": false,
      "description": "Describes the type of autocomplete functionality the input should provide if any. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete)."
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the overlay is open by default (uncontrolled)."
    },
    {
      "name": "onOpenChange",
      "type": "((isOpen: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the overlay's open state changes."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T>) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "placeholderValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "A placeholder date that influences the format of the placeholder shown when no value is\nselected. Defaults to today's date at midnight."
    },
    {
      "name": "hourCycle",
      "type": "12 | 24 | undefined",
      "required": false,
      "description": "Whether to display the time in 12 or 24 hour format. By default, this is determined by the\nuser's locale."
    },
    {
      "name": "granularity",
      "type": "Granularity | undefined",
      "required": false,
      "description": "Determines the smallest unit that is displayed in the date picker. By default, this is `\"day\"`\nfor dates, and `\"minute\"` for times."
    },
    {
      "name": "hideTimeZone",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to hide the time zone abbreviation."
    },
    {
      "name": "shouldForceLeadingZeros",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to always show leading zeros in the month, day, and hour fields.\nBy default, this is determined by the user's locale."
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the overlay is open by default (controlled)."
    },
    {
      "name": "shouldCloseOnSelect",
      "type": "boolean | (() => boolean) | undefined",
      "required": false,
      "description": "Determines whether the date picker popover should close automatically when a date is selected."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DatePickerRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DatePickerRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DatePickerRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SegmentedDateRangePickerProps": [
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "ClassNameOrFunction<DateRangePickerRenderProps> | undefined",
      "required": false,
      "description": "The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the\nelement. A function may be provided to compute the class based on component state."
    },
    {
      "name": "form",
      "type": "string | undefined",
      "required": false,
      "description": "The `<form>` element to associate the input with.\nThe value of this attribute must be the id of a `<form>` in the same document.\nSee [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form)."
    },
    {
      "name": "value",
      "type": "RangeValue<T> | null | undefined",
      "required": false,
      "description": "The current value (controlled)."
    },
    {
      "name": "defaultValue",
      "type": "RangeValue<T> | null | undefined",
      "required": false,
      "description": "The default value (uncontrolled)."
    },
    {
      "name": "autoFocus",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the element should receive focus on render."
    },
    {
      "name": "id",
      "type": "string | undefined",
      "required": false,
      "description": "The element's unique identifier. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)."
    },
    {
      "name": "aria-describedby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that describes the object."
    },
    {
      "name": "aria-details",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that provide a detailed, extended description for the\nobject."
    },
    {
      "name": "aria-label",
      "type": "string | undefined",
      "required": false,
      "description": "Defines a string value that labels the current element."
    },
    {
      "name": "aria-labelledby",
      "type": "string | undefined",
      "required": false,
      "description": "Identifies the element (or elements) that labels the current element."
    },
    {
      "name": "onFocus",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element receives focus."
    },
    {
      "name": "onBlur",
      "type": "((e: FocusEvent<Element, Element>) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element loses focus."
    },
    {
      "name": "onChange",
      "type": "((value: RangeValue<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T>> | null) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the value changes."
    },
    {
      "name": "onKeyDown",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is pressed."
    },
    {
      "name": "onKeyUp",
      "type": "((e: KeyboardEvent) => void) | undefined",
      "required": false,
      "description": "Handler that is called when a key is released."
    },
    {
      "name": "minValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The minimum allowed date that a user may select."
    },
    {
      "name": "maxValue",
      "type": "DateValue | null | undefined",
      "required": false,
      "description": "The maximum allowed date that a user may select."
    },
    {
      "name": "isDateUnavailable",
      "type": "((date: DateValue, anchorDate: CalendarDate | null) => boolean) | undefined",
      "required": false,
      "description": "Callback that is called for each date of the calendar. If it returns true, then the date is\nunavailable."
    },
    {
      "name": "onFocusChange",
      "type": "((isFocused: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the element's focus status changes."
    },
    {
      "name": "firstDayOfWeek",
      "type": "\"sun\" | \"mon\" | \"tue\" | \"wed\" | \"thu\" | \"fri\" | \"sat\" | undefined",
      "required": false,
      "description": "The day that starts the week."
    },
    {
      "name": "pageBehavior",
      "type": "PageBehavior | undefined",
      "required": false,
      "description": "Controls the behavior of paging. Pagination either works by advancing the visible page by\nvisibleDuration (default) or one unit of visibleDuration."
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the overlay is open by default (uncontrolled)."
    },
    {
      "name": "onOpenChange",
      "type": "((isOpen: boolean) => void) | undefined",
      "required": false,
      "description": "Handler that is called when the overlay's open state changes."
    },
    {
      "name": "isDisabled",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input is disabled."
    },
    {
      "name": "isReadOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input can be selected but not changed by the user."
    },
    {
      "name": "isRequired",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether user input is required on the input before form submission."
    },
    {
      "name": "isInvalid",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the input value is invalid."
    },
    {
      "name": "validate",
      "type": "((value: RangeValue<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-stately/dist/types/exports/useDateFieldState\").MappedDateValue<T>>) => ValidationError | true | null | undefined) | undefined",
      "required": false,
      "description": "A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior=\"native\"`. For realtime validation, use the `isInvalid`\nprop instead."
    },
    {
      "name": "placeholderValue",
      "type": "T | null | undefined",
      "required": false,
      "description": "A placeholder date that influences the format of the placeholder shown when no value is\nselected. Defaults to today's date at midnight."
    },
    {
      "name": "hourCycle",
      "type": "12 | 24 | undefined",
      "required": false,
      "description": "Whether to display the time in 12 or 24 hour format. By default, this is determined by the\nuser's locale."
    },
    {
      "name": "granularity",
      "type": "Granularity | undefined",
      "required": false,
      "description": "Determines the smallest unit that is displayed in the date picker. By default, this is `\"day\"`\nfor dates, and `\"minute\"` for times."
    },
    {
      "name": "hideTimeZone",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to hide the time zone abbreviation."
    },
    {
      "name": "shouldForceLeadingZeros",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether to always show leading zeros in the month, day, and hour fields.\nBy default, this is determined by the user's locale."
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": "Whether the overlay is open by default (controlled)."
    },
    {
      "name": "allowsNonContiguousRanges",
      "type": "boolean | undefined",
      "required": false,
      "description": "When combined with `isDateUnavailable`, determines whether non-contiguous ranges,\ni.e. ranges containing unavailable dates, may be selected."
    },
    {
      "name": "startName",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the start date input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "endName",
      "type": "string | undefined",
      "required": false,
      "description": "The name of the end date input element, used when submitting an HTML form. See\n[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname)."
    },
    {
      "name": "shouldCloseOnSelect",
      "type": "boolean | (() => boolean) | undefined",
      "required": false,
      "description": "Determines whether the date picker popover should close automatically when a date is selected."
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": "Whether to use native HTML form validation to prevent form submission\nwhen the value is missing or invalid, or mark the field as required\nor invalid via ARIA."
    },
    {
      "name": "children",
      "type": "ChildrenOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DateRangePickerRenderProps>",
      "required": false,
      "description": "The children of the component. A function may be provided to alter the children based on\ncomponent state."
    },
    {
      "name": "style",
      "type": "StyleOrFunction<import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DateRangePickerRenderProps> | undefined",
      "required": false,
      "description": "The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the\nelement. A function may be provided to compute the style based on component state."
    },
    {
      "name": "render",
      "type": "DOMRenderFunction<\"div\", import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/react-aria-components/dist/types/src/DatePicker\").DateRangePickerRenderProps> | undefined",
      "required": false,
      "description": "Overrides the default DOM element with a custom render function.\nThis allows rendering existing components with built-in styles and behaviors\nsuch as router links, animation libraries, and pre-styled components.\n\nRequirements:\n\n- You must render the expected element type (e.g. if `<button>` is expected, you cannot render an\n  `<a>`).\n- Only a single root DOM element can be rendered (no fragments).\n- You must pass through props and ref to the underlying DOM element, merging with your own prop\n  as appropriate."
    },
    {
      "name": "slot",
      "type": "string | null | undefined",
      "required": false,
      "description": "A slot name for the component. Slots allow the component to receive props from a parent\ncomponent. An explicit `null` value indicates that the local props completely override all\nprops received from a parent."
    },
    {
      "name": "dir",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "lang",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hidden",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inert",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "translate",
      "type": "\"yes\" | \"no\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "suppressHydrationWarning",
      "type": "boolean | undefined",
      "required": false,
      "description": "A React-only flag that suppresses the warning React normally logs when an element's\nserver-rendered content doesn't match the client render during hydration. See [React\ndocs](https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors)."
    },
    {
      "name": "onClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAuxClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenu",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onContextMenuCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClick",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onDoubleClickCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDown",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseDownCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseEnter",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseLeave",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMove",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseMoveCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOut",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOutCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOver",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseOverCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUp",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onMouseUpCapture",
      "type": "MouseEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancel",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchCancelCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEnd",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchEndCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMove",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchMoveCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStart",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTouchStartCapture",
      "type": "TouchEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDown",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerDownCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMove",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerMoveCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUp",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerUpCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancel",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerCancelCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerEnter",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerLeave",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOver",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOverCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOut",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onPointerOutCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onGotPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onLostPointerCaptureCapture",
      "type": "PointerEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScroll",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onScrollCapture",
      "type": "UIEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheel",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onWheelCapture",
      "type": "WheelEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStart",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationStartCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEnd",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationEndCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIteration",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAnimationIterationCapture",
      "type": "AnimationEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancel",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionCancelCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEnd",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionEndCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRun",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionRunCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStart",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onTransitionStartCapture",
      "type": "TransitionEventHandler<HTMLDivElement> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "prefix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "suffix",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "fullWidth",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "inputClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    }
  ],
  "InputProps": [
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "helper",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "leading",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trailing",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "InputGroupProps": [
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    }
  ],
  "InputGroupAddonProps": [
    {
      "name": "align",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    }
  ],
  "InputGroupInputProps": [],
  "InputGroupTextareaProps": [],
  "ItemProps": [
    {
      "name": "variant",
      "type": "\"outline\" | \"default\" | \"muted\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    }
  ],
  "ItemGroupProps": [],
  "ItemContentProps": [],
  "ItemTitleProps": [],
  "ItemDescriptionProps": [],
  "ItemActionsProps": [],
  "ModalProps": [
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "title",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "description",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "drawer",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "defaultValue": "\"right\"",
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "nonModal",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "fullscreen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "placement",
      "type": "\"top\" | \"bottom\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"center\"",
      "description": ""
    },
    {
      "name": "backdrop",
      "type": "\"opaque\" | \"blur\" | \"transparent\" | undefined",
      "required": false,
      "defaultValue": "\"opaque\"",
      "description": ""
    },
    {
      "name": "dismissable",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "keyboardDismiss",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "hideCloseButton",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "closeIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "scrollBehavior",
      "type": "\"inside\" | \"outside\" | undefined",
      "required": false,
      "defaultValue": "\"inside\"",
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropStyle",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "contentProps",
      "type": "Omit<Omit<DialogPrimitive.DialogContentProps & import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/@types/react/index\").RefAttributes<HTMLDivElement>, \"ref\">, \"children\" | \"className\" | \"style\" | \"title\"> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": "Mount inside a themed subtree instead of document.body."
    }
  ],
  "TabsProps": [
    {
      "name": "items",
      "type": "TabItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Tabs\"",
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"secondary\" | \"pill\" | \"underline\" | \"segmented\" | undefined",
      "required": false,
      "defaultValue": "\"segmented\"",
      "description": ""
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    },
    {
      "name": "divided",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderTab",
      "type": "((item: TabItem, state: { selected: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "BreadcrumbsProps": [
    {
      "name": "items",
      "type": "BreadcrumbItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Breadcrumb\"",
      "description": ""
    },
    {
      "name": "separator",
      "type": "ReactNode",
      "required": false,
      "defaultValue": "\"/\"",
      "description": ""
    },
    {
      "name": "renderItem",
      "type": "((item: BreadcrumbItem, state: { current: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "PaginationProps": [
    {
      "name": "page",
      "type": "number",
      "required": true,
      "description": ""
    },
    {
      "name": "totalPages",
      "type": "number",
      "required": true,
      "description": ""
    },
    {
      "name": "onPageChange",
      "type": "(page: number) => void",
      "required": true,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Pagination\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "simple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showSummary",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "previousIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "nextIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "StepperProps": [
    {
      "name": "steps",
      "type": "string[]",
      "required": true,
      "description": ""
    },
    {
      "name": "current",
      "type": "number",
      "required": true,
      "description": ""
    },
    {
      "name": "onStepChange",
      "type": "((step: number) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "disabledSteps",
      "type": "number[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    }
  ],
  "ContainerProps": [
    {
      "name": "maxWidth",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "\"72rem\"",
      "description": ""
    }
  ],
  "StackProps": [
    {
      "name": "direction",
      "type": "\"row\" | \"column\" | undefined",
      "required": false,
      "defaultValue": "\"column\"",
      "description": ""
    },
    {
      "name": "gap",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "16",
      "description": ""
    },
    {
      "name": "align",
      "type": "import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/csstype/index\").Property.AlignItems | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "justify",
      "type": "import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/csstype/index\").Property.JustifyContent | undefined",
      "required": false,
      "description": ""
    }
  ],
  "GridProps": [
    {
      "name": "columns",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "3",
      "description": ""
    },
    {
      "name": "gap",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "16",
      "description": ""
    },
    {
      "name": "minWidth",
      "type": "string | number | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SplitProps": [
    {
      "name": "ratio",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"1fr 1fr\"",
      "description": ""
    },
    {
      "name": "gap",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "24",
      "description": ""
    }
  ],
  "AspectRatioProps": [
    {
      "name": "ratio",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "16 / 9",
      "description": ""
    }
  ],
  "ScrollAreaProps": [
    {
      "name": "maxHeight",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "320",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Scrollable content\"",
      "description": ""
    }
  ],
  "SeparatorProps": [
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "decorative",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"secondary\" | \"default\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: HTMLAttributes<HTMLDivElement>) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "KbdProps": [
    {
      "name": "variant",
      "type": "\"outline\" | \"default\" | \"light\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "keys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TextProps": [
    {
      "name": "as",
      "type": "\"div\" | \"p\" | \"span\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "\"primary\" | \"default\" | \"muted\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    }
  ],
  "HeadingProps": [
    {
      "name": "as",
      "type": "\"h2\" | \"h3\" | \"h1\" | \"h4\" | \"h5\" | \"h6\" | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ToolbarProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Toolbar\"",
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "defaultValue": "\"horizontal\"",
      "description": ""
    },
    {
      "name": "attached",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "NavbarProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Main navigation\"",
      "description": ""
    }
  ],
  "SidebarProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Sidebar\"",
      "description": ""
    }
  ],
  "DrawerProps": [
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "title",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "defaultValue": "\"right\"",
      "description": ""
    },
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placement",
      "type": "\"top\" | \"bottom\" | \"center\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdrop",
      "type": "\"opaque\" | \"blur\" | \"transparent\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "dismissable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "keyboardDismiss",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hideCloseButton",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "closeIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "scrollBehavior",
      "type": "\"inside\" | \"outside\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropStyle",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "contentProps",
      "type": "Omit<Omit<DialogPrimitive.DialogContentProps & import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/@types/react/index\").RefAttributes<HTMLDivElement>, \"ref\">, \"children\" | \"className\" | \"style\" | \"title\"> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": "Mount inside a themed subtree instead of document.body."
    }
  ],
  "DropdownMenuProps": [
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "items",
      "type": "DropdownMenuItem[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "sections",
      "type": "DropdownMenuSection[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | \"none\" | undefined",
      "required": false,
      "defaultValue": "\"none\"",
      "description": ""
    },
    {
      "name": "selectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelectedKeys",
      "type": "string[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "onSelectionChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onAction",
      "type": "((key: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "submenuIndicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "triggerMode",
      "type": "\"press\" | \"longPress\" | undefined",
      "required": false,
      "defaultValue": "\"press\"",
      "description": ""
    },
    {
      "name": "longPressDelay",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "500",
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TooltipProps": [
    {
      "name": "content",
      "type": "ReactNode | ((state: { open: boolean; }) => ReactNode)",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "defaultValue": "\"top\"",
      "description": ""
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showArrow",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "delay",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "350",
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "PopoverProps": [
    {
      "name": "title",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode | ((state: { close: () => void; open: boolean; }) => ReactNode)",
      "required": true,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "side",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "align",
      "type": "\"start\" | \"end\" | \"center\" | undefined",
      "required": false,
      "defaultValue": "\"start\"",
      "description": ""
    },
    {
      "name": "showArrow",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "offset",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "8",
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "CommandPaletteProps": [
    {
      "name": "open",
      "type": "boolean",
      "required": true,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "(open: boolean) => void",
      "required": true,
      "description": ""
    },
    {
      "name": "items",
      "type": "CommandItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    }
  ],
  "AlertProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"info\"",
      "description": ""
    },
    {
      "name": "onDismiss",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "icon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "action",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "ToastProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"neutral\"",
      "description": ""
    },
    {
      "name": "onDismiss",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "isLoading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "action",
      "type": "{ label: string; onAction: () => void; } | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ProgressProps": [
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "min",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "max",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "100",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Progress\"",
      "description": ""
    },
    {
      "name": "circular",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indeterminate",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showValue",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "showLabel",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"success\"",
      "description": ""
    },
    {
      "name": "svgProps",
      "type": "SVGProps<SVGSVGElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "ProgressCircleProps": [
    {
      "name": "value",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "max",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "min",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indeterminate",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showValue",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showLabel",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "svgProps",
      "type": "SVGProps<SVGSVGElement> | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SkeletonProps": [
    {
      "name": "width",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "\"100%\"",
      "description": ""
    },
    {
      "name": "height",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "20",
      "description": ""
    },
    {
      "name": "animation",
      "type": "\"none\" | \"pulse\" | \"shimmer\" | undefined",
      "required": false,
      "defaultValue": "\"pulse\"",
      "description": ""
    },
    {
      "name": "sharedShimmer",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SpinnerProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Loading\"",
      "description": ""
    },
    {
      "name": "size",
      "type": "number | \"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "tone",
      "type": "Tone | undefined",
      "required": false,
      "defaultValue": "\"success\"",
      "description": ""
    },
    {
      "name": "speed",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0.7",
      "description": ""
    }
  ],
  "EmptyStateProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "description",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "action",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "ComboboxProps": [
    {
      "name": "renderValue",
      "type": "((option: ControlOption | undefined) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "selectedKey",
      "type": "string | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultSelectedKey",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onSelectionChange",
      "type": "((key: string | null) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "formValue",
      "type": "\"text\" | \"key\" | undefined",
      "required": false,
      "defaultValue": "\"key\"",
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "allowsCustomValue",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "true",
      "description": "Keep free text, as the previous datalist control did. Set false for option-only selection."
    },
    {
      "name": "emptyText",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"No matches found.\"",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "inputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultInputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onInputChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isLoading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "virtualized",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "menuTrigger",
      "type": "\"input\" | \"manual\" | \"focus\" | undefined",
      "required": false,
      "defaultValue": "\"focus\"",
      "description": ""
    },
    {
      "name": "filter",
      "type": "((text: string, query: string) => boolean) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ControlOption, state: { isSelected: boolean; isFocused: boolean; isDisabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "validate",
      "type": "((value: { inputValue: string; value: unknown; }) => string | string[] | true | null | undefined) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "MultiSelectProps": [
    {
      "name": "allowsCustomValue",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderTag",
      "type": "((option: ControlOption) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"Search and select…\"",
      "description": ""
    },
    {
      "name": "emptyText",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"No matches found.\"",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "inputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultInputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onInputChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isLoading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "virtualized",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "menuTrigger",
      "type": "\"input\" | \"manual\" | \"focus\" | undefined",
      "required": false,
      "defaultValue": "\"focus\"",
      "description": ""
    },
    {
      "name": "filter",
      "type": "((text: string, query: string) => boolean) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ControlOption, state: { isSelected: boolean; isFocused: boolean; isDisabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "validate",
      "type": "((value: { inputValue: string; value: unknown; }) => string | string[] | true | null | undefined) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DatePickerProps": [
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "type",
      "type": "\"month\" | \"week\" | \"time\" | \"date\" | \"datetime-local\" | undefined",
      "required": false,
      "defaultValue": "\"date\"",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "helper",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "leading",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trailing",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DateRangePickerProps": [
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "DateRange | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "DateRange | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: DateRange) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "start",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "end",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultStart",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "defaultEnd",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "onRangeChange",
      "type": "((range: DateRange) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "min",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "max",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "SliderProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "value",
      "type": "T | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "T | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: T) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onChange",
      "type": "((event: ChangeEvent<HTMLInputElement>) => void) | undefined",
      "required": false,
      "description": "Native change event from the first thumb. Prefer onValueChange for ranges."
    },
    {
      "name": "thumbLabels",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "formatOptions",
      "type": "Intl.NumberFormatOptions | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "orientation",
      "type": "\"horizontal\" | \"vertical\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "marks",
      "type": "(number | { value: number; label?: ReactNode; })[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "showSteps",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOutput",
      "type": "((values: number[], labels: string[]) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderThumb",
      "type": "((state: { value: number; index: number; isDisabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "NumberInputProps": [
    {
      "name": "onValueChange",
      "type": "((value: number | null) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "defaultValue": "helper",
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "controlSize",
      "type": "\"sm\" | \"md\" | \"lg\" | undefined",
      "required": false,
      "defaultValue": "\"md\"",
      "description": ""
    },
    {
      "name": "helper",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "leading",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "trailing",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    }
  ],
  "OtpInputProps": [
    {
      "name": "onComplete",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "length",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "6",
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "defaultValue": "\"\"",
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "masked",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "FileUploadProps": [
    {
      "name": "files",
      "type": "File[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultFiles",
      "type": "File[] | undefined",
      "required": false,
      "defaultValue": "[]",
      "description": ""
    },
    {
      "name": "maxFiles",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "maxSize",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onFilesChange",
      "type": "((files: File[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    }
  ],
  "AutocompleteProps": [
    {
      "name": "selectionMode",
      "type": "\"single\" | \"multiple\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "allowsCustomValue",
      "type": "boolean | undefined",
      "required": false,
      "description": "Keep free text, as the previous datalist control did. Set false for option-only selection."
    },
    {
      "name": "emptyText",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | ((value: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "readOnly",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "inputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultInputValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onInputChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isLoading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "virtualized",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "menuTrigger",
      "type": "\"input\" | \"manual\" | \"focus\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "filter",
      "type": "((text: string, query: string) => boolean) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ControlOption, state: { isSelected: boolean; isFocused: boolean; isDisabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "validationBehavior",
      "type": "\"native\" | \"aria\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "validate",
      "type": "((value: { inputValue: string; value: unknown; }) => string | string[] | true | null | undefined) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SelectProps": [
    {
      "name": "label",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "options",
      "type": "ControlOption[]",
      "required": true,
      "description": ""
    },
    {
      "name": "value",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultValue",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onValueChange",
      "type": "((value: string) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "placeholder",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hint",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "error",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "required",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "autoComplete",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "isLoading",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "clearable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onClear",
      "type": "(() => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "indicator",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"outline\" | \"filled\" | \"underline\" | undefined",
      "required": false,
      "defaultValue": "\"outline\"",
      "description": ""
    },
    {
      "name": "renderValue",
      "type": "((option: ControlOption | undefined) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderOption",
      "type": "((option: ControlOption, selected: boolean) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "SheetProps": [
    {
      "name": "placement",
      "type": "\"top\" | \"right\" | \"bottom\" | \"left\" | undefined",
      "required": false,
      "defaultValue": "\"bottom\"",
      "description": ""
    },
    {
      "name": "snapPoints",
      "type": "(string | number)[] | undefined",
      "required": false,
      "defaultValue": "[0.5, 0.9]",
      "description": ""
    },
    {
      "name": "activeSnapPoint",
      "type": "number | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultActiveSnapPoint",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "onActiveSnapPointChange",
      "type": "((index: number) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "sequential",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "fadeFromIndex",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "0",
      "description": ""
    },
    {
      "name": "handleOnly",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "detached",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "title",
      "type": "string",
      "required": true,
      "description": ""
    },
    {
      "name": "size",
      "type": "\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "description",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "nonModal",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "trigger",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "open",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultOpen",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onOpenChange",
      "type": "((open: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdrop",
      "type": "\"opaque\" | \"blur\" | \"transparent\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "dismissable",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "keyboardDismiss",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "hideCloseButton",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "closeIcon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "scrollBehavior",
      "type": "\"inside\" | \"outside\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropClassName",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "backdropStyle",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "contentProps",
      "type": "Omit<Omit<DialogPrimitive.DialogContentProps & import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/@types/react/index\").RefAttributes<HTMLDivElement>, \"ref\">, \"children\" | \"className\" | \"style\" | \"title\"> | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": "Mount inside a themed subtree instead of document.body."
    }
  ],
  "SurfaceProps": [
    {
      "name": "variant",
      "type": "\"secondary\" | \"tertiary\" | \"default\" | \"transparent\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    }
  ],
  "LinkProps": [
    {
      "name": "icon",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "iconPlacement",
      "type": "\"start\" | \"end\" | undefined",
      "required": false,
      "defaultValue": "\"end\"",
      "description": ""
    },
    {
      "name": "underline",
      "type": "\"none\" | \"always\" | \"hover\" | undefined",
      "required": false,
      "defaultValue": "\"hover\"",
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: AnchorHTMLAttributes<HTMLAnchorElement> & { ref: ForwardedRef<HTMLAnchorElement>; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DisclosureProps": [
    {
      "name": "title",
      "type": "ReactNode",
      "required": true,
      "description": ""
    },
    {
      "name": "children",
      "type": "ReactNode | ((state: { expanded: boolean; }) => ReactNode)",
      "required": false,
      "description": ""
    },
    {
      "name": "expanded",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultExpanded",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "onExpandedChange",
      "type": "((expanded: boolean) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "renderTrigger",
      "type": "((state: { expanded: boolean; disabled: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "DisclosureGroupProps": [
    {
      "name": "items",
      "type": "AccordionItem[]",
      "required": true,
      "description": ""
    },
    {
      "name": "multiple",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "expandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "defaultExpandedKeys",
      "type": "string[] | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "onExpandedChange",
      "type": "((keys: string[]) => void) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "disabled",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "variant",
      "type": "\"default\" | \"surface\" | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "divided",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderIndicator",
      "type": "((state: { expanded: boolean; item: AccordionItem; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderTitle",
      "type": "((item: AccordionItem, state: { expanded: boolean; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TypographyProps": [
    {
      "name": "as",
      "type": "TypographyElement | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "type",
      "type": "TypographyType | undefined",
      "required": false,
      "defaultValue": "\"body\"",
      "description": ""
    },
    {
      "name": "align",
      "type": "import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/csstype/index\").Property.TextAlign | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "tone",
      "type": "\"primary\" | \"default\" | \"muted\" | undefined",
      "required": false,
      "defaultValue": "\"default\"",
      "description": ""
    },
    {
      "name": "weight",
      "type": "import(\"C:/Users/Christian R/OneDrive/Desktop/Design System/hulmio/node_modules/csstype/index\").Property.FontWeight | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "truncate",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "prose",
      "type": "boolean | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "render",
      "type": "((props: HTMLAttributes<HTMLElement> & { ref: (node: HTMLElement | null) => void; }) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ],
  "TableProps": [],
  "TableSectionProps": [],
  "TableRowProps": [],
  "TableHeadProps": [],
  "TableCellProps": [],
  "TableCaptionProps": [],
  "ToastProviderProps": [
    {
      "name": "children",
      "type": "ReactNode",
      "required": false,
      "description": ""
    },
    {
      "name": "queue",
      "type": "ToastQueue | undefined",
      "required": false,
      "defaultValue": "defaultToastQueue",
      "description": ""
    },
    {
      "name": "placement",
      "type": "\"top\" | \"bottom\" | \"top-right\" | \"top-left\" | \"bottom-right\" | \"bottom-left\" | undefined",
      "required": false,
      "defaultValue": "\"bottom-right\"",
      "description": ""
    },
    {
      "name": "expanded",
      "type": "boolean | undefined",
      "required": false,
      "defaultValue": "false",
      "description": ""
    },
    {
      "name": "maxVisibleToasts",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "3",
      "description": ""
    },
    {
      "name": "gap",
      "type": "number | undefined",
      "required": false,
      "defaultValue": "12",
      "description": ""
    },
    {
      "name": "width",
      "type": "string | number | undefined",
      "required": false,
      "defaultValue": "380",
      "description": ""
    },
    {
      "name": "className",
      "type": "string | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "style",
      "type": "CSSProperties | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "portalContainer",
      "type": "HTMLElement | null | undefined",
      "required": false,
      "description": ""
    },
    {
      "name": "renderToast",
      "type": "((record: ToastRecord, close: () => void) => ReactNode) | undefined",
      "required": false,
      "description": ""
    }
  ]
};
