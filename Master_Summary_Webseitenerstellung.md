# Master_Summary_Webseitenerstellung.md
# EsperIT Website – Projektzusammenfassung

**Erstellt:** März 2026
**Zuletzt aktualisiert:** 25. März 2026
**Projektinhaber:** Frank Esper / EsperIT
**Domain:** www.esperit.net

---

## 1. MISSION

Aufbau einer professionellen IT-Beratungs-Website für EsperIT (Frank Esper) unter der bestehenden Domain `www.esperit.net`. Die Website dient der Lead-Generierung, Darstellung von Expertise und Vermarktung von Dienstleistungen im Bereich Data Warehouse, Business Intelligence, KI-Beratung und KI-Schulungen.

---

## 2. REGELN UND LEITPLANKEN

### Allgemein
- Alle Texte in **Sie-Form**, keine Du-Ansprache
- Keine Bewertungs-/Testimonial-Sektion (dauerhaft deaktiviert)
- Kein Notdienst-Banner
- Keine Emojis in Headlines
- Kein Hardcoding von Firmendaten – alles über `lib/config.ts`
- Mehrsprachigkeit (DE/EN): Architektur vorbereitet, Schalter im Header deaktiviert, Feature-Flag `i18n: false`

### Design
- Design-System aus `docs/DESIGNSYSTEM.md` ist bindend
- Primärfarbe: `#132947` (Dunkelblau), Akzent: `#5F94D6` (Hellblau)
- Font: DM Sans (Body), JetBrains Mono (Zahlen), Poppins nur für KI-Assistenten-Kachellabels
- Anti-Vibe-Coding-Regeln strikt einhalten (kein rounded-2xl, keine Gradients, kein shadow-2xl)
- Kundenlogostreifen (HDI, Hannover Re, KfW, CBR Fashion, REWE, TMM, O2, DEB, Lufthansa Systems) nach Trust-Bar auf Hauptseite
- Alle Logos einheitlich auf HDI-Logo-Höhe skaliert (height fix, width: auto)

### Technik
- `"use client"` nur wo zwingend nötig (Formulare, Animationen, Cookie-Banner)
- `.env.local` niemals in Git committen
- ISR/SSG bevorzugen, Sanity-Abfragen mit `revalidate: 3600` cachen
- Kein Code ohne vorherige Systemprüfung
- Security Headers in `next.config.ts` (X-Frame-Options, CSP, etc.)
- Spam-Schutz Kontaktformular: Honeypot-Feld + Rate Limiting (kein CAPTCHA)
- Error Handling: `app/not-found.tsx` + `app/error.tsx` + API-Fehlerbehandlung
- Accessibility: WCAG 2.1 AA Mindeststandard
- RSS-Feed: `app/feed.xml/route.ts` für Blog (automatisch aus Sanity)
- Health-Check: `app/api/health/route.ts`
- LLM-Auffindbarkeit: `public/llms.txt` + `public/llms-full.txt`
- Marketplace: lokale Excel-Dateien via SheetJS (kein Google Sheets iframe mehr)

### Kosten
- Vercel Free/Hobby Plan
- Sanity Free Plan (3 Nutzer, 10 GB)
- Resend Free Plan (3.000 E-Mails/Monat)
- SheetJS für Marketplace (lokal, kostenlos – ersetzt Google Sheets Embed)
- Cal.com Free Plan (Terminbuchung, noch einzurichten)
- Keine externen Paid-APIs
- **Modell für Claude Code: Claude Sonnet 4.6** ($3 Input / $15 Output pro MTok)
- Tatsächliche Entwicklungskosten bis März 2026: ca. $12–13 (API-Billing)

