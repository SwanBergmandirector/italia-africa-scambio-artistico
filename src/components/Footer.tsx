import Link from "next/link";
import { aree } from "@/lib/aree";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold tracking-tight">
            Scambio Italia · Africa
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Un progetto proposto da New Design.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-900">Le aree</p>
          <ul className="mt-2 space-y-1.5 text-sm text-stone-500">
            {aree.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/${area.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {area.titolo}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-900">Account</p>
          <ul className="mt-2 space-y-1.5 text-sm text-stone-500">
            <li>
              <Link
                href="/accedi"
                className="transition-colors hover:text-accent"
              >
                Accedi
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200">
        <p className="mx-auto max-w-5xl px-6 py-4 text-xs text-stone-400">
          Documento di specifica completo nel README del repository.
        </p>
      </div>
    </footer>
  );
}
