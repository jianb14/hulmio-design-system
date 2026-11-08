import * as React from "react";
import { Autocomplete, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  const [open,setOpen] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Team role" options={options} allowsCustomValue={false} isOpen={open} onOpenChange={setOpen} /><Button variant="outline" onClick={() => setOpen(!open)}>{open ? "Close options" : "Open options"}</Button><output>{open ? "Options open" : "Options closed"}</output>
    </div>
  );
}
