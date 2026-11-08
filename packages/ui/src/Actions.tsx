import { forwardRef, useId, useState, useRef, useEffect } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";
import type { ButtonProps, Size, Variant } from "./Button";
import { cn } from "./utils";
import { ActionGroupContext } from "./ActionContext";

export interface IconButtonProps extends ButtonProps { label: string }
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ label, className, shape, ...props }, ref) => (
  <Button {...props} ref={ref} shape={shape} className={cn("h-icon-button", className)} aria-label={label} />
));
IconButton.displayName = "IconButton";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> { label?: string; variant?: Variant; size?: Size; orientation?: "horizontal" | "vertical"; fullWidth?: boolean; disabled?: boolean; separated?: boolean }
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(({ label, className, variant, size, disabled, orientation = "horizontal", fullWidth, separated = true, ...props }, ref) => (
  <ActionGroupContext.Provider value={{ variant, size, disabled }}><div {...props} ref={ref} data-hulmio-ui="button-group" data-orientation={orientation} data-separated={separated} data-full-width={fullWidth || undefined} aria-disabled={disabled || undefined} role="group" aria-label={label ?? props["aria-label"]} className={cn("h-button-group", className)} /></ActionGroupContext.Provider>
));
ButtonGroup.displayName = "ButtonGroup";

export interface CloseButtonProps extends Omit<IconButtonProps, "label"> { label?: string }
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(({ label = "Close", children, variant = "ghost", size = "sm", ...props }, ref) => <IconButton {...props} ref={ref} label={label} variant={variant} size={size}>{children ?? <X size={18} aria-hidden="true" />}</IconButton>);
CloseButton.displayName = "CloseButton";

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({ pressed, defaultPressed = false, onPressedChange, onClick, className, variant, size, fullWidth, type = "button", ...props }, ref) => {
  const [inner, setInner] = useState(defaultPressed);
  const current = pressed ?? inner;
  return <button {...props} ref={ref} type={type} data-hulmio-ui="toggle" data-variant={variant} data-size={size} data-full-width={fullWidth || undefined} className={cn("h-toggle", className)} aria-pressed={current} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (pressed === undefined) setInner(!current);
    onPressedChange?.(!current);
  }} />;
});
Toggle.displayName = "Toggle";

export interface ToggleOption { value: string; label: string; disabled?: boolean; icon?: ReactNode }
export interface ToggleGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  label: string;
  options: ToggleOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  form?: string;
  selectionMode?: "single" | "multiple";
  values?: string[];
  defaultValues?: string[];
  onValuesChange?: (values: string[]) => void;
  orientation?: "horizontal" | "vertical";
  size?: Size;
  fullWidth?: boolean;
  detached?: boolean;
  separated?: boolean;
}
export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(({ label, options, value, defaultValue, onValueChange, name, disabled, required, form, id, className, selectionMode = "single", values, defaultValues = [], onValuesChange, orientation = "horizontal", size, fullWidth, detached = true, separated = true, ...props }, ref) => {
  const autoId = useId();
  const groupId = id ?? autoId;
  const [innerValues, setValues] = useState(defaultValues);
  const currentValues = values ?? innerValues;
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ownerForm = form ? document.getElementById(form) as HTMLFormElement | null : rootRef.current?.closest("form");
    const reset = (event: Event) => { queueMicrotask(() => { if (!event.defaultPrevented && values === undefined) setValues(defaultValues); }); };
    ownerForm?.addEventListener("reset", reset);
    return () => ownerForm?.removeEventListener("reset", reset);
  }, [form, values, defaultValues]);
  return <div {...props} id={groupId} ref={node => { rootRef.current = node; if (typeof ref === "function") ref(node); else if (ref) ref.current = node; }} role={selectionMode === "multiple" ? "group" : "radiogroup"} aria-label={label} aria-required={selectionMode === "single" ? required || undefined : undefined} aria-disabled={disabled || undefined} data-hulmio-ui="toggle-group" data-orientation={orientation} data-size={size} data-full-width={fullWidth || undefined} data-detached={detached} data-separated={separated} className={cn("h-toggle-group", className)}>
    {options.map((option, index) => <label className="h-toggle-option" key={option.value}>
      <input type={selectionMode === "multiple" ? "checkbox" : "radio"} name={name ?? `${groupId}-value`} form={form} value={option.value} required={selectionMode === "single" ? required : undefined} disabled={disabled || option.disabled} checked={selectionMode === "multiple" ? currentValues.includes(option.value) : value === undefined ? undefined : value === option.value} defaultChecked={selectionMode === "single" && value === undefined ? defaultValue === option.value : undefined} onChange={(event) => {
        if (selectionMode === "multiple") {
          const next = event.target.checked ? [...currentValues, option.value] : currentValues.filter(item => item !== option.value);
          if (values === undefined) setValues(next);
          onValuesChange?.(next);
        } else if (event.target.checked) onValueChange?.(option.value);
      }} aria-label={option.label} id={`${groupId}-${index}`} />
      {option.icon}<span>{option.label}</span>
    </label>)}
  </div>;
});
ToggleGroup.displayName = "ToggleGroup";

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> { variant?: Variant; size?: Size; fullWidth?: boolean; disabled?: boolean }
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ variant = "primary", size = "md", className, fullWidth, disabled, onClick, ...props }, ref) => (
  <a {...props} href={disabled ? undefined : props.href} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : props.tabIndex} onClick={event => { if (disabled) event.preventDefault(); else onClick?.(event); }} ref={ref} data-hulmio-ui="button-link" data-variant={variant} className={cn("h-button f-button rounded-lg", `button-${variant}`, `button-${size}`, fullWidth && "h-action-full", className)} />
));
ButtonLink.displayName = "ButtonLink";
