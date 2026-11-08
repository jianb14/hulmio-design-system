import { Accordion } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Accordion multiple items={[{ id: "design", title: "Design tokens", content: "One shared source for colors, typography, and spacing." }, { id: "components", title: "Components", content: "Reusable React components with native props and scoped styles." }, { id: "unavailable", title: "Unavailable section", content: "Not available.", disabled: true }]} />
    </div>
  );
}
