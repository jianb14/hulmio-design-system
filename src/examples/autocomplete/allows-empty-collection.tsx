import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options: {value:string;label:string}[] = [];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Team role" options={options} allowsCustomValue={false} emptyText="No roles yet. Create one to continue." />
    </div>
  );
}
