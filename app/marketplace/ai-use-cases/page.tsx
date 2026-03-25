import type { Metadata } from "next";
import Link from "next/link";
import { ExcelTable } from "@/components/shared/ExcelTable";

export const metadata: Metadata = {
  title: "AI Use Cases pro Abteilung | EsperIT",
  description:
    "KI-Anwendungsfälle strukturiert nach Unternehmensbereichen – kuratiert von EsperIT.",
  alternates: { canonical: "/marketplace/ai-use-cases" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Marketplace", item: "https://www.esperit.net/marketplace" },
    { "@type": "ListItem", position: 3, name: "AI Use Cases", item: "https://www.esperit.net/marketplace/ai-use-cases" },
  ],
};

export default function AiUseCasesPage() {
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
            <Link href="/marketplace" className="hover:text-white">Marketplace</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">AI Use Cases</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            AI Use Cases pro Abteilung
          </h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            KI-Anwendungsfälle strukturiert nach Unternehmensbereichen –
            praxisnah und umsetzbar.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <ExcelTable
            filePath="downloads/LLM-Matrix-2026.xlsx"
            downloadHref="/downloads/LLM-Matrix-2026.xlsx"
            downloadFileName="LLM-Matrix-2026.xlsx"
          />

          <div className="mt-8">
            <Link
              href="/marketplace"
              className="text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
            >
              ← Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
