import type { HTMLAttributes, ReactNode } from "react";
import * as Hover from "@radix-ui/react-hover-card";
import * as Context from "@radix-ui/react-context-menu";
import * as Bar from "@radix-ui/react-menubar";
import * as Navigation from "@radix-ui/react-navigation-menu";
import { Check, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "./utils";

export interface HoverCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  trigger: ReactNode;
  children: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
  portalContainer?: HTMLElement | null;
}
/** Supplementary information for a focusable link. Keep essential actions outside the card. */
export function HoverCard({ trigger, children, side = "bottom", align = "start", open, defaultOpen, onOpenChange, openDelay = 350, closeDelay = 150, portalContainer, className, ...props }: HoverCardProps) {
  return <Hover.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} openDelay={openDelay} closeDelay={closeDelay}><Hover.Trigger asChild>{trigger}</Hover.Trigger><Hover.Portal container={portalContainer}><Hover.Content {...props} data-hulmio-ui="hover-card" className={cn("h-hover-card", className)} side={side} align={align} sideOffset={8} collisionPadding={12}>{children}</Hover.Content></Hover.Portal></Hover.Root>;
}

export interface MenuRadioOption { id: string; label: string; value: string; disabled?: boolean; icon?: ReactNode }
export interface MenuRadioGroup { value: string; onValueChange: (value: string) => void; options: MenuRadioOption[] }
export interface MenuAction {
  id: string;
  label: string;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  shortcut?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  items?: MenuAction[];
  separatorBefore?: boolean;
  icon?: ReactNode;
  radioGroup?: MenuRadioGroup;
}
const actionContent = (item: MenuAction) => <>{item.icon && <span aria-hidden="true" className="h-menu-icon">{item.icon}</span>}<span>{item.label}</span>{item.shortcut && <span className="h-additional-shortcut" aria-hidden="true">{item.shortcut}</span>}</>;
function contextItems(items: MenuAction[], portalContainer?: HTMLElement | null) {
  return items.map(item => <Context.Group key={item.id}>{item.separatorBefore && <Context.Separator className="h-additional-menu-separator" />}{item.radioGroup ? <><Context.Label className="h-menu-section-label">{item.label}</Context.Label><Context.RadioGroup value={item.radioGroup.value} onValueChange={item.radioGroup.onValueChange}>{item.radioGroup.options.map(option => <Context.RadioItem key={option.id} value={option.value} disabled={option.disabled} className="h-additional-menu-item">{option.icon && <span aria-hidden="true">{option.icon}</span>}<span>{option.label}</span><Context.ItemIndicator><Check size={14} aria-hidden="true" /></Context.ItemIndicator></Context.RadioItem>)}</Context.RadioGroup></> : item.items?.length ? <Context.Sub><Context.SubTrigger className="h-additional-menu-item" disabled={item.disabled}>{item.label}<ChevronRight size={14} aria-hidden="true" /></Context.SubTrigger><Context.Portal container={portalContainer}><Context.SubContent data-hulmio-ui="context-menu" className="h-additional-menu" sideOffset={5} collisionPadding={12}>{contextItems(item.items, portalContainer)}</Context.SubContent></Context.Portal></Context.Sub> : typeof item.checked === "boolean" ? <Context.CheckboxItem className="h-additional-menu-item" checked={item.checked} onCheckedChange={item.onCheckedChange} disabled={item.disabled} onSelect={item.onSelect}>{actionContent(item)}<Context.ItemIndicator><Check size={14} aria-hidden="true" /></Context.ItemIndicator></Context.CheckboxItem> : <Context.Item className="h-additional-menu-item" disabled={item.disabled} data-destructive={item.destructive || undefined} onSelect={item.onSelect}>{actionContent(item)}</Context.Item>}</Context.Group>);
}
export interface ContextMenuProps { children: ReactNode; items: MenuAction[]; disabled?: boolean; onOpenChange?: (open: boolean) => void; portalContainer?: HTMLElement | null }
export function ContextMenu({ children, items, disabled, onOpenChange, portalContainer }: ContextMenuProps) {
  return <Context.Root onOpenChange={onOpenChange}><Context.Trigger asChild disabled={disabled}>{children}</Context.Trigger><Context.Portal container={portalContainer}><Context.Content data-hulmio-ui="context-menu" className="h-additional-menu" collisionPadding={12}>{contextItems(items, portalContainer)}</Context.Content></Context.Portal></Context.Root>;
}

