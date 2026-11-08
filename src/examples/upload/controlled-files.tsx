import * as React from "react";
import { FileUpload, Button, Progress } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [files, setFiles] = React.useState<File[]>([]); const [progress, setProgress] = React.useState(0);
    React.useEffect(() => { if (!progress || progress >= 100) return; const timer = setTimeout(() => setProgress(value => Math.min(100, value + 20)), 250); return () => clearTimeout(timer); }, [progress]);
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <FileUpload label="Choose project files" files={files} onFilesChange={setFiles} multiple    /><output role="status">{files.length} file(s) selected.</output>
    </div>
  );
}
