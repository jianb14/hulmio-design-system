import * as React from "react";
import { Form, Button, TimeField } from "hulmio-ui";
import { parseTime } from "@internationalized/date";
import "hulmio-ui/styles.css";

export default function Example() {
  const [submitted,setSubmitted] = React.useState<Record<string, FormDataEntryValue>>({});

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Form onSubmit={event => {event.preventDefault(); setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));}}><TimeField name="value" label="Meeting time" defaultValue={parseTime("09:30")} minValue={parseTime("09:00")} maxValue={parseTime("17:00")} description="Office hours: 09:00–17:00." /><Button type="submit">Submit</Button><Button type="reset" variant="outline">Reset</Button><output aria-live="polite">{JSON.stringify(submitted)}</output></Form>
    </div>
  );
}
