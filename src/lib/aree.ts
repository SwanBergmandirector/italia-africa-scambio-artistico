export type Area = {
  slug: string;
  numero: string;
  icona: "academy" | "produzione" | "archivio" | "pubblicazione" | "museo";
  titolo: string;
  sottotitolo: string;
  sintesi: string;
  testo: string[];
};

export const aree: Area[] = [
  {
    slug: "academy",
    numero: "01",
    icona: "academy",
    titolo: "Academy",
    sottotitolo: "Formazione",
    sintesi:
      "Lezioni in diretta e registrate, di tipo universitario, con docenti italiani e africani.",
    testo: [
      "La piattaforma include una sezione didattica con lezioni in diretta e lezioni registrate, di tipo universitario. I docenti sono sia italiani che africani.",
      "Ci sono due tipi di contenuti formativi. Il primo tipo è tecnico: come si gira con un telefono, come funziona il sistema di montaggio della piattaforma, come si usano gli strumenti di produzione. Il secondo tipo è culturale: un insegnante africano che racconta agli studenti italiani un aspetto della propria cultura, e viceversa, un insegnante piemontese che spiega agli studenti africani, per esempio in lingua francese, un aspetto della cultura italiana o piemontese. Lo scambio è quindi sempre bidirezionale.",
      "La sezione Academy include anche conferenze e dimostrazioni pratiche dal vivo.",
    ],
  },
  {
    slug: "produzione",
    numero: "02",
    icona: "produzione",
    titolo: "Produzione",
    sottotitolo: "Flusso di lavoro video",
    sintesi:
      "Il telefono diventa la telecamera di produzione: upload automatico, proxy leggeri e relink finale in alta qualità.",
    testo: [
      "Gli studenti collegano il proprio telefono alla piattaforma, che diventa così la telecamera di produzione. Ogni ripresa viene registrata in locale alla massima qualità sul telefono, poi caricata automaticamente in background su uno storage cloud a basso costo (storage a oggetti, o cold storage). Questo è l'archivio dei file originali pesanti, che non viene mai toccato direttamente durante il montaggio.",
      "Appena un file arriva sul server, un servizio automatico genera un proxy, cioè una copia leggera e compressa a bassa risoluzione dello stesso file, con lo stesso identico codice temporale dell'originale. Il montaggio video avviene sempre sui proxy leggeri, mai sui file pesanti originali. Una volta finito il montaggio, la piattaforma fa il relink automatico, ricollegando la sequenza montata ai file originali pesanti usando i codici temporali, e genera l'esportazione finale in alta qualità.",
      "Tutto l'editing avviene esclusivamente dentro l'applicazione della piattaforma: è allo stesso tempo lo strumento didattico che insegna a usare gli strumenti di montaggio, e lo strumento reale con cui si produce il risultato finale.",
    ],
  },
  {
    slug: "archivio",
    numero: "03",
    icona: "archivio",
    titolo: "Archivio",
    sottotitolo: "Conservazione permanente",
    sintesi:
      "File originali e progetti di montaggio conservati in un archivio cloud permanente, con backup fisico.",
    testo: [
      "Tutto il materiale prodotto, sia i file originali che i progetti di montaggio, rimane conservato in un archivio permanente in cloud.",
      "Oltre alla copia cloud, viene mantenuta anche una copia di backup su server fisici presso New Design, la società che propone l'iniziativa.",
      "Questo archivio, accumulandosi negli anni, diventa un corpus storico di tutti gli scambi realizzati, a disposizione delle edizioni future.",
    ],
  },
  {
    slug: "pubblicazione",
    numero: "04",
    icona: "pubblicazione",
    titolo: "Pubblicazione",
    sottotitolo: "Broadcaster",
    sintesi:
      "La piattaforma è essa stessa un broadcaster permanente, con distribuzione anche verso l'esterno.",
    testo: [
      "La piattaforma stessa funge da broadcaster permanente: il risultato finale di ogni progetto rimane sempre visibile sulla piattaforma.",
      "Oltre a questo, la piattaforma può occuparsi della distribuzione del contenuto finale anche verso altri broadcaster esterni nel mondo.",
      "La piattaforma è pensata per essere riutilizzata ogni anno con nuovi team e nuovi progetti, diventando uno strumento permanente di interscambio culturale, potenzialmente estendibile a qualsiasi paese in futuro.",
    ],
  },
  {
    slug: "museo",
    numero: "05",
    icona: "museo",
    titolo: "Museo digitale",
    sottotitolo: "Esposizione virtuale",
    sintesi:
      "Un museo virtuale dove si confrontano le opere dei due team, tra differenze e parallelismi culturali.",
    testo: [
      "La piattaforma include anche una sezione museo digitale virtuale, dove vengono esposte opere digitali create sia dal team italiano che dal team africano.",
      "Questa sezione permette di confrontare le qualità artistiche, lo stile e la cultura dei due popoli, mostrando in modo diretto le differenze, le somiglianze e i parallelismi tra le due espressioni artistiche, come se fosse un'esposizione museale, ma completamente virtuale.",
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return aree.find((area) => area.slug === slug);
}
