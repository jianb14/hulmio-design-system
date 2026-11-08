import { FileUpload } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      <FileUpload label="Choose profile image" accept="image/*" maxSize={1024 * 1024} />
      <FileUpload label="Unavailable upload" disabled />
    </div>
  );
}
