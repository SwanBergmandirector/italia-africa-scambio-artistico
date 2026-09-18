import type { Metadata } from "next";
import { getArea } from "@/lib/aree";
import { AreaHero } from "@/components/AreaHero";

const area = getArea("pubblicazione")!;

export const metadata: Metadata = {
  title: `${area.titolo} | Scambio Italia-Africa`,
  description: area.sintesi,
};

export default function PubblicazionePage() {
  return (
    <main className="flex-1">
      <AreaHero area={area} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold">Uno strumento permanente</h2>
        <p className="mt-4 text-stone-600">
          La piattaforma è pensata per essere riutilizzata ogni anno con
          nuovi team e nuovi progetti, diventando uno strumento permanente di
          interscambio culturale — non limitato alla sola coppia
          Italia-Africa, ma potenzialmente estendibile a qualsiasi paese in
          futuro.
        </p>
      </section>
    </main>
  );
}
