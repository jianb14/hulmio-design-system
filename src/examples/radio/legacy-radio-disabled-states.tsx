import { RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <RadioGroup label="Membership plan" name="plan" defaultValue="team" options={[{ value: "personal", label: "Personal" }, { value: "team", label: "Team" }, { value: "enterprise", label: "Enterprise", disabled: true }]} />
    </div>
    </form>
  );
}
