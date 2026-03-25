export interface ServiceData {
  slug: string;
  titel: string;
  icon: string;
  kurz: string;
  beschreibung: string;
  kundenprobleme: string[];
  loesungen: Array<{ titel: string; text: string }>;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "datawarehouse",
    titel: "DataWarehouse",
    icon: "Database",
    kurz: "Planung, Konzeption, Implementierung, Wartung, Überwachung",
    beschreibung:
      "Mein Leistungsspektrum reicht von der Bedarfsanalyse über die Datenmodellierung bis hin zur Implementierung des Datenmodells.",
    kundenprobleme: [
      "Sie können den zentralen Kennzahlen (Umsatz, Marge, Kosten, Kunden-/Produktprofitabilität) nicht vertrauen?",
      "Sie bekommen Antworten zu wichtigen Fragen zu langsam?",
      "Sie können operative Entscheidungen nicht datenbasiert treffen?",
    ],
    loesungen: [
      {
        titel: "Datenbereinigung, Vereinheitlichung, Verprobung",
        text: "Ein gemeinsames Verständnis von KPIs und deren Semantik; Harmonisierung von Dimensionen; Aufbau von Qualitäts- und Plausibilitätschecks.",
      },
      {
        titel: "SQL-Optimierung, Semanticlayer und Self-Service-Berichte",
        text: "Optimierung der wichtigsten Abfragen und Bereitstellung von Self-Service-Berichten, damit Fachbereiche Standardfragen ohne manuelle Report-Bastelei beantworten können.",
      },
      {
        titel: "Zusammenhänge sichtbar machen",
        text: "Verknüpfung von Quellsystemen (CRM/ERP/Finance/Support) über gemeinsame Schlüssel in einem klar strukturierten Datenmodell.",
      },
    ],
    seoTitle: "Konzeption und Implementierung von Datenmodellen | EsperIT",
    seoDescription:
      "Von der Bedarfsanalyse bis zur Implementierung eines gesamtheitlichen Datenmodells. Jetzt Beratungstermin anfragen.",
    seoKeywords: [
      "Datenmodellierung",
      "Datenbereinigung",
      "Performanceoptimierung",
      "Harmonisierung",
    ],
  },
  {
    slug: "business-intelligence",
    titel: "Business Intelligence",
    icon: "BarChart2",
    kurz: "Bedarfsanalyse, Konzeption, Design, Administration, Monitoring",
    beschreibung:
      "Meine Expertise deckt die gesamte Wertschöpfungskette des BI-Prozesses ab – vom DataWarehouse über das Tooldesign bis zur Administration.",
    kundenprobleme: [
      "Entscheidungen werden aus dem Bauch heraus getroffen, weil niemand schnell sieht, was im Geschäft wirklich passiert?",
      "Viel Zeit geht für Excel-Zusammenkopieren drauf – am Ende schaut trotzdem jeder auf andere Zahlen?",
      "Probleme und Chancen werden zu spät erkannt, weil Frühwarnsignale fehlen?",
    ],
    loesungen: [
      {
        titel: "Management-Dashboard",
        text: "Ein zentrales Cockpit, das täglich automatisch aktualisiert wird und die wichtigsten Werte klar zeigt.",
      },
      {
        titel: "DataLake – eine zentrale Wahrheit",
        text: "Alle Datenquellen laufen zusammen; alle im Unternehmen sehen dieselben, klar erklärten Zahlen.",
      },
      {
        titel: "Überwachung und automatisiertes Alerting",
        text: "Einfache Warnmeldungen machen Auffälligkeiten sofort sichtbar und zeigen, wo man zuerst ansetzen sollte.",
      },
    ],
    seoTitle: "Business Intelligence & Datenanalyse | EsperIT",
    seoDescription:
      "Datenanalyse mit BI-Werkzeugen zur Erkennung von Optimierungsbedarf und Überwachung der Profitabilität.",
    seoKeywords: [
      "Datenanalyse",
      "Reporting",
      "Dashboards",
      "DataScience",
      "Optimierung",
    ],
  },
  {
    slug: "ki",
    titel: "Künstliche Intelligenz",
    icon: "Brain",
    kurz: "Automatisierung von Prozessen",
    beschreibung:
      "Automatisierung von Prozessen in einem DSGVO-konformen Umfeld – zur Vermeidung von Zeitfressern und Fokussierung auf Kernaufgaben.",
    kundenprobleme: [
      "Mitarbeitende verbringen viel Zeit mit wiederkehrender Büroarbeit (E-Mails, Tickets, Angebote)?",
      "Kundenservice-Anfragen sind teuer, weil immer dieselben Fragen langsam beantwortet werden?",
      "Fehler und Ausnahmen werden zu spät erkannt und verursachen hohe Folgekosten?",
    ],
    loesungen: [
      {
        titel: "Automatisierung von Routineaufgaben",
        text: "KI übernimmt Routinearbeiten direkt in genutzten Programmen, mit klaren Regeln und Freigabe durch den Menschen.",
      },
      {
        titel: "Selbständiger Antwortgeber",
        text: "KI beantwortet Standardfragen auf Basis eigener Unterlagen und leitet Sonderfälle an den richtigen Menschen weiter.",
      },
      {
        titel: "Überwachung",
        text: "KI überwacht Abläufe laufend, meldet Auffälligkeiten früh und liefert eine verständliche Begründung.",
      },
    ],
    seoTitle: "Automatisierung mit Künstlicher Intelligenz | EsperIT",
    seoDescription:
      "Optimierung und Automatisierung von Unternehmensprozessen. Vorsprung gegenüber der Konkurrenz.",
    seoKeywords: [
      "KI",
      "AI",
      "Automatisierung",
      "Künstliche Intelligenz",
      "Unternehmensprozesse",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
