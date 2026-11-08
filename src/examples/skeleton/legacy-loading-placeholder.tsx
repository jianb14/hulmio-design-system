import { Skeleton } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div aria-busy="true" aria-label="Loading content"><Skeleton width="100%" height={24} /><Skeleton width="70%" height={16} /></div>
  );
}
