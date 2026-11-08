import { ColorSwatchPicker } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorSwatchPicker label="Brand palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} size="sm" /><ColorSwatchPicker label="Brand palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} size="md" /><ColorSwatchPicker label="Brand palette" colors={[{value:"#284c3f",label:"Forest"},{value:"#c4dc77",label:"Lime"},{value:"#d56e46",label:"Clay"}]} size="lg" /></div>
    </div>
  );
}
