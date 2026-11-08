import * as React from "react";
import { Kanban, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [items, setItems] = React.useState([{ id: "review", title: "Review designs", column: "planned", description: "Check the details before building." }, { id: "build", title: "Build components", column: "active", description: "Turn the approved design into working controls." }]);
    const columns = [{ id: "planned", title: "Planned" }, { id: "active", title: "In progress" }, { id: "done", title: "Done" }];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Kanban columns={columns} items={items}  />
    </div>
  );
}
