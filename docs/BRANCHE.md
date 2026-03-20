# BRANCHE.md – EsperIT Inhalts-Konfiguration

> Nur Inhalte und Texte. Layout-Anweisungen: `docs/ANFORDERUNGEN.md`. Design: `docs/DESIGNSYSTEM.md`
> [INHALT] = Text auf der Seite · [KONFIG] = Technischer Konfigurationswert

---

## FIRMENDATEN

```yaml
# [KONFIG] → lib/config.ts
firmenname: "EsperIT"
inhaber: "Frank Esper"
rechtsform: "Einzelunternehmer"
gruendungsjahr: 2001
telefon: "0177 2578260"
email: "info@esperit.net"
website: "www.esperit.net"
strasse: "Kastanienstrasse 8"
plz: "28844"
stadt: "Weyhe"
erreichbarkeit_werktags: "Mo–Fr: 09:00–19:00 Uhr"
xing_url: "https://www.xing.com/profile/Frank_Esper"
linkedin_url: "https://www.linkedin.com/in/frank-esper/"
```

---

## NAVIGATION

```yaml
# [KONFIG] Exakte Struktur – nicht abweichen
navigation:
  - label: "Home"
    href: "/"
  - label: "Über mich"
    href: "/ueber-mich"
    children:
      - { label: "Qualifikationen & Know-how", href: "/ueber-mich/qualifikationen" }
      - { label: "Rollen & Aufgaben",          href: "/ueber-mich/rollen" }
      - { label: "Stationen & Projekte",       href: "/ueber-mich/stationen" }
  - label: "Leistungen"
    href: "/leistungen"
    children:
      - { label: "DataWarehouse",        href: "/leistungen/datawarehouse" }
      - { label: "Business Intelligence", href: "/leistungen/business-intelligence" }
      - { label: "Künstliche Intelligenz", href: "/leistungen/ki" }
  - label: "Service"
    href: "/service"
    children:
      - { label: "KI-Schulungen",         href: "/service/ki-schulungen" }
      - { label: "KI-Assistenten",        href: "/service/ki-assistenten" }
      - { label: "Consulting & Workshops", href: "/service/consulting-workshops" }
  - label: "Marketplace"
    href: "/marketplace"
    children:
      - { label: "AI Tools Katalog", href: "/marketplace/ai-tools-katalog" }
      - { label: "AI Use Cases",     href: "/marketplace/ai-use-cases" }
  - label: "News & Insights"
    href: "/news"
  - label: "Kontakt"
    href: "/kontakt"
    cta: true
```

---

## FEATURES

```yaml
# [KONFIG] → lib/config.ts features
xing_button: true
linkedin_button: true
whatsapp_button: false
google_maps: false
analytics: false
cookie_consent: true
bewertungen: false
notdienst_banner: false
floating_cta: true
blog: true
lead_magnet: true
```

---

## SEITE: LANDINGPAGE (/)

