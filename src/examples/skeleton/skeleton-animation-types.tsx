import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 20 }}>{(["pulse", "shimmer", "none"] as const).map(animation => <div key={animation}><p>{animation}</p><Skeleton animation={animation} width={240} height={32} /></div>)}</div>
    </div>
  );
}
