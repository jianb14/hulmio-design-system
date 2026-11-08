import * as React from "react";
import { Button } from "hulmio-ui";
import { Search, Plus, Mail, Trash2 } from "lucide-react";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}><Button onClick={() => setMessage("Search opened.")}><Search size={16} aria-hidden="true" />Search</Button><Button variant="secondary" onClick={() => setMessage("Member added.")}><Plus size={16} aria-hidden="true" />Add member</Button><Button variant="tertiary" onClick={() => setMessage("Email opened.")}><Mail size={16} aria-hidden="true" />Email</Button><Button variant="destructive" onClick={() => setMessage("Item deleted.")}><Trash2 size={16} aria-hidden="true" />Delete</Button></div><output role="status">{message}</output>
    </div>
  );
}
