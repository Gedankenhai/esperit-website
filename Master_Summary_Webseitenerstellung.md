# Master_Summary_Webseitenerstellung.md
# EsperIT Website – Projektzusammenfassung

**Erstellt:** März 2026
**Zuletzt aktualisiert:** 13. April 2026
**Projektinhaber:** Frank Esper / EsperIT
**Domain:** www.esperit.net
**Status:** ✅ Live und in Betrieb

---

## 1. MISSION

Aufbau einer professionellen IT-Beratungs-Website für EsperIT (Frank Esper) unter der Domain `www.esperit.net`. Die Website dient der Lead-Generierung, Darstellung von Expertise und Vermarktung von Dienstleistungen im Bereich Data Warehouse, Business Intelligence, KI-Beratung und KI-Schulungen.

---

## 2. REGELN UND LEITPLANKEN

### Allgemein
- Alle Texte in **Sie-Form**, keine Du-Ansprache
- Keine Bewertungs-/Testimonial-Sektion (dauerhaft deaktiviert)
- Kein Notdienst-Banner
- Keine Emojis in Headlines
- Kein Hardcoding von Firmendaten – alles über `lib/config.ts`
- Mehrsprachigkeit (DE/EN): Architektur vorbereitet, Schalter im Header deaktiviert, Feature-Flag `i18n: false`
- Telefonnummer im internationalen Format: `+49 177 2578260`

### Design
- Design-System aus `docs/DESIGNSYSTEM.md` ist bindend
- Primärfarbe: `#132947` (Dunkelblau), Akzent: `#5F94D6` (Hellblau)
- Font: DM Sans (Body), JetBrains Mono (Zahlen), Poppins nur für KI-Assistenten-Kachellabels
- Anti-Vibe-Coding-Regeln strikt einhalten (kein rounded-2xl, keine Gradients, kein shadow-2xl)
- Kundenlogostreifen (HDI, Hannover Re, KfW, CBR Fashion, REWE, TMM, O2, DEB, Lufthansa Systems) nach Trust-Bar auf Hauptseite
- Alle Logos einheitlich auf HDI-Logo-Höhe skaliert (height fix, width: auto)

### Technik
- `"use client"` nur wo zwingend nötig (Formulare, Animationen, Cookie-Banner)
- `.env.local` niemals in Git committen (steht in `.gitignore`)
- ISR/SSG bevorzugen, Sanity-Abfragen mit `revalidate: 3600` cachen
- Kein Code ohne vorherige Systemprüfung
- Security Headers in `next.config.ts` (X-Frame-Options, CSP, etc.)
- `cdn.sanity.io` ist als erlaubte Bildquelle in `next.config.ts` eingetragen (remotePatterns + CSP img-src)
- Spam-Schutz Kontaktformular: Honeypot-Feld + Rate Limiting (kein CAPTCHA)
- Error Handling: `app/not-found.tsx` + `app/error.tsx` + API-Fehlerbehandlung
- Accessibility: WCAG 2.1 AA Mindeststandard
- RSS-Feed: `app/feed.xml/route.ts` für Blog (automatisch aus Sanity)
- Health-Check: `app/api/health/route.ts`
- LLM-Auffindbarkeit: `public/llms.txt` + `public/llms-full.txt`
- Marketplace: lokale Excel-Dateien via SheetJS (kein Google Sheets iframe)
- Dropdown-Menüs: Toggle-Logik via `onClick` + `document mousedown` EventListener (funktioniert in Safari und Chrome)
- `dist/` und `.sanity/` sind in `.gitignore` eingetragen

### Kontaktformular
- Resend sendet direkt an `fesper@gmx.de` (CONTACT_EMAIL_TO)
- Absender: `info@esperit.net`
- replyTo: E-Mail-Adresse des Kontaktformular-Absenders
- Kein Umweg über WebHostOne-Weiterleitung

### Kosten (laufend)
- **INWX Domain** `esperit.net`: ca. 18–19 € pro Jahr
- **Vercel** Hosting: kostenlos (Hobby Plan)
- **Sanity.io** CMS: kostenlos (Free Plan, 3 Nutzer, 10 GB)
- **Resend** E-Mail: kostenlos (bis 3.000 E-Mails/Monat)
- **Cal.eu** Terminbuchung: kostenlos (Free Plan)
- **GitHub** Repository: kostenlos
- **Claude Code** (nur bei aktiver Entwicklung): ca. $3–15 pro Entwicklungsmonat
- Tatsächliche Entwicklungskosten bis April 2026: ca. $12–15 (API-Billing)

