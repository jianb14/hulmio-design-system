import { useState } from "react";
import { CheckboxCard } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [checked, setChecked] = useState(true);
  return (
    <div style={{ display: "grid", gap: 16 }}><CheckboxCard label="Weekly digest" description="A thoughtful summary, every Monday." checked={checked} onCheckedChange={setChecked} variant="outline" /><CheckboxCard label="Product updates" description="Only the changes that matter." variant="outline" /><CheckboxCard label="SMS notifications" description="Not available for this workspace." disabled /><output>Weekly digest: {checked ? "on" : "off"}</output></div>
  );
}
