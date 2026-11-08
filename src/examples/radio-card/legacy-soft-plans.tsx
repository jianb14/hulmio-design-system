import { useState } from "react";
import { RadioCard } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [plan, setPlan] = useState("studio");
  return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>
    <fieldset style={{ display: "grid", gap: 16, padding: 0, border: 0 }}><legend>Choose a workspace plan</legend><RadioCard name="plan" value="personal" label="Personal" description="A place for your own ideas. Free forever." checked={plan === "personal"} onValueChange={setPlan} variant="soft" /><RadioCard name="plan" value="studio" label="Studio" description="A shared space for your team. $12 per month." checked={plan === "studio"} onValueChange={setPlan} variant="soft" /><RadioCard name="plan" value="enterprise" label="Enterprise" description="Coming soon." disabled /><output>Selected: {plan}</output></fieldset>
    </form>
  );
}
