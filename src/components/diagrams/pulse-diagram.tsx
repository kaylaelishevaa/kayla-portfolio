import { LaneDiagram, type Lane } from "@/components/diagrams/lane-diagram";

// Pulse — real-time WhatsApp oversight feed.
const lanes: readonly Lane[] = [
  {
    label: "Capture",
    items: [
      { title: "WhatsApp lines", note: "inbound" },
      { title: "normalize" },
      { title: "classify", note: "urgent / routine" },
    ],
  },
  {
    label: "Store",
    items: [
      { title: "Postgres", note: "exactly-once" },
      { title: "Redis", note: "pub/sub" },
    ],
  },
  {
    label: "Fan-out",
    items: [
      { title: "WebSocket", note: "live feed" },
      { title: "FCM push" },
      { title: "WhatsApp alert", note: "API" },
    ],
  },
  {
    label: "Deliver",
    items: [{ title: "Installable PWA" }, { title: "Owner's phone" }],
  },
];

export function PulseDiagram() {
  return (
    <LaneDiagram
      lanes={lanes}
      ariaLabel="Pulse pipeline: inbound WhatsApp lines are normalized and classified urgent or routine, persisted exactly-once in Postgres with a Redis pub/sub layer, then fanned out over a WebSocket live feed, FCM push, and the WhatsApp alert API — delivered to an installable PWA and the owner's phone in seconds."
    />
  );
}
