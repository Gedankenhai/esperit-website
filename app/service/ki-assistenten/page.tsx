import type { Metadata } from "next";
import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { assistantsData } from "@/lib/assistants-data";

export const metadata: Metadata = {
  title: "KI-Assistenten",
  description:
    "9 spezialisierte KI-Assistenten von EsperIT – für Vertragszusammenfassungen, EU AI Act, Datenschutz, SEO und mehr.",
  alternates: { canonical: "/service/ki-assistenten" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Service", item: "https://www.esperit.net/service" },
    { "@type": "ListItem", position: 3, name: "KI-Assistenten", item: "https://www.esperit.net/service/ki-assistenten" },
  ],
};

export default function KiAssistentenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/50">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="cursor-default">Service</span>
            <span className="mx-2">/</span>
            <span className="text-white/80">KI-Assistenten</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">KI-Assistenten</h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Spezialisierte KI-Assistenten für typische Unternehmensaufgaben –
            transparent, nachvollziehbar, ohne versteckte Logik.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {assistantsData.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service/ki-assistenten/${a.slug}`}
                  className="assistant-card group block border border-slate-200 p-6"
                >
                  <h2 className="font-bold text-slate-900 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
                    {a.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {a.zweck}
                  </p>
                  <p className="mt-4 text-xs font-medium text-accent group-hover:underline underline-offset-4">
                    Details ansehen →
                  </p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-8">
              <Link href="/service" className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4">
                ← Zurück zur Übersicht
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
