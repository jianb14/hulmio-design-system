import { Autocomplete } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const options = [{value:"manila",label:"Manila",description:"Metro Manila, Philippines"},{value:"cebu",label:"Cebu City",description:"Central Visayas, Philippines"},{value:"davao",label:"Davao City",description:"Davao Region, Philippines"}];
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Autocomplete label="Find a city" options={options} allowsCustomValue={false} />
    </div>
  );
}
