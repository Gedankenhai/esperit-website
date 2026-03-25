import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "KI-Schulungen",
  description:
    "Maßgeschneiderte KI-Schulungen für Ihr Team. Praxisnah, auf Ihre Anforderungen zugeschnitten und direkt anwendbar.",
  alternates: { canonical: "/service/ki-schulungen" },
};

const merkmale = [
  { icon: Target, titel: "Individuell zugeschnitten", text: "Jede Schulung wird auf Ihre spezifischen Anforderungen und die Besonderheiten Ihres Unternehmens angepasst." },
  { icon: Users, titel: "Für Ihr Team", text: "Von der Einzelperson bis zum Team – ich passe Format und Inhalt an die Vorkenntnisse und Ziele Ihrer Mitarbeiter an." },
  { icon: Zap, titel: "Direkt anwendbar", text: "Keine Theorie-Übungen – wir arbeiten mit echten Aufgaben aus Ihrem Arbeitsalltag." },
  { icon: GraduationCap, titel: "Nachhaltiger Lerneffekt", text: "Steigerung der Produktivität, schnellere Entscheidungen, reibungslose Nutzung Ihrer Softwarelösungen." },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Service", item: "https://www.esperit.net/service" },
    { "@type": "ListItem", position: 3, name: "KI-Schulungen", item: "https://www.esperit.net/service/ki-schulungen" },
  ],
};

export default function KiSchulungenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="hover:text-white cursor-default">Service</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">KI-Schulungen</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">KI-Schulungen</h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Das richtige Rüstzeug für Ihre Mitarbeitenden – praxisnah und auf Ihr Unternehmen zugeschnitten.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <p className="text-slate-600 leading-relaxed mb-4">
                Jede Schulung wird auf Ihre spezifischen Anforderungen und die Besonderheiten Ihres
                Unternehmens zugeschnitten. Ob es darum geht, zeitintensive Routineaufgaben zu
                automatisieren oder Prozesse effizienter zu gestalten – ich biete Ihren Mitarbeitern
                das richtige Rüstzeug, um ihre Pain Points mittels moderner Technik zu lösen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Jede Schulung zielt darauf ab, die Anwendungsbandbreite der eingesetzten Systeme
                zu maximieren und gleichzeitig den Arbeitsalltag Ihrer Mitarbeiter zu erleichtern.
                Direkter Nutzen: Steigerung der Produktivität, schnellere Entscheidungen, reibungslose
                Nutzung Ihrer Softwarelösungen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Gerne berate ich Sie, wie ich Ihre Teams mit maßgeschneiderten Schulungsprogrammen
                unterstützen kann. Sprechen Sie mich an.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {merkmale.map((m, i) => (
              <RevealOnScroll key={m.titel} delay={i * 0.1}>
                <div className="flex items-start gap-4 border border-slate-200 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-lighter text-primary">
                    <m.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{m.titel}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild className="rounded-md bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">
                <Link href="/kontakt">Schulung anfragen</Link>
              </Button>
              <Link href="/service" className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4">
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
