import { Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Badge dot tone="success">Available</Badge><Badge dot tone="warning">Pending</Badge><Badge dot tone="danger">Offline</Badge></>
    </div>
  );
}
