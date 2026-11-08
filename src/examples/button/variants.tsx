import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>{(["primary","secondary","tertiary","outline","ghost","destructive","destructive-soft","soft","link","success","warning","information"] as const).map(variant => <Button key={variant} variant={variant} onClick={() => setMessage(variant + " selected.")}>{variant.replaceAll("-", " ").replace(/^./, letter => letter.toUpperCase())}</Button>)}</div><output role="status">{message}</output>
    </div>
  );
}