### Claude Code Verhalten
- Erst alle docs/-Dateien lesen, dann fragen, dann Code schreiben
- Systemcheck vor jedem Start
- Design-Vorschau VOR Implementierung → Freigabe durch Frank Esper abwarten
- Bei Unklarheit fragen, nicht raten
- Nur relevante Dateien pro Schritt laden – nicht alle docs/ auf einmal
- Mehrere zusammenhängende Aufgaben in einem Schritt zusammenfassen
- Tests nur wenn weiteres Vorgehen davon abhängt
- Testdateien sofort nach erfolgreichem Test löschen
- Bei Korrekturen: vollständiges überarbeitetes Script liefern, keine Code-Fragmente zum Ersetzen
- `.env.local` niemals in Git committen – Änderungen an Umgebungsvariablen immer zusätzlich manuell in Vercel Dashboard eintragen

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
| Resend Account | eingerichtet ✅, Domain verifiziert ✅ |
| Cal.eu Account | eingerichtet ✅ (`https://cal.eu/frank-esper`) |
| Anthropic Console | eingerichtet ✅, Spending Limit: $30/Monat |

### Domain / Hosting
- `esperit.net` ist bei **INWX** registriert (Transfer von WebHostOne abgeschlossen April 2026)
- Nameserver: `ns.inwx.de`, `ns2.inwx.de`, `ns3.inwx.eu`
- Domain läuft bis: **15. April 2027** (Auto Renew aktiv)
- WebHostOne: Domain gekündigt ✅, Hosting-Paket gekündigt zum 20.07.2026 ✅
- Kontaktformular sendet direkt an `fesper@gmx.de` via Resend

### Vercel Umgebungsvariablen (eingetragen im Dashboard)
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO` = `fesper@gmx.de`
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `d5f61lrs`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`
- `SANITY_API_TOKEN`

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
| Cal.eu | – | Terminbuchung | Free Plan |
| @vercel/analytics | latest | Web Analytics | kostenlos |

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
├── /kontakt                            (+ Cal.eu Terminbuchung)
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
├── sanity.cli.ts                      ← Sanity CLI Konfiguration (projectId, dataset)
├── sanity.config.ts                   ← Sanity Studio Konfiguration
├── .env.local                         ← API-Keys (niemals in Git!)
├── .gitignore                         ← .env.local, dist/, .sanity/ ausgeschlossen
├── package.json / package-lock.json   ← npm-Abhängigkeiten
├── next.config.ts                     ← Next.js Konfiguration + Security Headers + Sanity CDN
├── tailwind.config.ts                 ← Tailwind-Konfiguration
├── tsconfig.json                      ← TypeScript-Konfiguration
├── components.json                    ← shadcn/ui Konfiguration
├── postcss.config.mjs                 ← PostCSS-Konfiguration
├── eslint.config.mjs                  ← ESLint-Konfiguration
├── next-env.d.ts                      ← Next.js TypeScript-Typen
├── app/                               ← Next.js App Router (alle Seiten)
│   ├── layout.tsx                     ← Root Layout (Header + Footer + Vercel Analytics)
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
    ├── og-image.jpg                   ← Social-Media Vorschaubild (1200×630px) ✅
    ├── downloads/
    │   ├── CV_Frank_Esper.pdf
    │   ├── DSGVO_Compliance_Check.pdf
    │   ├── Handwerk_IT_Leitfaden.pdf  ← Verlinkung noch offen
    │   ├── KI_FAQ_esperit.pdf
    │   ├── KI-Tools-Matrix-2026.xlsx  ← Marketplace Tabelle 1
    │   └── LLM-Matrix-2026.xlsx       ← Marketplace Tabelle 2
    └── images/
        ├── firmenlogo.png             ← 879 KB
        ├── frank-esper.jpg            ← Ursprungsfoto (18,7 MB) – Abhängigkeiten vorhanden, nicht löschen
        ├── F 032-25-006.jpg           ← Aktuelles Profilfoto (Hero + Über-mich)
        └── logos/                    ← 9 Kundenlogos
            ├── hdi.svg               ← Größenreferenz für alle anderen Logos
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

## 7. SANITY BLOG – BEDIENUNG

Das Sanity Studio ist deployed unter: **`https://esperit.sanity.studio/`**

### Neuen Blogbeitrag erstellen
1. `https://esperit.sanity.studio/` öffnen und einloggen
2. Links „Blogbeitrag" anklicken → „+" klicken
3. Felder ausfüllen:
   - **Titel** (Pflicht) – Erscheint als H1 auf der Seite
   - **Slug** (Pflicht) – „Generate" klicken, wird automatisch aus Titel erstellt
   - **Veröffentlichungsdatum** (Pflicht) – Bestimmt Sortierung
   - **Kurzbeschreibung** (empfohlen) – Für Übersicht und SEO
   - **Titelbild** (empfohlen) – Vorschaubild des Beitrags
   - **Alt-Text** (empfohlen) – Für SEO und Barrierefreiheit
   - **Inhalt** (Pflicht) – Haupttext mit Formatierungsoptionen
4. „Publish" klicken → Beitrag erscheint nach max. 1h auf `www.esperit.net/news`
5. Bei sofortiger Anzeige: Vercel Redeploy anstoßen

---

