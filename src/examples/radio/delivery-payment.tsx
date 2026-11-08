import * as React from "react";
import { Form, Button, RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [submitted,setSubmitted] = React.useState<Record<string, FormDataEntryValue>>({});

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Form onSubmit={event => {event.preventDefault(); setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));}}><RadioGroup label="Delivery method" options={[{value:"standard",label:"Standard",description:"3–5 business days"},{value:"express",label:"Express",description:"Next business day"},{value:"pickup",label:"Pick up",disabled:true}]} defaultValue="standard" /><RadioGroup label="Payment method" options={[{value:"card",label:"Credit card"},{value:"bank",label:"Bank transfer"}]} name="payment" defaultValue="card" /><Button type="submit">Submit</Button><Button type="reset" variant="outline">Reset</Button><output aria-live="polite">{JSON.stringify(submitted)}</output></Form>
    </div>
  );
}
