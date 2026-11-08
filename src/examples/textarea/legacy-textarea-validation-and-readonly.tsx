import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Textarea label="Required notes" required error="Add a few details before continuing." />
      <Textarea label="Readonly notes" readOnly defaultValue="This content is shared with the team." />
      <Textarea label="Unavailable notes" disabled placeholder="Editing is unavailable" />
    </div>
  );
}
