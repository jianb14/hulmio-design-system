import * as React from "react";
import { TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TextField label="Display name" placeholder="Type here…" value={value} onChange={setValue} /><output aria-live="polite">{value}</output>
    </div>
  );
}
