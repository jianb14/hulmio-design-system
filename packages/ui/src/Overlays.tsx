import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode, SVGProps } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as MenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as PopperPrimitive from "@radix-ui/react-popper";
import { Check, ChevronRight, X } from "lucide-react";
import { Modal } from "./Modal";
import type { ModalProps } from "./Modal";
import type { Tone } from "./Display";
import { cn } from "./utils";

export const Dialog = Modal;
export interface DrawerProps extends Omit<ModalProps, "drawer" | "nonModal" | "fullscreen"> {}
export function Drawer({ side = "right", ...props }: DrawerProps) { return <Modal {...props} drawer side={side} />; }

export interface DropdownMenuItem {
  id?: string;
  label: string;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  shortcut?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  icon?: ReactNode;
  description?: ReactNode;
  items?: DropdownMenuItem[];
  section?: string;
  separatorBefore?: boolean;
}
export interface DropdownMenuSection {
  label: string;
  items: DropdownMenuItem[];
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
}
export interface DropdownMenuProps {
  trigger: ReactNode;
  items?: DropdownMenuItem[];
  sections?: DropdownMenuSection[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelectionChange?: (keys: string[]) => void;
  onAction?: (key: string) => void;
  indicator?: ReactNode;
  submenuIndicator?: ReactNode;
  triggerMode?: "press" | "longPress";
  longPressDelay?: number;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
  style?: CSSProperties;
  portalContainer?: HTMLElement | null;
}
function DropdownSection({ section, render }: { section: DropdownMenuSection; render: (items: DropdownMenuItem[], mode: "none" | "single" | "multiple", keys: string[], change: (keys: string[]) => void) => ReactNode }) {
  const [internal, setInternal] = useState(section.defaultSelectedKeys ?? []);
  return <MenuPrimitive.Group><MenuPrimitive.Label className="h-menu-section-label">{section.label}</MenuPrimitive.Label>{render(section.items, section.selectionMode ?? "none", section.selectedKeys ?? internal, keys => { setInternal(keys); section.onSelectionChange?.(keys); })}</MenuPrimitive.Group>;
}
export function DropdownMenu({ trigger, items = [], sections, open, defaultOpen = false, onOpenChange, selectionMode = "none", selectedKeys, defaultSelectedKeys = [], onSelectionChange, onAction, indicator, submenuIndicator, triggerMode = "press", longPressDelay = 500, side, align = "start", className, style, portalContainer }: DropdownMenuProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalKeys, setInternalKeys] = useState(defaultSelectedKeys);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const longPressed = useRef(false);
  const changeOpen = (next: boolean) => { setInternalOpen(next); onOpenChange?.(next); };
  const changeKeys = (next: string[]) => { setInternalKeys(next); onSelectionChange?.(next); };
  const cancelLongPress = () => { clearTimeout(timer.current); timer.current = undefined; };
  useEffect(() => () => clearTimeout(timer.current), []);
  function renderItems(entries: DropdownMenuItem[], mode: "none" | "single" | "multiple", keys: string[], change: (keys: string[]) => void): ReactNode {
    const rendered = entries.map((item, index) => {
      const key = item.id ?? item.label;
      const selectable = mode !== "none" || typeof item.checked === "boolean";
      const checked = typeof item.checked === "boolean" ? item.checked : keys.includes(key);
      const content = <>{item.icon && <span className="h-menu-icon">{item.icon}</span>}<span className="h-menu-item-copy"><span>{item.label}</span>{item.description && <small>{item.description}</small>}</span>{item.shortcut && <span className="h-menu-shortcut" aria-hidden="true">{item.shortcut}</span>}</>;
      return <MenuPrimitive.Group key={item.id ?? index}>{item.separatorBefore && <MenuPrimitive.Separator className="h-menu-separator" />}{item.section && <MenuPrimitive.Label className="h-menu-section-label">{item.section}</MenuPrimitive.Label>}{item.items?.length ?
        <MenuPrimitive.Sub><MenuPrimitive.SubTrigger className="h-dropdown-item" disabled={item.disabled}>{content}{submenuIndicator ?? <ChevronRight size={14} aria-hidden="true" />}</MenuPrimitive.SubTrigger><MenuPrimitive.Portal container={portalContainer}><MenuPrimitive.SubContent data-hulmio-ui="dropdown-menu" className={cn("h-dropdown-menu", className)} style={style} sideOffset={5} collisionPadding={12}>{renderItems(item.items, mode, keys, change)}</MenuPrimitive.SubContent></MenuPrimitive.Portal></MenuPrimitive.Sub> : mode === "single" ?
        <MenuPrimitive.RadioItem className="h-dropdown-item" value={key} disabled={item.disabled} data-destructive={item.destructive || undefined} onSelect={() => { item.onSelect?.(); onAction?.(key); }}>{content}<MenuPrimitive.ItemIndicator className="h-menu-check">{indicator ?? <Check size={15} aria-hidden="true" />}</MenuPrimitive.ItemIndicator></MenuPrimitive.RadioItem> : selectable ?
        <MenuPrimitive.CheckboxItem className="h-dropdown-item" disabled={item.disabled} data-destructive={item.destructive || undefined} checked={checked}
          onCheckedChange={next => { item.onCheckedChange?.(next); if (mode !== "none") change(next ? [...keys.filter(value => value !== key), key] : keys.filter(value => value !== key)); }}
          onSelect={event => { if (mode === "multiple") event.preventDefault(); item.onSelect?.(); onAction?.(key); }}>{content}<MenuPrimitive.ItemIndicator className="h-menu-check">{indicator ?? <Check size={15} aria-hidden="true" />}</MenuPrimitive.ItemIndicator></MenuPrimitive.CheckboxItem> :
        <MenuPrimitive.Item className="h-dropdown-item" disabled={item.disabled} data-destructive={item.destructive || undefined} onSelect={() => { item.onSelect?.(); onAction?.(key); }}>{content}</MenuPrimitive.Item>}</MenuPrimitive.Group>;
    });
    return mode === "single" ? <MenuPrimitive.RadioGroup value={keys[0] ?? ""} onValueChange={key => change([key])}>{rendered}</MenuPrimitive.RadioGroup> : rendered;
  }
  return <MenuPrimitive.Root open={open ?? internalOpen} onOpenChange={changeOpen}><MenuPrimitive.Trigger asChild className="h-dropdown-trigger"
    onPointerDown={event => { if (triggerMode !== "longPress" || event.button !== 0) return; event.preventDefault(); cancelLongPress(); longPressed.current = false; timer.current = setTimeout(() => { longPressed.current = true; changeOpen(true); }, longPressDelay); }}
    onPointerUp={cancelLongPress} onPointerCancel={cancelLongPress} onPointerLeave={cancelLongPress}
    onClick={event => { if (triggerMode === "longPress" && event.detail > 0) { event.preventDefault(); if (!longPressed.current) changeOpen(false); } }}
    onContextMenu={event => { if (triggerMode === "longPress") event.preventDefault(); }}>{trigger}</MenuPrimitive.Trigger><MenuPrimitive.Portal container={portalContainer}><MenuPrimitive.Content data-hulmio-ui="dropdown-menu" className={cn("h-dropdown-menu", className)} style={style} side={side} align={align} sideOffset={4} collisionPadding={12}>{sections ? sections.map(section => <DropdownSection key={section.label} section={section} render={renderItems} />) : renderItems(items, selectionMode, selectedKeys ?? internalKeys, changeKeys)}</MenuPrimitive.Content></MenuPrimitive.Portal></MenuPrimitive.Root>;
}

