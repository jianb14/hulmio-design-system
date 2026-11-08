import { RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}><div style={{fontFamily:"monospace",padding:16,border:"1px dashed currentColor",borderRadius:12}}><RadioGroup label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard" /></div></form>
    </div>
  );
}
