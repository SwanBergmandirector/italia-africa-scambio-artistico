import type { Area } from "@/lib/aree";
import { AreaIcon } from "@/components/icons";

export function AreaHero({ area }: { area: Area }) {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="flex items-center gap-3 text-accent">
          <AreaIcon name={area.icona} className="h-7 w-7" />
          <span className="text-sm font-mono">{area.numero}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {area.titolo}
        </h1>
        <p className="mt-1 text-lg text-stone-500">{area.sottotitolo}</p>
        <div className="mt-8 space-y-4 text-stone-600">
          {area.testo.map((paragrafo) => (
            <p key={paragrafo.slice(0, 24)}>{paragrafo}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