export interface TooltipProps {
  content: ReactNode | ((state: { open: boolean }) => ReactNode);
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  showArrow?: boolean;
  delay?: number;
  disabled?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  portalContainer?: HTMLElement | null;
}
export function Tooltip({ content, children, side = "top", align, showArrow = true, delay = 350, disabled, open, defaultOpen = false, onOpenChange, className, style, portalContainer }: TooltipProps) {
  const [internal, setInternal] = useState(defaultOpen);
  const visible = disabled ? false : open ?? internal;
  return <TooltipPrimitive.Provider delayDuration={delay}><TooltipPrimitive.Root open={visible} onOpenChange={next => { setInternal(next); onOpenChange?.(next); }}><TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger><TooltipPrimitive.Portal container={portalContainer}><TooltipPrimitive.Content data-hulmio-ui="tooltip" className={cn("h-tooltip", className)} style={style} side={side} align={align} sideOffset={7} collisionPadding={12}>{typeof content === "function" ? content({ open: visible }) : content}{showArrow && <TooltipPrimitive.Arrow className="h-tooltip-arrow" />}</TooltipPrimitive.Content></TooltipPrimitive.Portal></TooltipPrimitive.Root></TooltipPrimitive.Provider>;
}

export interface PopoverProps {
  title: string;
  trigger: ReactNode;
  children: ReactNode | ((state: { close: () => void; open: boolean }) => ReactNode);
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  showArrow?: boolean;
  offset?: number;
  className?: string;
  style?: CSSProperties;
  portalContainer?: HTMLElement | null;
}
export function Popover({ title, trigger, children, open, defaultOpen = false, onOpenChange, side, align = "start", showArrow, offset = 8, className, style, portalContainer }: PopoverProps) {
  const [internal, setInternal] = useState(defaultOpen);
  const visible = open ?? internal;
  const change = (next: boolean) => { setInternal(next); onOpenChange?.(next); };
  return <DialogPrimitive.Root modal={false} open={visible} onOpenChange={change}><PopperPrimitive.Root>
    <PopperPrimitive.Anchor asChild><DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger></PopperPrimitive.Anchor>
    <DialogPrimitive.Portal container={portalContainer}>
      <PopperPrimitive.Content asChild align={align} side={side} sideOffset={offset} collisionPadding={12}>
        <DialogPrimitive.Content data-hulmio-ui="popover" className={cn("h-popover", className)} style={{ position: "relative", ...style }} aria-describedby={undefined}>
          <DialogPrimitive.Title className="h-overlay-title">{title}</DialogPrimitive.Title>{typeof children === "function" ? children({ close: () => change(false), open: visible }) : children}
          <DialogPrimitive.Close className="h-overlay-close" aria-label="Close popover"><X size={16} aria-hidden="true" /></DialogPrimitive.Close>{showArrow && <PopperPrimitive.Arrow className="h-popover-arrow" />}
        </DialogPrimitive.Content>
      </PopperPrimitive.Content>
    </DialogPrimitive.Portal>
  </PopperPrimitive.Root></DialogPrimitive.Root>;
}

