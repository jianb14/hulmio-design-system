import { Fieldset, TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{padding:20,border:"1px dashed currentColor"}}><Fieldset label="Contact information" description="Tell us how to reach you."><TextField label="Full name" name="name" isRequired /><TextField label="Email" name="email" type="email" isRequired /></Fieldset></div>
    </div>
  );
}
