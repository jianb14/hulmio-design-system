import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Input label="Invalid email" type="email" defaultValue="alex@" error="Enter a valid email address." />
  );
}
