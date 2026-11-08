import { ColorField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorField label="Brand color" defaultValue="#284c3f" children={state => <output className="h-hint">{state.isInvalid ? "Needs attention" : state.isDisabled ? "Disabled" : "Ready to edit"}</output>} />
    </div>
  );
}
