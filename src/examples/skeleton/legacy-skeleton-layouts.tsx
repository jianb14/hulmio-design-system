import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 12, width: 240 }}><Skeleton width={48} height={48} style={{ borderRadius: "50%" }} /><Skeleton width="100%" height={20} /><Skeleton width="80%" height={14} /><Skeleton width="60%" height={14} /></div>
    </div>
  );
}
