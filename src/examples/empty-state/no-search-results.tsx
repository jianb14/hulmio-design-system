import * as React from "react";
import { EmptyState, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <EmptyState title="No matching projects" description="Try a different query or clear the filters." action={<Button onClick={() => setMessage("Filters cleared.")}>Clear filters</Button>}  /><output role="status">{message}</output>
    </div>
  );
}
