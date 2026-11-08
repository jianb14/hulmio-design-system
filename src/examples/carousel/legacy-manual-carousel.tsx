import { Carousel } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Carousel label="Project highlights" items={[<p key="1">Start with a good idea.</p>, <p key="2">Make room for the details.</p>, <p key="3">Build something useful.</p>]} />
  );
}
