import { TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const items = [{id:"design",label:"Design",prefix:<span aria-hidden="true">✦</span>},{id:"engineering",label:"Engineering",prefix:<span aria-hidden="true">⌘</span>}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TagGroup label="Project tags" items={items} />
    </div>
  );
}
