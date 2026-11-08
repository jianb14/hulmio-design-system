import { Navbar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Navbar label="Example navigation"><a href="#/">Hulmio</a><a href="#/components">Components</a><a href="#/using-hulmio">Docs</a></Navbar>
  );
}
