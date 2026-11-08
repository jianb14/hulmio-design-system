import { useState } from "react";
import { FileUpload } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <FileUpload label="Choose images" accept="image/*" multiple maxSize={5 * 1024 * 1024} onFilesChange={files => setCount(files.length)} />
      <output>{count ? `${count} file(s) selected. Files stay on your device.` : "Images up to 5 MB each. Files stay on your device."}</output>
    </div>
  );
}
