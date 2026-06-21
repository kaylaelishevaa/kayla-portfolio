import { Fragment } from "react";

export type LaneItem = { title: string; note?: string };
export type Lane = { label: string; items: readonly LaneItem[] };

/**
 * Shared horizontal box-and-arrow diagram. Lanes flow left → right on desktop
 * and stack top → bottom on mobile. Each lane is a labelled column of boxes.
 */
export function LaneDiagram({ lanes, ariaLabel }: { lanes: readonly Lane[]; ariaLabel: string }) {
  return (
    <figure aria-label={ariaLabel} className="font-mono text-[11px] tracking-wide">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-2">
        {lanes.map((lane, i) => (
          <Fragment key={lane.label}>
            <LaneCol lane={lane} />
            {i < lanes.length - 1 ? <Connector /> : null}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}

function LaneCol({ lane }: { lane: Lane }) {
  return (
    <div className="flex-1">
      <p className="text-ink-faint mb-2 text-[9px] tracking-[0.22em] uppercase">{lane.label}</p>
      <ul className="space-y-2">
        {lane.items.map((item) => (
          <li key={item.title} className="border-rule bg-paper border px-3 py-2">
            <p className="text-ink leading-snug">{item.title}</p>
            {item.note ? (
              <p className="text-ink-faint mt-1 text-[10px] leading-tight tracking-[0.16em] uppercase">
                {item.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <>
      <div className="hidden self-start pt-8 sm:block" aria-hidden>
        <svg
          width="28"
          height="10"
          viewBox="0 0 28 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-faint"
        >
          <path d="M0 5 H24" />
          <path d="m20 1 4 4-4 4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex justify-center sm:hidden" aria-hidden>
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-faint"
        >
          <path d="M5 0 V16" />
          <path d="m1 13 4 4 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}
