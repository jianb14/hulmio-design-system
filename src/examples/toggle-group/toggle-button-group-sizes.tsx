import * as React from "react";
import { ToggleGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("grid"); const [values, setValues] = React.useState<string[]>(["bold"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      {(["sm", "md", "lg"] as const).map(size => <ToggleGroup key={size} label={size + " views"} size={size} options={[{ value: "grid", label: "Grid" }, { value: "list", label: "List" }, { value: "board", label: "Board" }]} defaultValue="grid" />)}
    </div>
  );
}
