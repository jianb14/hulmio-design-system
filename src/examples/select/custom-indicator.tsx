import { Select } from "hulmio-ui";
import { ChevronsUpDown } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Select label="Team role" options={options} indicator={<ChevronsUpDown size={16} aria-hidden="true" />} />
    </div>
  );
}
