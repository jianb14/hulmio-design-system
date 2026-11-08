import { Field } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Field label="Project name" hint="Choose a short, useful name."><input name="project" placeholder="Untitled project" required /></Field>
  );
}
