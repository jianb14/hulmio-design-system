import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = Array.from({length:1000},(_,index) => ({value:String(index),label:`Location ${index}`}));
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Team role" options={options} allowsCustomValue={false} virtualized />
    </div>
  );
}
