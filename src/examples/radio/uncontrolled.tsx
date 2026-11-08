import * as React from "react";
import { RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message,setMessage] = React.useState("Choose a delivery method");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}><RadioGroup label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard" onValueChange={next => setMessage(`Delivery: ${next}`)} /><output>{message}</output></form>
    </div>
  );
}
