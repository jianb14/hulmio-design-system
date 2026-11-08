import { ColorSwatch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <ColorSwatch color="#284c3f" colorName="Forest green" style={{width:80,height:48,borderRadius:16}} />
    </div>
  );
}
