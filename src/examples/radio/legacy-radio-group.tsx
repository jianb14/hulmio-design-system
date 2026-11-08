import { RadioGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>
    <RadioGroup label="Delivery" name="delivery" defaultValue="standard" options={[{ value: "standard", label: "Standard" }, { value: "express", label: "Express" }]} />
    </form>
  );
}
