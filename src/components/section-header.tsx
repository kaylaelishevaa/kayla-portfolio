import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  label: string;
  title?: string;
  className?: string;
};

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <h2 className="text-ink-soft flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
        <span aria-hidden className="bg-rule inline-block h-px w-8" />
        {label}
      </h2>
      {title ? (
        <p className="font-display text-ink mt-4 text-3xl tracking-tight sm:text-4xl">{title}</p>
      ) : null}
    </div>
  );
}
