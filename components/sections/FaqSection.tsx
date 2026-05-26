
import { Download, ExternalLink } from "lucide-react";
// Switched to native <details>/<summary> so answers are present in the
// delivered HTML and available to crawlers without JS.
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const faqs = [
  {
    frage: "Was ist der EU AI Act und betrifft er mein Unternehmen?",
    antwort:
      "Der EU AI Act ist die weltweit erste umfassende KI-Regulierung und gilt ab 2026 für alle Unternehmen, die KI-Systeme in der EU einsetzen oder anbieten. Je nach Risikoeinstufung gelten unterschiedliche Pflichten. Ich helfe Ihnen, Ihre KI-Systeme einzuordnen und DSGVO-konform zu gestalten.",
  },
  {
    frage: "Welche KI-Tools sind für mein Unternehmen geeignet?",
    antwort:
      "Das hängt von Ihren konkreten Anforderungen, Ihrer IT-Infrastruktur und Ihrem Budget ab. Im Rahmen eines Workshops oder einer Beratung analysiere ich Ihre Prozesse und empfehle passende, DSGVO-konforme Lösungen.",
  },
  {
    frage: "Wie sicher sind KI-Prozesse in Bezug auf meine Daten?",
    antwort:
      "Datensicherheit hat höchste Priorität. Ich setze ausschließlich auf DSGVO-konforme Lösungen und beachte die technischen und organisatorischen Maßnahmen (TOMs). Auf Wunsch führe ich eine vollständige Datenschutz-Folgenabschätzung durch.",
  },
  {
    frage: "Können KI-Tools bestehende Mitarbeiter ersetzen?",
    antwort:
      "KI übernimmt Routineaufgaben und entlastet Mitarbeiter – ersetzt sie aber nicht. Ziel ist es, Kapazitäten freizusetzen, damit sich Ihr Team auf wertschöpfende Tätigkeiten konzentrieren kann.",
  },
  {
    frage: "Wie lange dauert eine typische KI-Implementierung?",
    antwort:
      "Das variiert stark nach Umfang. Ein einfacher Workflow-Assistent ist in wenigen Wochen einsatzbereit. Umfangreichere Projekte wie ein vollständiges DWH oder ein KI-gestütztes Reporting-System planen wir gemeinsam in Phasen.",
  },
];

export function FaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.frage,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.antwort,
      },
    })),
  };

  return (
    <section aria-label="Häufige Fragen" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <RevealOnScroll>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            FAQs zum Thema Künstliche Intelligenz
          </h2>
          <p className="mb-8 text-slate-600 leading-relaxed">
            Antworten auf die häufigsten Fragen rund um KI, Automatisierung
            und Datenschutz.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 px-4">
                <summary className="cursor-pointer text-left text-sm font-medium text-slate-800 hover:text-primary hover:no-underline py-4">
                  {faq.frage}
                </summary>
                <div className="text-sm text-slate-600 leading-relaxed pb-4">
                  {faq.antwort}
                </div>
              </details>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              variant="outline"
              className="rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="/downloads/KI_FAQ_esperit.pdf" download>
                <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                FAQs als PDF herunterladen
              </a>
            </Button>

            <a
              href="https://chatgpt.com/g/g-6776688f38f08191af89532abd157db3-eu-ai-act-i-ai-first"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-accent hover:text-accent-light hover:underline underline-offset-4"
            >
              EU AI Act Assistent öffnen
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
