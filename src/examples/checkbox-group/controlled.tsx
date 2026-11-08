import * as React from "react";
import { CheckboxGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<string[]>(["design"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <CheckboxGroup label="Project access" options={[{value:"design",label:"Design",description:"Interfaces and systems"},{value:"engineering",label:"Engineering",description:"Build reliable products"},{value:"research",label:"Research",description:"Understand people"}]} value={value} onChange={setValue} /><output>{value.join(", ") || "No roles"}</output>
    </div>
  );
}
