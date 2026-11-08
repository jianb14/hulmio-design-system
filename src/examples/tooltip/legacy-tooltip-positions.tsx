import { Tooltip, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} content={`${side} tooltip`} side={side}><Button variant="outline">{side}</Button></Tooltip>)}
    </div>
  );
}
