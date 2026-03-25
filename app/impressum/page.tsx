import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum | EsperIT",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Impressum</span>
        </nav>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-10">
          Impressum
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {siteConfig.company.owner}<br />
              {siteConfig.company.name} ({siteConfig.company.legalForm})<br />
              {siteConfig.company.address.street}<br />
              {siteConfig.company.address.zip} {siteConfig.company.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">Kontakt</h2>
            <p>
              Telefon:{" "}
              <a
                href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
                className="text-accent hover:underline underline-offset-4"
              >
                {siteConfig.company.phone}
              </a>
              <br />
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
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              {siteConfig.company.owner}<br />
              {siteConfig.company.address.street}<br />
              {siteConfig.company.address.zip} {siteConfig.company.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Technische und grafische Umsetzung
            </h2>
            <p>
              {siteConfig.company.owner}<br />
              {siteConfig.company.address.street}<br />
              {siteConfig.company.address.zip} {siteConfig.company.address.city}
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900 mb-2">
              Haftungsausschluss
            </h2>

            <h3 className="font-semibold text-slate-800 mb-1 mt-4">1. Inhalt des Onlineangebotes</h3>
            <p className="mb-3">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="mb-3">
              Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
            </p>
            <p>
              Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>

            <h3 className="font-semibold text-slate-800 mb-1 mt-4">2. Verweise und Links</h3>
            <p>
              Bei direkten oder indirekten Verweisen auf fremde Webseiten (&bdquo;Hyperlinks&ldquo;), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
            </p>

            <h3 className="font-semibold text-slate-800 mb-1 mt-4">3. Urheber- und Kennzeichenrecht</h3>
            <p className="mb-3">
              Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um eine Benachrichtigung. Bei Kenntnis von Urheberrechtsverletzungen werden wir die betreffenden Inhalte umgehend entfernen.
            </p>
            <p className="mb-3">
              Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind!
            </p>
            <p>
              Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
            </p>

            <h3 className="font-semibold text-slate-800 mb-1 mt-6">Rechtswirksamkeit dieses Haftungsausschlusses</h3>
            <p>
              Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
            </p>
          </section>


        </div>
      </div>
    </section>
  );
}
