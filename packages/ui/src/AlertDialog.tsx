import { useRef, useState } from "react";
import type { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { Button } from "./Button";
import { cn } from "./utils";
import type { ModalProps } from "./Modal";
import type { Tone } from "./Display";

export interface AlertDialogProps extends Omit<ModalProps, "children" | "drawer" | "side" | "nonModal" | "fullscreen"> {
  description: string;
  children?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void | Promise<void>;
  onConfirmError?: (error: unknown) => void;
  tone?: Tone;
  icon?: ReactNode;
}

/** Safe initial focus; asynchronous confirmation closes only after success. */
export function AlertDialog({ title, description, trigger, children, confirmLabel = "Continue", cancelLabel = "Cancel", destructive, onConfirm, onConfirmError, open, defaultOpen = false, onOpenChange, portalContainer, tone = "warning", icon, size = "md", placement = "center", backdrop = "opaque", dismissable = false, keyboardDismiss = true, className, style, backdropClassName, backdropStyle, contentProps }: AlertDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const pendingRef = useRef(false);
  const changeOpen = (next: boolean) => { if (pendingRef.current) return; setInternalOpen(next); onOpenChange?.(next); if (next) setError(""); };
  const StatusIcon = tone === "success" ? CheckCircle : tone === "danger" ? XCircle : tone === "warning" ? AlertTriangle : Info;
  async function confirm() {
    if (pendingRef.current) return;
    pendingRef.current = true; setPending(true); setError("");
    try { await onConfirm(); pendingRef.current = false; changeOpen(false); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to complete. Please try again."); onConfirmError?.(cause); }
    finally { pendingRef.current = false; setPending(false); }
  }
  return <DialogPrimitive.Root open={open ?? internalOpen} onOpenChange={changeOpen}>
    {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
    <DialogPrimitive.Portal container={portalContainer}>
      <DialogPrimitive.Overlay data-hulmio-ui="overlay" data-backdrop={backdrop} className={cn("dialog-overlay", backdropClassName)} style={backdropStyle} />
      <DialogPrimitive.Content {...contentProps} data-hulmio-ui="alert-dialog" data-size={size} data-placement={placement} data-tone={tone} className={cn("dialog-content h-alert-dialog", className)} style={style} role="alertdialog" aria-busy={pending || undefined}
        onOpenAutoFocus={event => { contentProps?.onOpenAutoFocus?.(event); if (!event.defaultPrevented) { event.preventDefault(); cancelRef.current?.focus(); } }}
        onEscapeKeyDown={event => { contentProps?.onEscapeKeyDown?.(event); if (!keyboardDismiss || pending) event.preventDefault(); }}
        onInteractOutside={event => { contentProps?.onInteractOutside?.(event); if (!dismissable || pending) event.preventDefault(); }}>
        <span className="h-dialog-status-icon" aria-hidden="true">{icon ?? <StatusIcon />}</span>
        <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        <DialogPrimitive.Description className="dialog-description">{description}</DialogPrimitive.Description>
        {children}{error && <p role="alert">{error}</p>}
        <div className="h-alert-dialog-actions">
          <DialogPrimitive.Close asChild><Button ref={cancelRef} variant="outline" disabled={pending}>{cancelLabel}</Button></DialogPrimitive.Close>
          <Button variant={destructive ? "destructive" : "primary"} disabled={pending} onClick={confirm}>{pending ? "Working…" : confirmLabel}</Button>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}
