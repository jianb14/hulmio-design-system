import { SearchField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><SearchField label="Search projects" placeholder="Type here…" variant="outline" /><SearchField label="Search projects" placeholder="Type here…" variant="filled" /><SearchField label="Search projects" placeholder="Type here…" variant="underline" /></div>
    </div>
  );
}
