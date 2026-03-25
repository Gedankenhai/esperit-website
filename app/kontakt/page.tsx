import type { Metadata } from "next";
import Link from "next/link";
import { KontaktForm } from "./KontaktForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontakt | EsperIT",
  description:
    "Nehmen Sie Kontakt zu Frank Esper auf – für Beratung zu Data Warehouse, Business Intelligence und KI-Automatisierung.",
  alternates: { canonical: "/kontakt" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.esperit.net" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.esperit.net/kontakt" },
  ],
};

export default function KontaktPage() {
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
            <span className="text-white/80">Kontakt</span>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Kontakt</h1>
          <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
            Ich freue mich auf Ihre Anfrage und melde mich innerhalb von 24 Stunden
            bei Ihnen.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* Kontaktdaten */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Direkte Kontaktdaten
                </h2>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    <span className="font-medium text-slate-900">Telefon</span>
                    <br />
                    <a
                      href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                      className="text-accent hover:underline underline-offset-4"
                    >
                      {siteConfig.company.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">E-Mail</span>
                    <br />
                    <a
                      href={`mailto:${siteConfig.company.email}`}
                      className="text-accent hover:underline underline-offset-4"
                    >
                      {siteConfig.company.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">Adresse</span>
                    <br />
                    {siteConfig.company.address.street}
                    <br />
                    {siteConfig.company.address.zip} {siteConfig.company.address.city}
                  </p>
                  <p>
                    <span className="font-medium text-slate-900">Erreichbarkeit</span>
                    <br />
                    {siteConfig.company.openingHours.weekdays}
                  </p>
                </div>
              </div>

              {siteConfig.terminbuchungUrl && (
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600 mb-3">
                    Oder buchen Sie direkt einen kostenlosen Erstgesprächstermin
                    (30 Min.)
                  </p>
                  <a
                    href={siteConfig.terminbuchungUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                  >
                    Termin buchen
                  </a>
                </div>
              )}
            </div>

            {/* Formular */}
            <div className="lg:col-span-2">
              <KontaktForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
