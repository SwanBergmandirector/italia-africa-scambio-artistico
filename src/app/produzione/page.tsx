import type { Metadata } from "next";
import { getArea } from "@/lib/aree";
import { AreaHero } from "@/components/AreaHero";

const area = getArea("produzione")!;

export const metadata: Metadata = {
  title: `${area.titolo} | Scambio Italia-Africa`,
  description: area.sintesi,
};

export default function ProduzionePage() {
  return (
    <main className="flex-1">
      <AreaHero area={area} />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-xl font-semibold">Il flusso, passo per passo</h2>
        <ol className="mt-6 space-y-6 border-l border-stone-200 pl-6">
          {[
            {
              titolo: "Ripresa",
              testo:
                "Lo studente gira con il proprio telefono, collegato alla piattaforma, alla massima qualità disponibile.",
            },
            {
              titolo: "Upload su cold storage",
              testo:
                "Il file viene caricato automaticamente in background su uno storage a oggetti a basso costo, senza intervento manuale.",
            },
            {
              titolo: "Generazione proxy",
              testo:
                "Un servizio automatico crea una copia leggera con lo stesso codice temporale dell'originale, pronta per il montaggio.",
            },
            {
              titolo: "Montaggio",
              testo:
                "Il montaggio avviene solo sui proxy leggeri, dentro l'app della piattaforma, mai sui file pesanti originali.",
            },
            {
              titolo: "Relink ed esportazione",
              testo:
                "A montaggio finito, la piattaforma ricollega automaticamente ai file originali ed esporta in alta qualità.",
            },
          ].map((step, i) => (
            <li key={step.titolo} className="relative">
              <span className="absolute -left-[1.85rem] flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-medium text-white">
                {i + 1}
              </span>
              <p className="font-medium text-stone-900">{step.titolo}</p>
              <p className="mt-1 text-stone-600">{step.testo}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
