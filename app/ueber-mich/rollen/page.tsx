import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Rollen & Aufgaben",
  description:
    "Frank Esper als Business-Analyst, Datenmodellierer, Projektleiter, Tester und Administrator – ein Überblick aller Rollen und Aufgaben.",
  alternates: { canonical: "/ueber-mich/rollen" },
};

const rollen = [
  {
    rolle: "Business-Analyst",
    aufgaben: [
      "Erstellung von Schema- und Applikationsobjekten",
      "Erstellung des semantischen Modells",
      "Integration von Business-Logik",
      "KPI-Management",
    ],
  },
  {
    rolle: "Datenmodellierer",
    aufgaben: [
      "ER-Modellierung",
      "Semantic-Layer-Erstellung",
      "Logische Datenmodellierung",
      "Datamart-Entwicklung",
      "Query-Optimierung",
      "DBT-Script-Erstellung",
      "Data-Lineage-Visualisierung",
    ],
  },
  {
    rolle: "Projektleiter",
    aufgaben: [
      "Bedarfsanalyse in Zusammenarbeit mit den Fachdisziplinen",
      "Erstellung von Fachfeinkonzepten",
      "Ressourcenplanung",
      "Aufwandsschätzung",
      "Machbarkeitsanalysen",
      "Change- und Releasemanagement",
    ],
  },
  {
    rolle: "Tester",
    aufgaben: [
      "Erstellung von Testkonzepten",
      "Erstellung von Unit- bzw. Regressionstests",
      "Qualitätsmanagement",
    ],
  },
  {
    rolle: "Administrator",
    aufgaben: [
      "User-Management",
      "Security-Management",
      "Performance-Optimierung",
      "Lizenz-Management",
      "Deployment-Management",
      "Monitoring",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Über mich", item: "https://www.esperit.net/ueber-mich" },
    { "@type": "ListItem", position: 3, name: "Rollen & Aufgaben", item: "https://www.esperit.net/ueber-mich/rollen" },
  ],
};

export default function RollenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/ueber-mich" className="hover:text-white">Über mich</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Rollen & Aufgaben</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Rollen & Aufgaben
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Je nach Projektanforderung übernehme ich unterschiedliche Rollen –
            von der Analyse bis zur Administration.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <RevealOnScroll>
            <Accordion type="single" collapsible className="space-y-2">
              {rollen.map((r) => (
                <AccordionItem
                  key={r.rolle}
                  value={r.rolle}
                  className="border border-slate-200 px-4"
                >
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary hover:no-underline py-4">
                    {r.rolle}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-1">
                      {r.aufgaben.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-8">
              <Link
                href="/ueber-mich"
                className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
              >
                ← Zurück zur Übersicht
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
