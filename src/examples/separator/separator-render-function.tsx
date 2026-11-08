import { Separator } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Separator decorative={false} render={props => <div {...props} style={{ marginBlock: 24, borderColor: "var(--hulmio-primary)" }} />} />
    </div>
  );
}
