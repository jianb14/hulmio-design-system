import * as React from "react";
import { Autocomplete, TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  const [value,setValue] = React.useState<string[]>(["design"]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Team role" options={options} selectionMode="multiple" value={value} onValueChange={setValue} /><TagGroup label="Selected roles" items={options.filter(option => value.includes(option.value)).map(option => ({id:option.value,label:option.label}))} onRemove={keys => setValue(value.filter(key => !keys.has(key)))} />
    </div>
  );
}
