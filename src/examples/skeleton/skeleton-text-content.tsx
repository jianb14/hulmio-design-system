import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 10 }}><Skeleton width="90%" height={18} /><Skeleton width="100%" height={18} /><Skeleton width="70%" height={18} /></div>
    </div>
  );
}
