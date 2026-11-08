import { forwardRef, useContext, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { parseColor, Calendar as AriaCalendar, RangeCalendar as AriaRangeCalendar, CalendarGrid, CalendarGridHeader, CalendarHeaderCell, CalendarGridBody, CalendarCell, Heading, Button as AriaButton, Tree, TreeItem, TreeItemContent, ListBox as AriaListBox, ListBoxItem, Text, I18nProvider, CalendarStateContext, RangeCalendarStateContext, ListBoxSection, Virtualizer, ListLayout, Collection } from "react-aria-components";
import type { ListBoxProps as AriaListBoxProps } from "react-aria-components";
import { parseDate, toCalendar, toCalendarDate, GregorianCalendar } from "@internationalized/date";
import type { CalendarDate, DateDuration } from "@internationalized/date";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "./utils";
import type { DateRange } from "./Controls";

export interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  label: string;
  value?: string | null;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  minValue?: string;
  maxValue?: string;
  isDateUnavailable?: (value: string, anchor?: string) => boolean;
  disabled?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  locale?: string;
  yearPicker?: boolean;
  weeksInMonth?: number;
  view?: "month" | "week" | "day";
  visibleMonths?: number;
  visibleDuration?: DateDuration;
  focusedValue?: string;
  defaultFocusedValue?: string;
  onFocusChange?: (value: string) => void;
  firstDayOfWeek?: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  pageBehavior?: "single" | "visible";
  selectionAlignment?: "start" | "center" | "end";
  selectionMode?: "single" | "multiple";
  selectedValues?: string[];
  defaultSelectedValues?: string[];
  onSelectedValuesChange?: (values: string[]) => void;
  cellIndicator?: (value: string) => ReactNode;
  previousIcon?: ReactNode;
  nextIcon?: ReactNode;
}
const date = (value?: string | null): CalendarDate | undefined => value ? parseDate(value) : undefined;
const iso = (value: Parameters<typeof toCalendarDate>[0]) => toCalendar(toCalendarDate(value), new GregorianCalendar()).toString();
interface CalendarContentsProps { yearPicker?: boolean; visibleMonths?: number; cellIndicator?: CalendarProps["cellIndicator"]; previousIcon?: ReactNode; nextIcon?: ReactNode; onAnchorChange?: (value?: string) => void }
function CalendarContents({ yearPicker, visibleMonths = 1, cellIndicator, previousIcon, nextIcon, onAnchorChange }: CalendarContentsProps) {
  const calendar = useContext(CalendarStateContext);
  const range = useContext(RangeCalendarStateContext);
  const state = calendar ?? range;
  const [yearsOpen, setYearsOpen] = useState(false);
  const [yearOffset, setYearOffset] = useState(0);
  const anchor = range?.anchorDate ? iso(range.anchorDate) : undefined;
  useEffect(() => { onAnchorChange?.(anchor); }, [anchor, onAnchorChange]);
  const year = state?.focusedDate.year ?? 2026;
  return <><header className="h-calendar-header"><AriaButton slot="previous" aria-label="Previous month" className="h-calendar-nav">{previousIcon ?? <ChevronLeft size={17} />}</AriaButton><Heading className="h-calendar-heading" />{yearPicker && <button type="button" className="h-calendar-nav" aria-label="Choose year" aria-expanded={yearsOpen} disabled={state?.isDisabled} onClick={() => { setYearsOpen(!yearsOpen); setYearOffset(0); }}><ChevronDown size={17} /></button>}<AriaButton slot="next" aria-label="Next month" className="h-calendar-nav">{nextIcon ?? <ChevronRight size={17} />}</AriaButton></header>{yearsOpen ? <div className="h-calendar-years"><div className="h-calendar-year-navigation"><button type="button" onClick={() => setYearOffset(yearOffset - 12)} aria-label="Previous twelve years">&#8592;</button><button type="button" onClick={() => setYearOffset(yearOffset + 12)} aria-label="Next twelve years">&#8594;</button></div>{Array.from({ length: 12 }, (_, index) => year - 5 + yearOffset + index).map(nextYear => <button type="button" key={nextYear} aria-pressed={year === nextYear} disabled={nextYear < 1} onClick={() => { if (state) state.setFocusedDate(state.focusedDate.set({ year: nextYear })); setYearsOpen(false); }}>{nextYear}</button>)}</div> : <div className="h-calendar-months">{Array.from({ length: Math.max(1, Math.min(12, visibleMonths)) }, (_, index) => <CalendarGrid key={index} offset={{ months: index }} className="h-calendar-grid"><CalendarGridHeader>{day => <CalendarHeaderCell className="h-calendar-weekday">{day}</CalendarHeaderCell>}</CalendarGridHeader><CalendarGridBody>{day => <CalendarCell date={day} className="h-calendar-cell">{({ formattedDate }) => <>{formattedDate}{cellIndicator && <span className="h-calendar-indicator">{cellIndicator(iso(day))}</span>}</>}</CalendarCell>}</CalendarGridBody></CalendarGrid>)}</div>}</>;
}
/** Values remain Gregorian ISO calendar strings even when another calendar is displayed. */
export function Calendar({ label, value, defaultValue, onValueChange, minValue, maxValue, isDateUnavailable, disabled, readOnly, invalid, locale = "en-US", yearPicker, weeksInMonth, view = "month", visibleMonths = 1, visibleDuration, focusedValue, defaultFocusedValue, onFocusChange, firstDayOfWeek, pageBehavior, selectionAlignment, selectionMode = "single", selectedValues, defaultSelectedValues, onSelectedValuesChange, cellIndicator, previousIcon, nextIcon, className, ...props }: CalendarProps) {
  const multiple = selectionMode === "multiple";
  return <I18nProvider locale={locale}><AriaCalendar {...props} aria-label={label} data-hulmio-ui="calendar" data-view={view} className={cn("h-inline-calendar", className)} selectionMode={selectionMode} value={multiple ? selectedValues?.map(parseDate) : value === undefined ? undefined : date(value) ?? null} defaultValue={multiple ? defaultSelectedValues?.map(parseDate) : date(defaultValue)} onChange={next => { if (Array.isArray(next)) onSelectedValuesChange?.(next.filter((item): item is CalendarDate => !!item).map(iso)); else if (next) onValueChange?.(iso(next as CalendarDate)); }} minValue={date(minValue)} maxValue={date(maxValue)} isDateUnavailable={isDateUnavailable ? next => isDateUnavailable(iso(next)) : undefined} isDisabled={disabled} isReadOnly={readOnly} isInvalid={invalid} focusedValue={date(focusedValue)} defaultFocusedValue={date(defaultFocusedValue)} onFocusChange={next => onFocusChange?.(iso(next))} weeksInMonth={weeksInMonth} firstDayOfWeek={firstDayOfWeek} pageBehavior={pageBehavior} selectionAlignment={selectionAlignment} visibleDuration={visibleDuration ?? (view === "week" ? { weeks: 1 } : view === "day" ? { days: 1 } : { months: visibleMonths })}><CalendarContents yearPicker={yearPicker} visibleMonths={view === "month" ? visibleMonths : 1} cellIndicator={cellIndicator} previousIcon={previousIcon} nextIcon={nextIcon} /></AriaCalendar></I18nProvider>;
}
export interface RangeCalendarProps extends Omit<CalendarProps, "value" | "defaultValue" | "onValueChange" | "selectionMode" | "selectedValues" | "defaultSelectedValues" | "onSelectedValuesChange"> {
  value?: DateRange | null;
  defaultValue?: DateRange;
  onValueChange?: (value: DateRange) => void;
  allowsNonContiguousRanges?: boolean;
}
const rangeDates = (value?: DateRange | null) => value ? { start: parseDate(value.start), end: parseDate(value.end) } : undefined;
export function RangeCalendar({ label, value, defaultValue, onValueChange, minValue, maxValue, isDateUnavailable, disabled, readOnly, invalid, locale = "en-US", allowsNonContiguousRanges, yearPicker, weeksInMonth, view = "month", visibleMonths = 1, visibleDuration, focusedValue, defaultFocusedValue, onFocusChange, firstDayOfWeek, pageBehavior, selectionAlignment, cellIndicator, previousIcon, nextIcon, className, ...props }: RangeCalendarProps) {
  const [anchor, setAnchor] = useState<string>();
  return <I18nProvider locale={locale}><AriaRangeCalendar {...props} aria-label={label} data-hulmio-ui="range-calendar" data-view={view} className={cn("h-inline-calendar", "h-range-calendar", className)} value={value === undefined ? undefined : rangeDates(value) ?? null} defaultValue={rangeDates(defaultValue)} onChange={next => onValueChange?.({ start: iso(next.start), end: iso(next.end) })} minValue={date(minValue)} maxValue={date(maxValue)} isDateUnavailable={isDateUnavailable ? next => isDateUnavailable(iso(next), anchor) : undefined} isDisabled={disabled} isReadOnly={readOnly} isInvalid={invalid} allowsNonContiguousRanges={allowsNonContiguousRanges} focusedValue={date(focusedValue)} defaultFocusedValue={date(defaultFocusedValue)} onFocusChange={next => onFocusChange?.(iso(next))} weeksInMonth={weeksInMonth} firstDayOfWeek={firstDayOfWeek} pageBehavior={pageBehavior} selectionAlignment={selectionAlignment} visibleDuration={visibleDuration ?? (view === "week" ? { weeks: 1 } : view === "day" ? { days: 1 } : { months: visibleMonths })}><CalendarContents yearPicker={yearPicker} visibleMonths={view === "month" ? visibleMonths : 1} cellIndicator={cellIndicator} previousIcon={previousIcon} nextIcon={nextIcon} onAnchorChange={setAnchor} /></AriaRangeCalendar></I18nProvider>;
}

export interface TreeViewNode { id: string; label: string; icon?: ReactNode; children?: TreeViewNode[]; disabled?: boolean }
export interface TreeViewProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  label: string;
  items: TreeViewNode[];
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  expandedKeys?: string[];
  defaultExpandedKeys?: string[];
  onExpandedChange?: (keys: string[]) => void;
  onAction?: (id: string) => void;
}
function treeItems(items: TreeViewNode[]): ReactNode {
  return items.map(item => <TreeItem key={item.id} id={item.id} textValue={item.label} isDisabled={item.disabled} className="h-tree-item"><TreeItemContent>{({ hasChildItems, isExpanded, level }) => <div className="h-tree-row" style={{ paddingInlineStart: (level - 1) * 20 + 8 }}>{hasChildItems ? <AriaButton slot="chevron" aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`} className="h-tree-chevron">{isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}</AriaButton> : <span className="h-tree-spacer" />}{item.icon}<Text slot="label">{item.label}</Text></div>}</TreeItemContent>{item.children && treeItems(item.children)}</TreeItem>);
}
export function TreeView({ label, items, selectionMode = "single", selectedKeys, defaultSelectedKeys, onSelectionChange, expandedKeys, defaultExpandedKeys, onExpandedChange, onAction, className, ...props }: TreeViewProps) {
  return <Tree {...props} data-hulmio-ui="tree-view" aria-label={label} className={cn("h-tree-view", className)} selectionMode={selectionMode} selectedKeys={selectedKeys} defaultSelectedKeys={defaultSelectedKeys} onSelectionChange={keys => onSelectionChange?.(keys === "all" ? allTreeKeys(items) : [...keys].map(String))} expandedKeys={expandedKeys} defaultExpandedKeys={defaultExpandedKeys} onExpandedChange={keys => onExpandedChange?.([...keys].map(String))} onAction={key => onAction?.(String(key))} renderEmptyState={() => "No items"}>{treeItems(items)}</Tree>;
}
function allTreeKeys(items: TreeViewNode[]): string[] { return items.flatMap(item => [...(item.disabled ? [] : [item.id]), ...allTreeKeys(item.children ?? [])]); }

export interface ListBoxOption { id: string; label: string; description?: string; disabled?: boolean; icon?: ReactNode }
export interface ListBoxSectionData { id: string; label: string; options: ListBoxOption[] }
export interface ListBoxProps extends Omit<AriaListBoxProps<ListBoxOption>, "children" | "items" | "selectedKeys" | "defaultSelectedKeys" | "onSelectionChange" | "selectionMode" | "className" | "style"> {
  className?: string;
  style?: CSSProperties;
  label: string;
  options: ListBoxOption[];
  selectionMode?: "single" | "multiple";
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  disabled?: boolean;
  emptyMessage?: string;
  sections?: ListBoxSectionData[];
  renderIndicator?: (state: { selected: boolean; option: ListBoxOption }) => ReactNode;
  renderOption?: (option: ListBoxOption, state: { selected: boolean; focused: boolean; disabled: boolean }) => ReactNode;
  virtualized?: boolean;
  height?: number;
  rowHeight?: number;
}
export function ListBox({ label, options, sections, selectionMode = "single", selectedKeys, defaultSelectedKeys, onSelectionChange, disabled, emptyMessage = "No options", renderIndicator, renderOption, virtualized, height = 240, rowHeight = 40, className, style, ...props }: ListBoxProps) {
  const all = sections ? sections.flatMap(section => section.options) : options;
  const item = (option: ListBoxOption) => <ListBoxItem key={option.id} id={option.id} textValue={option.label} isDisabled={disabled || option.disabled} className="h-list-box-option">{({ isSelected, isFocused, isDisabled }) => <>{renderOption?.(option, { selected: isSelected, focused: isFocused, disabled: isDisabled }) ?? <>{option.icon}<div><Text slot="label">{option.label}</Text>{option.description && <Text slot="description" className="h-additional-description">{option.description}</Text>}</div></>}{isSelected && (renderIndicator?.({ selected: isSelected, option }) ?? <Check size={16} aria-hidden="true" />)}</>}</ListBoxItem>;
  const list = <AriaListBox {...props} aria-label={label} data-hulmio-ui="list-box" className={cn("h-list-box", className)} style={{ ...(virtualized ? { height, overflow: "auto" } : {}), ...style }} selectionMode={selectionMode} selectedKeys={selectedKeys} defaultSelectedKeys={defaultSelectedKeys} onSelectionChange={keys => onSelectionChange?.(keys === "all" ? all.filter(option => !option.disabled).map(option => option.id) : [...keys].map(String))} renderEmptyState={() => emptyMessage}>{sections ? sections.map(section => <ListBoxSection key={section.id} id={section.id} className="h-list-box-section"><Heading>{section.label}</Heading><Collection items={section.options}>{item}</Collection></ListBoxSection>) : <Collection items={options}>{item}</Collection>}</AriaListBox>;
  return virtualized ? <Virtualizer layout={ListLayout} layoutOptions={{ rowHeight, headingHeight: 32 }}>{list}</Virtualizer> : list;
}

export interface CheckboxCardProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange"> {
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  variant?: "outline" | "soft";
}
export const CheckboxCard = forwardRef<HTMLInputElement, CheckboxCardProps>(({ label, description, icon, onCheckedChange, variant = "outline", className, id, ...props }, ref) => {
  const generatedId = useId();
  return <label data-hulmio-ui="checkbox-card" data-variant={variant} className={cn("h-choice-card", className)} htmlFor={id ?? generatedId}><input {...props} ref={ref} id={id ?? generatedId} type="checkbox" onChange={event => onCheckedChange?.(event.target.checked)} />{icon}<span className="h-choice-content"><span className="h-choice-label">{label}</span>{description && <span className="h-additional-description">{description}</span>}</span><span className="h-choice-indicator" aria-hidden="true"><Check size={13} /></span></label>;
});
CheckboxCard.displayName = "CheckboxCard";
export interface RadioCardProps extends Omit<CheckboxCardProps, "onCheckedChange"> { onValueChange?: (value: string) => void }
export const RadioCard = forwardRef<HTMLInputElement, RadioCardProps>(({ label, description, icon, onValueChange, variant = "outline", className, id, ...props }, ref) => {
  const generatedId = useId();
  return <label data-hulmio-ui="radio-card" data-variant={variant} className={cn("h-choice-card", className)} htmlFor={id ?? generatedId}><input {...props} ref={ref} id={id ?? generatedId} type="radio" onChange={event => { if (event.target.checked) onValueChange?.(event.target.value); }} />{icon}<span className="h-choice-content"><span className="h-choice-label">{label}</span>{description && <span className="h-additional-description">{description}</span>}</span><span className="h-choice-indicator" aria-hidden="true"><span /></span></label>;
});
RadioCard.displayName = "RadioCard";

export interface ColorSwatch { value: string; label: string; disabled?: boolean }
export interface ColorSwatchPickerProps extends Omit<HTMLAttributes<HTMLFieldSetElement>, "onChange" | "defaultValue"> {
  label: string;
  colors: ColorSwatch[];
  name?: string;
  form?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  shape?: "circle" | "square";
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "soft" | "solid";
  layout?: "row" | "grid";
  renderIndicator?: (state: { selected: boolean; color: ColorSwatch }) => ReactNode;
  renderSwatch?: (color: ColorSwatch, state: { selected: boolean }) => ReactNode;
}
function swatchKey(value?: string) {
  if (!value) return value;
  try { return parseColor(value).toString("hexa").toLowerCase(); }
  catch { return value.trim().toLowerCase(); }
}
export function ColorSwatchPicker({ label, colors, name, form, value, defaultValue, onValueChange, disabled, shape = "circle", size = "md", variant = "outline", layout = "row", renderIndicator, renderSwatch, className, ...props }: ColorSwatchPickerProps) {
  const generatedName = useId();
  const [internal, setInternal] = useState(defaultValue);
  const current = swatchKey(value ?? internal);
  const selected = (color: string) => current === swatchKey(color);
  const owner = useRef<HTMLFieldSetElement>(null);
  useEffect(() => {
    const ownerForm = owner.current?.form;
    if (!ownerForm || value !== undefined) return;
    let active = true;
    const reset = (event: Event) => setTimeout(() => { if (active && !event.defaultPrevented) setInternal(defaultValue); }, 0);
    ownerForm.addEventListener("reset", reset);
    return () => { active = false; ownerForm.removeEventListener("reset", reset); };
  }, [value, defaultValue, form]);
  return <fieldset {...props} ref={owner} form={form} data-hulmio-ui="color-swatch-picker" data-shape={shape} data-size={size} data-variant={variant} data-layout={layout} className={cn("h-color-swatch-picker", className)} disabled={disabled}><legend>{label}</legend><div className="h-swatch-options">{colors.map(color => <label key={color.value} className="h-swatch-option" title={color.label} style={{ "--h-swatch-color": color.value } as CSSProperties}><input type="radio" form={form} name={name ?? generatedName} value={color.value} aria-label={color.label} disabled={color.disabled} checked={selected(color.value)} onChange={event => { if (event.target.checked) { if (value === undefined) setInternal(color.value); onValueChange?.(color.value); } }} /><span aria-hidden="true">{renderSwatch?.(color, { selected: selected(color.value) })}{renderIndicator?.({ selected: selected(color.value), color }) ?? <Check size={16} />}</span></label>)}</div></fieldset>;
}
