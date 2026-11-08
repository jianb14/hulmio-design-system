import { composeRenderProps } from "react-aria-components";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import {
  ColorArea as AriaColorArea, ColorField as AriaColorField, ColorSlider as AriaColorSlider,
  ColorSwatch as AriaColorSwatch, ColorThumb, SliderTrack, SliderOutput, Label, Input,
  ColorPicker as AriaColorPicker, DialogTrigger, Button, Popover, Dialog, Group,
} from "react-aria-components";
import type {
  ColorAreaProps as AriaColorAreaProps, ColorFieldProps as AriaColorFieldProps,
  ColorSliderProps as AriaColorSliderProps, ColorSwatchProps as AriaColorSwatchProps,
  ColorPickerProps as AriaColorPickerProps, Color,
} from "react-aria-components";
import { Description, FieldError } from "./FormFields";
import { cn } from "./utils";

export { parseColor } from "react-aria-components";
export type { Color } from "react-aria-components";
export interface ColorAreaProps extends AriaColorAreaProps { showDots?: boolean }
export const ColorArea = forwardRef<HTMLDivElement, ColorAreaProps>(({ showDots, children, ...props }, ref) => <AriaColorArea {...props} ref={ref} data-hulmio-ui="color-area" data-dots={showDots || undefined} className={composeRenderProps(props.className, custom => cn("h-parity-color-area", custom))}>{state => <><ColorThumb className="h-parity-color-thumb" />{typeof children === "function" ? children(state) : children}</>}</AriaColorArea>);
ColorArea.displayName = "ColorArea";
export interface ColorFieldProps extends AriaColorFieldProps { label?: ReactNode; description?: ReactNode; error?: ReactNode; prefix?: ReactNode; suffix?: ReactNode; variant?: "outline" | "filled" | "underline"; fullWidth?: boolean; inputClassName?: string; placeholder?: string }
export const ColorField = forwardRef<HTMLInputElement, ColorFieldProps>(({ label, description, error, prefix, suffix, variant = "outline", fullWidth, inputClassName, placeholder, children, ...props }, ref) => <AriaColorField {...props} data-hulmio-ui="color-field" data-variant={variant} data-full-width={fullWidth || undefined} className={composeRenderProps(props.className, custom => cn("h-rich-field", custom))}>{state => <>{label && <Label className="h-label">{label}</Label>}<Group className="h-rich-shell">{prefix}<Input ref={ref} placeholder={placeholder} className={cn("h-rich-entry", inputClassName)} />{suffix}</Group>{description && <Description>{description}</Description>}<FieldError>{error}</FieldError>{typeof children === "function" ? children(state) : children}</>}</AriaColorField>);
ColorField.displayName = "ColorField";
export interface ColorSliderProps extends AriaColorSliderProps { label?: ReactNode; showOutput?: boolean }
export const ColorSlider = forwardRef<HTMLDivElement, ColorSliderProps>(({ label, showOutput = true, children, ...props }, ref) => <AriaColorSlider {...props} ref={ref} data-hulmio-ui="color-slider" className={composeRenderProps(props.className, custom => cn("h-parity-color-slider", custom))}>{state => <>{label && <Label className="h-label">{label}</Label>}{showOutput && <SliderOutput className="h-hint" />}<SliderTrack className="h-parity-color-track"><ColorThumb className="h-parity-color-thumb" /></SliderTrack>{typeof children === "function" ? children(state) : children}</>}</AriaColorSlider>);
ColorSlider.displayName = "ColorSlider";
export interface ColorSwatchProps extends AriaColorSwatchProps { size?: "sm" | "md" | "lg"; shape?: "square" | "circle"; colorName?: string }
export const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(({ size = "md", shape = "square", colorName, ...props }, ref) => <AriaColorSwatch {...props} ref={ref} aria-label={props["aria-label"] ?? colorName} data-hulmio-ui="color-swatch" data-size={size} data-shape={shape} className={composeRenderProps(props.className, custom => cn("h-parity-color-swatch", custom))} />);
ColorSwatch.displayName = "ColorSwatch";
export interface ComposedColorPickerProps extends Omit<AriaColorPickerProps, "children"> { label?: string; children?: ReactNode | ((color: Color) => ReactNode); isDisabled?: boolean; isOpen?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void }
/** Opt-in composition leaves ColorPicker's native input and input ref intact. */
export function ComposedColorPicker({ label = "Choose color", children, isDisabled, isOpen, defaultOpen, onOpenChange, ...props }: ComposedColorPickerProps) { return <AriaColorPicker {...props}>{({ color }) => <DialogTrigger isOpen={isOpen} defaultOpen={defaultOpen} onOpenChange={onOpenChange}><Button isDisabled={isDisabled} className="h-parity-color-trigger"><ColorSwatch color={color} />{label}</Button><Popover className="h-rich-popover h-parity-color-popover"><Dialog aria-label={label} className="h-rich-field"><ColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" /><ColorSlider colorSpace="hsb" channel="hue" label="Hue" /><ColorField label="Color" />{typeof children === "function" ? children(color) : children}</Dialog></Popover></DialogTrigger>}</AriaColorPicker>; }
