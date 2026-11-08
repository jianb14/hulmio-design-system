import { DataList, ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DataList orientation="horizontal" items={[{ label: "Project", value: "A comprehensive component library with reusable patterns and accessibility guidance" }, { label: "Status", value: "In progress" }, { label: "Owner", value: "Alex Morgan" }]} />
    </div>
  );
}
