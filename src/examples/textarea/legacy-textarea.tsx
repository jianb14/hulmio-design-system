import { Textarea } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Textarea label="Your message" placeholder="Tell us a little more…" maxLength={240} showCount />
  );
}
