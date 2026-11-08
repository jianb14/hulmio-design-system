import * as React from "react";
import { ContextMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState(""); const [checked, setChecked] = React.useState(true); const [menu, setMenu] = React.useState(""); const [theme, setTheme] = React.useState("light"); const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ContextMenu items={[{ id: "open", label: "Open document", onSelect: () => setMessage("Document opened."),  }, { id: "archive", label: "Archive", separatorBefore: false, onSelect: () => setMessage("Document archived.") }]} ><div tabIndex={0} style={{ padding: 24, border: "1px solid var(--hulmio-control-border)", borderRadius: 12 }}>Right-click, or press Shift+F10 here.</div></ContextMenu><output role="status">{message}</output>
    </div>
  );
}
