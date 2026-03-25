import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { servicesData, getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
    alternates: { canonical: `/leistungen/${slug}` },
  };
}

const prozessSchritte = [
  { nr: "01", titel: "Analyse", text: "Bedarfsanalyse und Aufnahme der Ist-Situation" },
  { nr: "02", titel: "Konzeption", text: "Erarbeitung des Lösungsdesigns und der Roadmap" },
  { nr: "03", titel: "Implementierung", text: "Umsetzung in enger Abstimmung mit Ihrem Team" },
  { nr: "04", titel: "Übergabe", text: "Knowledge Transfer, Hypercare und Dokumentation" },
];

export default async function LeistungPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.titel,
    description: service.beschreibung,
    provider: {
      "@type": "LocalBusiness",
      name: "EsperIT",
      url: "https://www.esperit.net",
    },
    url: `https://www.esperit.net/leistungen/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.esperit.net/leistungen" },
      { "@type": "ListItem", position: 3, name: service.titel, item: `https://www.esperit.net/leistungen/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Mini-Hero */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leistungen" className="hover:text-white">Leistungen</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.titel}</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{service.titel}</h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">{service.kurz}</p>
        </div>
      </section>

      {/* Kundenprobleme */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
              Kennen Sie das?
            </h2>
            <ul className="space-y-4">
              {service.kundenprobleme.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <p className="text-slate-700 leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* Lösungen */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
              Meine Lösung für Sie
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.loesungen.map((l, i) => (
              <RevealOnScroll key={l.titel} delay={i * 0.1}>
                <Card className="h-full border border-slate-200 rounded-none hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-bold text-slate-900">{l.titel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">{l.text}</p>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess-Timeline */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
              So arbeiten wir zusammen
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {prozessSchritte.map((s, i) => (
              <RevealOnScroll key={s.nr} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-mono text-4xl font-bold text-primary-lighter">{s.nr}</span>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{s.titel}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild className="rounded-md bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">
                <Link href="/kontakt">Beratungstermin anfragen</Link>
              </Button>
              <Link
                href="/leistungen"
                className="flex items-center gap-1 text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
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
