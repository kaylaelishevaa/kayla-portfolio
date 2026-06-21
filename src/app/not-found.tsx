import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center sm:px-8 sm:py-40">
      <p className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">
        404 · not found
      </p>
      <h1 className="font-display text-ink mt-6 text-4xl leading-tight tracking-tight sm:text-5xl">
        That page isn&apos;t here.
      </h1>
      <p className="text-ink-soft mt-5">It may have moved, or it may have never existed.</p>
      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="group text-ink decoration-ink/30 hover:decoration-ink inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
        >
          Back home
          <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
