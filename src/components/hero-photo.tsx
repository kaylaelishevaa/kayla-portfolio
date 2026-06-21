"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

// Desktop (hover-capable): photo is grayscale, reveals colour on hover.
// Touch devices can't hover, so colour fades in once when it scrolls into view.
export function HeroPhoto({ hasAvatar }: { hasAvatar: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only auto-reveal where hover isn't available; desktop keeps the hover effect.
    if (window.matchMedia("(hover: hover)").matches) return;

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none">
      {/* Hairline frame with a thin paper mat around the photo. */}
      <div className="border-rule bg-paper border p-2 shadow-[0_1px_2px_rgba(22,21,19,0.04),0_8px_24px_-12px_rgba(22,21,19,0.12)] sm:p-2.5">
        <div
          ref={ref}
          className="group bg-rule-soft border-rule/60 relative aspect-[4/5] w-full overflow-hidden border"
        >
          {hasAvatar ? (
            <Image
              src="/avatar.jpg"
              alt="Kayla Elisheva Siwi"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 320px, 280px"
              priority
              className={cn(
                "object-cover transition-[filter,transform] duration-500 ease-out group-hover:scale-[1.015] group-hover:grayscale-0",
                revealed ? "grayscale-0" : "grayscale-[0.92] contrast-[1.02]",
              )}
            />
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden
                  className="font-display text-ink-soft text-7xl select-none sm:text-8xl"
                >
                  Ks
                </span>
              </div>
              <div className="border-rule text-ink-soft absolute right-3 bottom-3 left-3 border-t pt-2 font-mono text-[10px] tracking-widest uppercase">
                Replace with your photo
                <span className="text-ink-faint block">/public/avatar.jpg · 4:5</span>
              </div>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}
