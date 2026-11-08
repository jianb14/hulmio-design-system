import { DataTable, Avatar, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DataTable caption="Team performance" columns={[{ key: "name", label: "Name", render: (value, row) => <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Avatar name={String(value)} size="sm" />{row.name}</span> }, { key: "role", label: "Role", render: value => <Badge tone="primary">{value}</Badge> }, { key: "score", label: "Score", sortable: true, render: value => <strong>{value}/100</strong> }]} rows={[{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }]} />
    </div>
  );
}
