import { Avatar } from "hulmio-ui";
import { User } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <><Avatar name="Alex Morgan" src="/missing-avatar.png" /><Avatar name="Guest" fallback={<User size={20} />} /><Avatar name="Anonymous" fallback="?" /></>
    </div>
  );
}
