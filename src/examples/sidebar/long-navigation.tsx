import * as React from "react";
import { Sidebar, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Sidebar label="Example sidebar"><a href="#/components" >Browse every reusable component</a><a href="#/using-hulmio">Installation guide</a></Sidebar><output role="status">{message}</output>
    </div>
  );
}
