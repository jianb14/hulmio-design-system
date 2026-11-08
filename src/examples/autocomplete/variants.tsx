import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><Autocomplete label="Team role" options={options} allowsCustomValue={false} className="h-rich-field" data-variant="outline" /><Autocomplete label="Team role" options={options} allowsCustomValue={false} className="h-rich-field" data-variant="filled" /><Autocomplete label="Team role" options={options} allowsCustomValue={false} className="h-rich-field" data-variant="underline" /></div>
    </div>
  );
}
