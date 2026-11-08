import { Select } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"design",label:"Design",description:"Interfaces and systems",group:"Product"},{value:"engineering",label:"Engineering",description:"Build reliable products",group:"Product"},{value:"research",label:"Research",description:"Understand people",group:"Insights"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Select label="Team role" options={options} renderOption={(option, selected) => <span style={{fontWeight:selected?700:400}}>{option.label}{selected ? " · active" : ""}</span>} />
    </div>
  );
}
