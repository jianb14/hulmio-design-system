import * as React from "react";
import { Checkbox, CheckboxGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value,setValue] = React.useState<string[]>(["design"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Checkbox label="All roles" checked={value.length === 3} indeterminate={value.length > 0 && value.length < 3} onChange={event => setValue(event.target.checked ? ["design","engineering","research"] : [])} /><CheckboxGroup label="Roles" options={[{value:"design",label:"Design",description:"Interfaces and systems"},{value:"engineering",label:"Engineering",description:"Build reliable products"},{value:"research",label:"Research",description:"Understand people"}]} value={value} onChange={setValue} />
    </div>
  );
}
