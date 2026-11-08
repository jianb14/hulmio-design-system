import * as React from "react";
import { Menubar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState(""); const [checked, setChecked] = React.useState(true); const [menu, setMenu] = React.useState(""); const [theme, setTheme] = React.useState("light"); const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Menubar menus={[{ id: "file", label: "File", items: [{ id: "open", label: "Open document", onSelect: () => setMessage("Document opened."),  }, { id: "archive", label: "Archive", separatorBefore: false, onSelect: () => setMessage("Document archived.") }] }, { id: "edit", label: "Edit", items: [{ id: "copy", label: "Copy", onSelect: () => setMessage("Copied.") }] }]}  /><output role="status">{message}</output>
    </div>
  );
}
