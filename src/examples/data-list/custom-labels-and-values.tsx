import { DataList, ButtonLink } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <DataList orientation="horizontal" items={[{ label: "Project", value: "Hulmio Studio" }, { label: "Status", value: "In progress" }, { label: "Owner", value: "Alex Morgan" }]} />
    </div>
  );
}
