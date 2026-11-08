import { useState } from "react";
import { Stepper } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [step, setStep] = useState(0);
  return (
    <Stepper steps={["Details", "Review", "Complete"]} current={step} onStepChange={setStep} />
  );
}
