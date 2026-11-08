import { RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}><div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><RadioGroup label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard" variant="outline" /><RadioGroup label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard" variant="soft" /></div></form>
    </div>
  );
}
