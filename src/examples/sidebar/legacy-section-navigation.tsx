import { Sidebar } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Sidebar label="Example sections"><a href="#/components">All components</a><a href="#/components/button">Buttons</a><a href="#/components/input">Inputs</a></Sidebar>
  );
}
