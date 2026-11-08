import { Combobox } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Combobox label="Find a city" name="city" options={[{ value: "Manila", label: "Manila" }, { value: "Cebu", label: "Cebu" }, { value: "Davao", label: "Davao" }]} />
  );
}
