import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "./utils";

export interface ModalProps {
  trigger?: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  drawer?: boolean;
  side?: "right" | "left" | "bottom" | "top";
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  nonModal?: boolean;
  fullscreen?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  placement?: "top" | "center" | "bottom";
  backdrop?: "opaque" | "blur" | "transparent";
  dismissable?: boolean;
  keyboardDismiss?: boolean;
  hideCloseButton?: boolean;
  closeIcon?: ReactNode;
  scrollBehavior?: "inside" | "outside";
  className?: string;
  style?: CSSProperties;
  backdropClassName?: string;
  backdropStyle?: CSSProperties;
  contentProps?: Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, "children" | "title" | "className" | "style">;
  /** Mount inside a themed subtree instead of document.body. */
  portalContainer?: HTMLElement | null;
}

export function Modal({ trigger, title, description, children, drawer = false, side = "right", open, defaultOpen, onOpenChange, nonModal = false, fullscreen = false, portalContainer, size = "md", placement = "center", backdrop = "opaque", dismissable = true, keyboardDismiss = true, hideCloseButton, closeIcon, scrollBehavior = "inside", className, style, backdropClassName, backdropStyle, contentProps }: ModalProps) {
  return <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange} modal={!nonModal}>
    {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
    <DialogPrimitive.Portal container={portalContainer}>
      {!nonModal && <DialogPrimitive.Overlay data-hulmio-ui="overlay" data-backdrop={backdrop} className={cn("dialog-overlay", backdropClassName)} style={backdropStyle} />}
      <div className={scrollBehavior === "outside" && !drawer ? "h-dialog-scroll-container" : undefined}><DialogPrimitive.Content {...contentProps} data-hulmio-ui="modal" data-size={size} data-placement={placement} data-scroll={scrollBehavior}
        className={cn("dialog-content", drawer && `drawer drawer-${side}`, nonModal && "popover-content", (fullscreen || size === "full") && "dialog-fullscreen", className)} style={style}
        onEscapeKeyDown={event => { contentProps?.onEscapeKeyDown?.(event); if (!keyboardDismiss) event.preventDefault(); }}
        onInteractOutside={event => { contentProps?.onInteractOutside?.(event); if (!dismissable) event.preventDefault(); }}>
        <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
        <DialogPrimitive.Description className={description ? "dialog-description" : "sr-only"}>{description || `Details for ${title}`}</DialogPrimitive.Description>
        <div className="h-dialog-body">{children}</div>
        {!hideCloseButton && <DialogPrimitive.Close className="dialog-close" aria-label="Close dialog">{closeIcon ?? <X size={18} />}</DialogPrimitive.Close>}
      </DialogPrimitive.Content></div>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}
export const DialogClose = DialogPrimitive.Close;
