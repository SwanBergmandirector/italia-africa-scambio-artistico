const aree = [
  {
    numero: "01",
    titolo: "Academy",
    sottotitolo: "Formazione",
    testo:
      "Lezioni in diretta e registrate, di tipo universitario, con docenti italiani e africani. Contenuti tecnici (uso del telefono, montaggio, strumenti di produzione) e contenuti culturali bidirezionali, oltre a conferenze e dimostrazioni dal vivo.",
  },
  {
    numero: "02",
    titolo: "Produzione",
    sottotitolo: "Flusso di lavoro video",
    testo:
      "Il telefono diventa la telecamera di produzione. Upload automatico su cold storage, generazione di proxy leggeri per il montaggio, relink automatico ed esportazione finale in alta qualità. Editing sempre dentro l'app della piattaforma.",
  },
  {
    numero: "03",
    titolo: "Archivio",
    sottotitolo: "Conservazione permanente",
    testo:
      "File originali e progetti di montaggio conservati in un archivio cloud permanente, con copia di backup su server fisici presso New Design. Un corpus storico che cresce edizione dopo edizione.",
  },
  {
    numero: "04",
    titolo: "Pubblicazione",
    sottotitolo: "Broadcaster",
    testo:
      "La piattaforma è essa stessa un broadcaster permanente: ogni progetto resta sempre visibile. Può inoltre distribuire i contenuti finali verso altri broadcaster esterni nel mondo.",
  },
  {
    numero: "05",
    titolo: "Museo digitale",
    sottotitolo: "Esposizione virtuale",
    testo:
      "Un museo virtuale dove si confrontano le opere dei due team, mettendo in luce differenze, somiglianze e parallelismi tra le due espressioni artistiche e culturali.",
  },
];

const nav = [
  { href: "#introduzione", label: "Introduzione" },
  { href: "#aree", label: "Le 5 aree" },
  { href: "#cooperazione", label: "Cooperazione" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight">
            Scambio Italia&nbsp;·&nbsp;Africa
          </span>
          <nav className="hidden gap-6 text-sm text-stone-600 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
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
        </section>

        <section
          id="introduzione"
          className="border-y border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Introduzione
            </h2>
            <div className="mt-6 grid gap-6 text-stone-600 sm:grid-cols-2">
              <p>
                Le nuove tecnologie digitali diventano il linguaggio comune
                attraverso cui due giovani generazioni, una in Italia e una
                in Africa, si incontrano, si raccontano e costruiscono
                qualcosa insieme. Non servono attrezzature professionali
                costose: basta un telefono, perché è la piattaforma stessa a
                trasformarlo in uno strumento professionale, gestendo
                tecnicamente tutto il resto.
              </p>
              <p>
                Il progetto è incentrato sulla produzione video e
                cinematografica, ma il concetto è più ampio: promuove lo
                sviluppo e la diffusione di opere digitali in genere —
                fotografia digitale, animazioni, GIF animate e altre forme
                di espressione legate alle nuove tecnologie. La struttura,
                pur nata per il dialogo tra Italia e Africa, è pensata per
                essere estendibile a qualsiasi altro paese nel tempo.
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
              <article
                key={area.numero}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="text-sm font-mono text-accent">
                  {area.numero}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{area.titolo}</h3>
                <p className="text-sm font-medium text-stone-500">
                  {area.sottotitolo}
                </p>
                <p className="mt-3 text-stone-600">{area.testo}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cooperazione"
          className="border-t border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
              Cooperazione diretta e metriche di impatto
            </h2>
            <div className="mt-6 grid gap-6 text-stone-600 sm:grid-cols-2">
              <p>
                Oltre alle cinque aree, la piattaforma prevede{" "}
                <strong className="text-stone-900">progetti abbinati</strong>:
                uno studente italiano e uno studente africano lavorano
                insieme sulla stessa ripresa, filmando lo stesso tema da
                punti di vista opposti — il risultato nasce già come dialogo
                a due voci.
              </p>
              <p>
                Un sistema di metriche misura concretamente lo scambio
                avvenuto: ore di lezione incrociata, progetti abbinati
                completati, opere caricate nel museo digitale. La
                piattaforma prevede inoltre, fin dalla proposta, un impianto
                di consenso informato e protezione dati coerente con le
                normative dei due paesi coinvolti.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-stone-500">
          Progetto proposto da New Design. Documento di specifica completo
          nel README del repository.
        </div>
      </footer>
    </div>
  );
}