### Claude Code Verhalten
- Erst alle docs/-Dateien lesen, dann fragen, dann Code schreiben
- Systemcheck vor jedem Start
- Design-Vorschau VOR Implementierung → Freigabe durch Frank Esper abwarten
- Bei Unklarheit fragen, nicht raten
- Nur relevante Dateien pro Schritt laden – nicht alle docs/ auf einmal
- Mehrere zusammenhängende Aufgaben in einem Schritt zusammenfassen
- Tests nur wenn weiteres Vorgehen davon abhängt
- Testdateien sofort nach erfolgreichem Test löschen
- Bei Korrekturen: nur betroffenen Codeabschnitt zeigen, nicht gesamte Datei

---

## 3. SYSTEMVORAUSSETZUNGEN

| Komponente | Version / Status |
|---|---|
| Betriebssystem | macOS Sequoia, MacBook Air M2 |
| Node.js | v24.11.1 ✅ |
| npm | 11.6.2 ✅ |
| Git | 2.50.1 (Apple Git-155) ✅ |
| Claude Code CLI | 2.1.80 ✅ |
| VS Code | installiert, Claude Code Extension aktiv ✅ |
| GitHub Account | vorhanden ✅ |
| GitHub Repository | `https://github.com/Gedankenhai/esperit-website` (privat) ✅ |
| Vercel Account | eingerichtet ✅ |
| Sanity Account | eingerichtet ✅ |
| Resend Account | eingerichtet ✅ (Domain-Verifizierung in Arbeit) |
| Cal.com Account | noch nicht eingerichtet ⬜ |
| Anthropic Console | eingerichtet ✅, Spending Limit: $30/Monat |

### Domain / Hosting
- `esperit.net` ist bei WebHostOne als **Inklusivdomain** registriert (nicht separat)
- E-Mail `frank.esper@esperit.net` als Kontaktformular-Zieladresse definiert
- Resend Domain-Verifizierung läuft: DNS-Einträge bei WebHostOne werden eingetragen

### Korrigierte Reihenfolge Domain-Transfer zu INWX
1. DNS-Einträge für Resend bei WebHostOne eintragen (aktuell in Arbeit)
2. Website fertigstellen und zu Vercel deployen
3. Bei INWX Domain `esperit.net` vorregistrieren
4. Bei WebHostOne **nur die Domain kündigen** (nicht das Hosting-Paket!)
5. AuthCode von WebHostOne erhalten → bei INWX eingeben
6. Transfer abwarten (5–7 Tage) → Resend DNS-Einträge bei INWX neu eintragen
7. Erst nach erfolgtem Transfer: WebHostOne Hosting-Paket kündigen

---

## 4. TECH-STACK (finale Entscheidungen)

| Tool | Version | Zweck | Kosten |
|---|---|---|---|
| Next.js | 15.5.14 (App Router) | Framework | kostenlos |
| TypeScript | 5.x strict | Typsicherheit | kostenlos |
| Tailwind CSS | 3.4.x | Styling | kostenlos |
| shadcn/ui | latest stable | UI-Komponenten | kostenlos |
| Framer Motion | 11.x | Animationen | kostenlos |
| Sanity.io | v3 | Blog-CMS | Free Plan |
| Resend | latest | E-Mail-Versand | Free Plan |
| React Hook Form | 7.x | Formulare | kostenlos |
| Zod | 3.x | Validierung | kostenlos |
| Lucide React | latest | Icons | kostenlos |
| SheetJS (xlsx) | latest | Excel-Rendering Marketplace | kostenlos |
| Vercel | – | Hosting | Free/Hobby Plan |
| Cal.com | – | Terminbuchung | Free Plan |

---

## 5. SEITENSTRUKTUR

