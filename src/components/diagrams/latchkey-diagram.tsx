import { LaneDiagram, type Lane } from "@/components/diagrams/lane-diagram";

// Latchkey — magic-link handoff that survives the webview → system-browser jump.
const lanes: readonly Lane[] = [
  {
    label: "In-app browser",
    items: [
      { title: "GET /verify", note: "magic-link token" },
      { title: "webview cookie jar", note: "isolated" },
    ],
  },
  {
    label: "Server · verify",
    items: [
      { title: "302 → /app?handoff", note: "no cookie set" },
      { title: "handoff token", note: "10s · single-use" },
    ],
  },
  {
    label: "System browser",
    items: [
      { title: "OS hands off URL", note: "token rides along" },
      { title: "POST /auth/handoff", note: "browser-initiated" },
    ],
  },
  {
    label: "Server · session",
    items: [
      { title: "Set-Cookie: session", note: "lands in real jar" },
      { title: "GET /api/me → 200", note: "signed in" },
    ],
  },
];

export function LatchkeyDiagram() {
  return (
    <LaneDiagram
      lanes={lanes}
      ariaLabel="Latchkey handoff flow: a magic link tapped inside an in-app webview hits GET /verify, which sets no cookie and instead redirects with a 10-second single-use handoff token in the URL. The OS hands the URL to the real system browser, which POSTs the handoff token itself — so the session Set-Cookie lands in the browser the user is actually in, and GET /api/me returns 200 signed in."
    />
  );
}
