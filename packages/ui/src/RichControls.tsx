import { forwardRef, useContext, useEffect, useId, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import type { ChangeEvent, FocusEvent, KeyboardEvent, ForwardedRef, InputHTMLAttributes, ReactNode, RefObject } from "react";
import {
  ComboBoxStateContext, ListBoxSection, Collection, Virtualizer, ListLayout, useLocale,
  Button as AriaButton, Calendar as AriaCalendar, CalendarCell, CalendarGrid, CalendarGridBody,
  CalendarGridHeader, CalendarHeaderCell, ComboBox as AriaComboBox, DateInput, DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker, DateSegment, Dialog as AriaDialog, Group, Heading,
  FieldError as AriaFieldError, Input as AriaInput, Label as AriaLabel, ListBox, ListBoxItem, Popover as AriaPopover,
  RangeCalendar as AriaRangeCalendar, Slider as AriaSlider, SliderOutput, SliderThumb, SliderTrack, Text,
} from "react-aria-components";
import { parseDate } from "@internationalized/date";
import { OTPInput, REGEXP_ONLY_DIGITS } from "input-otp";
import { CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, File as FileIcon, Minus, Plus, Upload, X } from "lucide-react";
import { Field, NativeDatePicker } from "./Controls";
import type {
  ControlOption, DateRange, NativeComboboxProps, NativeDatePickerProps, NativeDateRangePickerProps,
  NativeFileUploadProps, NativeMultiSelectProps, NativeNumberInputProps, NativeOtpInputProps,
} from "./Controls";
import { cn } from "./utils";

function useValue<T>(value: T | undefined, defaultValue: T, onChange?: (value: T) => void) {
  const [inner, setInner] = useState(defaultValue);
  return [value === undefined ? inner : value, (next: T) => {
    if (value === undefined) setInner(next);
    onChange?.(next);
  }, (next: T) => { if (value === undefined) setInner(next); }] as const;
}

function assignRef<T>(ref: ForwardedRef<T>, node: T | null) {
  if (typeof ref === "function") ref(node);
  else if (ref) ref.current = node;
}

function description(id: string, hint?: ReactNode, error?: ReactNode, existing?: string) {
  return [existing, hint ? `${id}-hint` : undefined, error ? `${id}-error` : undefined].filter(Boolean).join(" ") || undefined;
}

// Native events keep existing onChange handlers and form integrations working.
function changeInput(input: HTMLInputElement | null, next: string) {
  if (!input) return;
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(input, next);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function useFormReset<T extends HTMLElement>(ref: RefObject<T | null>, reset: () => void, formId?: string) {
  const resetting = useRef(false);
  const [, renderReset] = useState(0);
  const latest = useRef(reset);
  latest.current = reset;
  useLayoutEffect(() => {
    const element = ref.current;
    const form = formId ? document.getElementById(formId) : element?.closest("form");
    if (!(form instanceof HTMLFormElement)) return;
    let active = true;
    const onReset = (event: Event) => {
      resetting.current = true;
      setTimeout(() => {
        if (active) {
          if (!event.defaultPrevented) latest.current();
          renderReset(version => version + 1);
        }
        resetting.current = false;
      }, 0);
    };
    form.addEventListener("reset", onReset, true);
    return () => { active = false; form.removeEventListener("reset", onReset, true); };
  }, [ref, formId]);
  return resetting;
}

function Messages({ id, hint, error }: { id: string; hint?: ReactNode; error?: ReactNode }) {
  return <>{hint && <Text slot="description" id={`${id}-hint`} className="h-hint">{hint}</Text>}{error && <Text slot="errorMessage" id={`${id}-error`} className="h-error" role="alert">{error}</Text>}</>;
}

export interface CollectionBehavior {
  inputValue?: string;
  defaultInputValue?: string;
  onInputChange?: (value: string) => void;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  isLoading?: boolean;
  virtualized?: boolean;
  menuTrigger?: "focus" | "input" | "manual";
  filter?: (text: string, query: string) => boolean;
  renderOption?: (option: ControlOption, state: { isSelected: boolean; isFocused: boolean; isDisabled: boolean }) => ReactNode;
  indicator?: ReactNode;
  validationBehavior?: "native" | "aria";
  validate?: (value: { inputValue: string; value: unknown }) => string | string[] | true | null | undefined;
}
function CollectionOpenSync({ isOpen, defaultOpen }: Pick<CollectionBehavior, "isOpen" | "defaultOpen">) {
  const state = useContext(ComboBoxStateContext);
  const initialized = useRef(false);
  useEffect(() => {
    if (!state) return;
    if (isOpen === undefined && initialized.current) return;
    initialized.current = true;
    const next = isOpen ?? defaultOpen;
    if (next && !state.isOpen) state.open(undefined, "manual");
    if (next === false && state.isOpen) state.close();
  }, [isOpen, defaultOpen, state]);
  return null;
}
function Options({ emptyText, options, query, virtualized, renderOption, isLoading, filter }: { emptyText: string; options: ControlOption[]; query: string } & CollectionBehavior) {
  const items = options.filter(option => !query || (filter ? filter(option.label, query) : option.label.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
  const groups = [...new Set(items.map(option => option.group))];
  const render = (option: ControlOption) => <ListBoxItem id={option.value} textValue={option.label} className="h-rich-option">{state => renderOption ? renderOption(option, state) : <>{option.icon}<span className="h-rich-option-details"><Text slot="label">{option.label}</Text>{option.description && <Text slot="description" className="h-rich-option-description">{option.description}</Text>}</span>{state.isSelected && <Check size={15} aria-hidden="true" />}</>}</ListBoxItem>;
  const list = <ListBox<ControlOption> className={cn("h-rich-options", virtualized && "h-virtual-options")} aria-busy={isLoading || undefined} renderEmptyState={() => <div className="h-rich-empty">{isLoading ? "Loading options?" : emptyText}</div>}>
    {groups.some(Boolean) ? groups.map(group => <ListBoxSection key={group ?? "other"} id={group ?? "other"}><Heading className="h-rich-section-header">{group ?? "Other"}</Heading><Collection items={items.filter(option => option.group === group)}>{render}</Collection></ListBoxSection>) : <Collection items={items}>{render}</Collection>}
  </ListBox>;
  return virtualized ? <Virtualizer layout={ListLayout} layoutOptions={{ rowHeight: 44, headingHeight: 32 }}>{list}</Virtualizer> : list;
}

export interface ComboboxProps extends NativeComboboxProps, CollectionBehavior {
  renderValue?: (option: ControlOption | undefined) => ReactNode;
  selectedKey?: string | null;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string | null) => void;
  formValue?: "text" | "key";
  portalContainer?: HTMLElement | null;
  /** Keep free text, as the previous datalist control did. Set false for option-only selection. */
  allowsCustomValue?: boolean;
  emptyText?: string;
}
export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(({ label, options, value, defaultValue = "", onValueChange, onChange, hint, error, id, className, name, form, disabled, readOnly, required, allowsCustomValue = true, emptyText = "No matches found.", portalContainer, inputValue, defaultInputValue, onInputChange, isOpen, defaultOpen, onOpenChange, isLoading, virtualized, menuTrigger = "focus", filter, renderOption, indicator, validationBehavior, validate, selectedKey, defaultSelectedKey, onSelectionChange, formValue = "key", renderValue, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [current, setCurrent, resetCurrent] = useValue(selectedKey === null ? "" : selectedKey ?? value, defaultSelectedKey ?? defaultValue, onValueChange);
  const selected = options.find(option => option.value === current);
  const [query, setQuery, resetQuery] = useValue(inputValue, defaultInputValue ?? selected?.label ?? current, onInputChange);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selecting = useRef(false);
  useEffect(() => { if (inputValue === undefined && (selected || value !== undefined || selectedKey !== undefined)) resetQuery(selected?.label ?? current); }, [current, selected?.label]);
  const resetting = useFormReset(inputRef, () => {
    const next = selectedKey === null ? "" : selectedKey ?? value ?? defaultSelectedKey ?? defaultValue;
    if (value === undefined && selectedKey === undefined) resetCurrent(next);
    resetQuery(defaultInputValue ?? options.find(option => option.value === next)?.label ?? next);
  }, form);
  return <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
    <div data-hulmio-ui="combobox" className={cn("h-rich-field", className)}>
      <AriaComboBox name={name} form={form} formValue="text" defaultItems={options} defaultFilter={filter} onOpenChange={onOpenChange} validationBehavior={validationBehavior} validate={validate} value={selected?.value ?? null} inputValue={query} onInputChange={next => { if (!resetting.current) setQuery(next); }}
        onChange={key => { if (resetting.current) return; if (key != null) { const option = options.find(item => item.value === String(key)); selecting.current = true; changeInput(inputRef.current, String(key)); selecting.current = false; setCurrent(String(key)); onSelectionChange?.(String(key)); setQuery(option?.label ?? String(key)); } else if (!allowsCustomValue) { setCurrent(""); onSelectionChange?.(null); } }}
        aria-label={props["aria-label"] ?? label} aria-labelledby={props["aria-labelledby"]} isDisabled={disabled} isReadOnly={readOnly} isRequired={required} isInvalid={error || props["aria-invalid"] === true || props["aria-invalid"] === "true" ? true : undefined}
        allowsCustomValue={allowsCustomValue} allowsEmptyCollection disabledKeys={options.filter(option => option.disabled).map(option => option.value)} menuTrigger={menuTrigger}>
        <CollectionOpenSync isOpen={isOpen} defaultOpen={defaultOpen} />
        <div className="h-rich-shell">
          {renderValue && selected && <span className="h-rich-custom-value">{renderValue(selected)}</span>}
          <AriaInput {...props} name="" ref={node => { inputRef.current = node; assignRef(ref, node); }} id={inputId} form={form} className="h-rich-entry" aria-describedby={description(inputId, hint, error, props["aria-describedby"])} onChange={event => { onChange?.(event); if (allowsCustomValue && !selecting.current) setCurrent(event.target.value); }} />
          <AriaButton className="h-rich-action" aria-label="Show options" isDisabled={disabled || readOnly}>{indicator ?? <ChevronDown size={17} aria-hidden="true" />}</AriaButton>
        </div>
        <AriaPopover UNSTABLE_portalContainer={portalContainer ?? undefined} data-hulmio-ui="control-popover" className="h-rich-popover" placement="bottom start" offset={6}><Options options={options} query={query === selected?.label ? "" : query} filter={filter} emptyText={emptyText} virtualized={virtualized} renderOption={renderOption} isLoading={isLoading} /></AriaPopover>
        {!error && <AriaFieldError className="h-error" />}
      </AriaComboBox>
      {name && <input type="hidden" name={name} form={form} value={formValue === "text" ? query : current} disabled={disabled} />}
    </div>
  </Field>;
});
Combobox.displayName = "Combobox";

export interface MultiSelectProps extends NativeMultiSelectProps, CollectionBehavior {
  allowsCustomValue?: boolean;
  renderTag?: (option: ControlOption) => ReactNode;
  portalContainer?: HTMLElement | null;
  readOnly?: boolean;
  placeholder?: string;
  emptyText?: string;
}
export const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>(({ label, options, value, defaultValue = [], onValueChange, onChange, hint, error, id, className, name, form, disabled, readOnly, required, placeholder = "Search and select…", emptyText = "No matches found.", autoFocus, portalContainer, inputValue, defaultInputValue, onInputChange, isOpen, defaultOpen, onOpenChange, isLoading, virtualized, menuTrigger = "focus", filter, renderOption, indicator, validationBehavior, validate, allowsCustomValue, renderTag, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [current, setCurrent, resetCurrent] = useValue(value, defaultValue, onValueChange);
  const [query, setQuery, resetQuery] = useValue(inputValue, defaultInputValue ?? "", onInputChange);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const commit = (next: string[]) => {
    if (disabled || readOnly) return;
    setCurrent(next);
    const select = selectRef.current;
    if (select) {
      Array.from(select.options).forEach(option => { option.selected = next.includes(option.value); });
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };
  const resetting = useFormReset(selectRef, () => {
    const next = value ?? defaultValue;
    resetCurrent(defaultValue);
    if (selectRef.current) Array.from(selectRef.current.options).forEach(option => { option.selected = next.includes(option.value); });
    resetQuery(defaultInputValue ?? "");
  }, form);
  return <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
    <div data-hulmio-ui="multi-select" className={cn("h-rich-field", className)} data-disabled={disabled || undefined}>
      <AriaComboBox name={name} form={form} formValue="text" selectionMode="multiple" defaultItems={options} defaultFilter={filter} onOpenChange={onOpenChange} validationBehavior={validationBehavior} validate={validate} value={current} onChange={keys => { if (resetting.current) return; commit(keys.map(String)); setQuery(""); }} inputValue={query} onInputChange={next => { if (!resetting.current) setQuery(next); }}
        aria-label={props["aria-label"] ?? label} aria-labelledby={props["aria-labelledby"]} isDisabled={disabled} isReadOnly={readOnly} isRequired={required} isInvalid={error || props["aria-invalid"] === true || props["aria-invalid"] === "true" ? true : undefined}
        disabledKeys={options.filter(option => option.disabled).map(option => option.value)} allowsEmptyCollection menuTrigger={menuTrigger}>
        <CollectionOpenSync isOpen={isOpen} defaultOpen={defaultOpen} />
        <div className="h-rich-shell h-rich-multi-shell">
          {current.map(key => <span className="h-rich-chip" key={key}>{renderTag ? renderTag(options.find(option => option.value === key) ?? { value: key, label: key }) : options.find(option => option.value === key)?.label ?? key}<button type="button" className="h-rich-chip-remove" disabled={disabled || readOnly} aria-label={`Remove ${options.find(option => option.value === key)?.label ?? key}`} onClick={() => commit(current.filter(item => item !== key))}><X size={12} aria-hidden="true" /></button></span>)}
          <AriaInput name="" id={inputId} className="h-rich-entry" autoFocus={autoFocus} placeholder={placeholder} readOnly={readOnly} aria-describedby={description(inputId, hint, error, props["aria-describedby"])} onKeyDown={event => {
            if (event.key === "Enter" && allowsCustomValue && query.trim() && !readOnly && !event.nativeEvent.isComposing && !options.some(option => option.label.toLowerCase() === query.trim().toLowerCase())) { event.preventDefault(); if (!current.includes(query.trim())) commit([...current, query.trim()]); setQuery(""); }
            if (event.key === "Backspace" && !query && current.length && !readOnly) { event.preventDefault(); commit(current.slice(0, -1)); }
          }} />
          <AriaButton className="h-rich-action" aria-label="Show options" isDisabled={disabled || readOnly}>{indicator ?? <ChevronDown size={17} aria-hidden="true" />}</AriaButton>
        </div>
        <AriaPopover UNSTABLE_portalContainer={portalContainer ?? undefined} data-hulmio-ui="control-popover" className="h-rich-popover" placement="bottom start" offset={6}><Options options={options} query={query} filter={filter} emptyText={emptyText} virtualized={virtualized} renderOption={renderOption} isLoading={isLoading} /></AriaPopover>
        {!error && <AriaFieldError className="h-error" />}
      </AriaComboBox>
      <select {...props} ref={node => { selectRef.current = node; assignRef(ref, node); }} multiple name={name} form={form} disabled={disabled} required={required} value={current} onChange={event => onChange?.(event)} className="h-rich-native-value" tabIndex={-1} aria-hidden="true" onInvalid={() => document.getElementById(inputId)?.focus()}>
        {options.map(option => <option key={option.value} value={option.value} disabled={option.disabled}>{option.label}</option>)}
        {current.filter(key => !options.some(option => option.value === key)).map(key => <option key={key} value={key}>{key}</option>)}
      </select>
    </div>
  </Field>;
});
MultiSelect.displayName = "MultiSelect";

function dateValue(value: string | undefined) {
  try { return value ? parseDate(value) : null; } catch { return null; }
}

function CalendarContent() {
  return <>
    <header className="h-rich-calendar-header"><AriaButton slot="previous" className="h-rich-action" aria-label="Previous month"><ChevronLeft size={17} aria-hidden="true" /></AriaButton><Heading className="h-rich-calendar-heading" /><AriaButton slot="next" className="h-rich-action" aria-label="Next month"><ChevronRight size={17} aria-hidden="true" /></AriaButton></header>
    <CalendarGrid className="h-rich-calendar-grid"><CalendarGridHeader>{day => <CalendarHeaderCell className="h-rich-weekday">{day}</CalendarHeaderCell>}</CalendarGridHeader><CalendarGridBody>{date => <CalendarCell date={date} className="h-rich-day" />}</CalendarGridBody></CalendarGrid>
  </>;
}

export interface DatePickerProps extends NativeDatePickerProps { onValueChange?: (value: string) => void; hint?: ReactNode; portalContainer?: HTMLElement | null }
const CalendarDatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ label, value, defaultValue = "", onValueChange, onChange, helper, hint = helper, error, id, className, min, max, disabled, readOnly, required, name, form, variant = "outline", controlSize = "md", leading, trailing, clearable, type: _type, portalContainer, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [current, setCurrent] = useValue(value === undefined ? undefined : String(value), String(defaultValue), onValueChange);
  const nativeRef = useRef<HTMLInputElement | null>(null);
  const commit = (next: string) => { if (!disabled && !readOnly) { changeInput(nativeRef.current, next); setCurrent(next); } };
  useFormReset(nativeRef, () => { if (value === undefined) setCurrent(String(defaultValue)); }, form);
  return <AriaDatePicker data-hulmio-ui="date-picker" className={cn("h-rich-field", className)} data-variant={variant} data-size={controlSize} value={dateValue(current)} onChange={date => commit(date?.toString() ?? "")}
    minValue={dateValue(min === undefined ? undefined : String(min)) ?? undefined} maxValue={dateValue(max === undefined ? undefined : String(max)) ?? undefined}
    isDisabled={disabled} isReadOnly={readOnly} isRequired={required} isInvalid={error || props["aria-invalid"] === true || props["aria-invalid"] === "true" ? true : undefined} aria-label={props["aria-label"]} aria-labelledby={props["aria-labelledby"]}>
    {label && <AriaLabel className="h-label">{label}{required && <span className="h-required" aria-hidden="true"> *</span>}</AriaLabel>}
    <Group className="h-rich-shell h-rich-date-shell">{leading}<DateInput className="h-rich-date-input">{segment => <DateSegment segment={segment} className="h-rich-date-segment" />}</DateInput>{trailing}
      {clearable && current && <AriaButton slot={null} className="h-rich-action" aria-label="Clear date" isDisabled={disabled || readOnly} onPress={() => commit("")}><X size={15} aria-hidden="true" /></AriaButton>}
      <AriaButton className="h-rich-action" aria-label="Open calendar" isDisabled={disabled || readOnly}><CalendarDays size={18} aria-hidden="true" /></AriaButton>
    </Group>
    <AriaPopover UNSTABLE_portalContainer={portalContainer ?? undefined} data-hulmio-ui="date-popover" className="h-rich-popover h-rich-date-popover" placement="bottom start" offset={6}><AriaDialog className="h-rich-calendar-dialog"><AriaCalendar className="h-rich-calendar"><CalendarContent /></AriaCalendar></AriaDialog></AriaPopover>
    <input {...props} ref={node => { nativeRef.current = node; assignRef(ref, node); }} id={`${inputId}-value`} data-date-value type="date" className="h-rich-native-value" tabIndex={-1} aria-hidden="true" name={name} form={form} disabled={disabled} readOnly={readOnly} required={required} min={min} max={max} value={current} onChange={event => onChange?.(event)} />
    <Messages id={inputId} hint={hint} error={error} />
  </AriaDatePicker>;
});
CalendarDatePicker.displayName = "CalendarDatePicker";
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(({ type = "date", onValueChange, hint, portalContainer, ...props }, ref) => type === "date"
  ? <CalendarDatePicker {...props} type={type} hint={hint} onValueChange={onValueChange} portalContainer={portalContainer} ref={ref} />
  : <NativeDatePicker {...props} helper={props.helper ?? (typeof hint === "string" ? hint : undefined)} type={type} ref={ref} onChange={event => { props.onChange?.(event); onValueChange?.(event.target.value); }} />);
DatePicker.displayName = "DatePicker";

export interface DateRangePickerProps extends NativeDateRangePickerProps {
  portalContainer?: HTMLElement | null;
  value?: DateRange;
  defaultValue?: DateRange;
  onValueChange?: (value: DateRange) => void;
  readOnly?: boolean;
}
export const DateRangePicker = forwardRef<HTMLFieldSetElement, DateRangePickerProps>(({ label, value, defaultValue, start, end, defaultStart = "", defaultEnd = "", onValueChange, onRangeChange, disabled, readOnly, required, name, form, min, max, hint, error, id, className, portalContainer, ...props }, ref) => {
  const autoId = useId();
  const groupId = id ?? autoId;
  const initial = defaultValue ?? { start: defaultStart, end: defaultEnd };
  const [current, setCurrent] = useValue(value ?? (start !== undefined || end !== undefined ? { start: start ?? "", end: end ?? "" } : undefined), initial, next => { onValueChange?.(next); onRangeChange?.(next); });
  const startRef = useRef<HTMLInputElement | null>(null);
  useFormReset(startRef, () => { if (value === undefined && start === undefined && end === undefined) setCurrent(initial); }, form);
  const parsedStart = dateValue(current.start);
  const parsedEnd = dateValue(current.end);
  return <fieldset {...props} ref={ref} id={groupId} form={form} disabled={disabled} data-hulmio-ui="date-range-picker" className={cn("h-fieldset h-rich-field", className)}>
    <legend className="h-label">{label}{required && <span className="h-required" aria-hidden="true"> *</span>}</legend>
    <AriaDateRangePicker aria-label={label} value={parsedStart && parsedEnd && parsedStart.compare(parsedEnd) <= 0 ? { start: parsedStart, end: parsedEnd } : null}
      onChange={range => { if (!readOnly) setCurrent({ start: range?.start.toString() ?? "", end: range?.end.toString() ?? "" }); }} minValue={dateValue(min) ?? undefined} maxValue={dateValue(max) ?? undefined}
      isDisabled={disabled} isReadOnly={readOnly} isRequired={required} isInvalid={!!error} aria-describedby={description(groupId, hint, error, props["aria-describedby"])}>
      <Group className="h-rich-shell h-rich-date-shell h-rich-range-shell"><DateInput slot="start" className="h-rich-date-input">{segment => <DateSegment segment={segment} className="h-rich-date-segment" />}</DateInput><span className="h-rich-date-separator" aria-hidden="true">–</span><DateInput slot="end" className="h-rich-date-input">{segment => <DateSegment segment={segment} className="h-rich-date-segment" />}</DateInput><AriaButton className="h-rich-action" aria-label="Open calendar" isDisabled={disabled || readOnly}><CalendarDays size={18} aria-hidden="true" /></AriaButton></Group>
      <AriaPopover UNSTABLE_portalContainer={portalContainer ?? undefined} data-hulmio-ui="date-popover" className="h-rich-popover h-rich-date-popover" placement="bottom start" offset={6}><AriaDialog className="h-rich-calendar-dialog"><AriaRangeCalendar className="h-rich-calendar h-rich-range-calendar"><CalendarContent /></AriaRangeCalendar></AriaDialog></AriaPopover>
      <Messages id={groupId} hint={hint} error={error} />
    </AriaDateRangePicker>
    <input ref={startRef} type="date" className="h-rich-native-value" tabIndex={-1} aria-hidden="true" name={name ? `${name}-start` : undefined} form={form} value={current.start} min={min} max={current.end ? max && max < current.end ? max : current.end : max} required={required} disabled={disabled} readOnly={readOnly} onChange={event => { if (!readOnly) setCurrent({ ...current, start: event.target.value }); }} />
    <input type="date" className="h-rich-native-value" tabIndex={-1} aria-hidden="true" name={name ? `${name}-end` : undefined} form={form} value={current.end} min={current.start ? min && min > current.start ? min : current.start : min} max={max} required={required} disabled={disabled} readOnly={readOnly} onChange={event => { if (!readOnly) setCurrent({ ...current, end: event.target.value }); }} />
  </fieldset>;
});
DateRangePicker.displayName = "DateRangePicker";

export type SliderValue = number | number[];
export interface SliderProps<T extends SliderValue = number> extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange"> {
  label?: string;
  hint?: ReactNode;
  error?: ReactNode;
  value?: T;
  defaultValue?: T;
  onValueChange?: (value: T) => void;
  /** Native change event from the first thumb. Prefer onValueChange for ranges. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  thumbLabels?: string[];
  formatOptions?: Intl.NumberFormatOptions;
  orientation?: "horizontal" | "vertical";
  marks?: Array<number | { value: number; label?: ReactNode }>;
  showSteps?: boolean;
  renderOutput?: (values: number[], labels: string[]) => ReactNode;
  renderThumb?: (state: { value: number; index: number; isDisabled: boolean }) => ReactNode;
}
function SliderControl<T extends SliderValue = number>({ label, hint, error, value, defaultValue, onValueChange, onChange, id, className, min = 0, max = 100, step = 1, name, form, disabled, readOnly, thumbLabels, formatOptions, orientation = "horizontal", marks, showSteps, renderOutput, renderThumb, ...props }: SliderProps<T>, ref: ForwardedRef<HTMLInputElement>) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const lower = Number.isFinite(Number(min)) ? Number(min) : 0;
  const upper = Math.max(lower, Number.isFinite(Number(max)) ? Number(max) : 100);
  const increment = Number.isFinite(Number(step)) && Number(step) > 0 ? Number(step) : 1;
  const { direction, locale } = useLocale();
  const numberFormatter = new Intl.NumberFormat(locale, formatOptions);
  const dotCount = Math.floor((upper - lower) / increment + 1e-10) + 1;
  const steps = showSteps && upper > lower && dotCount <= 1000 ? Array.from({ length: dotCount }, (_, index) => Number((lower + index * increment).toPrecision(12))) : [];
  const [current, setCurrent] = useValue<T>(value, defaultValue ?? ((lower + upper) / 2 as T), onValueChange);
  const values = (Array.isArray(current) ? current : [current]).map(number => Math.min(upper, Math.max(lower, Number.isFinite(number) ? number : lower))).sort((a, b) => a - b);
  const position = (percent: number) => orientation === "vertical" ? { bottom: `${percent}%` } : direction === "rtl" ? { right: `${percent}%` } : { left: `${percent}%` };
  const filled = (number: number) => number <= values[values.length - 1] && (values.length === 1 || number >= values[0]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const eventRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => inputRef.current!, []);
  useEffect(() => {
    if (!inputRef.current) return;
    if (props.tabIndex !== undefined) inputRef.current.tabIndex = props.tabIndex;
    if (props.title !== undefined) inputRef.current.title = props.title;
  }, [props.tabIndex, props.title]);
  useFormReset(inputRef, () => { if (value === undefined) setCurrent(defaultValue ?? ((lower + upper) / 2 as T)); }, form);
  return <AriaSlider orientation={orientation} data-hulmio-ui="slider" id={inputId} style={props.style} className={cn("h-rich-field h-rich-slider", className)} minValue={lower} maxValue={upper} step={increment} value={Array.isArray(current) ? values : values[0]} onChange={next => { if (!readOnly) { const numbers = Array.isArray(next) ? next : [next]; changeInput(eventRef.current, String(numbers[0])); setCurrent(next as T); } }}
    isDisabled={disabled} aria-label={props["aria-label"]} aria-labelledby={props["aria-labelledby"]} aria-describedby={description(inputId, hint, error, props["aria-describedby"])} formatOptions={formatOptions}>
    <div className="h-rich-slider-label">{label && <AriaLabel className="h-label">{label}</AriaLabel>}<SliderOutput className="h-rich-slider-value">{({ state }) => renderOutput ? renderOutput(state.values, state.values.map((_, index) => state.getThumbValueLabel(index))) : state.values.map((_, index) => state.getThumbValueLabel(index)).join(" – ")}</SliderOutput></div>
    <SliderTrack className="h-rich-slider-track">{({ state }) => <><span className="h-rich-slider-rail" /><span className="h-rich-slider-fill" style={orientation === "vertical" ? { bottom: `${values.length > 1 ? state.getThumbPercent(0) * 100 : 0}%`, height: `${(state.getThumbPercent(values.length - 1) - (values.length > 1 ? state.getThumbPercent(0) : 0)) * 100}%` } : { ...(direction === "rtl" ? {right: `${values.length > 1 ? state.getThumbPercent(0) * 100 : 0}%`} : {left: `${values.length > 1 ? state.getThumbPercent(0) * 100 : 0}%`}), width: `${(state.getThumbPercent(values.length - 1) - (values.length > 1 ? state.getThumbPercent(0) : 0)) * 100}%` }} />{steps.map(number => <span key={number} className="h-parity-slider-step" data-filled={filled(number) || undefined} style={position((number-lower)/(upper-lower)*100)} aria-hidden="true" />)}{values.map((_, index) => <SliderThumb key={index} index={index} className="h-rich-slider-thumb" autoFocus={index === 0 && props.autoFocus} onFocus={index === 0 && props.onFocus ? event => props.onFocus?.(event as FocusEvent<HTMLInputElement>) : undefined} onBlur={index === 0 && props.onBlur ? event => props.onBlur?.(event as FocusEvent<HTMLInputElement>) : undefined} onKeyDown={index === 0 && props.onKeyDown ? event => props.onKeyDown?.(event as KeyboardEvent<HTMLInputElement>) : undefined} onKeyUp={index === 0 && props.onKeyUp ? event => props.onKeyUp?.(event as KeyboardEvent<HTMLInputElement>) : undefined} inputRef={index === 0 ? inputRef : undefined} aria-label={thumbLabels?.[index] ?? (values.length > 1 ? index === 0 ? "Minimum" : "Maximum" : undefined)} aria-readonly={readOnly || undefined} isInvalid={error || props["aria-invalid"] === true || props["aria-invalid"] === "true" ? true : undefined}>{renderThumb?.({ value: values[index], index, isDisabled: !!disabled })}</SliderThumb>)}{marks?.map(mark => { const number = typeof mark === "number" ? mark : mark.value; if (!Number.isFinite(number) || number < lower || number > upper) return null; const percent = (number - lower) / (upper - lower || 1) * 100; return <span key={number} data-filled={filled(number) || undefined} className="h-parity-slider-mark" style={position(percent)}><span aria-hidden="true" />{typeof mark === "number" ? numberFormatter.format(number) : mark.label ?? numberFormatter.format(number)}</span>; })}</>}</SliderTrack>
    {name && values.map((number, index) => <input key={index} type="hidden" name={values.length > 1 ? `${name}-${index === 0 ? "start" : "end"}` : name} form={form} disabled={disabled} value={number} />)}
    <Messages id={inputId} hint={hint} error={error} />
    <input ref={eventRef} className="h-rich-native-value" tabIndex={-1} aria-hidden="true" type="number" min={min} max={max} step={step} value={values[0]} onChange={event => onChange?.(event)} readOnly />
  </AriaSlider>;
}
export const Slider = forwardRef(SliderControl) as <T extends SliderValue = number>(props: SliderProps<T> & { ref?: ForwardedRef<HTMLInputElement> }) => ReactNode;

export interface NumberInputProps extends NativeNumberInputProps { onValueChange?: (value: number | null) => void; hint?: ReactNode }
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ label, value, defaultValue = "", onValueChange, onChange, helper, hint = helper, error, id, className, min, max, step = 1, disabled, readOnly, required, variant = "outline", controlSize = "md", leading, trailing, clearable: _clearable, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [current, setCurrent] = useValue(value === undefined ? undefined : String(value), String(defaultValue));
  const inputRef = useRef<HTMLInputElement | null>(null);
  const number = current === "" ? null : Number(current);
  useFormReset(inputRef, () => { if (value === undefined) setCurrent(String(defaultValue)); }, props.form);
  const nudge = (direction: number) => {
    const input = inputRef.current;
    if (!input || disabled || readOnly) return;
    if (step !== "any") {
      try { if (direction > 0) input.stepUp(); else input.stepDown(); } catch { return; }
    } else {
      const next = Math.max(min === undefined ? -Infinity : Number(min), Math.min(max === undefined ? Infinity : Number(max), (Number.isFinite(number) ? number ?? 0 : 0) + direction));
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set?.call(input, String(next));
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
  return <Field label={label} htmlFor={inputId} hint={hint} error={error} required={required}>
    <div data-hulmio-ui="number-input" data-variant={variant} data-size={controlSize} className={cn("h-rich-field", className)}>
      <div className="h-rich-shell h-rich-number-shell">{leading}<button type="button" className="h-rich-action" aria-label="Decrease value" disabled={disabled || readOnly || (number != null && min !== undefined && number <= Number(min))} onClick={() => nudge(-1)}><Minus size={16} aria-hidden="true" /></button>
        <input {...props} ref={node => { inputRef.current = node; assignRef(ref, node); }} id={inputId} type="number" min={min} max={max} step={step} disabled={disabled} readOnly={readOnly} required={required} value={current} className="h-rich-entry" aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={description(inputId, hint, error, props["aria-describedby"])} onChange={event => { setCurrent(event.target.value); onValueChange?.(event.target.value === "" ? null : event.target.valueAsNumber); onChange?.(event); }} />
        <button type="button" className="h-rich-action" aria-label="Increase value" disabled={disabled || readOnly || (number != null && max !== undefined && number >= Number(max))} onClick={() => nudge(1)}><Plus size={16} aria-hidden="true" /></button>{trailing}
      </div>
    </div>
  </Field>;
});
NumberInput.displayName = "NumberInput";

export interface OtpInputProps extends NativeOtpInputProps { onComplete?: (value: string) => void }
export const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>(({ label, length = 6, value, defaultValue = "", onValueChange, onComplete, onChange, masked, hint, error, id, className, name, form, children: _children, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const limit = Number.isFinite(length) ? Math.max(1, Math.floor(length)) : 6;
  const [current, setCurrent] = useValue(value, defaultValue, onValueChange);
  const bridgeRef = useRef<HTMLInputElement | null>(null);
  useFormReset(bridgeRef, () => { if (value === undefined) setCurrent(defaultValue); }, form);
  return <Field label={label} htmlFor={inputId} hint={hint} error={error} required={props.required}>
    <div data-hulmio-ui="otp-input" className={cn("h-rich-field h-rich-otp", className)}>
      <OTPInput {...props} id={inputId} form={form} ref={ref} type={masked ? "password" : "text"} maxLength={limit} value={current.slice(0, limit)} onChange={next => { if (!props.readOnly && !props.disabled) { changeInput(bridgeRef.current, next); setCurrent(next); } }} onComplete={onComplete} pattern={props.pattern ?? REGEXP_ONLY_DIGITS} autoComplete={props.autoComplete ?? "one-time-code"} inputMode={props.inputMode ?? "numeric"} pasteTransformer={text => text.replace(/[\s-]/g, "")} pushPasswordManagerStrategy="none" noScriptCSSFallback={null} containerClassName="h-rich-otp-slots"
        aria-invalid={error ? true : props["aria-invalid"]} aria-describedby={description(inputId, hint, error, props["aria-describedby"])} render={({ slots }) => <>{slots.map((slot, index) => <span key={index} className="h-rich-otp-slot" data-active={slot.isActive || undefined} data-filled={!!slot.char || undefined} aria-hidden="true">{slot.char ? masked ? "•" : slot.char : slot.placeholderChar}{slot.hasFakeCaret && <span className="h-rich-otp-caret" />}</span>)}</>} />
      <input ref={bridgeRef} type="text" className="h-rich-native-value" tabIndex={-1} aria-hidden="true" name={name} form={form} value={current.slice(0, limit)} onChange={event => onChange?.(event)} disabled={props.disabled} readOnly />
    </div>
  </Field>;
});
OtpInput.displayName = "OtpInput";

export interface FileUploadProps extends NativeFileUploadProps {
  files?: File[];
  defaultFiles?: File[];
  maxFiles?: number;
  readOnly?: boolean;
}
function accepts(file: globalThis.File, accept?: string) {
  if (!accept) return true;
  return accept.split(",").some(rule => {
    const token = rule.trim().toLowerCase();
    if (!token) return false;
    if (token.startsWith(".")) return file.name.toLowerCase().endsWith(token);
    if (token.endsWith("/*")) return file.type.toLowerCase().startsWith(token.slice(0, -1));
    return file.type.toLowerCase() === token;
  });
}
function fileSize(bytes: number) {
  return bytes < 1024 ? `${bytes} B` : bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(({ label, files, defaultFiles = [], maxSize, maxFiles, onFilesChange, onChange, hint, error, id, className, disabled, readOnly, multiple, accept, ...props }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [current, setCurrent] = useValue(files, defaultFiles, onFilesChange);
  const [validationError, setValidationError] = useState("");
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatching = useRef(false);
  const syncInput = (next: globalThis.File[]) => {
    const input = inputRef.current;
    if (!input) return;
    const data = new DataTransfer();
    next.forEach(file => data.items.add(file));
    input.files = data.files;
  };
  useEffect(() => { syncInput(current); }, [current]);
  useFormReset(inputRef, () => { if (files === undefined) setCurrent(defaultFiles); syncInput(files ?? defaultFiles); setValidationError(""); inputRef.current?.setCustomValidity(""); }, props.form);
  const commit = (next: globalThis.File[], notify = true) => {
    syncInput(next);
    setValidationError("");
    inputRef.current?.setCustomValidity("");
    setCurrent(next);
    if (notify && inputRef.current) { dispatching.current = true; inputRef.current.dispatchEvent(new Event("change", { bubbles: true })); dispatching.current = false; }
  };
  const add = (incoming: globalThis.File[], notify = true) => {
    if (disabled || readOnly) { syncInput(current); return; }
    if (!incoming.length) return;
    const next = multiple ? [...current, ...incoming.filter(file => !current.some(existing => existing.name === file.name && existing.size === file.size && existing.lastModified === file.lastModified && existing.type === file.type))] : incoming.slice(0, 1);
    const invalidType = incoming.find(file => !accepts(file, accept));
    const oversized = maxSize === undefined ? undefined : incoming.find(file => file.size > maxSize);
    const message = invalidType ? `${invalidType.name} is not an accepted file type.` : oversized ? `${oversized.name} exceeds the ${fileSize(maxSize!)} limit.` : maxFiles !== undefined && next.length > maxFiles ? `Choose no more than ${maxFiles} files.` : "";
    if (message) { syncInput(current); setValidationError(message); inputRef.current?.setCustomValidity(message); return; }
    commit(next, notify);
  };
  const message = error || validationError;
  return <div data-hulmio-ui="file-upload" className={cn("h-rich-field h-rich-upload", className)} data-disabled={disabled || undefined}>
    <Field label={label} htmlFor={inputId} hint={hint} error={message} required={props.required}>
      <div className="h-rich-dropzone" data-dragging={dragging || undefined} data-invalid={!!message || undefined} data-readonly={readOnly || undefined}
        onDragEnter={event => { event.preventDefault(); if (!disabled && !readOnly) setDragging(true); }} onDragOver={event => { event.preventDefault(); event.dataTransfer.dropEffect = disabled || readOnly ? "none" : "copy"; }} onDragLeave={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDragging(false); }} onDrop={event => { event.preventDefault(); setDragging(false); add(Array.from(event.dataTransfer.files)); }}>
        <Upload size={23} aria-hidden="true" /><span className="h-rich-upload-title">Drop files here, or browse</span><span className="h-rich-upload-detail">{accept ? accept.replaceAll(",", ", ") : "Any file type"}{maxSize !== undefined ? ` · Up to ${fileSize(maxSize)} each` : ""}</span>
        <input {...props} ref={node => { inputRef.current = node; assignRef(ref, node); }} id={inputId} type="file" multiple={multiple} accept={accept} disabled={disabled} aria-readonly={readOnly || undefined} className="h-rich-file-input" aria-invalid={message ? true : props["aria-invalid"]} aria-describedby={description(inputId, hint, message, props["aria-describedby"])} onClick={event => { props.onClick?.(event); if (readOnly) event.preventDefault(); }} onKeyDown={event => { props.onKeyDown?.(event); if (readOnly && ["Enter", " "].includes(event.key)) event.preventDefault(); }} onChange={event => { if (!dispatching.current) add(Array.from(event.target.files ?? []), false); onChange?.(event); }} />
      </div>
    </Field>
    {current.length > 0 && <ul className="h-rich-file-list" aria-label="Selected files">{current.map((file, index) => <li key={`${file.name}-${file.lastModified}-${index}`}><FileIcon size={18} aria-hidden="true" /><span className="h-rich-file-info"><span>{file.name}</span><span>{fileSize(file.size)} · Ready locally</span></span><button type="button" className="h-rich-action" aria-label={`Remove ${file.name}`} disabled={disabled || readOnly} onClick={() => commit(current.filter((_, item) => item !== index))}><X size={16} aria-hidden="true" /></button></li>)}</ul>}
  </div>;
});
FileUpload.displayName = "FileUpload";

export type AutocompleteProps = ({ selectionMode?: "single" } & ComboboxProps) | ({ selectionMode: "multiple" } & MultiSelectProps);
export const Autocomplete = forwardRef<HTMLInputElement | HTMLSelectElement, AutocompleteProps>((props, ref) => {
  if (props.selectionMode === "multiple") {
    const { selectionMode: _mode, ...control } = props;
    return <MultiSelect {...control} ref={ref as ForwardedRef<HTMLSelectElement>} />;
  }
  const { selectionMode: _mode, ...control } = props;
  return <Combobox {...control} ref={ref as ForwardedRef<HTMLInputElement>} />;
});
Autocomplete.displayName = "Autocomplete";
