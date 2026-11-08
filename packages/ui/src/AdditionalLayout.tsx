import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";
import type { GroupProps, PanelProps, SeparatorProps } from "react-resizable-panels";
export { useGroupRef as useResizableGroupRef } from "react-resizable-panels";
import { cn } from "./utils";

export interface ResizableProps extends GroupProps {}
export const Resizable = forwardRef<HTMLDivElement, ResizableProps>(({ className, ...props }, ref) => <Group {...props} elementRef={ref} data-hulmio-ui="resizable" className={cn("h-resizable", className)} />);
Resizable.displayName = "Resizable";
export interface ResizablePanelProps extends PanelProps {}
export const ResizablePanel = forwardRef<HTMLDivElement, ResizablePanelProps>(({ className, ...props }, ref) => <Panel {...props} elementRef={ref} data-hulmio-ui="resizable-panel" className={cn("h-resizable-panel", className)} />);
ResizablePanel.displayName = "ResizablePanel";
export interface ResizableHandleProps extends SeparatorProps { label?: string }
export const ResizableHandle = forwardRef<HTMLDivElement, ResizableHandleProps>(({ label = "Resize panels", className, children, ...props }, ref) => <Separator {...props} elementRef={ref} aria-label={label} data-hulmio-ui="resizable-handle" className={cn("h-resizable-handle", className)}>{children ?? <span className="h-resizable-grip" aria-hidden="true" />}</Separator>);
ResizableHandle.displayName = "ResizableHandle";

export interface ScrollShadowProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal" | "both";
  maxHeight?: number | string;
  shadowSize?: number;
  hideScrollBar?: boolean;
  isEnabled?: boolean;
  offset?: number;
  onVisibilityChange?: (edges: { top: boolean; bottom: boolean; left: boolean; right: boolean }) => void;
}
export const ScrollShadow = forwardRef<HTMLDivElement, ScrollShadowProps>(({ children, orientation = "vertical", maxHeight = 240, shadowSize = 24, hideScrollBar, isEnabled = true, offset = 1, onVisibilityChange, className, style, onScroll, tabIndex = 0, ...props }, forwardedRef) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false, left: false, right: false });
  const measure = useCallback(() => {
    const node = scrollRef.current;
    if (!node) return;
    const next = { top: node.scrollTop > offset, bottom: node.scrollTop + node.clientHeight < node.scrollHeight - offset, left: node.scrollLeft > offset, right: node.scrollLeft + node.clientWidth < node.scrollWidth - offset };
    setEdges(previous => Object.keys(next).every(key => next[key as keyof typeof next] === previous[key as keyof typeof next]) ? previous : next);
  }, [offset]);
  useEffect(() => { onVisibilityChange?.(edges); }, [edges, onVisibilityChange]);
  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    Array.from(node.children).forEach(child => observer.observe(child));
    const mutations = new MutationObserver(() => { Array.from(node.children).forEach(child => observer.observe(child)); measure(); });
    mutations.observe(node, { childList: true, subtree: true, characterData: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, [measure]);
  const vertical = isEnabled && orientation !== "horizontal";
  const horizontal = isEnabled && orientation !== "vertical";
  const masks = [vertical && `linear-gradient(to bottom, ${edges.top ? `transparent, #000 ${shadowSize}px` : "#000"}, ${edges.bottom ? `#000 calc(100% - ${shadowSize}px), transparent` : "#000"})`, horizontal && `linear-gradient(to right, ${edges.left ? `transparent, #000 ${shadowSize}px` : "#000"}, ${edges.right ? `#000 calc(100% - ${shadowSize}px), transparent` : "#000"})`].filter(Boolean).join(", ");
  return <div {...props} ref={node => { scrollRef.current = node; if (typeof forwardedRef === "function") forwardedRef(node); else if (forwardedRef) forwardedRef.current = node; }} data-hulmio-ui="scroll-shadow" data-orientation={orientation} data-hide-scrollbar={hideScrollBar || undefined} data-top-shadow={vertical && edges.top || undefined} data-bottom-shadow={vertical && edges.bottom || undefined} data-left-shadow={horizontal && edges.left || undefined} data-right-shadow={horizontal && edges.right || undefined} className={cn("h-scroll-shadow", className)} tabIndex={tabIndex} onScroll={event => { measure(); onScroll?.(event); }} style={{ maxHeight, maskImage: masks || undefined, maskComposite: "intersect", ...style } as CSSProperties}>{children}</div>;
});
ScrollShadow.displayName = "ScrollShadow";
