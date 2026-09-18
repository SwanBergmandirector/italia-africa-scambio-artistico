import type { Metadata } from "next";
import { getArea } from "@/lib/aree";
import { AreaHero } from "@/components/AreaHero";

const area = getArea("museo")!;

export const metadata: Metadata = {
  title: `${area.titolo} | Scambio Italia-Africa`,
  description: area.sintesi,
};

export default function MuseoPage() {
  return (
    <main className="flex-1">
      <AreaHero area={area} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold">In arrivo</h2>
        <p className="mt-4 text-stone-600">
          Le opere esposte nel museo digitale compariranno qui una volta
          avviata la produzione dei primi progetti abbinati tra i due team.
        </p>
      </section>
    </main>
  );
}
