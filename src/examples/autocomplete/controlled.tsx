import * as React from "react";
import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  const [value,setValue] = React.useState("design");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Team role" options={options} allowsCustomValue={false} value={value} onValueChange={setValue} /><output aria-live="polite">{JSON.stringify(value)}</output>
    </div>
  );
}