export interface CommandItem { id: string; label: string; onSelect: () => void; group?: string; disabled?: boolean; icon?: ReactNode; description?: ReactNode; shortcut?: string; content?: ReactNode }
export interface CommandPaletteProps { open: boolean; onOpenChange: (open: boolean) => void; items: CommandItem[]; portalContainer?: HTMLElement | null }
export function CommandPalette({ open, onOpenChange, items, portalContainer }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const id = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const filtered = items.filter(item => item.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const grouped = Array.from(new Set(filtered.map(item => item.group ?? "")));
  useEffect(() => { if (!open) setQuery(""); }, [open]);
  return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}><DialogPrimitive.Portal container={portalContainer}><DialogPrimitive.Overlay data-hulmio-ui="overlay" className="dialog-overlay" /><DialogPrimitive.Content data-hulmio-ui="modal" className="dialog-content" onOpenAutoFocus={() => { returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null; }} onCloseAutoFocus={event => { event.preventDefault(); returnFocusRef.current?.focus(); }}><DialogPrimitive.Title>Commands</DialogPrimitive.Title><DialogPrimitive.Description className="dialog-description">Search and select a command.</DialogPrimitive.Description><div data-hulmio-ui="command-palette" className="h-command-palette"><label htmlFor={id} className="h-visually-hidden">Search commands</label><input ref={inputRef} id={id} type="search" placeholder="Search commands…" value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === "ArrowDown") { event.preventDefault(); listRef.current?.querySelector<HTMLButtonElement>("button:not(:disabled)")?.focus(); }
    if (event.key === "Enter") { event.preventDefault(); const first = filtered.find(item => !item.disabled); if (first) { first.onSelect(); onOpenChange(false); } }
  }} /><ul ref={listRef} aria-label="Commands" onKeyDown={event => {
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>("button:not(:disabled)"));
    const index = controls.indexOf(event.target as HTMLButtonElement);
    if (index < 0) return;
    if (event.key === "ArrowDown") { event.preventDefault(); controls[(index + 1) % controls.length]?.focus(); }
    if (event.key === "ArrowUp") { event.preventDefault(); if (index === 0) inputRef.current?.focus(); else controls[index - 1]?.focus(); }
    if (event.key === "Home" || event.key === "End") { event.preventDefault(); controls[event.key === "Home" ? 0 : controls.length - 1]?.focus(); }
  }}>{grouped.map(group => <li key={group} className="h-command-group">{group && <div className="h-command-group-label">{group}</div>}<ul aria-label={group || "Commands"}>{filtered.filter(item => (item.group ?? "") === group).map(item => <li key={item.id}><button type="button" disabled={item.disabled} onClick={() => { item.onSelect(); onOpenChange(false); }}>{item.content ?? <>{item.icon && <span aria-hidden="true">{item.icon}</span>}<span className="h-command-copy"><span>{item.label}</span>{item.description && <small>{item.description}</small>}</span>{item.shortcut && <kbd>{item.shortcut}</kbd>}</>}</button></li>)}</ul></li>)}</ul>{!filtered.length && <p role="status">No commands found</p>}</div><DialogPrimitive.Close className="dialog-close" aria-label="Close commands">×</DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal></DialogPrimitive.Root>;
}

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title: ReactNode; tone?: Tone; onDismiss?: () => void; icon?: ReactNode; action?: ReactNode }
export function Alert({ title, children, tone = "info", onDismiss, icon, action, className, ...props }: AlertProps) { return <div {...props} role={tone === "danger" || tone === "warning" ? "alert" : "status"} data-hulmio-ui="alert" data-tone={tone} className={cn("h-alert", className)}>{icon && <span aria-hidden="true">{icon}</span>}<div><div className="h-notice-title">{title}</div>{children && <div className="h-notice-description">{children}</div>}{action}</div>{onDismiss && <button type="button" className="h-notice-close" aria-label="Dismiss alert" onClick={onDismiss}><X size={16} aria-hidden="true" /></button>}</div>; }
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title: ReactNode; description?: ReactNode; tone?: Tone; onDismiss?: () => void; indicator?: ReactNode; isLoading?: boolean; action?: { label: string; onAction: () => void } }
export function Toast({ title, description, tone = "neutral", onDismiss, indicator, isLoading, action, children, className, ...props }: ToastProps) { return <div {...props} role={tone === "danger" ? "alert" : "status"} aria-atomic="true" aria-busy={isLoading || undefined} data-hulmio-ui="toast" data-tone={tone} className={cn("h-toast", className)}>{indicator ?? (isLoading ? <Spinner size="sm" /> : <span className="h-toast-indicator" aria-hidden="true" />)}<div><div className="h-notice-title">{title}</div>{description && <div className="h-notice-description">{description}</div>}{children}{action && <button type="button" className="h-toast-action" onClick={action.onAction}>{action.label}</button>}</div>{onDismiss && <button type="button" className="h-notice-close" aria-label="Dismiss notification" onClick={onDismiss}><X size={16} aria-hidden="true" /></button>}</div>; }
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> { value?: number; min?: number; max?: number; label?: string; circular?: boolean; indeterminate?: boolean; showValue?: boolean; showLabel?: boolean; size?: "sm" | "md" | "lg"; tone?: Tone; svgProps?: SVGProps<SVGSVGElement> }
export function Progress({ value = 0, min = 0, max = 100, label = "Progress", circular, indeterminate, showValue = true, showLabel = true, size = "md", tone = "success", svgProps, className, ...props }: ProgressProps) {
  const low = Number.isFinite(min) ? min : 0;
  const high = Number.isFinite(max) && max > low ? max : low + 100;
  const bounded = Number.isFinite(value) ? Math.max(low, Math.min(high, value)) : low;
  const percent = (bounded - low) / (high - low) * 100;
  return <div {...props} data-hulmio-ui="progress" data-size={size} data-tone={tone} className={cn("h-progress", circular && "h-progress-circular", className)} role="progressbar" aria-label={label} aria-valuemin={low} aria-valuemax={high} aria-valuenow={indeterminate ? undefined : bounded} data-indeterminate={indeterminate || undefined}>{circular ? <><svg {...svgProps} viewBox={svgProps?.viewBox ?? "0 0 100 100"} aria-hidden="true"><circle cx="50" cy="50" r="42" className="h-progress-ring-track" /><circle cx="50" cy="50" r="42" pathLength="100" strokeDasharray={`${indeterminate ? 28 : percent} 100`} transform="rotate(-90 50 50)" className="h-progress-ring-value" />{!indeterminate && showValue && <text x="50" y="56" textAnchor="middle">{Math.round(percent)}%</text>}</svg>{showLabel && <span className="h-progress-circle-label">{label}</span>}</> : <>{(showLabel || showValue) && <span className="h-progress-label">{showLabel && label}{!indeterminate && showValue && <span>{low === 0 && high === 100 ? `${Math.round(percent)}%` : `${bounded} / ${high}`}</span>}</span>}<span className="h-progress-track"><span className="h-progress-value" style={{ width: indeterminate ? "35%" : `${percent}%` }} /></span></>}</div>;
}
export type ProgressCircleProps = Omit<ProgressProps, "circular">;
export function ProgressCircle(props: ProgressCircleProps) { return <Progress {...props} circular />; }
export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> { width?: number | string; height?: number | string; animation?: "pulse" | "shimmer" | "none"; sharedShimmer?: boolean }
export function Skeleton({ width = "100%", height = 20, animation = "pulse", sharedShimmer, className, style, ...props }: SkeletonProps) { return <span {...props} data-hulmio-ui="skeleton" data-animation={animation} data-shared-shimmer={sharedShimmer || undefined} aria-hidden="true" className={cn("h-skeleton", className)} style={{ width, height, ...style }} />; }
export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> { label?: string; size?: "sm" | "md" | "lg" | number; tone?: Tone; speed?: number }
export function Spinner({ label = "Loading", size = "md", tone = "success", speed = 0.7, className, style, ...props }: SpinnerProps) { const pixels = typeof size === "number" ? size : { sm: 16, md: 24, lg: 36 }[size]; return <span {...props} data-hulmio-ui="spinner" data-tone={tone} role="status" className={cn("h-spinner", className)} style={{ "--h-spinner-size": `${pixels}px`, "--h-spinner-speed": `${Math.max(0.05, speed)}s`, ...style } as CSSProperties}><span aria-hidden="true" className="h-spinner-ring" /><span className="h-visually-hidden">{label}</span></span>; }
export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> { title: ReactNode; description?: ReactNode; action?: ReactNode }
export function EmptyState({ title, description, action, className, ...props }: EmptyStateProps) { return <div {...props} data-hulmio-ui="empty-state" className={cn("h-empty-state", className)}><span className="h-empty-symbol" aria-hidden="true">◇</span><h3>{title}</h3>{description && <p>{description}</p>}{action && <div className="h-empty-action">{action}</div>}</div>; }
