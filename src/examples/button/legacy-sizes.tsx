import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>{(["xs", "sm", "md", "lg", "xl"] as const).map(size => <Button key={size} size={size}>Button</Button>)}</div>
  );
}
