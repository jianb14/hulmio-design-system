import { forwardRef, useEffect, useId, useRef, useState } from "react";
import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { Check, Copy, X } from "lucide-react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button";
import type { Tone } from "./Display";
import { cn } from "./utils";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "soft" | "outline";
  tone?: Tone;
  size?: "sm" | "md";
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
  onRemove?: () => void;
  removeLabel?: string;
  disabled?: boolean;
}
export const Chip = forwardRef<HTMLSpanElement, ChipProps>(({ children, variant = "soft", tone = "neutral", size = "md", selected, defaultSelected = false, onSelectedChange, onRemove, removeLabel = "Remove chip", disabled, className, ...props }, ref) => {
  const [internalSelected, setInternalSelected] = useState(defaultSelected);
  const currentSelected = selected ?? internalSelected;
  return <span {...props} ref={ref} data-hulmio-ui="chip" data-variant={variant} data-tone={tone} data-size={size} data-selected={onSelectedChange ? currentSelected : undefined} data-disabled={disabled || undefined} className={cn("h-chip", className)}>{onSelectedChange ? <button type="button" className="h-chip-label" disabled={disabled} aria-pressed={currentSelected} onClick={() => { setInternalSelected(!currentSelected); onSelectedChange(!currentSelected); }}>{children}</button> : <span className="h-chip-label">{children}</span>}{onRemove && <button type="button" className="h-chip-remove" aria-label={removeLabel} disabled={disabled} onClick={onRemove}><X size={13} aria-hidden="true" /></button>}</span>;
});
Chip.displayName = "Chip";

export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  label: ReactNode;
  value: ReactNode;
  change?: ReactNode;
  trend?: "up" | "down" | "neutral";
  description?: ReactNode;
  variant?: "default" | "outlined" | "soft";
}
export const Stat = forwardRef<HTMLDivElement, StatProps>(({ label, value, change, trend = "neutral", description, variant = "default", className, ...props }, ref) => <div {...props} ref={ref} data-hulmio-ui="stat" data-variant={variant} className={cn("h-stat", className)}><dl><dt>{label}</dt><dd className="h-stat-value">{value}</dd>{change && <dd className="h-stat-change" data-trend={trend}>{change}</dd>}</dl>{description && <p className="h-additional-description">{description}</p>}</div>);
Stat.displayName = "Stat";

export interface DataListItem { id?: string; label: ReactNode; value: ReactNode }
export interface DataListProps extends HTMLAttributes<HTMLDListElement> { items: DataListItem[]; orientation?: "horizontal" | "vertical"; size?: "sm" | "md"; divided?: boolean }
export const DataList = forwardRef<HTMLDListElement, DataListProps>(({ items, orientation = "horizontal", size = "md", divided = true, className, ...props }, ref) => <dl {...props} ref={ref} data-hulmio-ui="data-list" data-orientation={orientation} data-size={size} data-divided={divided || undefined} className={cn("h-data-list", className)}>{items.map((item, index) => <div key={item.id ?? index}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>);
DataList.displayName = "DataList";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "alt"> {
  alt: string;
  fallback?: ReactNode;
  caption?: ReactNode;
  aspectRatio?: number;
  fit?: "cover" | "contain";
  radius?: "none" | "sm" | "md";
  loadingFallback?: ReactNode;
}
export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, fallback, loadingFallback, caption, aspectRatio, fit = "cover", radius = "md", className, style, onError, onLoad, loading = "lazy", ...props }, ref) => {
  const [failedSource, setFailedSource] = useState<string>();
  const [loadedSource, setLoadedSource] = useState<string>();
  const source = src ?? props.srcSet;
  const failed = !source || failedSource === source;
  return <figure data-hulmio-ui="image" data-radius={radius} className={cn("h-image", className)} style={style}><div className="h-image-frame" style={{ aspectRatio }}>{failed ? <div className="h-image-fallback" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={!alt || undefined}>{fallback ?? <span aria-hidden="true">Image unavailable</span>}</div> : <>{loadingFallback && loadedSource !== source && <div className="h-image-loading" role="status">{loadingFallback}</div>}<img {...props} ref={ref} src={src} alt={alt} loading={loading} style={{ objectFit: fit, ...(loadingFallback && loadedSource !== source ? { position: "absolute", opacity: 0 } : {}) }} onLoad={event => { setLoadedSource(source); onLoad?.(event); }} onError={event => { setFailedSource(source); onError?.(event); }} /></>}</div>{caption && <figcaption>{caption}</figcaption>}</figure>;
});
Image.displayName = "Image";

export interface MeterProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  label: string;
  value: number;
  min?: number;
  max?: number;
  valueText?: string;
  showValue?: boolean;
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}
export const Meter = forwardRef<HTMLDivElement, MeterProps>(({ label, value, min = 0, max = 100, valueText, showValue = true, showLabel = true, tone = "primary", size = "md", className, ...props }, ref) => {
  const labelId = useId();
  const lower = Number.isFinite(min) ? min : 0;
  const upper = Number.isFinite(max) && max > lower ? max : lower + 100;
  const current = Math.min(upper, Math.max(lower, Number.isFinite(value) ? value : lower));
  return <div {...props} ref={ref} data-hulmio-ui="meter" data-tone={tone} data-size={size} className={cn("h-meter", className)}><div className="h-meter-label"><span id={labelId} className={showLabel ? undefined : "h-visually-hidden"}>{label}</span>{showValue && <span aria-hidden="true">{valueText ?? `${current} / ${upper}`}</span>}</div><div role="meter" aria-labelledby={labelId} aria-valuenow={current} aria-valuemin={lower} aria-valuemax={upper} aria-valuetext={valueText} className="h-meter-track"><span className="h-meter-fill" style={{ width: `${(current - lower) / (upper - lower) * 100}%` }} /></div></div>;
});
Meter.displayName = "Meter";

export interface ClipboardProps extends Omit<ButtonProps, "children" | "onCopy" | "onError" | "value"> {
  value: string;
  children?: ReactNode;
  copiedLabel?: string;
  onCopy?: (value: string) => void;
  onError?: (error: Error) => void;
  resetAfter?: number;
}
export function Clipboard({ value, children = "Copy", copiedLabel = "Copied", onCopy, onError, resetAfter = 2000, disabled, ...props }: ClipboardProps) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const mounted = useRef(true);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; clearTimeout(timer.current); }; }, []);
  useEffect(() => { clearTimeout(timer.current); setStatus("idle"); }, [value]);
  const copy = async () => {
    clearTimeout(timer.current);
    setStatus("copying");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard access is unavailable. Select and copy the text manually.");
      await navigator.clipboard.writeText(value);
      if (!mounted.current) return;
      setStatus("copied");
      onCopy?.(value);
      timer.current = setTimeout(() => setStatus("idle"), Math.max(0, resetAfter));
    } catch (cause) {
      if (!mounted.current) return;
      setStatus("error");
      onError?.(cause instanceof Error ? cause : new Error("Could not copy to clipboard."));
    }
  };
  return <span data-hulmio-ui="clipboard" className="h-clipboard"><Button {...props} disabled={disabled || status === "copying"} onClick={event => { props.onClick?.(event); if (!event.defaultPrevented) void copy(); }}><span aria-hidden="true">{status === "copied" ? <Check size={15} /> : <Copy size={15} />}</span>{status === "copied" ? copiedLabel : children}</Button><span role="status" className={status === "error" ? "h-clipboard-error" : "h-visually-hidden"}>{status === "copied" ? copiedLabel : status === "error" ? "Could not copy. Select and copy the text manually." : ""}</span></span>;
}
