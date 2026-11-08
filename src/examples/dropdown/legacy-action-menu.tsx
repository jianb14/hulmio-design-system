import { useState } from "react";
import { DropdownMenu, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  return (
    <DropdownMenu trigger={<Button variant="outline">Project actions</Button>} items={[{ label: "Show completed", checked: showCompleted, onCheckedChange: setShowCompleted }, { label: "Duplicate" }, { label: "Archive" }, { label: "Delete", destructive: true }]} />
  );
}