```yaml
# [INHALT] Hero
headline: "Sie möchten Prozesse in Ihrem Unternehmen automatisieren?"
subline: "Ich unterstütze Sie dabei, Ihre Unternehmensprozesse zu analysieren, Automatisierungsvorschläge zu erarbeiten und zu implementieren."
cta_primary:  { text: "Beratungstermin anfragen", href: "/kontakt" }
cta_secondary: { text: "Jetzt anrufen", href: "tel:01772578260" }

# [INHALT] Trust-Badges (4 Stück im Hero)
badges:
  - "Seit 2001 aktiv"
  - "Zertifizierter IT-Experte"
  - "Deutschlandweit remote"
  - "PLZ-Bereich 2* in Präsenz"

# [KONFIG] Trust Bar Kennzahlen
metriken:
  - { wert: "24+", label: "Jahre Berufserfahrung" }
  - { wert: "15+", label: "abgeschlossene Projekte" }

# [INHALT] Über-mich-Teaser
teaser_text: "Ich bin Frank Esper – BI- und DWH-Experte, AI-Enthusiast und Brückenbauer. Was mich antreibt? Wenn Menschen und Technik, Strategie und Taktik, Ausdauer und Disziplin perfekt zusammenspielen."
teaser_cta: { text: "Lernen Sie mich kennen →", href: "/ueber-mich" }

# [KONFIG] Lead Magnet
lead_magnet:
  titel: "DSGVO Compliance Checklist"
  untertitel: "20 Fragen, die Ihnen sagen, ob es in Ihrem Unternehmen Handlungsbedarf gibt."
  beschreibung: "Finden Sie in 5 Minuten heraus, ob die Prozesse in Ihrem Unternehmen DSGVO-konform sind."
  cta_text: "Checkliste herunterladen"
  download_datei: "/downloads/DSGVO_Compliance_Check.pdf"
  dsgvo_checkbox_text: "Ich bin einverstanden, dass meine E-Mail-Adresse gespeichert wird."

# [INHALT] Einzugsgebiet
service_orte:
  - "PLZ-Bereich 2* (in Präsenz)"
  - "Deutschlandweit (remote)"

# [KONFIG] FAQ-Sektion
faq_email_gate:
  titel: "FAQs zum Thema Künstliche Intelligenz"
  beschreibung: "Laden Sie unsere häufig gestellten Fragen zum Thema KI als PDF herunter."
  download_datei: "/downloads/KI_FAQ_esperit.pdf"
  checkbox_text: "Ich bin einverstanden, dass meine E-Mail-Adresse für die Auftragsverarbeitung gespeichert wird."

faq_assistent:
  text: "Dieser Assistent unterstützt Sie bei der Beantwortung von Fragen zur EU-KI-Verordnung."
  link_text: "EU AI Act Assistent öffnen"
  link_url: "https://chatgpt.com/g/g-6776688f38f08191af89532abd157db3-eu-ai-act-i-ai-first"
  link_target: "_blank"

# [INHALT] CTA-Banner
cta_banner:
  headline: "Bereit für Ihr Projekt?"
  cta_primary:  { text: "Beratungstermin anfragen", href: "/kontakt" }
  cta_secondary: { text: "0177 2578260", href: "tel:01772578260" }
```

---

## SEITE: ÜBER MICH (/ueber-mich)

```yaml
# [INHALT]
intro: |
  Ich bin Frank Esper – BI- und DWH-Experte, AI-Enthusiast und Brückenbauer.
  Was mich antreibt? Wenn Menschen und Technik, Strategie und Taktik,
  Ausdauer und Disziplin perfekt zusammenspielen.
  Auf dieser Seite erfahren Sie mehr über mich, meine Arbeitsweise
  und wie Sie davon profitieren. Let's go!
rollen_kurzform: ["BI- und DWH-Experte", "AI-Enthusiast", "Brückenbauer"]
bild: "public/images/frank-esper.jpg"
```

---

## UNTERSEITE: QUALIFIKATIONEN (/ueber-mich/qualifikationen)

```yaml
# [INHALT] 10 Kacheln
kacheln:
  - { titel: "Change- und Release-Management",
      beschreibung: "Change-Typisierung, Change Enablement / Change Control, Release Planung, Release Paketierung" }
  - { titel: "Deployment-Management",
      beschreibung: "Automatisierung, Rollback- und Rollforwards" }
  - { titel: "Test- und Qualitätsmanagement",
      beschreibung: "Teststrategie, Abnahmekriterien, Quality Gates, Unit Tests, Regressionstests, Plausibilitätstests" }
  - { titel: "Service-Transition & Betriebsübergabe",
      beschreibung: "Operational Readiness, Knowledge Transfer, Hypercare" }
  - { titel: "Metriken, Reporting & Continual Improvement",
      beschreibung: "KPIs, Trend- & Ursachenanalyse, Performanceoptimierung" }
  - { titel: "DWH-Architektur & Datenmodellierung",
      beschreibung: "Architektur-Patterns, Dimensional Modeling, Data Vault, Modellierungsprinzipien, semantische Schicht" }
  - { titel: "Datenqualität & Data Governance",
      beschreibung: "DQ-Regeln & Validierungen, Data Profiling, Master-/Reference-Data, Metadaten Management" }
  - { titel: "Performance Engineering & Skalierung",
      beschreibung: "Query Optimierung" }
  - { titel: "BI/Analytics Enablement",
      beschreibung: "Self-Service BI, Kennzahlen-/KPI-Management, domänenorientierte Data Marts" }
  - { titel: "Scrum",
      beschreibung: "Sprint Planning, Sprint Review, Retrospektive" }
```

