import { useState } from "react";
import { ContextMenu } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [message, setMessage] = useState("No action selected.");
  const [guides, setGuides] = useState(true);
  const items = [{ id: "open", label: "Open file", onSelect: () => setMessage("File opened.") }, { id: "duplicate", label: "Duplicate", onSelect: () => setMessage("File duplicated.") }, { id: "delete", label: "Delete", destructive: true, separatorBefore: true, onSelect: () => setMessage("File deleted.") }, { id: "archive", label: "Move to archive", disabled: true }];
  return (
    <div><ContextMenu items={[{ id: "guides", label: "Show guides", checked: guides, onCheckedChange: setGuides }, { id: "export", label: "Export", items: [{ id: "pdf", label: "PDF", onSelect: () => setMessage("PDF export selected.") }, { id: "svg", label: "SVG", onSelect: () => setMessage("SVG export selected.") }] }, ...items]}><button type="button" style={{ minHeight: 130, padding: 24 }}>Right-click this project</button></ContextMenu><p role="status">{message}</p></div>
  );
}
