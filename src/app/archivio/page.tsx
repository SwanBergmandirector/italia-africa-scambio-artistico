import type { Metadata } from "next";
import { getArea } from "@/lib/aree";
import { AreaHero } from "@/components/AreaHero";

const area = getArea("archivio")!;

export const metadata: Metadata = {
  title: `${area.titolo} | Scambio Italia-Africa`,
  description: area.sintesi,
};

export default function ArchivioPage() {
  return (
    <main className="flex-1">
      <AreaHero area={area} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold">Due copie, per sicurezza</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="font-medium text-stone-900">Copia cloud</p>
            <p className="mt-2 text-sm text-stone-600">
              Archivio permanente in cloud: file originali e progetti di
              montaggio, sempre accessibili.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="font-medium text-stone-900">Copia fisica</p>
            <p className="mt-2 text-sm text-stone-600">
              Backup su server fisici presso New Design, la società che
              propone l&apos;iniziativa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