---

## UNTERSEITE: ROLLEN & AUFGABEN (/ueber-mich/rollen)

```yaml
# [INHALT]
rollen:
  - rolle: "Business-Analyst"
    aufgaben:
      - "Erstellung von Schema- und Applikationsobjekten"
      - "Erstellung des semantischen Modells"
      - "Integration von Business-Logik"
      - "KPI-Management"
  - rolle: "Datenmodellierer"
    aufgaben:
      - "ER-Modellierung"
      - "Semantic-Layer-Erstellung"
      - "Logische Datenmodellierung"
      - "Datamart-Entwicklung"
      - "Query-Optimierung"
      - "DBT-Script-Erstellung"
      - "Data-Lineage-Visualisierung"
  - rolle: "Projektleiter"
    aufgaben:
      - "Bedarfsanalyse in Zusammenarbeit mit den Fachdisziplinen"
      - "Erstellung von Fachfeinkonzepten"
      - "Ressourcenplanung"
      - "Aufwandsschätzung"
      - "Machbarkeitsanalysen"
      - "Change- und Releasemanagement"
  - rolle: "Tester"
    aufgaben:
      - "Erstellung von Testkonzepten"
      - "Erstellung von Unit- bzw. Regressionstests"
      - "Qualitätsmanagement"
  - rolle: "Administrator"
    aufgaben:
      - "User-Management"
      - "Security-Management"
      - "Performance-Optimierung"
      - "Lizenz-Management"
      - "Deployment-Management"
      - "Monitoring"
```

---

## UNTERSEITE: STATIONEN & PROJEKTE (/ueber-mich/stationen)

```yaml
# [INHALT]
stationen:
  - unternehmen: "HDI"
    rolle: "Datenmodellierer, MicroStrategy-Designer und Administrator, PowerBI-Designer"
    aufgaben:
      - "MicroStrategy-Berichtserstellung"
      - "PowerBI-Berichtsersteller und Semantikmodell-Entwicklung"
      - "Projektmigration von MicroStrategy nach PowerBI"
      - "Lift & Shift Projekt"
      - "Administration der 3-stufigen MicroStrategy-Systemumgebung (SAML, Zertifikate, Lizenzen, User-Management, Change- und Releasemanagement)"
      - "Datenmodellierung in Exasol, Oracle und Snowflake (GitHub, DBT, DV4DBT, DBeaver, Squirrel)"
      - "Agiles Arbeiten nach Scrum, Team 8 Personen"
  - unternehmen: "HannoverRück"
    rolle: "Datenmodellierer und MicroStrategy-Designer"
    aufgaben:
      - "MicroStrategy-Berichts- und Dossier-Erstellung"
      - "Datenmodellierung in Exasol und Oracle (View-Layer/Datamart)"
      - "Migration von SAP BO nach MicroStrategy"
      - "Automatisierung via Command-Manager-Scripte"
      - "Writeback-Prozesse via MicroStrategy-Dashboards"
  - unternehmen: "CBR Fashion (Cecil, Street One)"
    rolle: "MicroStrategy-Administrator"
    aufgaben:
      - "User-Management, LDAP-Anbindung, Rollenkonzept"
      - "Prozessautomatisierung mit MicroStrategy System-Manager"
      - "Alerting-Automatisierung auf Basis von Datenbankabfragen"
      - "Teilprojektverantwortung (5 externe + 5 interne Mitarbeiter)"
  - unternehmen: "KfW Bank"
    rolle: "MicroStrategy-Entwickler"
    aufgaben:
      - "Betreuung MicroStrategy mit SAP/BW-Anbindung (SAPFIN)"
      - "Migration MicroStrategy nach SAP BO"
      - "Projektverantwortung (~20 Mitarbeiter)"

hinweis: "Über weitere Stationen & Projekte informiere ich Sie gerne in meinem downloadbaren Profil & CV."
cv_button:
  text: "DE Profil & CV als PDF"
  href: "/downloads/CV_Frank_Esper.pdf"
  farbe: "#5F94D6"
```

---

## SEITE: LEISTUNGEN

