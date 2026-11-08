import { Fieldset, TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{padding:24,background:"var(--hulmio-subtle, #edf1e8)",borderRadius:16,width:"100%"}}><Fieldset label="Contact information" description="Tell us how to reach you."><TextField label="Full name" name="name" isRequired /><TextField label="Email" name="email" type="email" isRequired /></Fieldset></div>
    </div>
  );
}
