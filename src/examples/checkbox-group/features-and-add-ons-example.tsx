import { CheckboxGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <CheckboxGroup label="Subscription extras" options={[{value:"backup",label:"Daily backup",description:"₱150 per month"},{value:"support",label:"Priority support",description:"₱250 per month"},{value:"audit",label:"Audit log",disabled:true}]} defaultValue={["backup"]} />
    </div>
  );
}