```yaml
# [INHALT] DataWarehouse
leistung_dwh:
  slug: "datawarehouse"
  titel: "DataWarehouse"
  icon: "database"
  kurz: "Planung, Konzeption, Implementierung, Wartung, Überwachung"
  beschreibung: "Mein Leistungsspektrum reicht von der Bedarfsanalyse über die Datenmodellierung bis hin zur Implementierung des Datenmodells."
  kundenprobleme:
    - "Sie können den zentralen Kennzahlen (Umsatz, Marge, Kosten, Kunden-/Produktprofitabilität) nicht vertrauen?"
    - "Sie bekommen Antworten zu wichtigen Fragen zu langsam?"
    - "Sie können operative Entscheidungen nicht datenbasiert treffen?"
  loesungen:
    - { titel: "Datenbereinigung, Vereinheitlichung, Verprobung",
        text: "Ein gemeinsames Verständnis von KPIs und deren Semantik; Harmonisierung von Dimensionen; Aufbau von Qualitäts- und Plausibilitätschecks." }
    - { titel: "SQL-Optimierung, Semanticlayer und Self-Service-Berichte",
        text: "Optimierung der wichtigsten Abfragen und Bereitstellung von Self-Service-Berichten, damit Fachbereiche Standardfragen ohne manuelle Report-Bastelei beantworten können." }
    - { titel: "Zusammenhänge sichtbar machen",
        text: "Verknüpfung von Quellsystemen (CRM/ERP/Finance/Support) über gemeinsame Schlüssel in einem klar strukturierten Datenmodell." }
  seo_title: "Konzeption und Implementierung von Datenmodellen | EsperIT"
  seo_description: "Von der Bedarfsanalyse bis zur Implementierung eines gesamtheitlichen Datenmodells. Jetzt Beratungstermin anfragen."
  seo_keywords: ["Datenmodellierung", "Datenbereinigung", "Performanceoptimierung", "Harmonisierung"]

# [INHALT] Business Intelligence
leistung_bi:
  slug: "business-intelligence"
  titel: "Business Intelligence"
  icon: "bar-chart-2"
  kurz: "Bedarfsanalyse, Konzeption, Design, Administration, Monitoring"
  beschreibung: "Meine Expertise deckt die gesamte Wertschöpfungskette des BI-Prozesses ab – vom DataWarehouse über das Tooldesign bis zur Administration."
  kundenprobleme:
    - "Entscheidungen werden aus dem Bauch heraus getroffen, weil niemand schnell sieht, was im Geschäft wirklich passiert?"
    - "Viel Zeit geht für Excel-Zusammenkopieren drauf – am Ende schaut trotzdem jeder auf andere Zahlen?"
    - "Probleme und Chancen werden zu spät erkannt, weil Frühwarnsignale fehlen?"
  loesungen:
    - { titel: "Management-Dashboard",
        text: "Ein zentrales Cockpit, das täglich automatisch aktualisiert wird und die wichtigsten Werte klar zeigt." }
    - { titel: "DataLake – eine zentrale Wahrheit",
        text: "Alle Datenquellen laufen zusammen; alle im Unternehmen sehen dieselben, klar erklärten Zahlen." }
    - { titel: "Überwachung und automatisiertes Alerting",
        text: "Einfache Warnmeldungen machen Auffälligkeiten sofort sichtbar und zeigen, wo man zuerst ansetzen sollte." }
  seo_title: "Business Intelligence & Datenanalyse | EsperIT"
  seo_description: "Datenanalyse mit BI-Werkzeugen zur Erkennung von Optimierungsbedarf und Überwachung der Profitabilität."
  seo_keywords: ["Datenanalyse", "Reporting", "Dashboards", "DataScience", "Optimierung"]

# [INHALT] Künstliche Intelligenz
leistung_ki:
  slug: "ki"
  titel: "Künstliche Intelligenz"
  icon: "brain"
  kurz: "Automatisierung von Prozessen"
  beschreibung: "Automatisierung von Prozessen in einem DSGVO-konformen Umfeld – zur Vermeidung von Zeitfressern und Fokussierung auf Kernaufgaben."
  kundenprobleme:
    - "Mitarbeitende verbringen viel Zeit mit wiederkehrender Büroarbeit (E-Mails, Tickets, Angebote)?"
    - "Kundenservice-Anfragen sind teuer, weil immer dieselben Fragen langsam beantwortet werden?"
    - "Fehler und Ausnahmen werden zu spät erkannt und verursachen hohe Folgekosten?"
  loesungen:
    - { titel: "Automatisierung von Routineaufgaben",
        text: "KI übernimmt Routinearbeiten direkt in genutzten Programmen, mit klaren Regeln und Freigabe durch den Menschen." }
    - { titel: "Selbständiger Antwortgeber",
        text: "KI beantwortet Standardfragen auf Basis eigener Unterlagen und leitet Sonderfälle an den richtigen Menschen weiter." }
    - { titel: "Überwachung",
        text: "KI überwacht Abläufe laufend, meldet Auffälligkeiten früh und liefert eine verständliche Begründung." }
  seo_title: "Automatisierung mit Künstlicher Intelligenz | EsperIT"
  seo_description: "Optimierung und Automatisierung von Unternehmensprozessen. Vorsprung gegenüber der Konkurrenz."
  seo_keywords: ["KI", "AI", "Automatisierung", "Künstliche Intelligenz", "Unternehmensprozesse"]
```

