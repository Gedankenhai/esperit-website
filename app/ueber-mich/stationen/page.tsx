import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Stationen & Projekte",
  description:
    "Projekthistorie von Frank Esper: HDI, HannoverRück, CBR Fashion, KfW Bank und weitere. CV als PDF verfügbar.",
  alternates: { canonical: "/ueber-mich/stationen" },
};

const stationen = [
  {
    unternehmen: "HDI",
    rolle: "Datenmodellierer, MicroStrategy-Designer und Administrator, PowerBI-Designer",
    aufgaben: [
      "MicroStrategy-Berichtserstellung",
      "PowerBI-Berichtsersteller und Semantikmodell-Entwicklung",
      "Projektmigration von MicroStrategy nach PowerBI",
      "Lift & Shift Projekt",
      "Administration der 3-stufigen MicroStrategy-Systemumgebung (SAML, Zertifikate, Lizenzen, User-Management, Change- und Releasemanagement)",
      "Datenmodellierung in Exasol, Oracle und Snowflake (GitHub, DBT, DV4DBT, DBeaver, Squirrel)",
      "Agiles Arbeiten nach Scrum, Team 8 Personen",
    ],
  },
  {
    unternehmen: "HannoverRück",
    rolle: "Datenmodellierer und MicroStrategy-Designer",
    aufgaben: [
      "MicroStrategy-Berichts- und Dossier-Erstellung",
      "Datenmodellierung in Exasol und Oracle (View-Layer/Datamart)",
      "Migration von SAP BO nach MicroStrategy",
      "Automatisierung via Command-Manager-Scripte",
      "Writeback-Prozesse via MicroStrategy-Dashboards",
    ],
  },
  {
    unternehmen: "CBR Fashion (Cecil, Street One)",
    rolle: "MicroStrategy-Administrator",
    aufgaben: [
      "User-Management, LDAP-Anbindung, Rollenkonzept",
      "Prozessautomatisierung mit MicroStrategy System-Manager",
      "Alerting-Automatisierung auf Basis von Datenbankabfragen",
      "Teilprojektverantwortung (5 externe + 5 interne Mitarbeiter)",
    ],
  },
  {
    unternehmen: "KfW Bank",
    rolle: "MicroStrategy-Entwickler",
    aufgaben: [
      "Betreuung MicroStrategy mit SAP/BW-Anbindung (SAPFIN)",
      "Migration MicroStrategy nach SAP BO",
      "Projektverantwortung (~20 Mitarbeiter)",
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Über mich", item: "https://www.esperit.net/ueber-mich" },
    { "@type": "ListItem", position: 3, name: "Stationen & Projekte", item: "https://www.esperit.net/ueber-mich/stationen" },
  ],
};

export default function StationenPage() {
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
            <span className="text-white/80">Stationen & Projekte</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Stationen & Projekte
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Eine Auswahl aus meiner Projekthistorie.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <RevealOnScroll>
            <Accordion type="single" collapsible className="space-y-2">
              {stationen.map((s) => (
                <AccordionItem
                  key={s.unternehmen}
                  value={s.unternehmen}
                  className="border border-slate-200 px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <div>
                      <p className="font-bold text-slate-900 group-hover:text-primary">
                        {s.unternehmen}
                      </p>
                      <p className="text-sm font-normal text-slate-500 mt-0.5">
                        {s.rolle}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-1">
                      {s.aufgaben.map((a) => (
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
            <p className="mt-8 text-sm text-slate-500 leading-relaxed">
              Über weitere Stationen & Projekte informiere ich Sie gerne in
              meinem downloadbaren Profil & CV.
            </p>
            <div className="mt-4 mb-8">
              <Button
                asChild
                variant="outline"
                className="rounded-md border-2 border-[#5F94D6] text-[#5F94D6] hover:bg-[#5F94D6] hover:text-white"
              >
                <a href="/downloads/CV_Frank_Esper.pdf" download>
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  DE Profil & CV als PDF
                </a>
              </Button>
            </div>
            <Link
              href="/ueber-mich"
              className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
            >
              ← Zurück zur Übersicht
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
