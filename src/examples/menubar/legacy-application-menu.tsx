import { useState } from "react";
import { Menubar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [message, setMessage] = useState("No action selected.");
  const items = [{ id: "open", label: "Open file", onSelect: () => setMessage("File opened.") }, { id: "duplicate", label: "Duplicate", onSelect: () => setMessage("File duplicated.") }, { id: "delete", label: "Delete", destructive: true, separatorBefore: true, onSelect: () => setMessage("File deleted.") }, { id: "archive", label: "Move to archive", disabled: true }];
  return (
    <div><Menubar menus={[{ id: "file", label: "File", items }, { id: "edit", label: "Edit", items: [{ id: "undo", label: "Undo", onSelect: () => setMessage("Last action undone.") }] }]} /><p role="status">{message}</p></div>
  );
}
