import * as React from "react";
import { Combobox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  const [query,setQuery] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Combobox label="Team role" options={options} allowsCustomValue={false} inputValue={query} onInputChange={setQuery} /><output>Search: {query}</output>
    </div>
  );
}
