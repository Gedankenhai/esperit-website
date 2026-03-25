import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | EsperIT",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Datenschutz</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              2. Verantwortlicher
            </h2>
            <p>
              {siteConfig.company.owner}<br />
              {siteConfig.company.name}<br />
              {siteConfig.company.address.street}<br />
              {siteConfig.company.address.zip} {siteConfig.company.address.city}<br />
              E-Mail:{" "}
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="text-accent hover:underline underline-offset-4"
              >
                {siteConfig.company.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-semibold text-slate-800 mb-1">Hosting (Vercel)</h3>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden
              automatisch Daten in sogenannten Server-Log-Dateien gespeichert. Anbieter:
              Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA.
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>

            <h3 className="font-semibold text-slate-800 mt-4 mb-1">
              Kontaktformular (Resend)
            </h3>
            <p>
              Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail,
              Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert und
              verarbeitet. Wir nutzen dafür den Dienst Resend (Resend Inc., 2261 Market
              Street #4496, San Francisco, CA 94114, USA). Ihre Daten werden nicht an
              Dritte weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung).
            </p>

            <h3 className="font-semibold text-slate-800 mt-4 mb-1">Cookies</h3>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies
              (z. B. für die Cookie-Einwilligung). Analyse- oder Tracking-Cookies werden
              nicht eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
              Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung
              dieser Daten. Hierzu sowie zu weiteren Fragen wenden Sie sich bitte an:{" "}
              <a
                href={`mailto:${siteConfig.company.email}`}
                className="text-accent hover:underline underline-offset-4"
              >
                {siteConfig.company.email}
              </a>
            </p>
          </section>


        </div>
      </div>
    </section>
  );
}
