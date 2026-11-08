import { forwardRef } from "react";
import type { HTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "./utils";

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> { variant?: "outline" | "filled" | "underline"; orientation?: "horizontal" | "vertical" }
export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(({ className, variant = "outline", orientation = "horizontal", ...props }, ref) =>
  <div {...props} ref={ref} data-hulmio-ui="input-group" data-variant={variant} data-orientation={orientation} className={cn("h-input-group h-rich-field", className)} />);
InputGroup.displayName = "InputGroup";

export interface InputGroupAddonProps extends HTMLAttributes<HTMLDivElement> { align?: "start" | "end" }
export const InputGroupAddon = forwardRef<HTMLDivElement, InputGroupAddonProps>(({ className, align = "start", ...props }, ref) =>
  <div {...props} ref={ref} data-hulmio-ui="input-group-addon" data-align={align} className={cn("h-input-group-addon", className)} />);
InputGroupAddon.displayName = "InputGroupAddon";

export interface InputGroupInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const InputGroupInput = forwardRef<HTMLInputElement, InputGroupInputProps>(({ className, type = "text", ...props }, ref) =>
  <input {...props} ref={ref} type={type} data-hulmio-ui="input-group-input" className={cn("h-input-group-input", className)} />);
InputGroupInput.displayName = "InputGroupInput";
export interface InputGroupTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const InputGroupTextarea = forwardRef<HTMLTextAreaElement, InputGroupTextareaProps>(({ className, ...props }, ref) => <textarea {...props} ref={ref} data-hulmio-ui="input-group-textarea" className={cn("h-input-group-textarea", className)} />);
InputGroupTextarea.displayName = "InputGroupTextarea";
