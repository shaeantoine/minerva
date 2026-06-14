"use client";

import Link from "next/link";
import { useState } from "react";

type SwitcherDesign = {
  slug: string;
  name: string;
};

export function DesignSwitcher({
  designs,
  current,
}: {
  designs: SwitcherDesign[];
  current: string;
}) {
  const [hidden, setHidden] = useState(false);

  if (hidden) {
    return (
      <button
        onClick={() => setHidden(false)}
        className="fixed top-3 right-3 z-50 rounded-full bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-black"
        aria-label="Show design switcher"
      >
        Designs
      </button>
    );
  }

  return (
    <div className="fixed top-3 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-black/10 bg-white/85 px-1.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm backdrop-blur-md">
        <Link
          href="/"
          className="rounded-full px-2.5 py-1 hover:bg-black/5"
          aria-label="Back to gallery"
        >
          ←
        </Link>
        <div className="h-3.5 w-px bg-black/10" />
        {designs.map((d) => {
          const active = d.slug === current;
          return (
            <Link
              key={d.slug}
              href={`/designs/${d.slug}`}
              className={
                "rounded-full px-2.5 py-1 transition-colors " +
                (active
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-black/5")
              }
            >
              {d.name}
            </Link>
          );
        })}
        <div className="h-3.5 w-px bg-black/10" />
        <button
          onClick={() => setHidden(true)}
          className="rounded-full px-2 py-1 text-neutral-500 hover:bg-black/5"
          aria-label="Hide switcher"
        >
          ×
        </button>
      </div>
    </div>
  );
}
