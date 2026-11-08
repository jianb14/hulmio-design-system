import { DropdownMenu, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <DropdownMenu trigger={<Button variant="outline">Document actions</Button>} items={[{ label: "Edit document", shortcut: "⌘E" }, { label: "Duplicate", shortcut: "⌘D" }, { label: "Archive", disabled: true }, { label: "Delete document", destructive: true }]} />
    </div>
  );
}
