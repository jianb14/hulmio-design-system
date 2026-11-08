import { Kbd } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["default", "light", "outline"] as const).map(variant => <Kbd key={variant} variant={variant} keys={["ctrl"]}>K</Kbd>)}</>
    </div>
  );
}
