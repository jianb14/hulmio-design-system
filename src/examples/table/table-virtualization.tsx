import * as React from "react";
import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const largeRows = React.useMemo(() => Array.from({ length: 10000 }, (_, index) => ({ id: index, name: `Person ${index + 1}`, role: index % 2 ? "Engineer" : "Designer", score: 60 + index % 41 })), []);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DataTable caption="Ten thousand teammates" columns={[{ key: "name", label: "Name", sortable: true }, { key: "role", label: "Role", sortable: true }, { key: "score", label: "Score", sortable: true }]} rows={largeRows} virtualized height={320} rowHeight={44} selectable />
    </div>
  );
}
