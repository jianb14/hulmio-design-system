import { TextField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <TextField label="Display name" placeholder="Type here…" children={state => <output className="h-hint">{state.isInvalid ? "Needs attention" : state.isDisabled ? "Disabled" : "Ready to edit"}</output>} />
    </div>
  );
}