```
/ (Landingpage)
│  Sektionen: Hero → Referenzlogos → Leistungen → Über-mich-Teaser
│             → Lead Magnet → Einzugsgebiet → FAQ → CTA
├── /ueber-mich
│   ├── /ueber-mich/qualifikationen     (10 Kacheln, 3er-Grid)
│   ├── /ueber-mich/rollen              (Accordion, 5 Rollen)
│   └── /ueber-mich/stationen           (Accordion, 4 Stationen + CV-Download)
├── /leistungen
│   ├── /leistungen/datawarehouse
│   ├── /leistungen/business-intelligence
│   └── /leistungen/ki
├── /service
│   ├── /service/ki-schulungen
│   ├── /service/ki-assistenten         (9 Kacheln mit Mouseover-Effekt)
│   │   └── /service/ki-assistenten/[slug] (9 Einzelseiten mit Systemprompt)
│   └── /service/consulting-workshops
├── /marketplace
│   ├── /marketplace/ai-tools-katalog   (SheetJS Excel-Rendering, kein iframe)
│   └── /marketplace/ai-use-cases       (SheetJS Excel-Rendering, kein iframe)
├── /news                               (Sanity Blog + RSS-Feed)
│   └── /news/[slug]
├── /kontakt                            (+ Cal.com Terminbuchung)
├── /impressum
├── /datenschutz
└── /agb
```

---

## 6. DATEISTRUKTUR (aktueller Stand)

```
esperit-website/
├── CLAUDE_CODE_PROMPT.md              ← Einstiegs-Prompt für Claude Code
├── Master_Summary_Webseitenerstellung.md
├── .env.local                         ← API-Keys (niemals in Git!)
├── .gitignore                         ← .env.local ausgeschlossen
├── package.json / package-lock.json   ← npm-Abhängigkeiten
├── next.config.ts                     ← Next.js Konfiguration + Security Headers
├── tailwind.config.ts                 ← Tailwind-Konfiguration
├── tsconfig.json                      ← TypeScript-Konfiguration
├── components.json                    ← shadcn/ui Konfiguration
├── postcss.config.mjs                 ← PostCSS-Konfiguration
├── eslint.config.mjs                  ← ESLint-Konfiguration
├── next-env.d.ts                      ← Next.js TypeScript-Typen
├── tsconfig.tsbuildinfo               ← TypeScript Build-Cache
├── app/                               ← Next.js App Router (alle Seiten)
│   ├── layout.tsx                     ← Root Layout (Header + Footer)
│   ├── page.tsx                       ← Landingpage
│   ├── ueber-mich/                    ← Über-mich-Hauptseite + Unterseiten
│   ├── leistungen/                    ← Leistungsseiten
│   ├── service/                       ← Service-Seiten inkl. KI-Assistenten
│   ├── marketplace/                   ← AI Tools Katalog + AI Use Cases
│   ├── news/                          ← Blog (Sanity)
│   ├── kontakt/                       ← Kontaktformular
│   ├── impressum/ · datenschutz/ · agb/
│   └── api/                           ← API-Routen (Kontakt, Health-Check)
├── components/                        ← Wiederverwendbare React-Komponenten
│   ├── layout/                        ← Header, Footer, MobileNav
│   ├── sections/                      ← Alle Landingpage-Sektionen
│   ├── shared/                        ← RevealOnScroll, FloatingCTA, CookieBanner
│   └── ui/                            ← shadcn/ui Basiskomponenten
├── lib/                               ← Hilfsfunktionen und Konfigurationen
│   ├── config.ts                      ← Zentrale Firmendaten (nie hardcoden!)
│   ├── animations.ts                  ← Framer Motion Animationen
│   ├── services-data.ts               ← Leistungsdaten
│   └── assistants-data.ts             ← KI-Assistenten-Daten
├── docs/                              ← Projektdokumentation für Claude Code
│   ├── ANFORDERUNGEN.md               ← Technische Spec (21 Abschnitte)
│   ├── BRANCHE.md                     ← Alle Inhalte & Texte
│   ├── CLAUDE.md                      ← Projektsteuerung & Regeln
│   ├── DESIGNSYSTEM.md                ← Visuelles Design-System
│   └── ki-assistenten/                ← 9 Assistenten-MD-Dateien
├── node_modules/                      ← npm-Pakete (nicht in Git)
├── .next/                             ← Next.js Build-Cache (nicht in Git)
├── .claude/                           ← Claude Code interne Konfiguration
└── public/                            ← Statische Dateien
    ├── downloads/
    │   ├── CV_Frank_Esper.pdf
    │   ├── DSGVO_Compliance_Check.pdf
    │   ├── Handwerk_IT_Leitfaden.pdf   ← Verlinkung noch zuzuweisen
    │   ├── KI_FAQ_esperit.pdf
    │   ├── KI-Tools-Matrix-2026.xlsx   ← Marketplace Tabelle 1
    │   └── LLM-Matrix-2026.xlsx        ← Marketplace Tabelle 2
    └── images/
        ├── firmenlogo.png              ← 879 KB (ggf. optimieren)
        ├── frank-esper.jpg             ← Ursprungsfoto (18,7 MB, nicht mehr aktiv)
        ├── F 032-25-006.jpg            ← Aktuelles Profilfoto (Hero + Über-mich)
        └── logos/                     ← 9 Kundenlogos
            ├── hdi.svg                ← Größenreferenz für alle anderen Logos
            ├── hannover-re-vector-logo.png
            ├── kfw.svg
            ├── cbr-fashion.png
            ├── REWE_Group-Logo.wine.png
            ├── TMM-ca-logo.webp
            ├── O2-Logo.png
            ├── DEB-Logo_1200x630px.jpg
            └── lh-lufthansa-systems-1lin-blue-cmyk.png
```

