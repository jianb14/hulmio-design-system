import { AvatarGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <>{(["sm", "md", "lg"] as const).map(size => <AvatarGroup key={size} names={["Alex Morgan", "Sam Rivera", "Jordan Lee", "Taylor Kim", "Casey Adams", "Robin Cruz"]} size={size} />)}</>
    </div>
  );
}
