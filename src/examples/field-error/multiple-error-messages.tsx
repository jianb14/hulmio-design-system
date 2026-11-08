import * as React from "react";
import { Form, Button, TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [submitted,setSubmitted] = React.useState<Record<string, FormDataEntryValue>>({});

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Form onSubmit={event => {event.preventDefault(); setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));}}><TextField label="Username" isRequired name="username" validate={value => [value.length < 8 ? "Use at least eight characters." : "", !/[0-9]/.test(value) ? "Include a number." : ""].filter(Boolean)} /><Button type="submit">Submit</Button><Button type="reset" variant="outline">Reset</Button><output aria-live="polite">{JSON.stringify(submitted)}</output></Form>
    </div>
  );
}
