import { AvatarGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <AvatarGroup names={["Alex Morgan", "Sam Rivera", "Jordan Lee", "Taylor Kim", "Casey Adams", "Robin Cruz"]} max={2} renderCount={count => <span>+{count} team</span>} />
    </div>
  );
}
