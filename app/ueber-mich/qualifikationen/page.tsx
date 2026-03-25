import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Qualifikationen & Know-how",
  description:
    "Übersicht über die 10 Kompetenzbereiche von Frank Esper – von DWH-Architektur über Change-Management bis Scrum.",
  alternates: { canonical: "/ueber-mich/qualifikationen" },
};

const kacheln = [
  {
    titel: "Change- und Release-Management",
    beschreibung:
      "Change-Typisierung, Change Enablement / Change Control, Release Planung, Release Paketierung",
  },
  {
    titel: "Deployment-Management",
    beschreibung: "Automatisierung, Rollback- und Rollforwards",
  },
  {
    titel: "Test- und Qualitätsmanagement",
    beschreibung:
      "Teststrategie, Abnahmekriterien, Quality Gates, Unit Tests, Regressionstests, Plausibilitätstests",
  },
  {
    titel: "Service-Transition & Betriebsübergabe",
    beschreibung: "Operational Readiness, Knowledge Transfer, Hypercare",
  },
  {
    titel: "Metriken, Reporting & Continual Improvement",
    beschreibung: "KPIs, Trend- & Ursachenanalyse, Performanceoptimierung",
  },
  {
    titel: "DWH-Architektur & Datenmodellierung",
    beschreibung:
      "Architektur-Patterns, Dimensional Modeling, Data Vault, Modellierungsprinzipien, semantische Schicht",
  },
  {
    titel: "Datenqualität & Data Governance",
    beschreibung:
      "DQ-Regeln & Validierungen, Data Profiling, Master-/Reference-Data, Metadaten Management",
  },
  {
    titel: "Performance Engineering & Skalierung",
    beschreibung: "Query Optimierung",
  },
  {
    titel: "BI/Analytics Enablement",
    beschreibung:
      "Self-Service BI, Kennzahlen-/KPI-Management, domänenorientierte Data Marts",
  },
  {
    titel: "Scrum",
    beschreibung: "Sprint Planning, Sprint Review, Retrospektive",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Über mich", item: "https://www.esperit.net/ueber-mich" },
    { "@type": "ListItem", position: 3, name: "Qualifikationen & Know-how", item: "https://www.esperit.net/ueber-mich/qualifikationen" },
  ],
};

export default function QualifikationenPage() {
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
            <span className="text-white/80">Qualifikationen & Know-how</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Qualifikationen & Know-how
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Über 24 Jahre Berufserfahrung in diesen 10 Kompetenzbereichen.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          {/* 3-Spalten-Grid, Kachel 10 zentriert */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {kacheln.slice(0, 9).map((k, i) => (
              <RevealOnScroll key={k.titel} delay={(i % 3) * 0.08}>
                <Card className="h-full border border-slate-200 bg-white rounded-none hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-bold text-slate-900">
                      {k.titel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {k.beschreibung}
                    </p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
            {/* Kachel 10 – zentriert in der letzten Reihe */}
            <RevealOnScroll className="md:col-start-2">
              <Card className="h-full border border-slate-200 bg-white rounded-none hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-slate-900">
                    {kacheln[9].titel}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {kacheln[9].beschreibung}
                  </p>
                </CardContent>
              </Card>
            </RevealOnScroll>
          </div>

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
