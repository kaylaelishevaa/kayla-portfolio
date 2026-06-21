"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";

// Email row: keeps the mailto: link (opens a mail app when one is set) but also
// copies the address on click and shows "Copied!" — so it works even when the
// visitor has no default mail client.
export function EmailRow({ label, email }: { label: string; email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — the mailto: still fires for those with a client.
    }
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={copy}
      className="group flex items-baseline gap-4 py-5 transition-colors"
    >
      <span className="text-ink-faint w-20 shrink-0 font-mono text-[11px] tracking-[0.18em] uppercase">
        {label}
      </span>
      <span className="text-ink decoration-ink/20 group-hover:decoration-ink flex-1 truncate underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 group-hover:decoration-2">
        {email}
      </span>
      <span
        aria-live="polite"
        className="text-ink-faint shrink-0 font-mono text-[10px] tracking-[0.18em] uppercase"
      >
        {copied ? "Copied!" : null}
      </span>
      <ArrowIcon className="text-ink-soft group-hover:text-ink shrink-0 transition-all group-hover:translate-x-0.5" />
    </a>
  );
}
