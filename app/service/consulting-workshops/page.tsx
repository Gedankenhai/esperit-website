import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Consulting & Workshops | EsperIT",
  description:
    "Flexible IT-Beratung als PoC oder Projektphase sowie maßgeschneiderte Workshops für Ihr Team – von Frank Esper, EsperIT.",
  alternates: { canonical: "/service/consulting-workshops" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Service", item: "https://www.esperit.net/service" },
    { "@type": "ListItem", position: 3, name: "Consulting & Workshops", item: "https://www.esperit.net/service/consulting-workshops" },
  ],
};

const workshopPunkte = [
  "Ideen zu einer Problemstellung",
  "Use Cases für eine sinnvolle Automatisierung bestehender Arbeitsprozesse",
  "Software-Einarbeitungskonzepte anhand realer Arbeitsgrundlagen",
];

export default function ConsultingWorkshopsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Mini-Hero */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="cursor-default">Service</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">Consulting & Workshops</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Consulting & Workshops
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Flexible Unterstützung – vom strategischen PoC bis zum praxisnahen
            Workshop mit Ihrem Team.
          </p>
        </div>
      </section>

      {/* Consulting */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="text-xl font-bold tracking-widest text-slate-900 mb-6">
              CONSULTING (flexible Beauftragung)
            </h2>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Gerne unterstütze ich Sie in Form eines PoC, mit einer
              Machbarkeitsanalyse oder der Konzeption und Durchführung einer
              Projektphase. Aufgrund meines wirtschaftlichen Hintergrunds
              verbinde ich kaufmännisches Wissen mit technologischer Expertise.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="border-t border-slate-200" />

      {/* Workshop */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="text-xl font-bold tracking-widest text-slate-900 mb-4">
              WORKSHOP (1–2 Tage)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Innerhalb eines Workshops erarbeite ich mit Ihnen und Ihrem Team:
            </p>
            <ul className="space-y-3 max-w-xl">
              {workshopPunkte.map((punkt) => (
                <li key={punkt} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-slate-600 leading-relaxed">{punkt}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="rounded-md px-6 py-3 font-medium text-white"
                style={{ backgroundColor: "#5F94D6" }}
              >
                <a
                  href="/downloads/CV_Frank_Esper.pdf"
                  download
                  aria-label="DE Profil & CV als PDF herunterladen"
                >
                  DE Profil &amp; CV als PDF
                </a>
              </Button>
              <Button
                asChild
                className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary-light"
              >
                <Link href="/kontakt">Beratungstermin anfragen</Link>
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-8">
              <Link
                href="/service"
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
