import * as React from "react";
import { Card, Input, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Card title="Stay in the loop"><form onSubmit={event => { event.preventDefault(); setSubscribed(true); }}><label>Email address<Input type="email" required placeholder="you@example.com" /></label><Button type="submit">Subscribe</Button>{subscribed && <p role="status">You are subscribed.</p>}</form></Card>
    </div>
  );
}