## 8. ERLEDIGTE SCHRITTE (vollständig)

- [x] Webseiten-Struktur definiert
- [x] Tech-Stack festgelegt und implementiert
- [x] Alle Seiten vollständig implementiert (39 statische Seiten)
- [x] Kontaktformular implementiert (Resend + Honeypot) – sendet an `fesper@gmx.de`
- [x] Resend Domain-Verifizierung abgeschlossen ✅
- [x] Cal.eu Account eingerichtet (`https://cal.eu/frank-esper`) ✅
- [x] `og-image.jpg` erstellt (aus Firmenlogo, 1200×630px) ✅
- [x] Vercel Analytics eingebunden (`@vercel/analytics`) ✅
- [x] Website deployed auf Vercel ✅
- [x] Domain-Transfer `esperit.net` von WebHostOne zu INWX abgeschlossen ✅
- [x] DNS-Einträge bei INWX eingetragen (Vercel A+CNAME, Resend DKIM+SPF+DMARC) ✅
- [x] `www.esperit.net` in Vercel eingetragen, SSL-Zertifikat aktiv ✅
- [x] WebHostOne Domain gekündigt ✅
- [x] WebHostOne Hosting-Paket gekündigt zum 20.07.2026 ✅
- [x] Impressum überarbeitet: Platzhalter entfernt, USt-ID entfernt, neue Abschnitte ergänzt, Haftungsausschluss ersetzt ✅
- [x] Telefonnummer auf internationales Format `+49 177 2578260` umgestellt ✅
- [x] Tab-Reihenfolge Kontaktformular korrigiert ✅
- [x] Dropdown-Menü Chrome-Bug behoben (Toggle-Logik) ✅
- [x] Sanity CDN als erlaubte Bildquelle in `next.config.ts` eingetragen ✅
- [x] Sanity Studio deployed unter `https://esperit.sanity.studio/` ✅
- [x] `sanity.cli.ts` mit hardcodierten Werten für CLI-Deploy erstellt ✅
- [x] `dist/` und `.sanity/` aus Git-Tracking entfernt ✅
- [x] Erster Blogbeitrag veröffentlicht ✅

---

## 9. OFFENE PUNKTE

- [ ] `Handwerk_IT_Leitfaden.pdf` – Verlinkung auf welcher Seite noch inhaltlich ungeklärt
- [ ] `frank-esper.jpg` (18,7 MB) – Claude Code hat Abhängigkeiten erkannt, noch nicht gelöscht
- [ ] Kontaktformular mit echter Kundenanfrage final verifizieren
- [ ] Lighthouse-Audit durchführen (Performance, SEO, Accessibility)

---

## 10. WIDERSPRÜCHE / BEREINIGUNGEN (Protokoll)

| Problem | Lösung |
|---|---|
| `CLAUDE.md` referenzierte "Handwerker-Landingpage" | Korrigiert auf IT-Beratung |
| `ANFORDERUNGEN.md` enthielt interaktiven Setup-Prozess | Ersetzt durch strukturierte Spec |
| `BRANCHE.md` mischte Inhalt, Anweisungen, Layout ohne Kennzeichnung | Kennzeichnung mit `[INHALT]` / `[KONFIG]` |
| Bewertungs-Sektion in ANFORDERUNGEN.md trotz Deaktivierung | Entfernt |
| Trust-Bar hatte 4 Kennzahlen, nur 2 vorhanden | Auf 2 reduziert |
| Google Sheets Embed: Darstellungsprobleme | Ersetzt durch lokale Excel-Dateien via SheetJS |
| Dropdown-Menüs erschienen immer links statt unter Menüpunkt | CSS-Fix: position relativ zum Trigger-Element |
| Hero-Foto zeigte nur Torso | Zweispaltiges Layout, Foto rechtsbündig |
| Domain-Transfer-Reihenfolge war falsch dokumentiert | Korrigiert: erst Domain kündigen, AuthCode erhalten, dann Transfer, zuletzt Hosting kündigen |
| Kundenlogostreifen hatte 4 Logos unterschiedlicher Größe | Erweitert auf 9 Logos, alle auf HDI-Höhe vereinheitlicht |
| Kontaktformular sendete an `frank.esper@esperit.net` via WebHostOne-Weiterleitung | Umgestellt auf direkten Versand an `fesper@gmx.de` via Resend |
| Sanity Studio fehlte `sanity.cli.ts` mit projectId | Datei erstellt, Deploy erfolgreich |
| Sanity Blog-Bilder wurden auf Website nicht angezeigt | `cdn.sanity.io` in `next.config.ts` als erlaubte Bildquelle eingetragen |
| Dropdown-Menüs funktionierten in Chrome nicht korrekt | Toggle-Logik mit `document mousedown` EventListener implementiert |
| Resend DMARC-Eintrag fehlte bei WebHostOne | Nachträglich eingetragen, dann bei INWX neu eingetragen |
