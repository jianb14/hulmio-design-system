import { Kbd } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Kbd keys={["command", "shift"]}>P</Kbd><Kbd keys={["ctrl", "alt"]}>Delete</Kbd><Kbd keys={["option"]} /><Kbd keys={["win"]}>E</Kbd></>
    </div>
  );
}
