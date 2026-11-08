import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 14 }}><Skeleton width={56} height={56} style={{ borderRadius: "50%" }} /><div style={{ display: "grid", gap: 8 }}><Skeleton width={160} /><Skeleton width={110} height={14} /></div></div>
    </div>
  );
}
