import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Accedi | Scambio Italia-Africa",
  description: "Accedi alla piattaforma di scambio Italia-Africa.",
};

export default function AccediPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Accedi</h1>
        <p className="mt-2 text-sm text-stone-500">
          Riservato a studenti e docenti della piattaforma.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
