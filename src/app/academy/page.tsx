import type { Metadata } from "next";
import { getArea } from "@/lib/aree";
import { AreaHero } from "@/components/AreaHero";
import { LezioniList } from "./LezioniList";
import { lezioni } from "./lezioni";

const area = getArea("academy")!;

export const metadata: Metadata = {
  title: `${area.titolo} | Scambio Italia-Africa`,
  description: area.sintesi,
};

export default function AcademyPage() {
  return (
    <main className="flex-1">
      <AreaHero area={area} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Catalogo lezioni</h2>
          <span className="text-sm text-stone-400">
            Esempio — catalogo di prova
          </span>
        </div>
        <p className="mt-2 text-sm text-stone-500">
          Contenuti dimostrativi: mostrano come funzionerà il catalogo reale
          una volta collegato al calendario delle lezioni.
        </p>
        <div className="mt-6">
          <LezioniList lezioni={lezioni} />
        </div>
      </section>
    </main>
  );
}
