import * as React from "react";
import { Form, Button, CheckboxGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [submitted,setSubmitted] = React.useState<Record<string, FormDataEntryValue>>({});

  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Form onSubmit={event => {event.preventDefault(); setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));}}><CheckboxGroup label="Project access" options={[{value:"design",label:"Design",description:"Interfaces and systems"},{value:"engineering",label:"Engineering",description:"Build reliable products"},{value:"research",label:"Research",description:"Understand people"}]} isRequired validate={values => values.length < 2 ? "Choose at least two roles." : null} description="Choose at least two roles." /><Button type="submit">Submit</Button><Button type="reset" variant="outline">Reset</Button><output aria-live="polite">{JSON.stringify(submitted)}</output></Form>
    </div>
  );
}
