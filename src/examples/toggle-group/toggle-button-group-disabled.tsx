import * as React from "react";
import { ToggleGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("grid"); const [values, setValues] = React.useState<string[]>(["bold"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ToggleGroup label="Project view" options={[{ value: "grid", label: "Grid" }, { value: "list", label: "List" }, { value: "board", label: "Board" }]} value={value} onValueChange={setValue} disabled />
    </div>
  );
}
