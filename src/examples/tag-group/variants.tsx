import { TagGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}><TagGroup label="outline" items={[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]} variant="outline" /><TagGroup label="filled" items={[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]} variant="filled" /><TagGroup label="underline" items={[{id:"design",label:"Design"},{id:"engineering",label:"Engineering"},{id:"research",label:"Research"}]} variant="underline" /></div>
    </div>
  );
}
