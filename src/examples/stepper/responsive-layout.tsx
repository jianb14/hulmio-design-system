import * as React from "react";
import { Stepper, Button, Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [step, setStep] = React.useState(0); const [name, setName] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Stepper steps={["Details", "Review", "Complete"]} current={step} onStepChange={setStep}   /><Button variant="outline" onClick={() => setStep(value => Math.min(2, value + 1))}>Next step</Button>
    </div>
  );
}
