import { AvatarGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><AvatarGroup names={["Alex Morgan", "Sam Rivera", "Jordan Lee", "Taylor Kim", "Casey Adams", "Robin Cruz"]} overlap={8} /><AvatarGroup names={["Alex Morgan", "Sam Rivera", "Jordan Lee", "Taylor Kim", "Casey Adams", "Robin Cruz"]} overlap={20} /></>
    </div>
  );
}
