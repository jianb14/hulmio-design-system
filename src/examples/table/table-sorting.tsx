import * as React from "react";
import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [sort, setSort] = React.useState<{ key: string; direction: "asc" | "desc" }>({ key: "score", direction: "desc" });
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><DataTable caption="Team performance" columns={[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]} rows={[{ id: 1, name: "Alex Morgan", role: "Designer", score: 92 }, { id: 2, name: "Sam Rivera", role: "Engineer", score: 87 }, { id: 3, name: "Jordan Lee", role: "Researcher", score: 96 }, { id: 4, name: "Taylor Kim", role: "Designer", score: 89 }, { id: 5, name: "Casey Adams", role: "Engineer", score: 94 }, { id: 6, name: "Robin Cruz", role: "Researcher", score: 91 }]} sortDescriptor={sort} onSortChange={setSort} /><p role="status">Sorted by {sort.key}, {sort.direction}</p></>
    </div>
  );
}
