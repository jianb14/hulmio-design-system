import * as React from "react";
import { Select } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [options,setOptions] = React.useState<{value:string;label:string}[]>([]);
  const [loading,setLoading] = React.useState(true);
  const [query,setQuery] = React.useState("");
  React.useEffect(() => {setLoading(true);const timer = window.setTimeout(() => {setOptions(([{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}]).filter(option => option.label.toLowerCase().includes(query.toLowerCase())));setLoading(false);},350);return () => window.clearTimeout(timer);},[query]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Select label="Team role" options={options} isLoading={loading} /><output role="status">{loading ? "Loading roles…" : `${options.length} roles available`}</output>
    </div>
  );
}
