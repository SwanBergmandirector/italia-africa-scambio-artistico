"use client";

import Link from "next/link";
import { useState } from "react";
import { aree } from "@/lib/aree";

const links = [
  { href: "/", label: "Home" },
  ...aree.map((area) => ({ href: `/${area.slug}`, label: area.titolo })),
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Scambio Italia&nbsp;·&nbsp;Africa
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-stone-600 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/accedi"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Accedi
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-700 lg:hidden"
          aria-label="Apri il menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-stone-50 lg:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4 text-sm text-stone-600">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 transition-colors hover:bg-stone-100 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/accedi"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-stone-900 px-4 py-2 text-center font-medium text-white"
            >
              Accedi
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
