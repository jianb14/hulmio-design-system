import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>{Array.from({ length: 6 }, (_, index) => <Skeleton key={index} height={100} />)}</div>
    </div>
  );
}
