import { useState } from "react";
import { ColorSwatchPicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [color, setColor] = useState("#284c3f");
  const colors = [{ value: "#284c3f", label: "Forest" }, { value: "#d9ed92", label: "Lime" }, { value: "#a36c50", label: "Clay" }, { value: "#436fa4", label: "Lake" }, { value: "#c5c9c0", label: "Mist", disabled: true }];
  return (
    <div><ColorSwatchPicker label="Brand color" colors={colors} value={color} onValueChange={setColor} shape="square" /><output>Selected: {color}</output></div>
  );
}
