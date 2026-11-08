import { Accordion } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Accordion items={[{ id: "install", title: "How do I install Hulmio?", content: "Install the local package and import its stylesheet." }, { id: "fonts", title: "Can I use my own font?", content: "Yes. Components inherit your app’s font." }]} />
  );
}
