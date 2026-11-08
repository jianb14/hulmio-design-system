import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Modal } from "./Modal";
import type { ModalProps } from "./Modal";

export interface SheetProps extends Omit<ModalProps, "drawer" | "side" | "fullscreen" | "placement"> {
  placement?: "top" | "bottom" | "left" | "right";
  snapPoints?: Array<number | string>;
  activeSnapPoint?: number;
  defaultActiveSnapPoint?: number;
  onActiveSnapPointChange?: (index: number) => void;
  sequential?: boolean;
  fadeFromIndex?: number;
  handleOnly?: boolean;
  detached?: boolean;
}
/** Fractions, pixels or CSS viewport lengths; the slider handle offers the same snaps to keyboard users. */
export function Sheet({ children, placement = "bottom", snapPoints = [0.5, 0.9], activeSnapPoint, defaultActiveSnapPoint = 0, onActiveSnapPointChange, sequential, fadeFromIndex = 0, handleOnly = false, detached, style, backdropStyle, contentProps, ...props }: SheetProps) {
  const horizontal = placement === "left" || placement === "right";
  const [extent, setExtent] = useState(800);
  useEffect(() => { const update = () => setExtent(horizontal ? window.innerWidth : window.innerHeight); update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }, [horizontal]);
  const points = snapPoints.length ? snapPoints.map(point => {
    const parsed = typeof point === "number" ? (point <= 1 ? point : point / extent) : point.endsWith("%") || point.endsWith("vh") || point.endsWith("vw") ? parseFloat(point) / 100 : parseFloat(point) / extent;
    return Math.max(0.1, Math.min(1, Number.isFinite(parsed) ? parsed : 0.5));
  }) : [0.5];
  const [internal, setInternal] = useState(defaultActiveSnapPoint);
  const index = Math.max(0, Math.min(points.length - 1, activeSnapPoint ?? internal));
  const pointer = useRef<{ id: number; coordinate: number } | null>(null);
  const [drag, setDrag] = useState(0);
  const [internalOpen, setInternalOpen] = useState(props.defaultOpen ?? false);
  const changeOpen = (next: boolean) => { setInternalOpen(next); props.onOpenChange?.(next); };
  const sign = placement === "bottom" || placement === "right" ? -1 : 1;
  const change = (next: number) => { const bounded = Math.max(0, Math.min(points.length - 1, next)); setInternal(bounded); onActiveSnapPointChange?.(bounded); };
  const start = (event: ReactPointerEvent<HTMLElement>) => {
    // Events from nested portals still bubble through the React tree.
    if (event.target instanceof Element && event.target.closest('[data-hulmio-ui="modal"]') !== event.currentTarget.closest('[data-hulmio-ui="modal"]')) return;
    if ((!handleOnly && index === points.length - 1 && event.target instanceof Element && !event.target.closest(".h-sheet-handle")) || event.button !== 0 || (event.target instanceof Element && event.target.closest("input,textarea,select,a,button:not(.h-sheet-handle)"))) return;
    pointer.current = { id: event.pointerId, coordinate: horizontal ? event.clientX : event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const move = (event: ReactPointerEvent<HTMLElement>) => { if (!pointer.current || pointer.current.id !== event.pointerId) return; setDrag(((horizontal ? event.clientX : event.clientY) - pointer.current.coordinate) * sign); };
  const end = (event: ReactPointerEvent<HTMLElement>) => {
    if (!pointer.current || pointer.current.id !== event.pointerId) return;
    const delta = ((horizontal ? event.clientX : event.clientY) - pointer.current.coordinate) * sign;
    const extent = horizontal ? window.innerWidth : window.innerHeight;
    const target = points[index] + delta / extent;
    if (target < points[0] - 0.12 && props.dismissable !== false) changeOpen(false);
    else if (sequential) { if (Math.abs(delta) > 20) change(index + (delta > 0 ? 1 : -1)); }
    else change(points.reduce((best, point, candidate) => Math.abs(point - target) < Math.abs(points[best] - target) ? candidate : best, index));
    pointer.current = null; setDrag(0);
  };
  const handlers = { onPointerDown: start, onPointerMove: move, onPointerUp: end, onPointerCancel: () => { pointer.current = null; setDrag(0); } };
  const fraction = points[index];
  return <Modal {...props} open={props.open ?? internalOpen} onOpenChange={changeOpen} keyboardDismiss={props.keyboardDismiss ?? props.dismissable !== false} drawer side={placement} className={["h-sheet", detached && "h-sheet-detached", props.className].filter(Boolean).join(" ")}
    style={{ touchAction: handleOnly || index === points.length - 1 ? "auto" : "none", ...style, [horizontal ? "width" : "height"]: `calc(${fraction * 100}${horizontal ? "vw" : "dvh"} + ${drag}px)`, maxWidth: horizontal ? "calc(100vw - 16px)" : detached ? "calc(100vw - 24px)" : "100vw", maxHeight: "calc(100dvh - 16px)" }}
    backdropStyle={{ opacity: index < fadeFromIndex ? 0 : Math.max(0.15, fraction), ...backdropStyle }}
    contentProps={{ ...contentProps, ...(handleOnly ? {} : handlers) }}>
    <button type="button" className="h-sheet-handle" role="slider" aria-label="Sheet position" aria-valuemin={0} aria-valuemax={points.length - 1} aria-valuenow={index} aria-valuetext={`${Math.round(fraction * 100)} percent`} aria-orientation={horizontal ? "horizontal" : "vertical"} {...(handleOnly ? handlers : {})}
      onKeyDown={event => { if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"].includes(event.key)) { event.preventDefault(); change(event.key === "Home" ? 0 : event.key === "End" ? points.length - 1 : index + (["ArrowUp", "ArrowRight"].includes(event.key) ? 1 : -1)); } }}><span aria-hidden="true" /></button>
    {children}
  </Modal>;
}
