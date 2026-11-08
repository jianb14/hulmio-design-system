import { Image } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <Image src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&amp;auto=format&amp;fit=crop" alt="A quiet green landscape" aspectRatio={16 / 10} fit="contain" caption="Preserve the entire image within its frame." />
  );
}
