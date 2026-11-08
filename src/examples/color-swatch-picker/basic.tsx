import { ColorSwatchPicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorSwatchPicker label="Brand palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} />
    </div>
  );
}