---

## 7. OFFENE PUNKTE

- [ ] Cal.com Account einrichten → URL in `lib/config.ts` → `terminbuchungUrl` eintragen
- [ ] Resend Domain-Verifizierung (`esperit.net`) – DNS-Einträge bei WebHostOne eintragen (in Arbeit)
- [ ] Sanity Project-ID in `.env.local` prüfen ob korrekt eingetragen
- [ ] `Handwerk_IT_Leitfaden.pdf` – Verwendung/Verlinkung auf welcher Seite noch ungeklärt
- [ ] `og-image.jpg` manuell erstellen (1200×630px, dunkelblauer Hintergrund #132947, Logo + Name) → in `public/` ablegen
- [ ] `frank-esper.jpg` (18,7 MB) kann gelöscht werden – ersetzt durch `F 032-25-006.jpg`
- [ ] Kontaktformular testen sobald Resend Domain-Verifizierung abgeschlossen
- [ ] Domain-Transfer zu INWX (erst nach Fertigstellung – siehe korrigierte Reihenfolge in Abschnitt 3)
- [ ] WebHostOne Hosting-Paket kündigen (erst nach erfolgtem Domain-Transfer)

---

## 8. BEREITS ERLEDIGTE SCHRITTE

- [x] Webseiten-Struktur definiert (`docs/BRANCHE.md`)
- [x] Tech-Stack festgelegt
- [x] Hosting-Entscheidung getroffen (Vercel)
- [x] Blog-Lösung festgelegt (Sanity.io)
- [x] Vercel Account eingerichtet
- [x] Sanity Account eingerichtet
- [x] Resend Account eingerichtet
- [x] GitHub Account + Repository `esperit-website` eingerichtet (privat)
- [x] Projektordner mit Git initialisiert und mit GitHub verbunden
- [x] Google Sheets für Marketplace vorbereitet (werden nicht mehr eingebettet – lokale xlsx stattdessen)
- [x] Alle docs/-Dateien erstellt und bereinigt
- [x] Next.js Projekt-Scaffold erstellt (alle Abhängigkeiten installiert)
- [x] `lib/config.ts`, `lib/animations.ts`, `lib/services-data.ts`, `lib/assistants-data.ts` erstellt
- [x] Shared Components erstellt (RevealOnScroll, FloatingCTA, CookieBanner)
- [x] Layout erstellt (Header mit funktionierenden Dropdowns, Footer, MobileNav)
- [x] Landingpage vollständig implementiert (alle Sektionen)
- [x] Über-mich-Unterseiten implementiert (Qualifikationen, Rollen, Stationen)
- [x] Leistungs-Unterseiten implementiert
- [x] Service-Unterseiten implementiert (KI-Schulungen, KI-Assistenten mit 9 Einzelseiten, Consulting)
- [x] Marketplace umgebaut auf SheetJS (lokale Excel-Dateien, kein Google Sheets iframe)
- [x] Blog-Seite implementiert (Sanity-Anbindung)
- [x] Kontaktformular implementiert (Resend + Honeypot)
- [x] Rechtliche Seiten implementiert (Impressum, Datenschutz, AGB)
- [x] SEO implementiert (Metadata, Sitemap, Robots, llms.txt)
- [x] Error Pages implementiert (404, 500)
- [x] Security Headers in `next.config.ts`
- [x] Health-Check Endpoint
- [x] Dropdown-Menü-Bug behoben (Dropdowns erscheinen nun unter jeweiligem Menüpunkt)
- [x] Hero-Bereich umgebaut auf zweispaltiges Layout (Text links, Foto rechts)
- [x] Profilfoto ausgetauscht (neu: `F 032-25-006.jpg`)
- [x] Kundenlogostreifen erweitert auf 9 Logos (alle auf HDI-Höhe skaliert)
- [x] Hannover Re Logo ausgetauscht (png statt svg)
- [x] Marketplace-Tabellen: Zeilenumbruch aktiviert, Spaltenbreiten definiert
- [x] „Zurück zur Übersicht"-Link auf KI-Assistenten-Einzelseiten repositioniert
- [x] `.env.local` angelegt mit allen notwendigen Variablen
- [x] Website lokal lauffähig unter `http://localhost:3000`

---

## 9. NÄCHSTER SCHRITT

Claude Code im VS Code Terminal starten:

```bash
cd /Users/frankadmin/Documents/Homepage/esperit-website
claude
```

Offene Baustellen in dieser Reihenfolge abarbeiten:
1. Resend Domain-Verifizierung abschließen (DNS-Einträge bei WebHostOne)
2. Kontaktformular testen
3. `og-image.jpg` erstellen und in `public/` ablegen
4. Cal.com einrichten
5. `npm run build` + Lighthouse-Audit
6. Vercel Deploy

---

## 10. VERCEL DEPLOYMENT (noch ausstehend)

Benötigte Umgebungsvariablen im Vercel Dashboard eintragen:
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `NEXT_PUBLIC_SHEETS_KI_TOOLS` (optional, falls noch benötigt)
- `NEXT_PUBLIC_SHEETS_LLM_MATRIX` (optional, falls noch benötigt)

---

## 11. WIDERSPRÜCHE / BEREINIGUNGEN (Protokoll)

| Problem | Lösung |
|---|---|
| `CLAUDE.md` referenzierte "Handwerker-Landingpage" | Korrigiert auf IT-Beratung |
| `ANFORDERUNGEN.md` enthielt interaktiven Setup-Prozess | Ersetzt durch strukturierte Spec |
| `BRANCHE.md` mischte Inhalt, Anweisungen, Layout ohne Kennzeichnung | Kennzeichnung mit `[INHALT]` / `[KONFIG]` |
| Bewertungs-Sektion in ANFORDERUNGEN.md trotz Deaktivierung | Entfernt |
| Trust-Bar hatte 4 Kennzahlen, nur 2 vorhanden | Auf 2 reduziert |
| Google Sheets Embed: graue Balken, keine fixierten Spalten, Scrollbalken-Probleme | Ersetzt durch lokale Excel-Dateien via SheetJS |
| Dropdown-Menüs erschienen immer links statt unter Menüpunkt | CSS-Fix: position relativ zum Trigger-Element |
| Hero-Foto zeigte nur Torso | Zweispaltiges Layout, Foto rechtsbündig |
| Domain-Transfer-Reihenfolge war falsch dokumentiert | Korrigiert: erst Domain kündigen, AuthCode erhalten, dann Transfer, zuletzt Hosting kündigen |
| Kundenlogostreifen hatte 4 Logos unterschiedlicher Größe | Erweitert auf 9 Logos, alle auf HDI-Höhe vereinheitlicht |
