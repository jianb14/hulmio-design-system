import * as React from "react";
import { Button, Sheet, DialogClose, ListBox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [profession, setProfession] = React.useState<string[]>([]);
  const professions = Array.from({ length: 1000 }, (_, index) => ({ id: String(index), label: ["Designer", "Engineer", "Researcher", "Architect", "Writer"][index % 5] + " " + (index + 1) }));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Sheet title="Project details" description="Review and update your project." trigger={<Button variant="outline">Professions Picker</Button>}  open={open} onOpenChange={setOpen} snapPoints={[355, 0.95]} ><label>Search professions <input type="search" value={query} onChange={event => setQuery(event.target.value)} /></label><ListBox label="Professions" options={professions.filter(option => option.label.toLowerCase().includes(query.toLowerCase()))} selectedKeys={profession} onSelectionChange={keys => { setProfession(keys); setMessage("Selected " + professions.find(option => option.id === keys[0])?.label); setOpen(false); }} virtualized height={260} rowHeight={44} /></Sheet><p role="status">{message}</p></div>
    </div>
  );
}
