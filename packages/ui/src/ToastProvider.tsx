import { createContext, useContext, useEffect, useRef, useSyncExternalStore } from "react";
import type { CSSProperties, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Toast } from "./Overlays";
import type { Tone } from "./Display";

export interface ToastOptions {
  title: ReactNode;
  description?: ReactNode;
  tone?: Tone;
  indicator?: ReactNode;
  timeout?: number;
  isLoading?: boolean;
  action?: { label: string; onAction: () => void };
  onClose?: () => void;
  onAction?: () => void;
}
export interface ToastRecord extends ToastOptions { id: string }
export interface ToastPromiseOptions<T> {
  loading: ReactNode;
  success: ReactNode | ((value: T) => ReactNode);
  error: ReactNode | ((error: unknown) => ReactNode);
  timeout?: number;
}
let nextToast = 0;
/** Each queue owns its records and clocks; providers only render and pause them. */
export class ToastQueue {
  private records: ToastRecord[] = [];
  private listeners = new Set<() => void>();
  private clocks = new Map<string, { timer?: ReturnType<typeof setTimeout>; remaining: number; started: number }>();
  private paused = false;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  getSnapshot = () => this.records;
  private emit() { for (const listener of this.listeners) listener(); }
  private schedule(id: string, timeout: number) {
    const old = this.clocks.get(id); if (old?.timer) clearTimeout(old.timer);
    if (timeout <= 0 || !Number.isFinite(timeout)) { this.clocks.delete(id); return; }
    const clock = { remaining: timeout, started: Date.now(), timer: undefined as ReturnType<typeof setTimeout> | undefined };
    if (!this.paused) clock.timer = setTimeout(() => this.close(id), timeout);
    this.clocks.set(id, clock);
  }
  add(options: ToastOptions): string { const id = `hulmio-toast-${++nextToast}`; this.records = [...this.records, { ...options, id }]; this.schedule(id, options.isLoading ? 0 : options.timeout ?? 5000); this.emit(); return id; }
  update(id: string, options: Partial<ToastOptions>) {
    if (!this.records.some(record => record.id === id)) return;
    this.records = this.records.map(record => record.id === id ? { ...record, ...options } : record);
    if (options.timeout !== undefined || options.isLoading !== undefined) { const record = this.records.find(item => item.id === id)!; this.schedule(id, record.isLoading ? 0 : record.timeout ?? 5000); }
    this.emit();
  }
  close = (id: string) => {
    const record = this.records.find(item => item.id === id); if (!record) return;
    const clock = this.clocks.get(id); if (clock?.timer) clearTimeout(clock.timer); this.clocks.delete(id);
    this.records = this.records.filter(item => item.id !== id); this.emit(); record.onClose?.();
  };
  clear = () => { for (const record of [...this.records]) this.close(record.id); };
  pauseAll = () => { if (this.paused) return; this.paused = true; for (const clock of this.clocks.values()) { if (clock.timer) clearTimeout(clock.timer); clock.remaining = Math.max(1, clock.remaining - (Date.now() - clock.started)); clock.timer = undefined; } };
  resumeAll = () => { if (!this.paused) return; this.paused = false; for (const [id, clock] of this.clocks) this.schedule(id, clock.remaining); };
  async promise<T>(promise: Promise<T>, options: ToastPromiseOptions<T>): Promise<T> {
    const id = this.add({ title: options.loading, isLoading: true });
    try { const value = await promise; this.update(id, { title: typeof options.success === "function" ? options.success(value) : options.success, isLoading: false, tone: "success", timeout: options.timeout ?? 5000 }); return value; }
    catch (error) { this.update(id, { title: typeof options.error === "function" ? options.error(error) : options.error, isLoading: false, tone: "danger", timeout: options.timeout ?? 5000 }); throw error; }
  }
}
export const defaultToastQueue = new ToastQueue();
export const toast = Object.assign((title: ReactNode, options: Omit<ToastOptions, "title"> = {}) => defaultToastQueue.add({ ...options, title }), {
  success: (title: ReactNode, options: Omit<ToastOptions, "title"> = {}) => defaultToastQueue.add({ ...options, title, tone: "success" }),
  error: (title: ReactNode, options: Omit<ToastOptions, "title"> = {}) => defaultToastQueue.add({ ...options, title, tone: "danger" }),
  promise: <T,>(promise: Promise<T>, options: ToastPromiseOptions<T>) => defaultToastQueue.promise(promise, options),
  dismiss: (id?: string) => id ? defaultToastQueue.close(id) : defaultToastQueue.clear(),
});
const ToastContext = createContext(defaultToastQueue);
export const useToast = () => useContext(ToastContext);
export interface ToastProviderProps {
  children?: ReactNode;
  queue?: ToastQueue;
  placement?: "top-left" | "top" | "top-right" | "bottom-left" | "bottom" | "bottom-right";
  expanded?: boolean;
  maxVisibleToasts?: number;
  gap?: number;
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  portalContainer?: HTMLElement | null;
  renderToast?: (record: ToastRecord, close: () => void) => ReactNode;
}
export function ToastProvider({ children, queue = defaultToastQueue, placement = "bottom-right", expanded = false, maxVisibleToasts = 3, gap = 12, width = 380, className, style, portalContainer, renderToast }: ToastProviderProps) {
  const records = useSyncExternalStore(queue.subscribe, queue.getSnapshot, queue.getSnapshot);
  const region = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);
  const focusedToast = useRef<HTMLElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const resumeIfAvailable = () => { if (!document.hidden && !hovered.current && !region.current?.contains(document.activeElement)) queue.resumeAll(); };
  useEffect(() => {
    if (focusedToast.current && !focusedToast.current.isConnected) {
      focusedToast.current = null;
      const next = region.current?.querySelector<HTMLElement>("button");
      (next ?? (previousFocus.current?.isConnected ? previousFocus.current : null))?.focus();
    }
    if (!records.length) hovered.current = false;
    resumeIfAvailable();
  }, [records, queue]);
  useEffect(() => {
    const visibility = () => document.hidden ? queue.pauseAll() : resumeIfAvailable();
    const hotkey = (event: KeyboardEvent) => { if (event.key === "F8") { event.preventDefault(); region.current?.querySelector<HTMLElement>("button")?.focus(); } };
    document.addEventListener("visibilitychange", visibility); document.addEventListener("keydown", hotkey);
    return () => { document.removeEventListener("visibilitychange", visibility); document.removeEventListener("keydown", hotkey); queue.resumeAll(); };
  }, [queue]);
  const viewport = <div ref={region} data-hulmio-ui="toast-provider" className={["h-toast-viewport", className].filter(Boolean).join(" ")} data-placement={placement} data-expanded={expanded || undefined} aria-label="Notifications" role="region" aria-live="polite" aria-relevant="additions text" style={{ gap, width, ...style }}
    onPointerEnter={() => { hovered.current = true; queue.pauseAll(); }} onPointerLeave={() => { hovered.current = false; resumeIfAvailable(); }} onFocus={event => { if (!event.currentTarget.contains(event.relatedTarget)) previousFocus.current = event.relatedTarget as HTMLElement | null; focusedToast.current = event.target; queue.pauseAll(); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) { focusedToast.current = null; if (!document.hidden && !hovered.current) queue.resumeAll(); } }}
    onKeyDown={event => { if (event.key === "Escape") { const item = (event.target as HTMLElement).closest<HTMLElement>("[data-toast-id]"); if (item?.dataset.toastId) queue.close(item.dataset.toastId); } }}>
    {records.slice(-Math.max(1, maxVisibleToasts)).map((record, index) => <div key={record.id} data-toast-id={record.id} className="h-toast-stack-item" style={{ "--h-toast-index": index } as CSSProperties}>
      {renderToast ? renderToast(record, () => queue.close(record.id)) : <Toast title={record.title} description={record.description} tone={record.tone} indicator={record.indicator} isLoading={record.isLoading} onDismiss={() => queue.close(record.id)} action={record.action && { label: record.action.label, onAction: () => { record.action?.onAction(); record.onAction?.(); queue.close(record.id); } }} />}
    </div>)}
  </div>;
  return <ToastContext.Provider value={queue}>{children}{typeof document !== "undefined" && createPortal(viewport, portalContainer ?? document.body)}</ToastContext.Provider>;
}
