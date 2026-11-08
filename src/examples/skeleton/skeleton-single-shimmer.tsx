import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div className="h-skeleton-group" style={{ display: "grid", gap: 12 }}><Skeleton sharedShimmer height={110} /><Skeleton sharedShimmer width="80%" /><Skeleton sharedShimmer width="60%" /></div>
    </div>
  );
}
