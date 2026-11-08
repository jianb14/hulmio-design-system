import { ColorField } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><ColorField label="red" colorSpace="rgb" channel="red" defaultValue="rgb(40, 76, 63)" /><ColorField label="green" colorSpace="rgb" channel="green" defaultValue="rgb(40, 76, 63)" /><ColorField label="blue" colorSpace="rgb" channel="blue" defaultValue="rgb(40, 76, 63)" /><ColorField label="alpha" colorSpace="rgb" channel="alpha" defaultValue="rgb(40, 76, 63)" /></div>
    </div>
  );
}
