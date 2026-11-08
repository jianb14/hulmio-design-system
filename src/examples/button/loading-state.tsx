import * as React from "react";
import { Button } from "hulmio-ui";
import { Paperclip } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    React.useEffect(() => () => clearTimeout(timer.current), []);
    function upload() { if (loading) return; setLoading(true); setMessage(""); timer.current = setTimeout(() => { setLoading(false); setMessage("File uploaded."); }, 1200); }
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <Button loading={loading} onClick={upload}>{!loading && <Paperclip size={16} aria-hidden="true" />}{loading ? "Uploading…" : "Upload file"}</Button><output role="status">{message}</output>
    </div>
  );
}
