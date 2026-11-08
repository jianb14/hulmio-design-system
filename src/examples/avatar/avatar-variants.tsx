import { Avatar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["solid", "soft", "outline"] as const).map(variant => <Avatar key={variant} name="Alex Morgan" tone="primary" variant={variant} />)}</>
    </div>
  );
}
