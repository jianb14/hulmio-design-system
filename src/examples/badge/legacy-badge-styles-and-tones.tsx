import { Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      {(["solid", "soft", "outline"] as const).map(variant => <div key={variant} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{(["neutral", "primary", "success", "warning", "danger", "info"] as const).map(tone => <Badge key={tone} variant={variant} tone={tone}>{tone}</Badge>)}</div>)}
    </div>
  );
}
