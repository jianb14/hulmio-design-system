import { forwardRef, useEffect, useId, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import { Field } from "./Controls";
import type { ControlOption } from "./Controls";
import { cn } from "./utils";

export interface SelectProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "defaultValue" | "onChange" | "children" | "type"> {
  label?: string;
  options: ControlOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  autoComplete?: string;
  portalContainer?: HTMLElement | null;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isLoading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  indicator?: ReactNode;
  variant?: "outline" | "filled" | "underline";
  renderValue?: (option: ControlOption | undefined) => ReactNode;
  renderOption?: (option: ControlOption, selected: boolean) => ReactNode;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(({ label, options, value, defaultValue, onValueChange, placeholder, hint, error, required, disabled, name, form, autoComplete, portalContainer, isOpen, defaultOpen, onOpenChange, isLoading, clearable, onClear, indicator, variant = "outline", renderValue, renderOption, id, className, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const initial = defaultValue ?? (placeholder !== undefined ? "" : options.find(option => !option.disabled)?.value ?? "");
  const [inner, setInner] = useState(initial);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const resetEvent = useRef<Event | null>(null);
  useEffect(() => {
    const owner = triggerRef.current?.form;
    let active = true;
    // Observe reset before Radix, then honor cancellation after all form handlers run.
    const reset = (event: Event) => {
      resetEvent.current = event;
      // Trusted reset events may run microtasks before React's bubbling handler.
      setTimeout(() => {
        if (active && !event.defaultPrevented && value === undefined) setInner(initial);
        if (resetEvent.current === event) resetEvent.current = null;
      }, 0);
    };
    owner?.addEventListener("reset", reset, true);
    return () => { active = false; owner?.removeEventListener("reset", reset, true); };
  }, [initial, value, form]);
  // Field descriptions are wired to the trigger rather than Radix's non-DOM Root.
  return <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required} onInvalidCapture={event => {
    event.preventDefault();
    const control = event.target as HTMLSelectElement;
    const firstInvalid = control.form ? Array.from(control.form.elements).find(element =>
      (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement || element instanceof HTMLButtonElement) && element.willValidate && !element.validity.valid) : control;
    if (firstInvalid === control) triggerRef.current?.focus();
  }}>
    <><SelectPrimitive.Root value={value ?? inner} onValueChange={next => { if (resetEvent.current) return; if (value === undefined) setInner(next); onValueChange?.(next); }} name={name} form={form} required={required} disabled={disabled} autoComplete={autoComplete} open={isOpen} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <SelectPrimitive.Trigger {...props} form={form} id={inputId} ref={node => { triggerRef.current = node; if (typeof ref === "function") ref(node); else if (ref) ref.current = node; }} data-hulmio-ui="select" data-variant={variant} aria-busy={isLoading || undefined} className={cn("h-select-trigger", className)} aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={[props["aria-describedby"], hint ? `${inputId}-hint` : undefined, error ? `${inputId}-error` : undefined].filter(Boolean).join(" ") || undefined}>
        <SelectPrimitive.Value placeholder={placeholder ?? "Select an option"}>{renderValue ? renderValue(options.find(option => option.value === (value ?? inner))) : undefined}</SelectPrimitive.Value>
        <SelectPrimitive.Icon asChild>{indicator ?? <ChevronDown size={15} aria-hidden="true" />}</SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal container={portalContainer}>
        <SelectPrimitive.Content data-hulmio-ui="select-content" className="h-select-content" position="popper" align="start" sideOffset={4} collisionPadding={12}>
          <SelectPrimitive.ScrollUpButton className="h-select-scroll"><ChevronUp size={14} /></SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="h-select-viewport">
            {isLoading && <div className="h-hint" role="status">Loading options...</div>}
            {[...new Set(options.map(option => option.group))].map(group => <SelectPrimitive.Group key={group ?? "other"}>{group && <SelectPrimitive.Label className="h-rich-section-header">{group}</SelectPrimitive.Label>}{options.filter(option => option.group === group).map(option => <SelectPrimitive.Item key={option.value} value={option.value} disabled={option.disabled} className="h-select-option">
              <SelectPrimitive.ItemText>{renderOption ? renderOption(option, option.value === (value ?? inner)) : <>{option.icon}<span>{option.label}{option.description && <span className="h-rich-option-description">{option.description}</span>}</span></>}</SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="h-select-check"><Check size={15} aria-hidden="true" /></SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>)}</SelectPrimitive.Group>)}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="h-select-scroll"><ChevronDown size={14} /></SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>{clearable && (value ?? inner) && <button type="button" className="h-rich-action" aria-label="Clear selection" disabled={disabled} onClick={() => { if (value === undefined) setInner(""); onValueChange?.(""); onClear?.(); }}><X size={16} aria-hidden="true" /></button>}</>
  </Field>;
});
Select.displayName = "Select";