---

## SEITE: SERVICE

```yaml
# [INHALT] KI-Schulungen
service_schulungen:
  slug: "ki-schulungen"
  titel: "KI-Schulungen"
  beschreibung: |
    Jede Schulung wird auf Ihre spezifischen Anforderungen und die Besonderheiten Ihres
    Unternehmens zugeschnitten. Ob es darum geht, zeitintensive Routineaufgaben zu
    automatisieren oder Prozesse effizienter zu gestalten – ich biete Ihren Mitarbeitern
    das richtige Rüstzeug, um ihre Pain Points mittels moderner Technik zu lösen.

    Jede Schulung zielt darauf ab, die Anwendungsbandbreite der eingesetzten Systeme
    zu maximieren und gleichzeitig den Arbeitsalltag Ihrer Mitarbeiter zu erleichtern.
    Direkter Nutzen: Steigerung der Produktivität, schnellere Entscheidungen, reibungslose
    Nutzung Ihrer Softwarelösungen.

    Gerne berate ich Sie, wie ich Ihre Teams mit maßgeschneiderten Schulungsprogrammen
    unterstützen kann. Sprechen Sie mich an.
  cta: { text: "Schulung anfragen", href: "/kontakt" }

# [KONFIG] KI-Assistenten (9 Stück, Daten aus jeweiliger MD-Datei)
service_assistenten:
  slug: "ki-assistenten"
  titel: "KI-Assistenten"
  assistenten:
    - { slug: "vertragszusammenfassung",   datei: "docs/ki-assistenten/Vertragszusammenfassung_Assistent.md" }
    - { slug: "eu-ai-act-experte",         datei: "docs/ki-assistenten/EU AI Act Experte_Assistent.md" }
    - { slug: "datenschutzprufer",         datei: "docs/ki-assistenten/Datenschutzprüfer_Assistent.md" }
    - { slug: "seo-keyword-recherche",     datei: "docs/ki-assistenten/SEO Keyword-Recherche_Assistent.md" }
    - { slug: "pro-kontra-analyst",        datei: "docs/ki-assistenten/ProKontra_Analyst_Assistent.md" }
    - { slug: "linkedin-profil-optimierer", datei: "docs/ki-assistenten/LinkedIn_Profil_Optimierung_Assistent.md" }
    - { slug: "kundenfeedback-analyst",    datei: "docs/ki-assistenten/Kundenfeedback_Analyse_Assistent.md" }
    - { slug: "angebotsvergleich",         datei: "docs/ki-assistenten/Angebotsvergleich_Assistent.md" }
    - { slug: "hook-writer",               datei: "docs/ki-assistenten/Hook_Writer_Assistent.md" }

# [INHALT] Consulting & Workshops
service_consulting:
  slug: "consulting-workshops"
  titel: "Consulting & Workshops"
  consulting_headline: "CONSULTING (flexible Beauftragung)"
  consulting_text: |
    Gerne unterstütze ich Sie in Form eines PoC, mit einer Machbarkeitsanalyse
    oder der Konzeption und Durchführung einer Projektphase.
    Aufgrund meines wirtschaftlichen Hintergrunds verbinde ich kaufmännisches
    Wissen mit technologischer Expertise.
  workshop_headline: "WORKSHOP (1–2 Tage)"
  workshop_intro: "Innerhalb eines Workshops erarbeite ich mit Ihnen und Ihrem Team:"
  workshop_punkte:
    - "Ideen zu einer Problemstellung"
    - "Use Cases für eine sinnvolle Automatisierung bestehender Arbeitsprozesse"
    - "Software-Einarbeitungskonzepte anhand realer Arbeitsgrundlagen"
  cv_button:
    text: "DE Profil & CV als PDF"
    href: "/downloads/CV_Frank_Esper.pdf"
    farbe: "#5F94D6"
  cta: { text: "Beratungstermin anfragen", href: "/kontakt" }
```

