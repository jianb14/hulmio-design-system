import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{padding:24,background:"var(--hulmio-subtle, #edf1e8)",borderRadius:16,width:"100%"}}><Autocomplete label="Team role" options={options} allowsCustomValue={false} /></div>
    </div>
  );
}
