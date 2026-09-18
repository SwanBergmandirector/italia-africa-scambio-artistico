import Link from "next/link";
import { aree } from "@/lib/aree";
import { AreaIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-accent-soft/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-[-15%] h-72 w-72 rounded-full bg-stone-200/70 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Piattaforma artistico-culturale
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Uno scambio, due generazioni, un unico strumento di produzione.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Una piattaforma digitale che connette studenti in Piemonte e
            studenti in Africa in un programma di scambio artistico e
            culturale incentrato sulla produzione cinematografica e
            documentaristica — non solo uno strumento di produzione, ma un
            ambiente di formazione, scambio bidirezionale, archiviazione
            permanente e distribuzione del risultato finale.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/academy"
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              Scopri l&apos;Academy
            </Link>
            <Link
              href="/accedi"
              className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-accent hover:text-accent"
            >
              Accedi alla piattaforma
            </Link>
          </div>
        </div>
      </section>

      <section id="introduzione" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Introduzione
          </h2>
          <div className="mt-6 grid gap-6 text-stone-600 sm:grid-cols-2">
            <p>
              Le nuove tecnologie digitali diventano il linguaggio comune
              attraverso cui due giovani generazioni, una in Italia e una in
              Africa, si incontrano, si raccontano e costruiscono qualcosa
              insieme. Non servono attrezzature professionali costose: basta
              un telefono, perché è la piattaforma stessa a trasformarlo in
              uno strumento professionale, gestendo tecnicamente tutto il
              resto.
            </p>
            <p>
              Il progetto è incentrato sulla produzione video e
              cinematografica, ma il concetto è più ampio: promuove lo
              sviluppo e la diffusione di opere digitali in genere —
              fotografia digitale, animazioni, GIF animate e altre forme di
              espressione legate alle nuove tecnologie. La struttura, pur
              nata per il dialogo tra Italia e Africa, è pensata per essere
              estendibile a qualsiasi altro paese nel tempo.
            </p>
          </div>
        </div>
      </section>

      <section id="aree" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Le cinque aree della piattaforma
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {aree.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}`}
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-accent">
                  {area.numero}
                </span>
                <AreaIcon
                  name={area.icona}
                  className="h-6 w-6 text-stone-400 transition-colors group-hover:text-accent"
                />
              </div>
              <h3 className="mt-3 text-xl font-semibold">{area.titolo}</h3>
              <p className="text-sm font-medium text-stone-500">
                {area.sottotitolo}
              </p>
              <p className="mt-3 text-stone-600">{area.sintesi}</p>
              <span className="mt-4 inline-block text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Scopri di più →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="cooperazione" className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">
            Cooperazione diretta e metriche di impatto
          </h2>
          <div className="mt-6 grid gap-6 text-stone-600 sm:grid-cols-2">
            <p>
              Oltre alle cinque aree, la piattaforma prevede{" "}
              <strong className="text-stone-900">progetti abbinati</strong>:
              uno studente italiano e uno studente africano lavorano insieme
              sulla stessa ripresa, filmando lo stesso tema da punti di vista
              opposti — il risultato nasce già come dialogo a due voci.
            </p>
            <p>
              Un sistema di metriche misura concretamente lo scambio
              avvenuto: ore di lezione incrociata, progetti abbinati
              completati, opere caricate nel museo digitale. La piattaforma
              prevede inoltre, fin dalla proposta, un impianto di consenso
              informato e protezione dati coerente con le normative dei due
              paesi coinvolti.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
