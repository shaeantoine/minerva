import Link from "next/link";
import { designs } from "@/lib/designs";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-16 text-neutral-900 md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 md:mb-24">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
            H4 · Design Explorer
          </p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Three explorations of how H4 could present itself.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Each design renders the same H4 copy through a different visual
            tradition — so the variable being compared is design fit, not
            messaging. Pick one to enter the full landing experience.
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-3">
          {designs.map((d, i) => (
            <li key={d.slug}>
              <Link
                href={`/designs/${d.slug}`}
                className="group block h-full overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div
                  className="aspect-[4/3] w-full"
                  style={{ background: d.swatch }}
                  aria-hidden
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    Direction {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-2xl font-medium tracking-tight">
                    {d.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                    {d.tradition}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {d.pitch}
                  </p>
                  <p className="mt-6 text-xs font-medium text-neutral-900 group-hover:underline">
                    Enter design →
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <footer className="mt-24 border-t border-neutral-200 pt-8 text-xs text-neutral-500">
          <p>
            Each design uses the same source content from{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[11px]">
              content/h4.ts
            </code>
            . A persistent switcher lets you flip between them once inside.
          </p>
        </footer>
      </div>
    </main>
  );
}
