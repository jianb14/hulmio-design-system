import * as React from "react";
import { EmptyState, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <EmptyState title="Could not load projects" description="Check your connection and try again." action={<Button onClick={() => setMessage("Projects reloaded.")}>Try again</Button>}  /><output role="status">{message}</output>
    </div>
  );
}
