import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>{(["primary","secondary","tertiary","outline","ghost","destructive","destructive-soft","soft","link","success","warning","information"] as const).map(variant => <Button key={variant} variant={variant} disabled>{variant.replaceAll("-", " ")}</Button>)}</div>
    </div>
  );
}
