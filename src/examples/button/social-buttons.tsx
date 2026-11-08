import * as React from "react";
import { Button } from "hulmio-ui";
import "hulmio-ui/styles.css";

export default function Example() {
  const [message, setMessage] = React.useState("");
  return (
    <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 640, justifyItems: "start" }}>
      <div style={{ display: "grid", gap: 12, width: "100%", maxWidth: 360 }}><Button variant="outline" fullWidth onClick={() => setMessage("Google sign-in selected.")}><svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.7-.4-4H24v7.6h11c-.5 2.5-1.9 4.5-4 5.9v4.9h6.4c3.8-3.5 6.2-8.7 6.2-14.4Z"/><path fill="#34A853" d="M24 44c5.4 0 9.9-1.8 13.3-4.9l-6.4-4.9c-1.8 1.2-4.1 1.9-6.9 1.9-5.2 0-9.6-3.5-11.2-8.1H6.2v5.1C9.5 39.5 16.2 44 24 44Z"/><path fill="#FBBC05" d="M12.8 28a12 12 0 0 1 0-8v-5.1H6.2a20 20 0 0 0 0 18.2l6.6-5.1Z"/><path fill="#EA4335" d="M24 11.9c2.9 0 5.4 1 7.4 2.9l5.6-5.6A18.8 18.8 0 0 0 24 4C16.2 4 9.5 8.5 6.2 14.9l6.6 5.1c1.6-4.6 6-8.1 11.2-8.1Z"/></svg>Sign in with Google</Button><Button variant="tertiary" fullWidth onClick={() => setMessage("GitHub sign-in selected.")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.9a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.1-.3 3.9.1 3.9.1a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.2 6.6 6.2 6.9a3.4 3.4 0 0 0-.9 2.7V22" transform="translate(1 1) scale(.9)" /></svg>Sign in with GitHub</Button><Button variant="outline" fullWidth onClick={() => setMessage("Apple sign-in selected.")}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.1 12.5c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.8.8-3.5 2-1.5 2.5-.4 6.2 1 8.2.7 1 1.4 2 2.5 1.9 1-.1 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6 1.1 0 1.8-1 2.4-1.9.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.2-3.2ZM15.1 6.4c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.5.6-1 1.7-.9 2.7 1 .1 2-.4 2.6-1.1Z"/></svg>Sign in with Apple</Button></div><output role="status">{message}</output>
    </div>
  );
}
