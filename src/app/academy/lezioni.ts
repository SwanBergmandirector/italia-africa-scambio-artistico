export type Lezione = {
  id: string;
  titolo: string;
  tipo: "tecnico" | "culturale";
  formato: "diretta" | "registrata";
  docente: string;
  paese: "Italia" | "Africa";
  data: string;
};

// Dati di esempio: verranno sostituiti dal catalogo reale dei corsi.
export const lezioni: Lezione[] = [
  {
    id: "riprese-con-il-telefono",
    titolo: "Girare con il telefono: inquadrature e stabilità",
    tipo: "tecnico",
    formato: "registrata",
    docente: "Marco Ferrero",
    paese: "Italia",
    data: "2026-10-06",
  },
  {
    id: "montaggio-sui-proxy",
    titolo: "Montare sui proxy: le basi dello strumento di editing",
    tipo: "tecnico",
    formato: "registrata",
    docente: "Marco Ferrero",
    paese: "Italia",
    data: "2026-10-13",
  },
  {
    id: "narrazione-orale-africana",
    titolo: "La narrazione orale come forma cinematografica",
    tipo: "culturale",
    formato: "diretta",
    docente: "Aïcha Diallo",
    paese: "Africa",
    data: "2026-10-20",
  },
  {
    id: "tradizioni-piemontesi",
    titolo: "Tradizioni piemontesi: dal Palio alle feste di paese",
    tipo: "culturale",
    formato: "diretta",
    docente: "Silvia Bruno",
    paese: "Italia",
    data: "2026-10-27",
  },
  {
    id: "musica-e-danza-west-africa",
    titolo: "Musica e danza dell'Africa occidentale nel documentario",
    tipo: "culturale",
    formato: "registrata",
    docente: "Kwame Mensah",
    paese: "Africa",
    data: "2026-11-03",
  },
  {
    id: "audio-in-esterni",
    titolo: "Riprendere l'audio in esterni con strumenti minimi",
    tipo: "tecnico",
    formato: "diretta",
    docente: "Kwame Mensah",
    paese: "Africa",
    data: "2026-11-10",
  },
];
