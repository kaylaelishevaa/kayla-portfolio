import { LaneDiagram, type Lane } from "@/components/diagrams/lane-diagram";

// MCP Connector Factory — one skeleton, forked per backend with different postures.
const lanes: readonly Lane[] = [
  {
    label: "Client",
    items: [
      { title: "Claude app", note: "custom connector" },
      { title: "Bearer token", note: "pasted as secret" },
    ],
  },
  {
    label: "Shared skeleton",
    items: [
      { title: "JSON-RPC 2.0", note: "init · list · call" },
      { title: "Auth + OAuth facade", note: "bearer · const-time" },
      { title: "Audit log", note: "JSON-line · before/after" },
    ],
  },
  {
    label: "Fork",
    items: [
      { title: "lark_client", note: "fetch-all + filter" },
      { title: "web_client", note: "JWT login-refresh" },
    ],
  },
  {
    label: "Backend · posture",
    items: [
      { title: "Lark Bitable", note: "writes live · admin" },
      { title: "NestJS REST API", note: "read-only · 2 kill switches" },
    ],
  },
];

export function McpDiagram() {
  return (
    <LaneDiagram
      lanes={lanes}
      ariaLabel="MCP Connector Factory: a Claude custom connector authenticates with a pasted bearer token into a shared skeleton — JSON-RPC 2.0, bearer auth with constant-time comparison plus an OAuth facade, and a before/after audit log. The skeleton forks into a lark_client and a web_client, each pointed at a backend with a deliberately different security posture: Lark Bitable with live admin writes, or a read-only NestJS REST API with two kill switches."
    />
  );
}
