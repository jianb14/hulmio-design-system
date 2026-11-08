import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><DataTable caption="Team performance" columns={[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]} rows={[{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }]}  /></>
    </div>
  );
}