---

## SEITE: MARKETPLACE

```yaml
# [KONFIG]
marketplace_tools:
  slug: "ai-tools-katalog"
  titel: "AI Tools Katalog"
  beschreibung: "Aktuelle Übersicht empfehlenswerter KI-Tools nach Einsatzbereich."
  embed_url_env: "NEXT_PUBLIC_SHEETS_KI_TOOLS"

marketplace_llm:
  slug: "ai-use-cases"
  titel: "AI Use Cases pro Abteilung"
  beschreibung: "KI-Anwendungsfälle strukturiert nach Unternehmensbereichen."
  embed_url_env: "NEXT_PUBLIC_SHEETS_LLM_MATRIX"
```

---

## SEITE: KONTAKT (/kontakt)

```yaml
# [KONFIG] Formularfelder
kontakt_felder:
  - { name: anrede,    typ: select,   optionen: ["Herr", "Frau", "Divers"], pflicht: false }
  - { name: name,      typ: text,     label: "Vor- und Nachname",           pflicht: true }
  - { name: telefon,   typ: tel,                                            pflicht: true }
  - { name: email,     typ: email,                                          pflicht: true }
  - { name: betreff,   typ: select,   optionen: ["DataWarehouse", "Business Intelligence",
      "Künstliche Intelligenz", "KI-Schulung", "KI-Assistent",
      "Consulting / Workshop", "Sonstiges"],                                pflicht: true }
  - { name: nachricht, typ: textarea,                                       pflicht: false }
  - { name: datenschutz, typ: checkbox,
      label: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.",
      pflicht: true }
erfolgs_meldung: "Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen."
```

---

## SEO (Hauptseite)

```yaml
# [KONFIG]
seo_title: "EsperIT – Frank Esper | BI, DWH & KI-Beratung"
seo_description: "Ihr Experte für Data Warehouse, Business Intelligence und KI-Automatisierung. Deutschlandweit remote, PLZ-Bereich 2* in Präsenz."
seo_keywords:
  - "Data Warehouse" · "Business Intelligence" · "KI-Beratung"
  - "Datenmodellierung" · "Automatisierung" · "Frank Esper" · "EsperIT"

social_proof:
  jahre_erfahrung: 24
  projekte: 15
```

---

## DOWNLOADS & ASSETS

```yaml
# [KONFIG] Dateien aus /Vorlagen/ in public/ kopieren
assets:
  - { quelle: "F 032-25-035.jpg",          ziel: "public/images/frank-esper.jpg",
      hinweis: "Vor Build auf max. 800px Breite skalieren" }
  - { quelle: "Firmenlogo.png",            ziel: "public/images/firmenlogo.png" }
  - { quelle: "CV Frank Esper.pdf",        ziel: "public/downloads/CV_Frank_Esper.pdf" }
  - { quelle: "DSGVO_Compliance_Check.pdf", ziel: "public/downloads/DSGVO_Compliance_Check.pdf" }
  - { quelle: "KI_FAQ_esperit.pdf",        ziel: "public/downloads/KI_FAQ_esperit.pdf" }
  - { quelle: "Handwerk_IT_Leitfaden.pdf", ziel: "public/downloads/Handwerk_IT_Leitfaden.pdf",
      hinweis: "Verlinkung noch nicht zugewiesen – bei Frank Esper nachfragen" }
```
