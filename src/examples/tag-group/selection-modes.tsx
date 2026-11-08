import { TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TagGroup label="Single tag" items={[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]} selectionMode="single" defaultSelectedKeys={["design"]} /><TagGroup label="Multiple tags" items={[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]} selectionMode="multiple" defaultSelectedKeys={["design","research"]} />
    </div>
  );
}
