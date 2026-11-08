import { Switch } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <fieldset><legend className="h-label">Notify me about</legend><div style={{display:"flex",gap:16,flexDirection:"row"}}><Switch label="Messages" defaultChecked /><Switch label="Mentions" /><Switch label="Updates" /></div></fieldset>
    </div>
  );
}
