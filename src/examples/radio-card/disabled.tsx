import * as React from "react";
import { RadioCard, Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [value, setValue] = React.useState("personal"); const [checked, setChecked] = React.useState(false);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <form onReset={() => { setValue("personal"); setChecked(false); }}><fieldset><legend>Choose a plan</legend><div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><RadioCard label="Personal" name="plan" value="personal" checked={value === "personal"} onValueChange={setValue} variant="outline"   disabled /><RadioCard label="Team" name="plan" value="team" checked={value === "team"} onValueChange={setValue}  /></div></fieldset></form>
    </div>
  );
}
