import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DataTable caption="Team performance" columns={[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]} rows={[]} emptyMessage="No teammates yet. Invite someone to get started." />
    </div>
  );
}
