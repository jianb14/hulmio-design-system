import { Switch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Switch label="Email notifications" name="notifications" defaultChecked />
  );
}
