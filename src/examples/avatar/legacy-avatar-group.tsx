import { AvatarGroup } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <AvatarGroup names={["Alex Morgan", "Jules Santos", "Morgan Lee", "Riley Chen"]} max={3} />
  );
}
