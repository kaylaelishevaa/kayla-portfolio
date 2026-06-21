import { LaneDiagram, type Lane } from "@/components/diagrams/lane-diagram";

// RecapAI — meeting recording / transcript into structured notes.
const lanes: readonly Lane[] = [
  {
    label: "Ingest",
    items: [
      { title: "Upload audio" },
      { title: "Record mic" },
      { title: "Paste transcript" },
    ],
  },
  {
    label: "Platform",
    items: [
      { title: "FastAPI REST" },
      { title: "SQLAlchemy + Alembic" },
      { title: "PostgreSQL", note: "JSONB" },
    ],
  },
  {
    label: "AI",
    items: [
      { title: "Whisper", note: "STT" },
      { title: "GPT-4o", note: "summary" },
      { title: "Mock", note: "keyless" },
    ],
  },
  {
    label: "Out",
    items: [
      { title: "Summary + decisions" },
      { title: "Action items" },
      { title: "Markdown / PDF" },
    ],
  },
];

export function RecapDiagram() {
  return (
    <LaneDiagram
      lanes={lanes}
      ariaLabel="RecapAI pipeline: a meeting is ingested by uploading audio, recording the mic, or pasting a transcript; a FastAPI service with SQLAlchemy and PostgreSQL JSONB storage runs it through Whisper for speech-to-text and GPT-4o for summarization (or a keyless mock provider), producing a summary, key decisions, action items, and a Markdown or PDF export."
    />
  );
}