function barItems(items: MenuAction[], portalContainer?: HTMLElement | null) {
  return items.map(item => <Bar.Group key={item.id}>{item.separatorBefore && <Bar.Separator className="h-additional-menu-separator" />}{item.radioGroup ? <><Bar.Label className="h-menu-section-label">{item.label}</Bar.Label><Bar.RadioGroup value={item.radioGroup.value} onValueChange={item.radioGroup.onValueChange}>{item.radioGroup.options.map(option => <Bar.RadioItem key={option.id} value={option.value} disabled={option.disabled} className="h-additional-menu-item">{option.icon && <span aria-hidden="true">{option.icon}</span>}<span>{option.label}</span><Bar.ItemIndicator><Check size={14} aria-hidden="true" /></Bar.ItemIndicator></Bar.RadioItem>)}</Bar.RadioGroup></> : item.items?.length ? <Bar.Sub><Bar.SubTrigger className="h-additional-menu-item" disabled={item.disabled}>{item.label}<ChevronRight size={14} aria-hidden="true" /></Bar.SubTrigger><Bar.Portal container={portalContainer}><Bar.SubContent data-hulmio-ui="menubar-menu" className="h-additional-menu" sideOffset={5} collisionPadding={12}>{barItems(item.items, portalContainer)}</Bar.SubContent></Bar.Portal></Bar.Sub> : typeof item.checked === "boolean" ? <Bar.CheckboxItem className="h-additional-menu-item" checked={item.checked} onCheckedChange={item.onCheckedChange} disabled={item.disabled} onSelect={item.onSelect}>{actionContent(item)}<Bar.ItemIndicator><Check size={14} aria-hidden="true" /></Bar.ItemIndicator></Bar.CheckboxItem> : <Bar.Item className="h-additional-menu-item" disabled={item.disabled} data-destructive={item.destructive || undefined} onSelect={item.onSelect}>{actionContent(item)}</Bar.Item>}</Bar.Group>);
}
export interface MenubarMenu { id: string; label: string; items: MenuAction[]; disabled?: boolean }
export interface MenubarProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange" | "dir"> {
  dir?: "ltr" | "rtl";
  menus: MenubarMenu[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  portalContainer?: HTMLElement | null;
}
export function Menubar({ menus, label = "Application menu", value, defaultValue, onValueChange, portalContainer, className, ...props }: MenubarProps) {
  return <Bar.Root {...props} data-hulmio-ui="menubar" aria-label={label} value={value} defaultValue={defaultValue} onValueChange={onValueChange} className={cn("h-menubar", className)}>{menus.map(menu => <Bar.Menu key={menu.id} value={menu.id}><Bar.Trigger className="h-menubar-trigger" disabled={menu.disabled}>{menu.label}</Bar.Trigger><Bar.Portal container={portalContainer}><Bar.Content data-hulmio-ui="menubar-menu" className="h-additional-menu" align="start" sideOffset={6} collisionPadding={12}>{barItems(menu.items, portalContainer)}</Bar.Content></Bar.Portal></Bar.Menu>)}</Bar.Root>;
}

export interface NavigationMenuItem { id: string; label: string; href?: string; content?: ReactNode; active?: boolean }
export interface NavigationMenuProps extends Omit<HTMLAttributes<HTMLElement>, "defaultValue" | "onChange" | "dir"> {
  dir?: "ltr" | "rtl";
  items: NavigationMenuItem[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
}
export function NavigationMenu({ items, label = "Site navigation", value, defaultValue, onValueChange, orientation = "horizontal", className, ...props }: NavigationMenuProps) {
  return <Navigation.Root {...props} data-hulmio-ui="navigation-menu" aria-label={label} value={value} defaultValue={defaultValue} onValueChange={onValueChange} orientation={orientation} className={cn("h-navigation-menu", className)}><Navigation.List className="h-navigation-list">{items.map(item => <Navigation.Item key={item.id} value={item.id}>{item.content ? <><Navigation.Trigger className="h-navigation-trigger">{item.label}<ChevronDown size={14} aria-hidden="true" /></Navigation.Trigger><Navigation.Content className="h-navigation-content">{item.content}</Navigation.Content></> : <Navigation.Link className="h-navigation-link" href={item.href} active={item.active} aria-current={item.active ? "page" : undefined}>{item.label}</Navigation.Link>}</Navigation.Item>)}</Navigation.List></Navigation.Root>;
}
