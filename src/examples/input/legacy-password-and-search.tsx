import { Input } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "grid", gap: 16 }}><Input label="Password" type="password" placeholder="Enter your password" /><Input label="Search" type="search" placeholder="Find a project" clearable /></div>
  );
}
