import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"ana",label:"Ana Reyes",description:"ana@example.test",icon:<span aria-hidden="true">AR</span>},{value:"luis",label:"Luis Cruz",description:"luis@example.test",icon:<span aria-hidden="true">LC</span>},{value:"maya",label:"Maya Santos",description:"maya@example.test",disabled:true}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Assign teammates" options={options} allowsCustomValue={false} />
    </div>
  );
}
