import * as React from "react";
import { Toggle } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>{(["primary", "outline", "ghost"] as const).map(variant => <Toggle key={variant} variant={variant} defaultPressed>{variant}</Toggle>)}</div>
    </div>
  );
}
