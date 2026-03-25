import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { fadeLeft, fadeRight } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Frank Esper – BI- und DWH-Experte, AI-Enthusiast und Brückenbauer. Erfahren Sie mehr über meinen Werdegang und meine Arbeitsweise.",
  alternates: { canonical: "/ueber-mich" },
};

const unterseiten = [
  {
    href: "/ueber-mich/qualifikationen",
    titel: "Qualifikationen & Know-how",
    beschreibung: "10 Kompetenzbereiche aus über 24 Jahren IT-Praxis.",
  },
  {
    href: "/ueber-mich/rollen",
    titel: "Rollen & Aufgaben",
    beschreibung: "Business-Analyst, Datenmodellierer, Projektleiter und mehr.",
  },
  {
    href: "/ueber-mich/stationen",
    titel: "Stationen & Projekte",
    beschreibung: "Projekte bei HDI, HannoverRück, KfW Bank und weiteren.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Über mich", item: "https://www.esperit.net/ueber-mich" },
  ],
};

export default function UeberMichPage() {
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
            <span className="text-white/80">Über mich</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Über mich</h1>
        </div>
      </section>

      {/* Intro Split */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll variants={fadeLeft}>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
                Frank Esper
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900">
                BI- und DWH-Experte,<br />AI-Enthusiast und Brückenbauer
              </h2>
              <p className="leading-relaxed text-slate-600">
                Was mich antreibt? Wenn Menschen und Technik, Strategie und Taktik,
                Ausdauer und Disziplin perfekt zusammenspielen. Auf dieser Seite
                erfahren Sie mehr über mich, meine Arbeitsweise und wie Sie davon
                profitieren. Let&apos;s go!
              </p>
            </RevealOnScroll>

            <RevealOnScroll variants={fadeRight}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-slate-200">
                <Image
                  src="/images/frank-esper.jpg"
                  alt="Frank Esper – IT-Berater EsperIT"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Unterseiten-Kacheln */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
              Mehr über mich erfahren
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {unterseiten.map((item, i) => (
              <RevealOnScroll key={item.href} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <Card className="h-full border border-slate-200 bg-white hover:border-primary/30 transition-colors rounded-none">
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {item.titel}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.beschreibung}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
