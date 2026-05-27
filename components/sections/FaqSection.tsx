
import { Download, ExternalLink } from "lucide-react";
// Switched to native <details>/<summary> so answers are present in the
// delivered HTML and available to crawlers without JS.
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const faqs = [
  {
    frage: "Wie bleibe ich bei KI-Entwicklungen auf dem Laufenden?",
    antwortHtml: `
      <p>Der Markt bewegt sich schnell – zu schnell, um ihn mit gelegentlichem Nachrichtenkonsum zu verfolgen. Ich persönlich schätze den Newsletter der <strong>Ainauten</strong> (<a href="https://www.ainauten.com/t/newsletter" target="_blank" rel="noopener noreferrer">ainauten.com</a>), der dreimal wöchentlich in kompakter Form über neue Modelle, Tools, Anwendungsbeispiele und Marktentwicklungen informiert – ohne den üblichen Hype-Überbau. Wer 5 Minuten investiert, ist auf dem Stand, der im Alltag zählt.</p>
      <p><strong>Abonnement unter:</strong> <a href="https://www.ainauten.com/t/newsletter" target="_blank" rel="noopener noreferrer">https://www.ainauten.com/t/newsletter</a></p>
    `,
  },
  {
    frage: "Welche deutschen KI-Anbieter arbeiten DSGVO-konform?",
    antwortHtml: `
      <p>Die DSGVO-Konformität eines Dienstes ist keine binäre Eigenschaft – sie ist eine Frage der Architektur, der Vertragsgestaltung und der eingesetzten Basismodelle. Zwei in Deutschland angesiedelte Anbieter, die diesen Anspruch strukturell verfolgen, sind <strong>Langdock</strong> (<a href="https://langdock.com" target="_blank" rel="noopener noreferrer">langdock.com</a>) und <strong>InnoGPT</strong> (<a href="https://innogpt.de" target="_blank" rel="noopener noreferrer">innogpt.de</a>). Beide hosten in der EU und stellen Auftragsverarbeitungsverträge bereit.</p>
      <p>DSGVO-konform bedeutet dabei nicht zwingend datensouverän. Sobald eine Anfrage an ein US-amerikanisches Basismodell weitergeleitet wird, endet die direkte Kontrolle des EU-Anbieters. Was bleibt, ist vertraglicher Schutz – kein technisch erzwungener Zustand. Wer mit sensiblen Unternehmensdaten arbeitet, sollte den Unterschied zwischen einem AVV mit einem US-Anbieter und echter Datensouveränität kennen. Letztere bieten derzeit nur lokal betriebene Open-Source-Modelle (z.B. Mistral oder Llama, betrieben über Ollama oder OpenWebUI) wirklich zuverlässig.</p>
      <p>Inzwischen gibt es im deutschen Markt weitere vergleichbare Anbieter: DeutschlandGPT, Omnifact und Lurus – je nach Anforderungsprofil und Teamgröße mit unterschiedlichen Stärken. Eine aktuelle Marktübersicht ist ratsam, da sich Preise und Funktionsumfang schnell ändern.</p>
    `,
  },
  {
    frage: "Wie kann ich KI-Systeme verantwortungsvoll einsetzen?",
    antwortHtml: `
      <p>Die Frage lässt sich nicht mit einer einzigen Maßnahme beantworten – es geht um ein Bündel aufeinander abgestimmter Entscheidungen:</p>
      <ul>
        <li><strong>Datenschutz beim Modellzugang:</strong> In den Einstellungen des genutzten LLMs prüfen und deaktivieren, ob Eingaben zu Trainingszwecken verwendet werden dürfen.</li>
        <li><strong>API-Schlüssel niemals in Versionskontrolle (Git):</strong> Zugangsdaten gehören in Umgebungsvariablen, nicht in den Quellcode.</li>
        <li><strong>Rechte gezielt vergeben:</strong> Einem KI-System nur die minimalen Zugriffsrechte einräumen, die für die jeweilige Aufgabe erforderlich sind – Lesen und Schreiben trennen, wo es möglich ist.</li>
        <li><strong>Protokollierung automatisierter Prozesse:</strong> Was ein KI-Agentensystem ausführt, sollte nachvollziehbar sein – wer hat wann was initiiert.</li>
        <li><strong>Lokales Hosting oder Container-Isolierung:</strong> Wer keine Daten nach außen geben möchte, betreibt sein Modell lokal oder in einem abgeschotteten Docker-Container.</li>
        <li><strong>Auftragsverarbeitungsvertrag (AVV):</strong> Bei der Nutzung externer KI-Dienste im Unternehmenskontext ist ein AVV rechtlich erforderlich und sollte vor dem ersten produktiven Einsatz vorliegen.</li>
      </ul>
      <p>Seit August 2024 gilt der EU AI Act schrittweise – mit weiteren Fristen im August 2026 und 2027. Für Unternehmen, die KI-Systeme einsetzen oder beauftragen, entstehen daraus konkrete Dokumentations- und Transparenzpflichten, die über den Datenschutz hinausgehen. Ein kurzer Compliance-Check lohnt sich.</p>
    `,
  },
  {
    frage: "Was ist ein RAG-System, und wie kann es mir nützen?",
    antwortHtml: `
      <p>Die meisten KI-Modelle kennen die Welt – aber nicht Ihr Unternehmen. Sie wurden auf öffentlichen Daten trainiert und wissen nichts von Ihrer internen Dokumentation, Ihren Prozesshandbüchern oder Ihrem aktuellen Produktkatalog. Genau diese Lücke schließt <strong>Retrieval-Augmented Generation (RAG)</strong>.</p>
      <p>Ein RAG-System verbindet ein Sprachmodell mit einer Informationsabruf-Komponente: Bei jeder Anfrage ruft es gezielt Inhalte aus Ihren eigenen Datenquellen ab – etwa aus dem Firmen-Wiki, der Produktdatenbank oder dem Kundenservice-Handbuch – und legt diese dem Modell als Kontext vor. Die Antwort basiert dann auf echten, aktuellen Unternehmensdaten, nicht auf trainierten Verallgemeinerungen.</p>
      <p>Typische Anwendungsfälle: interner Wissensassistent für Support und Vertrieb, Policy-Prüfung, Auswertung von PDF-Dokumenten, Durchsuchen von SharePoint- oder Confluence-Inhalten mit direkter Antwortgenerierung.</p>
      <p>Der entscheidende Qualitätsfaktor liegt dabei im Retrieval selbst: Wie gut die Inhalte strukturiert, indiziert und abgerufen werden, bestimmt maßgeblich die Verlässlichkeit der Ausgabe. Viele Teams experimentieren mit Sprachmodellen – doch ohne Zugriff auf internes Wissen bleiben die Antworten generisch. RAG schließt diese Lücke und ermöglicht höhere Qualität, weniger Halluzinationen und bessere Nachvollziehbarkeit.</p>
    `,
  },
  {
    frage: "Wie lässt sich der Token-Verbrauch bei API-Nutzung reduzieren?",
    antwortHtml: `
      <p>Wer KI-Modelle über die API anspricht, bezahlt pro Token – jede unnötige Information im Kontext kostet. Ein paar Grundsätze, die den Verbrauch spürbar senken:</p>
      <ul>
        <li><strong>Nur relevante Inhalte in den Kontext laden:</strong> Nicht alle verfügbaren Dokumente auf einmal übergeben, sondern gezielt das, was für die aktuelle Aufgabe benötigt wird.</li>
        <li><strong>Korrekturen auf betroffene Abschnitte beschränken:</strong> Statt die gesamte Datei zu wiederholen, nur den geänderten Teil zurückgeben.</li>
        <li><strong>Schritte zusammenfassen, wo sinnvoll:</strong> Mehrere zusammenhängende Teilaufgaben in einem einzigen Aufruf bündeln, statt sie sequenziell abzufragen.</li>
        <li><strong>Tests nur ausführen, wenn das Ergebnis den nächsten Schritt beeinflusst:</strong> Kein blindes Validieren, wenn keine Entscheidung davon abhängt.</li>
        <li><strong>Caching nutzen:</strong> Häufig wiederholte Kontextanteile (z.B. System-Prompts) lassen sich bei einigen Anbietern via Prompt Caching zu deutlich reduzierten Kosten wiederverwenden.</li>
      </ul>
      <p>Neben der Kontextgröße beeinflusst die Modellwahl den Kostenfaktor erheblich. Für viele Routineaufgaben – Zusammenfassungen, Klassifikationen, einfache Transformationen – reichen kleinere, günstigere Modelle vollständig aus. Der reflexartige Griff zum jeweils leistungsstärksten Modell ist selten wirtschaftlich.</p>
    `,
  },
  {
    frage: "Welche KI-Tools funktionieren sofort, ohne aufwendige Konfiguration?",
    antwortHtml: `
      <p>Für den schnellen Einstieg ohne Installationsaufwand:</p>
      <ul>
        <li><strong>Wispr Flow</strong> – KI-gestützte Spracheingabe, die in jeder App funktioniert. Man spricht, der Text erscheint formatiert an der Cursorposition – in Gmail, Slack, Notion oder jedem Browserfenster. Keine rohe Transkription, sondern kontextsensitiv aufbereiteter Text.</li>
        <li><strong>NotebookLM</strong> (Google) – Eigene Dokumente hochladen und direkt damit arbeiten: Fragen stellen, Zusammenfassungen erstellen, Audio-Übersichten generieren. Antworten basieren ausschließlich auf den hochgeladenen Quellen, was Halluzinationen deutlich reduziert.</li>
        <li><strong>Gamma</strong> – Präsentationen aus Text oder Dokumenten generieren, ohne PowerPoint anzufassen.</li>
        <li><strong>Gemini</strong> (Google) – Neben der Textarbeit mit nativer Bildgenerierung direkt im Browser, ohne zusätzliche Tools.</li>
        <li><strong>Bliro</strong> – Transkription und strukturierte Zusammenfassung von Meetings, ohne dass eine App am Gespräch teilnehmen muss.</li>
      </ul>
    `,
  },
  {
    frage: "Wie erkenne ich, ob ein KI-Projekt bei uns wirklich Sinn ergibt, oder ob wir einem Trend folgen?",
    antwortHtml: `
      <p>Die ehrlichste Frage zuerst: Gibt es ein konkretes Problem, das heute manuell gelöst wird, viel Zeit kostet und sich durch strukturierte Automatisierung verbessern ließe? Wenn ja – dann lohnt die Prüfung. Wenn nicht – dann ist KI eine Lösung auf der Suche nach einem Problem.</p>
      <p>Ein sinnvoller erster Schritt ist kein Pilotprojekt, sondern eine nüchterne Bestandsaufnahme: Wo entstehen Reibungsverluste durch manuelle Informationsarbeit? Welche Entscheidungen basieren auf Daten, die regelmäßig aufbereitet werden müssen? Wo wird Wissen produziert, das anschließend nicht auffindbar bleibt?</p>
      <p>Ich helfe Ihnen, diese Fragen strukturiert zu beantworten – ohne Annahmen und ohne Voreinstellung in Richtung einer bestimmten Technologie.</p>
    `,
  },
  {
    frage: "Wie erkläre ich meiner Geschäftsführung den Nutzen von KI, ohne in Hype-Sprache zu verfallen?",
    antwortHtml: `
      <p>Das ist eine der unterschätztesten Herausforderungen in der Praxis. Führungskräfte reagieren auf Kosteneinsparung, Risikominimierung und Wettbewerbspositionierung – nicht auf Begriffe wie „Transformation" oder „Paradigmenwechsel".</p>
      <p>Überzeugender ist ein konkretes Rechenbeispiel: Ein Prozess, der heute 4 Stunden pro Woche bindet und sich auf 30 Minuten reduzieren lässt, erzeugt in einem Jahr knapp 180 Stunden Kapazität. Was kostet das, was bringt es?</p>
      <p>Ich unterstütze bei der Aufbereitung solcher Business-Cases – sachlich, belastbar und auf die Sprache des Managements abgestimmt.</p>
    `,
  },
  {
    frage: "Was ist der Unterschied zwischen einem KI-Tool, das ich sofort nutzen kann, und einer KI-Integration in meine bestehenden Systeme?",
    antwortHtml: `
      <p>Beides hat seinen Platz – aber sie lösen unterschiedliche Probleme.</p>
      <p>Fertige Tools wie ChatGPT, Gemini oder Copilot sind in Minuten einsatzbereit und eignen sich für individuelle Aufgaben: Texte schreiben, Dokumente zusammenfassen, Recherchen führen. Sie setzen keine technische Infrastruktur voraus.</p>
      <p>Eine Integration – etwa ein RAG-System auf Basis Ihrer internen Wissensbasis, ein KI-gestützter Schritt in einem bestehenden Workflow oder ein API-angebundener Assistent – greift tiefer: Sie verbindet die KI mit Ihren eigenen Daten, Prozessen und Systemen. Das erfordert Planung, technische Umsetzung und klare Zuständigkeiten. Dafür entsteht echter Mehrwert, der über die individuelle Produktivitätsverbesserung hinausgeht.</p>
      <p>Der richtige Einstiegspunkt hängt davon ab, wo Ihre Organisation heute steht.</p>
    `,
  },
  {
    frage: "Wie gehe ich mit dem Thema KI-Halluzinationen in unternehmenskritischen Prozessen um?",
    antwortHtml: `
      <p>Sprachmodelle erfinden Antworten – nicht aus bösem Willen, sondern weil sie statistisch plausiblen Text erzeugen, nicht faktisch verifizierten. Das ist keine vorübergehende Kinderkrankheit, sondern eine strukturelle Eigenschaft dieser Technologie.</p>
      <p>In der Praxis bedeutet das: KI eignet sich sehr gut für Aufgaben, bei denen Fehler tolerierbar oder leicht erkennbar sind (Erstentwürfe, Zusammenfassungen, Klassifikationen). Sie eignet sich schlecht als alleinige Entscheidungsinstanz in Kontexten, in denen Fehler folgenreich sind – es sei denn, ein Mensch prüft das Ergebnis.</p>
      <p>Technisch lässt sich die Halluzinationsrate durch RAG-Architekturen (Antworten werden auf verifizierten Quellen geerdet) und durch Retrieval mit Quellenzitation deutlich reduzieren. Eine vollständige Eliminierung ist nicht möglich.</p>
    `,
  },
  {
    frage: "Wie binde ich externe KI-Berater sinnvoll ein – und ab wann lohnt sich das?",
    antwortHtml: `
      <p>Ein externer Berater bringt Wert in zwei Konstellationen: wenn intern das Einordnungswissen fehlt (was ist technisch möglich, was ist realistisch, was ist Hype?), oder wenn konkrete Umsetzungskompetenz gesucht wird, die sich nicht lohnt, dauerhaft aufzubauen.</p>
      <p>Was er nicht ersetzen kann: das eigene Prozesswissen, die Kenntnis der Unternehmenskultur und die Bereitschaft der Organisation, Dinge tatsächlich zu verändern.</p>
      <p>Ein sinnvolles Einstiegsformat ist ein begrenztes Orientierungsgespräch ohne Beauftragungsdruck – mit dem Ziel, eine realistische Einschätzung zu erhalten, ob und wo externer Support Hebel erzeugt. Ich biete das an, und ich sage Ihnen auch, wenn ich der Ansicht bin, dass Sie es zunächst ohne Berater tun können.</p>
    `,
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
        text: f.antwortHtml,
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
                <div
                  className="text-sm text-slate-600 leading-relaxed pb-4"
                  dangerouslySetInnerHTML={{ __html: faq.antwortHtml }}
                />
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
