"use client";

import { useMemo, useState } from "react";
import type { Lezione } from "./lezioni";

type Filtro = "tutte" | Lezione["tipo"];

const filtri: { value: Filtro; label: string }[] = [
  { value: "tutte", label: "Tutte" },
  { value: "tecnico", label: "Tecniche" },
  { value: "culturale", label: "Culturali" },
];

const formatoData = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
});

export function LezioniList({ lezioni }: { lezioni: Lezione[] }) {
  const [filtro, setFiltro] = useState<Filtro>("tutte");

  const visibili = useMemo(
    () =>
      filtro === "tutte" ? lezioni : lezioni.filter((l) => l.tipo === filtro),
    [filtro, lezioni],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filtri.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFiltro(f.value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filtro === f.value
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 text-stone-600 hover:border-accent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
        {visibili.map((lezione) => (
          <li
            key={lezione.id}
            className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-stone-900">{lezione.titolo}</p>
              <p className="mt-1 text-sm text-stone-500">
                {lezione.docente} · {lezione.paese}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span
                className={`rounded-full px-2.5 py-1 font-medium ${
                  lezione.formato === "diretta"
                    ? "bg-accent-soft text-accent"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                {lezione.formato === "diretta" ? "In diretta" : "Registrata"}
              </span>
              <span className="text-stone-500">
                {formatoData.format(new Date(lezione.data))}
              </span>
            </div>
          </li>
        ))}
        {visibili.length === 0 && (
          <li className="p-5 text-sm text-stone-500">
            Nessuna lezione in questa categoria per ora.
          </li>
        )}
      </ul>
    </div>
  );
}
