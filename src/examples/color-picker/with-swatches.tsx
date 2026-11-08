import * as React from "react";
import { ComposedColorPicker, ColorSwatchPicker, parseColor } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [color,setColor] = React.useState(parseColor("#284c3f"));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ComposedColorPicker label="Brand color" value={color} onChange={setColor}><ColorSwatchPicker label="Palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} value={color.toString("hex")} onValueChange={value => setColor(parseColor(value))} /></ComposedColorPicker>
    </div>
  );
}
