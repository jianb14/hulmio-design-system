import { useState } from "react";
import { DataTable } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [rows, setRows] = useState<Record<string, string | number>[]>([{ id: "1", title: "Review designs", status: "In progress" }, { id: "2", title: "Build components", status: "Planned" }, { id: "3", title: "Write guidelines", status: "Done" }, { id: "4", title: "Check accessibility", status: "Planned" }]);
  return (
    <DataTable caption="Project tasks" columns={[{ key: "title", label: "Task", sortable: true }, { key: "status", label: "Status", sortable: true }]} rows={rows} onRowsChange={setRows} rowKey="id" pageSize={3} selectable editable expandable renderExpanded={row => <p>Details for {row.title}</p>} />
  );
}
