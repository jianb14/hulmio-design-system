import { forwardRef, useId, useState } from "react";
import type { AnchorHTMLAttributes, CSSProperties, ForwardedRef, HTMLAttributes, ReactNode } from "react";
import { Accordion } from "./Display";
import type { AccordionProps } from "./Display";
import { cn } from "./utils";

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "tertiary" | "transparent";
}
export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(({ variant = "default", className, ...props }, ref) => <div {...props} ref={ref} data-hulmio-ui="surface" data-variant={variant} className={cn("h-surface", className)} />);
Surface.displayName = "Surface";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  iconPlacement?: "start" | "end";
  underline?: "always" | "hover" | "none";
  disabled?: boolean;
  render?: (props: AnchorHTMLAttributes<HTMLAnchorElement> & { ref: ForwardedRef<HTMLAnchorElement> }) => ReactNode;
}
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, icon, iconPlacement = "end", underline = "hover", disabled, render, className, href, tabIndex, onClick, ...props }, ref) => {
  const anchorProps = { ...props, ref, href: disabled ? undefined : href, tabIndex: disabled ? -1 : tabIndex, "aria-disabled": disabled || undefined, "data-hulmio-ui": "link", "data-underline": underline, className: cn("h-link", className), onClick: (event: React.MouseEvent<HTMLAnchorElement>) => { if (disabled) event.preventDefault(); else onClick?.(event); }, children: <>{iconPlacement === "start" && icon}{children}{iconPlacement === "end" && icon}</> };
  return render ? render(anchorProps) : <a {...anchorProps} />;
});
Link.displayName = "Link";

export interface DisclosureProps extends Omit<HTMLAttributes<HTMLDetailsElement>, "title" | "children"> {
  title: ReactNode;
  children?: ReactNode | ((state: { expanded: boolean }) => ReactNode);
  expanded?: boolean;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  disabled?: boolean;
  renderTrigger?: (state: { expanded: boolean; disabled: boolean }) => ReactNode;
}
export function Disclosure({ title, children, expanded, defaultExpanded = false, onExpandedChange, disabled = false, renderTrigger, className, ...props }: DisclosureProps) {
  const [internal, setInternal] = useState(defaultExpanded);
  const open = expanded ?? internal;
  const id = useId();
  return <details {...props} open={open} data-hulmio-ui="disclosure" className={cn("h-disclosure", className)}><summary aria-controls={id} aria-expanded={open} aria-disabled={disabled || undefined} onClick={event => { event.preventDefault(); if (disabled) return; if (expanded === undefined) setInternal(!open); onExpandedChange?.(!open); }}>{renderTrigger?.({ expanded: open, disabled }) ?? <>{title}<span aria-hidden="true">{open ? "−" : "+"}</span></>}</summary><div id={id} className="h-disclosure-content">{typeof children === "function" ? children({ expanded: open }) : children}</div></details>;
}

export interface DisclosureGroupProps extends AccordionProps {}
export function DisclosureGroup(props: DisclosureGroupProps) { return <Accordion {...props} data-hulmio-disclosure-group="true" />; }

export type TypographyType = "display" | "heading" | "title" | "body" | "small" | "caption" | "code";
type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "article" | "blockquote" | "pre" | "code";
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyElement;
  type?: TypographyType;
  align?: CSSProperties["textAlign"];
  tone?: "default" | "muted" | "primary";
  weight?: CSSProperties["fontWeight"];
  truncate?: boolean;
  prose?: boolean;
  render?: (props: HTMLAttributes<HTMLElement> & { ref: (node: HTMLElement | null) => void }) => ReactNode;
}
export const Typography = forwardRef<HTMLElement, TypographyProps>(({ as: Component = "p", type = "body", align, tone = "default", weight, truncate, prose, render, className, style, ...props }, ref) => {
  const elementProps = { ...props, ref: (node: HTMLElement | null) => { if (typeof ref === "function") ref(node); else if (ref) ref.current = node; }, "data-hulmio-ui": "typography", "data-type": type, "data-tone": tone, "data-truncate": truncate || undefined, className: cn("h-typography", prose && "h-prose", className), style: { textAlign: align, fontWeight: weight, ...style } };
  return render ? render(elementProps) : <Component {...elementProps} ref={ref as never} />;
});
Typography.displayName = "Typography";
