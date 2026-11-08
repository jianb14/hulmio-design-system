import { ScrollShadow } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <ScrollShadow orientation="horizontal" aria-label="Project boards"><div style={{ display: "flex", gap: 16, width: "max-content", padding: 8 }}>{["Research", "Design", "Development", "Review", "Launch"].map((label, index) => <div key={label} style={{ width: 170, padding: 24, background: "var(--hulmio-soft)", borderRadius: 10 }}><small>0{index + 1}</small><p>{label}</p></div>)}</div></ScrollShadow>
  );
}
