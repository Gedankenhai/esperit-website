
import { Download, ExternalLink } from "lucide-react";
// Switched to native <details>/<summary> so answers are present in the
// delivered HTML and available to crawlers without JS.
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";

const faqs = [
  {
    frage: "Welche konkreten Schutzmaßnahmen brauche ich, bevor KI-Tools auf Unternehmensdaten zugreifen?",
    antwortHtml: `
      <p>Sechs Bereiche, in denen technisch etwas eingerichtet werden muss – nicht organisatorisch beschlossen:</p>
      <ul>
        <li><strong>Netzwerkebene:</strong> Über Firewall oder Web-Proxy eine Positivliste freigegebener KI-Dienste definieren, alle übrigen sperren. Wichtig dabei: nicht nur die Hauptdomain, sondern auch die zugehörigen API-Endpunkte, sonst läuft der Zugriff über Umwege weiter.</li>
        <li><strong>Datenbankebene:</strong> KI-Integrationen bekommen keinen Tabellenzugriff, sondern greifen ausschließlich über Sichten (Views) zu, die nur die fachlich benötigten Spalten und Zeilen enthalten. Schreibrechte nur dort, wo die Aufgabe sie zwingend erfordert – sonst Lesezugriff.</li>
        <li><strong>Dateiebene:</strong> Für die Anbindung an Dokumente ein eigenes Freigabeverzeichnis anlegen, in das relevante Dokumente bewusst kopiert werden. Kein Zugriff auf gewachsene Laufwerksstrukturen, in denen sich über Jahre Personalakten, Verträge und Gehaltslisten angesammelt haben.</li>
        <li><strong>Datenebene:</strong> Vor der Übergabe an ein externes Modell personenbezogene und sicherheitskritische Felder maskieren oder pseudonymisieren – Kundennummer statt Klarname, Platzhalter statt Bankverbindung. Das ist meist mit einer Transformationsschicht vor der Schnittstelle lösbar und schützt auch dann, wenn der Anbieter kompromittiert wird.</li>
        <li><strong>Zugangsdaten:</strong> Je Integration ein eigener technischer Benutzer und ein eigener API-Schlüssel, nie ein geteilter. Schlüssel gehören in einen Secret-Speicher oder in Umgebungsvariablen, nicht in Skripte oder Konfigurationsdateien im Versionsverwaltungssystem. Wo der Anbieter Ausgabe- oder Ratenlimits je Schlüssel unterstützt, diese setzen – das begrenzt den Schaden bei Missbrauch.</li>
        <li><strong>Modelleinstellungen:</strong> Im Konto des Anbieters die Nutzung von Eingaben für Modelltraining deaktivieren, Aufbewahrungsdauer der Konversationen auf das Minimum setzen, Administrationsrechte auf wenige Personen begrenzen.</li>
      </ul>
      <p>Diese Punkte sind in wenigen Tagen umsetzbar und wirken unabhängig davon, wie sich die Bedrohungslage entwickelt.</p>
    `,
  },
  {
    frage: "Meine Mitarbeitenden nutzen KI-Tools, die ich nie freigegeben habe – was tue ich?",
    antwortHtml: `
      <p>Zunächst: Das Verhalten ist normal und meist gut gemeint. Das Risiko entsteht nicht durch die Nutzung, sondern dadurch, dass niemand weiß, welche Daten in welches System fließen.</p>
      <p>Reihenfolge, die sich in der Praxis bewährt:</p>
      <ol>
        <li><strong>Sichtbar machen:</strong> Die Proxy- oder Firewall-Protokolle der letzten vier Wochen auf Zugriffe zu bekannten KI-Diensten auswerten. Das Ergebnis zeigt, welche Tools tatsächlich genutzt werden und wie intensiv – die Grundlage für alles Weitere.</li>
        <li><strong>Ersatz anbieten, bevor gesperrt wird:</strong> Eine freigegebene Alternative bereitstellen, die dieselbe Aufgabe erfüllt, mit Auftragsverarbeitungsvertrag und deaktiviertem Training. Wird nur gesperrt ohne Ersatz, verlagert sich die Nutzung auf private Geräte – und damit vollständig aus dem Blickfeld.</li>
        <li><strong>Technisch begrenzen:</strong> Nicht freigegebene Dienste über den Proxy sperren. Auf verwalteten Geräten zusätzlich verhindern, dass Unternehmensdateien per Zwischenablage oder Upload in Browserfenster nicht freigegebener Dienste gelangen – dafür gibt es in gängigen Endpunktschutz- und Data-Loss-Prevention-Lösungen fertige Regelwerke.</li>
        <li><strong>Verbindlich regeln:</strong> Eine kurze Nutzungsrichtlinie, die konkret benennt, welche Datenkategorien nie in ein externes KI-System dürfen – Personaldaten, Gesundheitsdaten, Vertragsentwürfe, Quellcode, Zugangsdaten. Zwei Seiten reichen, wenn sie konkret sind.</li>
        <li><strong>Beim Austritt entziehen:</strong> Erteilte Berechtigungen für KI-Dienste, die auf Postfach, Kalender oder Dateiablage zugreifen, gehören in die Offboarding-Checkliste. Diese Berechtigungen laufen sonst weiter, auch wenn der Nutzerzugang gesperrt ist.</li>
      </ol>
    `,
  },
  {
    frage: "Wie verhindere ich, dass meine Eingaben zum Training fremder KI-Modelle verwendet werden?",
    antwortHtml: `
      <p>In den meisten kommerziellen KI-Tools lässt sich das Trainings-Opt-out in den Konto- oder Admin-Einstellungen aktivieren – bei Business- und Enterprise-Tarifen ist es häufig sogar standardmäßig deaktiviert, bei kostenlosen Consumer-Zugängen dagegen oft aktiv, sofern nicht manuell abgeschaltet.</p>
      <p>Wichtig ist die Unterscheidung zwischen Trainingsnutzung und Verarbeitung: Auch wenn Eingaben nicht trainiert werden, verarbeitet sie der Anbieter zur Beantwortung – auf Servern, deren Standort und Sicherheitsniveau je nach Anbieter variieren. Ein deaktiviertes Training schützt also vor Wiederauftauchen der Daten in künftigen Modellantworten, nicht automatisch vor jedem Datenschutzrisiko.</p>
      <p>Wer volle Kontrolle braucht, kommt an zwei Punkten nicht vorbei: einem Auftragsverarbeitungsvertrag mit dem Anbieter und – bei besonders sensiblen Daten – der Prüfung, ob ein lokal betriebenes Modell die bessere Lösung ist.</p>
    `,
  },
  {
    frage: "Wie schütze ich mich vor Prompt-Injection-Angriffen auf meine KI-Systeme?",
    antwortHtml: `
      <p>Prompt-Injection bezeichnet den Versuch, ein KI-System über manipulierte Eingaben – etwa in einem hochgeladenen Dokument, einer E-Mail oder einer Webseite, die ein Agent liest – zu einem vom Nutzer nicht beabsichtigten Verhalten zu bewegen. Besonders kritisch wird das, sobald ein Agent nicht nur Text ausgibt, sondern Aktionen mit echten Systemzugriffen ausführt.</p>
      <p>Wirksamer Schutz setzt an mehreren Ebenen gleichzeitig an, weil sich Prompt-Injection nicht durch eine einzelne Maßnahme zuverlässig verhindern lässt:</p>
      <ul>
        <li><strong>Rechteebene:</strong> Geringstmögliche Berechtigung, wie bereits bei der Agenten-Einrichtung beschrieben. Selbst ein erfolgreich manipulierter Agent kann nur das anrichten, wozu sein technischer Zugang reicht.</li>
        <li><strong>Trennung von Anweisung und Inhalt:</strong> Eingaben aus externen Quellen (Dokumente, E-Mails, Webseiten, Suchergebnisse) technisch klar als „zu verarbeitender Inhalt" kennzeichnen, nicht als Anweisung. Viele Plattformen bieten dafür eigene Auszeichnungsmechanismen, die eingebettete Befehle in fremden Inhalten entschärfen.</li>
        <li><strong>Freigabeschritt vor kritischen Aktionen:</strong> Jede Aktion mit finanzieller, rechtlicher oder nach außen wirkender Konsequenz durchläuft einen Freigabeschritt – unabhängig davon, wodurch der Agent zu dieser Aktion kam.</li>
        <li><strong>Eingrenzung der Werkzeuge:</strong> Ein Agent, der nur Inhalte lesen und zusammenfassen soll, bekommt keinen technischen Zugriff auf E-Mail-Versand oder Zahlungsauslösung – auch nicht „für den Notfall". Was technisch nicht erreichbar ist, kann nicht missbraucht werden.</li>
        <li><strong>Protokollierung und Stichprobenprüfung:</strong> Auffällige Abweichungen vom erwarteten Verhalten – ungewöhnliche Zielsysteme, ungewöhnliche Reihenfolge – lassen sich nur erkennen, wenn das fachliche Journal regelmäßig eingesehen wird.</li>
      </ul>
      <p>Ein hundertprozentiger Schutz existiert nach heutigem Stand nicht – das Ziel ist, den möglichen Schaden durch enge Rechte und Freigabeschritte zu begrenzen, nicht den Angriff selbst zu verhindern.</p>
    `,
  },
  {
    frage: "Gilt der EU AI Act jetzt schon für mein Unternehmen, oder wurden die Fristen verschoben?",
    antwortHtml: `
      <p>Teilweise verschoben, teilweise nicht – hier verwechseln viele Unternehmen zwei unterschiedliche Fristen. Am 27. Juli 2026 trat die Änderungsverordnung „Digital Omnibus" (EU 2026/1744) in Kraft und verschob die vollständigen Pflichten für Hochrisiko-KI-Systeme (Anhang III, etwa in Personalauswahl oder Kreditwürdigkeitsprüfung) vom 2. August 2026 auf den 2. Dezember 2027.</p>
      <p>Nicht verschoben wurden dagegen die Transparenzpflichten nach Artikel 50: Wer einen Chatbot betreibt oder KI-generierte Inhalte veröffentlicht, muss dies seit dem 2. August 2026 kennzeichnen. Auch die Pflichten für KI-Modelle mit allgemeinem Verwendungszweck gelten unverändert seit August 2025.</p>
      <p>Für die meisten Mittelstandsunternehmen ohne Hochrisiko-Anwendung heißt das: Die Kennzeichnungspflicht betrifft Sie schon jetzt, die aufwendigeren Hochrisiko-Pflichten erst später.</p>
    `,
  },
  {
    frage: "Welche Bußgelder drohen bei Verstößen gegen den EU AI Act?",
    antwortHtml: `
      <p>Die Höhe richtet sich nach der Art des Verstoßes. Verbotene KI-Praktiken (Artikel 5, etwa manipulative Systeme) werden mit bis zu 35 Millionen Euro oder 7 Prozent des weltweiten Jahresumsatzes geahndet – der jeweils höhere Betrag gilt. Verstöße gegen Hochrisiko- oder Betreiberpflichten liegen bei bis zu 15 Millionen Euro oder 3 Prozent, Falschangaben gegenüber Behörden bei bis zu 7,5 Millionen Euro oder 1 Prozent, hier mit einer Deckelung für kleine und mittlere Unternehmen.</p>
      <p>Für die praktische Einordnung: Die meisten Mittelstandsanwendungen – Chatbots, interne Assistenten, Textgenerierung – fallen nicht unter die Hochrisiko-Kategorie und damit auch nicht unter die höchsten Bußgeldstufen. Die Kennzeichnungspflicht nach Artikel 50 bleibt aber für praktisch jedes Unternehmen mit KI-Einsatz relevant.</p>
    `,
  },
  {
    frage: "Muss ich KI-generierte Inhalte auf meiner Website kennzeichnen?",
    antwortHtml: `
      <p>Ja, seit dem 2. August 2026 gilt die Kennzeichnungspflicht nach Artikel 50 EU AI Act für synthetische Inhalte wie KI-generierte Texte, Bilder, Videos oder Audiodateien. Diese Pflicht wurde durch die Fristverschiebung für Hochrisiko-Systeme nicht berührt und gilt unabhängig von der Unternehmensgröße.</p>
      <p>Die genaue technische Umsetzung, etwa maschinenlesbare Kennzeichnung für generierte Bilder, war Mitte 2026 noch in Abstimmung zwischen EU-Institutionen. Für Text- und Chatbot-Anwendungen reicht in der Praxis meist ein klarer Hinweis, dass Inhalte mithilfe von KI erstellt wurden.</p>
    `,
  },
  {
    frage: "Brauche ich für ChatGPT, Copilot & Co. einen Auftragsverarbeitungsvertrag?",
    antwortHtml: `
      <p>In aller Regel ja, sobald personenbezogene Daten im Spiel sind – etwa Kundennamen in einem Support-Chatbot oder Bewerberdaten in einem HR-Tool. Die gängigen Business- und Enterprise-Tarife großer Anbieter stellen einen Auftragsverarbeitungsvertrag standardmäßig bereit; bei kostenlosen Consumer-Zugängen fehlt er meist, was diese für den Unternehmenseinsatz mit personenbezogenen Daten ungeeignet macht.</p>
      <p>Ein Auftragsverarbeitungsvertrag allein löst nicht jedes Problem: Er regelt die vertragliche Verantwortung, ändert aber nichts daran, wohin die Daten technisch fließen. Bei US-Anbietern bleibt deshalb zusätzlich die Frage relevant, auf welcher Rechtsgrundlage die Datenübermittlung in die USA erfolgt.</p>
    `,
  },
  {
    frage: "Welche KI-Anwendungen bringen unabhängig von der Branche den größten Hebel?",
    antwortHtml: `
      <p>Drei Kategorien wiederholen sich über nahezu alle Branchen hinweg, weil sie an einem verbreiteten Engpass ansetzen – nicht an einer Abteilungsbesonderheit. Erstens: Wissensarbeit, die auf verstreuten internen Dokumenten basiert – hier schafft ein RAG-gestützter Assistent (Retrieval-Augmented Generation) Zugriff auf Wissen, das bislang nur in Köpfen einzelner Mitarbeitender steckte. Zweitens: strukturierte Texterstellung mit hohem Wiederholungsanteil – Angebote, Standardantworten, Protokolle. Drittens: Recherche- und Analyseaufgaben, bei denen ein erster KI-Entwurf die eigentliche Denkarbeit nicht ersetzt, aber den Startpunkt beschleunigt.</p>
      <p>Der gemeinsame Nenner: Diese drei sparen keine Zeit bei einer einzelnen Person in einer einzelnen Abteilung, sondern reduzieren einen Engpass, den fast jedes Unternehmen hat.</p>
    `,
  },
  {
    frage: "Brauche ich für jede Aufgabe ein eigenes KI-Tool, oder gibt es eine Komplettlösung?",
    antwortHtml: `
      <p>Eine Universallösung gibt es nicht, aber die Zahl nötiger Verträge ist deutlich kleiner als die Zahl der Anwendungsfälle. In der Praxis tragen drei Schichten den Großteil des Bedarfs:</p>
      <ul>
        <li><strong>Eine Sprachmodell-Plattform</strong> für alle Aufgaben rund um Text, Analyse, Zusammenfassung und Recherche – das ist der größte Anteil der Alltagsfälle und braucht in der Regel nur einen Vertrag für das gesamte Unternehmen.</li>
        <li><strong>Die KI-Funktionen in bereits vorhandener Software</strong> – ERP, Buchhaltung, CRM und Kommunikationsplattformen bringen zunehmend eigene KI-Funktionen mit. Diese sind oft die bessere Wahl als ein Zusatztool, weil die Daten das System nicht verlassen und keine neue Schnittstelle entsteht.</li>
        <li><strong>Eine Automatisierungs- oder Workflow-Plattform</strong>, die vorhandene Systeme verbindet und wiederkehrende Abläufe ausführt.</li>
      </ul>
      <p>Spezialwerkzeuge lohnen sich erst, wenn eine Aufgabe hohes Volumen hat und die Allzwecklösung dort messbar schlechter abschneidet – typischerweise bei Transkription, Bildverarbeitung oder fachspezifischer Dokumentenprüfung.</p>
      <p>Der Abhängigkeitspunkt ist berechtigt. Eine praktikable Gegenmaßnahme: Die Verbindung zu den eigenen Systemen nicht im KI-Tool selbst aufbauen, sondern in einer Zwischenschicht, die austauschbar ist. Dann kostet ein Anbieterwechsel die Anpassung einer Schnittstelle statt den Neubau aller Abläufe.</p>
    `,
  },
  {
    frage: "Wie deckele ich den Tokenverbrauch und begrenze ihn je Mitarbeiter?",
    antwortHtml: `
      <p>Der Verbrauch entsteht an drei Stellen, und nur an einer davon greifen Limits automatisch:</p>
      <ul>
        <li><strong>Nutzer-Abos:</strong> Feste Monatsgebühr je Person, der Anbieter begrenzt die Nutzung selbst. Kostenrisiko gleich null, dafür kein Einfluss auf die Nutzungsmenge. Für die meisten Mitarbeitenden der passende Weg.</li>
        <li><strong>Schnittstellenzugriff (API):</strong> Abrechnung nach tatsächlichem Verbrauch, hier entsteht das Kostenrisiko. Große Anbieter erlauben im Administrationsbereich Monatsbudgets je Projekt und je Schlüssel, Warnschwellen bei prozentualer Ausschöpfung und Ratenlimits. Praktische Umsetzung: je Abteilung oder je Automatisierung ein eigener Schlüssel mit eigenem Budget – dann trifft ein fehlerhafter Ablauf nicht das Gesamtbudget, und die Abrechnung ist verursachergerecht.</li>
        <li><strong>Automatisierte Abläufe:</strong> Der größte unbemerkte Kostentreiber, weil ein fehlerhafter Ablauf tausendfach durchlaufen kann. Gegenmittel: maximale Durchlaufzahl je Zeitraum in der Plattform begrenzen, Wiederholungsversuche bei Fehlern auf zwei bis drei beschränken, Zeitsteuerung statt Dauerabfrage.</li>
      </ul>
      <p>Drei Hebel, die unabhängig von Limits wirken: für einfache Aufgaben ein kleineres Modell einsetzen statt reflexhaft das leistungsfähigste; nur die tatsächlich benötigten Dokumente übergeben statt ganzer Ablagen; wiederkehrende Anweisungsteile über die Zwischenspeicherung des Anbieters wiederverwenden, die bei mehreren Anbietern deutlich günstiger abgerechnet wird.</p>
      <p>Für die Kostenkontrolle je Person gilt: Über die Schnittstelle ist sie technisch sauber lösbar, in Nutzer-Abos nicht – dort ist die Obergrenze bereits der Abo-Preis.</p>
    `,
  },
  {
    frage: "Gibt es eine Plattform, über die ich mehrere Sprachmodelle nutzen kann, ohne für jedes ein eigenes Abo abzuschließen?",
    antwortHtml: `
      <p>Ja, drei Ansätze – der Unterschied liegt darin, wo Ihre Daten verarbeitet werden und wie viel Verwaltung mitgeliefert wird:</p>
      <ul>
        <li><strong>Aggregatoren</strong> (Beispiele: OpenRouter, LiteLLM): Bündeln per Schnittstelle den Zugriff auf Dutzende Modelle verschiedener Anbieter über einen einzigen Zugangsschlüssel und ein einheitliches Anfrageformat – ein Modellwechsel bedeutet dann eine geänderte Einstellung statt umgebauter Software. Gedacht für die technische Anbindung in eigene Abläufe; Nutzerverwaltung und Endnutzer-Oberfläche bringen sie nicht mit. Bei gehosteten Anbietern wie OpenRouter fällt zusätzlich zum Anbieterpreis ein Vermittlungsaufschlag an, LiteLLM ist quelloffen und lässt sich selbst betreiben. Zu prüfen ist in beiden Fällen der Verarbeitungsort und ob ein Auftragsverarbeitungsvertrag angeboten wird – der Aggregator sitzt zwischen Ihnen und dem Modellanbieter.</li>
        <li><strong>Europäische Unternehmensplattformen</strong> (Beispiele: Langdock, InnoGPT): Legen eine einheitliche Oberfläche über mehrere Modelle und ergänzen sie um Nutzerverwaltung, Rechtevergabe, gemeinsame Vorlagen und Auftragsverarbeitungsvertrag. Langdock etwa bietet Zugang zu über 40 Modellen bei Datenhaltung in Frankfurt, ISO-27001-Zertifizierung und vertraglich zugesichertem Ausschluss der Trainingsnutzung; der Business-Tarif liegt bei 20 Euro je Nutzer und Monat bei jährlicher Zahlung. Für DSGVO-sensible Umgebungen meist der passendste Weg. Zu beachten: EU-Hosting der Plattform bedeutet nicht automatisch EU-Verarbeitung des dahinterliegenden Modells – das ist je Modell getrennt zu prüfen.</li>
        <li><strong>Eigener Betrieb</strong> (Beispiele: Open WebUI, Ollama für lokal laufende Modelle): Eine selbst betriebene Oberfläche, die per Schnittstelle mehrere Anbieter anspricht und zusätzlich lokal laufende offene Modelle einbinden kann. Höchste Kontrolle, dafür Betriebsaufwand und eigene Serverleistung.</li>
      </ul>
      <p>Für den Mittelstand ist die zweite Variante meist der beste Kompromiss: ein Vertrag, geregelte Verantwortlichkeiten, freie Modellwahl – und der Wechsel des Modells wird zur Einstellung statt zum Projekt.</p>
    `,
  },
  {
    frage: "Was ist ein KI-Agent, und was kann er anders als ein Chatbot?",
    antwortHtml: `
      <p>Ein klassischer Chatbot beantwortet Fragen und liefert Text – ein KI-Agent führt darüber hinaus eigenständig mehrere Arbeitsschritte aus, um ein Ziel zu erreichen: Informationen aus verschiedenen Quellen zusammentragen, Werkzeuge oder andere Programme aufrufen, Zwischenergebnisse bewerten und die nächsten Schritte selbst planen.</p>
      <p>Der Unterschied liegt also nicht in der Sprachqualität, sondern im Grad der Selbstständigkeit: Ein Agent kann etwa eine Rechnungsprüfung komplett durchführen – Beleg lesen, mit Bestelldaten abgleichen, Abweichung markieren –, während ein klassischer Chatbot bei jedem Schritt eine neue Anfrage braucht.</p>
      <p>Der Praxisnutzen steigt mit der Selbstständigkeit, aber auch das Risiko: Ein Agent braucht klar begrenzte Zugriffsrechte und eine nachvollziehbare Protokollierung – sonst wird aus Effizienzgewinn schnell ein Kontrollverlust.</p>
    `,
  },
  {
    frage: "Wo richte ich einen KI-Agenten ein, und welche Zugänge braucht er?",
    antwortHtml: `
      <p>Zwei übliche Orte, mit unterschiedlichen Konsequenzen:</p>
      <ul>
        <li><strong>Direkt beim Sprachmodell-Anbieter:</strong> schnell eingerichtet, gut für Aufgaben rund um Text und Dokumente. Schwächer, sobald mehrere Fremdsysteme beteiligt sind.</li>
        <li><strong>In einer Automatisierungsplattform</strong> (z. B. Make, n8n): der übliche Weg, wenn mehrere Systeme zusammenspielen. Der Ablauf ist dort sichtbar modelliert, fehlerhafte Schritte lassen sich einzeln wiederholen, das Modell wird nur für die Denkarbeit aufgerufen.</li>
      </ul>
      <p>Die Zugänge zu Ihren Systemen entstehen auf drei Wegen, in dieser Vorzugsreihenfolge:</p>
      <ol>
        <li><strong>Schnittstelle des Zielsystems (API):</strong> Für den Agenten ein eigener technischer Benutzer mit eigenen Zugangsdaten und Rechten, die genau seiner Aufgabe entsprechen – ein Agent, der Rechnungen prüfen soll, braucht Leserechte auf Belege und Bestellungen, aber kein Recht, Zahlungen auszulösen.</li>
        <li><strong>Model Context Protocol (MCP):</strong> ein standardisiertes Verbindungsprotokoll, über das Modelle auf Werkzeuge und Datenquellen zugreifen. Vorteil: die Rechtevergabe ist an einer Stelle gebündelt statt in jeder Einzelintegration.</li>
        <li><strong>Datenbanksicht mit Lesezugriff:</strong> wo es keine brauchbare Schnittstelle gibt, aber die Datenbank zugänglich ist. Als letzte Wahl bei Altsystemen ohne Schnittstelle bleibt die Oberflächenautomatisierung – funktioniert, bricht aber bei jeder Oberflächenänderung.</li>
      </ol>
      <p>Zwei Regeln, unabhängig vom Weg: Kein Agent nutzt den Zugang eines Menschen – sonst lässt sich im Nachhinein nicht unterscheiden, wer gehandelt hat. Und jede Aktion mit finanzieller oder rechtlicher Wirkung erhält eine Betragsgrenze oder einen Freigabeschritt, bevor sie ausgeführt wird.</p>
    `,
  },
  {
    frage: "Wie kontrolliere ich, was ein KI-Agent tatsächlich getan hat?",
    antwortHtml: `
      <p>Nicht über den Agenten selbst – ein System, das sein eigenes Handeln protokolliert, ist als Nachweis wertlos. Die Kontrolle muss an Stellen ansetzen, die der Agent nicht verändern kann. Drei Ebenen, die zusammen ein belastbares Bild ergeben:</p>
      <ul>
        <li><strong>Ausführungsprotokoll der Automatisierungsplattform</strong> (z. B. Make, n8n): Jeder Durchlauf wird mit Zeitstempel, Eingangsdaten, aufgerufenen Systemen und Ergebnis protokolliert. Das beantwortet: Was wurde angestoßen und ist es durchgelaufen?</li>
        <li><strong>Protokoll im Zielsystem:</strong> Buchhaltung, ERP und Warenwirtschaft führen ihre eigene Änderungshistorie. Weil der Agent einen eigenen technischen Benutzer verwendet, lassen sich seine Buchungen dort nach Benutzer filtern – die revisionssichere Spur, unabhängig von der KI-Plattform. Das ist der Hauptgrund für die Regel „kein geteilter Zugang".</li>
        <li><strong>Fachliches Journal:</strong> Am Ende des Workflows in der Automatisierungsplattform hängt ein weiterer Baustein, der eine Zeile in eine Tabelle schreibt – Datum, Vorgang, Belegnummer, Entscheidung, Betrag. Dieser Baustein entnimmt die tatsächlichen Werte aus dem Durchlauf selbst, nicht einer vom Modell formulierten Zusammenfassung – deshalb ist das Journal ein Nachweis, keine Selbstauskunft.</li>
      </ul>
      <p>Für die Human-in-the-Loop-Kontrolle kommt ein vierter Baustein dazu: Aktionen mit Außenwirkung – Zahlung, Bestellung, Kundenkommunikation – laufen nicht direkt durch, sondern erzeugen einen Freigabeeintrag. Praktikable Wege dafür: Die Automatisierungsplattform hält den Durchlauf an und schickt eine Nachricht mit Freigabe- und Ablehnen-Schaltfläche in Teams, Slack oder per E-Mail; oder der Vorgang wird als Datensatz in einer Freigabetabelle angelegt, die der Freigebende zyklisch prüft; oder das Zielsystem selbst übernimmt die Freigabe, indem der Agent die Zahlung nur als vorerfassten Beleg anlegt und die Freigabe im gewohnten Buchhaltungsprozess erfolgt. Tagesgeschäft unterhalb definierter Schwellen kann durchlaufen und wird stichprobenartig über das Journal geprüft.</p>
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
