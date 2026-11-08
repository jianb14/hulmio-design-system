import { TextField, SearchField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TextField label="Username" description="Letters and numbers only." /><SearchField label="Search" description="Search by title or owner." />
    </div>
  );
}
