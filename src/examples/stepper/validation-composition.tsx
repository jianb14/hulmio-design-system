import * as React from "react";
import { Stepper, Button, Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [step, setStep] = React.useState(0); const [name, setName] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Stepper steps={["Details", "Review", "Complete"]} current={step} onStepChange={setStep}   /><Input label="Project name" value={name} onChange={event => setName(event.target.value)} required error={name ? undefined : "Enter a name before continuing."} /><Button disabled={!name} onClick={() => setStep(1)}>Continue</Button>
    </div>
  );
}
