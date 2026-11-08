import { Rating } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (<form data-example-form style={{ display: "contents" }} onSubmit={event => event.preventDefault()}>
    <Rating label="Your rating" name="rating" max={5} defaultValue={4} />
    </form>
  );
}
