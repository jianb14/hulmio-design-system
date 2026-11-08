import { DataList, Badge } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <DataList orientation="horizontal" aria-label="Project details" items={[{ label: "Project", value: "Hulmio Studio" }, { label: "Status", value: <Badge tone="success">In progress</Badge> }, { label: "Owner", value: "Alex Morgan" }, { label: "Updated", value: "6 November 2026" }]} />
  );
}
