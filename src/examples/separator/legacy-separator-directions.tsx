import { Separator } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 16, width: 240 }}><span>Project overview</span><Separator /><span>Project details</span></div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, height: 48 }}><span>Design</span><Separator orientation="vertical" /><span>Build</span></div>
    </div>
  );
}
