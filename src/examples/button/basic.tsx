import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button onClick={() => setCount(count + 1)}>Click me</Button><output role="status">Pressed {count} {count === 1 ? "time" : "times"}.</output>
    </div>
  );
}
