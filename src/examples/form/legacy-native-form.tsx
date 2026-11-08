import { useState } from "react";
import { Form, Input, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Form onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
      <Input name="name" label="Your name" required placeholder="Alex Morgan" />
      <Input name="email" label="Email address" type="email" required placeholder="you@example.com" />
      <Button type="submit">Submit example</Button>
      {submitted && <p role="status">Form submitted.</p>}
    </Form>
  );
}
