import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 18 }}>{Array.from({ length: 4 }, (_, index) => <div key={index} style={{ display: "flex", gap: 12 }}><Skeleton width={36} height={36} style={{ borderRadius: "50%" }} /><Skeleton width="80%" height={36} /></div>)}</div>
    </div>
  );
}
