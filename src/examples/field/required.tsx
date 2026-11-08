import { Field, Input, Checkbox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Field label="Project name" hint="Choose a short, useful name." required ><input name="project" placeholder="Project name"   required  /></Field>
    </div>
  );
}
