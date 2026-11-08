import { Tabs } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Tabs variant="underline" label="Underline project tabs" items={[{ value: "overview", label: "Overview", content: "Everything you need to get started." }, { value: "activity", label: "Activity", content: "Recent changes from your team." }]} />
    </div>
  );
}
