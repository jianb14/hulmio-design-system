import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"ana@example.test",label:"ana@example.test",description:"Ana Reyes"},{value:"luis@example.test",label:"luis@example.test",description:"Luis Cruz"},{value:"team@example.test",label:"team@example.test",description:"Product team"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="To" options={options} selectionMode="multiple" allowsCustomValue />
    </div>
  );
}
