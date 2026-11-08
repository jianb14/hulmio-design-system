import * as React from "react";
import { ColorArea, parseColor } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [color,setColor] = React.useState(parseColor("hsl(155, 55%, 42%)"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorArea value={color} onChange={setColor} colorSpace="hsb" xChannel="saturation" yChannel="brightness" /><output aria-live="polite">{color.toString("hexa")}</output>
    </div>
  );
}
