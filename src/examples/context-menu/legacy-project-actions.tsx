import { useState } from "react";
import { ContextMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [message, setMessage] = useState("No action selected.");
  const items = [{ id: "open", label: "Open file", onSelect: () => setMessage("File opened.") }, { id: "duplicate", label: "Duplicate", onSelect: () => setMessage("File duplicated.") }, { id: "delete", label: "Delete", destructive: true, separatorBefore: true, onSelect: () => setMessage("File deleted.") }, { id: "archive", label: "Move to archive", disabled: true }];
  return (
    <div><ContextMenu items={items}><button type="button" style={{ minHeight: 130, padding: 24 }}>Right-click this project<br /><small>Or focus and press Shift + F10</small></button></ContextMenu><p role="status">{message}</p></div>
  );
}
