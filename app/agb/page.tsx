import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "AGB | EsperIT",
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <span className="mx-2">/</span>
          <span>AGB</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen{" "}
              {siteConfig.company.owner} ({siteConfig.company.name},{" "}
              {siteConfig.company.address.street},{" "}
              {siteConfig.company.address.zip} {siteConfig.company.address.city}) und
              dem Auftraggeber, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 2 Vertragsschluss
            </h2>
            <p>
              Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch
              die schriftliche Auftragsbestätigung oder die Aufnahme der Leistungserbringung
              zustande.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 3 Leistungen
            </h2>
            <p>
              Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen
              Angebot bzw. der Auftragsbestätigung. Änderungen und Erweiterungen des
              Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 4 Vergütung und Zahlungsbedingungen
            </h2>
            <p>
              Die Vergütung ergibt sich aus dem jeweiligen Angebot. Rechnungen sind
              innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar, sofern
              nichts anderes vereinbart wurde.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 5 Haftung
            </h2>
            <p>
              Die Haftung für leichte Fahrlässigkeit ist – soweit gesetzlich zulässig –
              ausgeschlossen. Bei grober Fahrlässigkeit und Vorsatz sowie bei Verletzung
              von Leben, Körper und Gesundheit haftet {siteConfig.company.owner} nach
              den gesetzlichen Vorschriften.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 6 Geheimhaltung
            </h2>
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit
              erlangten vertraulichen Informationen der jeweils anderen Partei geheim zu
              halten und nur zur Erfüllung des Vertragszwecks zu verwenden.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              § 7 Anwendbares Recht und Gerichtsstand
            </h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist –
              soweit gesetzlich zulässig – {siteConfig.company.address.city}.
            </p>
          </section>


        </div>
      </div>
    </section>
  );
}
