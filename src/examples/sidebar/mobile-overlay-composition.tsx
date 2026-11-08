import * as React from "react";
import { Sidebar, Button, Modal } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Modal title="Navigation" trigger={<Button variant="outline">Open navigation</Button>}><Sidebar label="Example sidebar"><a href="#/components" >Components</a><a href="#/using-hulmio">Installation guide</a></Sidebar></Modal>
    </div>
  );
}
