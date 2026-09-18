"use client";

import { useState } from "react";

export function LoginForm() {
  const [inviato, setInviato] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setInviato(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="email" className="text-sm font-medium text-stone-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="nome@esempio.it"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium text-stone-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
      >
        Accedi
      </button>

      {inviato && (
        <p className="rounded-lg bg-accent-soft/50 px-3 py-2 text-sm text-stone-700">
          Questo modulo è ancora dimostrativo: la piattaforma non ha ancora
          un sistema di account reale collegato. Sarà attivato in una fase
          successiva dello sviluppo.
        </p>
      )}
    </form>
  );
}
