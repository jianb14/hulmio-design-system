import { Rating } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <Rating label="Read-only score" readOnly defaultValue={4} />
      <Rating label="Unavailable score" disabled defaultValue={3} />
      <Rating label="Three-point score" max={3} defaultValue={2} />
    </div>
    </form>
  );
}
