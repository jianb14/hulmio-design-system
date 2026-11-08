import { useState } from "react";
import { Kanban } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [items, setItems] = useState([{ id: "1", title: "Review designs", column: "active" }, { id: "2", title: "Write guidelines", column: "planned" }]);
  return (
    <Kanban columns={[{ id: "planned", title: "Planned" }, { id: "active", title: "In progress" }, { id: "done", title: "Done" }]} items={items} onMove={(id, column) => setItems(items.map(item => item.id === id ? { ...item, column } : item))} />
  );
}
