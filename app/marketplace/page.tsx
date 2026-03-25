import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

export const metadata: Metadata = {
  title: "Marketplace | EsperIT",
  description:
    "KI-Tools-Katalog und KI-Use-Cases nach Abteilung – kuratierte Übersichten von EsperIT.",
  alternates: { canonical: "/marketplace" },
};

const bereiche = [
  {
    titel: "AI Tools Katalog",
    beschreibung: "Aktuelle Übersicht empfehlenswerter KI-Tools nach Einsatzbereich.",
    href: "/marketplace/ai-tools-katalog",
  },
  {
    titel: "AI Use Cases pro Abteilung",
    beschreibung: "KI-Anwendungsfälle strukturiert nach Unternehmensbereichen.",
    href: "/marketplace/ai-use-cases",
  },
];

export default function MarketplacePage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <RevealOnScroll>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
            Marketplace
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mb-12">
            Kuratierte Übersichten zu KI-Tools und Anwendungsfällen – laufend
            aktualisiert.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {bereiche.map((b, i) => (
            <RevealOnScroll key={b.href} delay={i * 0.1}>
              <Link
                href={b.href}
                className="block border border-slate-200 p-8 hover:border-primary/40 hover:bg-slate-50 transition-colors"
              >
                <h2 className="text-lg font-bold text-slate-900 mb-2">{b.titel}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {b.beschreibung}
                </p>
                <span className="text-sm font-medium text-accent">
                  Zur Übersicht →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
