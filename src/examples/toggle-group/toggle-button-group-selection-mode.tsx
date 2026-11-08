import * as React from "react";
import { ToggleGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("grid"); const [values, setValues] = React.useState<string[]>(["bold"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ToggleGroup label="Text formatting" selectionMode="multiple" values={values} onValuesChange={setValues} options={[{ value: "bold", label: "Bold" }, { value: "italic", label: "Italic" }, { value: "underline", label: "Underline" }]} /><output role="status">Active formatting: {values.join(", ") || "none"}</output>
    </div>
  );
}
