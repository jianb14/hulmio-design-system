import * as React from "react";
import { Button, Popover } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("Ready");
  const [email, setEmail] = React.useState("hello@example.com");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div><Popover title="Project details" trigger={<Button variant="outline">Project details</Button>} ><form onSubmit={event => { event.preventDefault(); setMessage("Invitation sent to " + email); }}><label>Email <input type="email" required value={email} onChange={event => setEmail(event.target.value)} /></label><Button type="submit">Invite collaborator</Button></form></Popover><p role="status">{message}</p></div>
    </div>
  );
}
