import { forwardRef, useContext, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode, ReactElement, RefAttributes } from "react";
import { cva } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "./utils";
import { ActionGroupContext } from "./ActionContext";

export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "destructive-soft"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "soft"
  | "success"
  | "warning"
  | "information";
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
const buttonStyles = cva(
  "f-button inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary: "button-primary",
        secondary: "button-secondary",
        tertiary: "button-tertiary",
        "destructive-soft": "button-destructive-soft",
        outline: "button-outline",
        ghost: "button-ghost",
        link: "button-link",
        destructive: "button-destructive",
        soft: "button-soft",
        success: "button-success",
        warning: "button-warning",
        information: "button-information",
      },
      size: {
        xs: "button-xs",
        sm: "button-sm",
        md: "button-md",
        lg: "button-lg",
        xl: "button-xl",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
        square: "rounded-none",
        circle: "rounded-full aspect-square p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md", shape: "rounded" },
  },
);
export interface ButtonRenderState {
  isHovered: boolean;
  isFocused: boolean;
  isPressed: boolean;
  isPending: boolean;
  isDisabled: boolean;
}
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children?: ReactNode | ((state: ButtonRenderState) => ReactNode);
  variant?: Variant;
  size?: Size;
  shape?: "rounded" | "pill" | "square" | "circle";
  loading?: boolean;
  fullWidth?: boolean;
  spinner?: ReactNode;
  spinnerPlacement?: "start" | "end";
  ripple?: boolean;
  onPress?: () => void;
  render?: (props: ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>, state: ButtonRenderState) => ReactElement;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      shape,
      loading,
      fullWidth,
      disabled,
      spinner,
      spinnerPlacement = "start",
      ripple,
      onPress,
      render,
      className,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const group = useContext(ActionGroupContext);
    const [isHovered, setHovered] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [isPressed, setPressed] = useState(false);
    const effectiveVariant = variant ?? group.variant ?? "primary";
    const effectiveSize = size ?? group.size ?? "md";
    const isDisabled = Boolean(disabled || loading || group.disabled);
    const state: ButtonRenderState = { isHovered, isFocused, isPressed: isPressed && !isDisabled, isPending: Boolean(loading), isDisabled };
    const indicator = loading ? <span aria-hidden="true" className="h-button-spinner">{spinner ?? <LoaderCircle className="animate-spin" size={15} />}</span> : null;
    const content = typeof children === "function" ? children(state) : <>{spinnerPlacement === "start" && indicator}{children}{spinnerPlacement === "end" && indicator}</>;
    const attributes: ButtonHTMLAttributes<HTMLButtonElement> & { "data-hulmio-ui": string; "data-variant": string; "data-ripple"?: boolean; "data-pressed"?: boolean } = {
      ...props,
      "data-hulmio-ui": "button",
      "data-variant": effectiveVariant,
      "data-ripple": ripple || undefined,
      "data-pressed": state.isPressed || undefined,
      type,
      disabled: isDisabled,
      "aria-busy": loading || props["aria-busy"] || undefined,
      className: cn(buttonStyles({ variant: effectiveVariant, size: effectiveSize, shape }), "h-button", fullWidth && "w-full", className),
      onClick: event => { props.onClick?.(event); if (!event.defaultPrevented) onPress?.(); },
      onPointerEnter: event => { setHovered(true); props.onPointerEnter?.(event); },
      onPointerLeave: event => { setHovered(false); setPressed(false); props.onPointerLeave?.(event); },
      onPointerDown: event => { if (!isDisabled) setPressed(true); props.onPointerDown?.(event); },
      onPointerUp: event => { setPressed(false); props.onPointerUp?.(event); },
      onPointerCancel: event => { setPressed(false); props.onPointerCancel?.(event); },
      onFocus: event => { setFocused(true); props.onFocus?.(event); },
      onBlur: event => { setFocused(false); setPressed(false); props.onBlur?.(event); },
      onKeyDown: event => { props.onKeyDown?.(event); if (!event.defaultPrevented && (event.key === " " || event.key === "Enter")) setPressed(true); },
      onKeyUp: event => { setPressed(false); props.onKeyUp?.(event); },
      children: content,
    };
    if (render) {
      return render({ ...attributes, ref }, state);
    }
    return <button {...attributes} ref={ref} />;
  },
);
Button.displayName = "Button";
