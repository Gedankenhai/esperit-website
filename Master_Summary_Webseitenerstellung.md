# Master_Summary_Webseitenerstellung.md
# EsperIT Website – Projektzusammenfassung

**Erstellt:** März 2026
**Zuletzt aktualisiert:** März 2026
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
- Kundenlogostreifen (HDI, HannoverRück, KfW, CBR Fashion) nach Trust-Bar auf Hauptseite

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

### Kosten
- Vercel Free/Hobby Plan
- Sanity Free Plan (3 Nutzer, 10 GB)
- Resend Free Plan (3.000 E-Mails/Monat)
- Google Sheets: iframe-Embed ohne API-Key (kostenlos)
- Cal.com Free Plan (Terminbuchung, noch einzurichten)
- Keine externen Paid-APIs
- **Modell für Claude Code: Claude Sonnet 4.6** ($3 Input / $15 Output pro MTok)
- Geschätzte Entwicklungskosten Grundgerüst: $15–25 (ohne Feintuning)

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
| Claude Code CLI | 2.1.50 ✅ |
| VS Code | installiert, PATH-Befehl nicht konfiguriert |
| GitHub Account | vorhanden ✅ |
| Vercel Account | eingerichtet ✅ |
| Sanity Account | eingerichtet ✅ |
| Resend Account | eingerichtet ✅ (E-Mail-Adresse verifiziert, Domain noch nicht) |
| Cal.com Account | noch nicht eingerichtet ⬜ |

### Domain / Hosting
- `esperit.net` ist bei WebHostOne als **Inklusivdomain** registriert (nicht separat)
- WebHostOne-Kündigung erst nach vollständiger Fertigstellung der neuen Website
- Domain-Transfer zu INWX erst nach Fertigstellung
- Zwischen Transfer und neuem DNS: kurze Downtime möglich – daher erst ganz am Ende
- Resend: sendet Kontaktanfragen an `CONTACT_EMAIL_TO` (private E-Mail in `.env.local`)

---

## 4. TECH-STACK (finale Entscheidungen)

| Tool | Version | Zweck | Kosten |
|---|---|---|---|
| Next.js | 15 (App Router) | Framework | kostenlos |
| TypeScript | 5.x strict | Typsicherheit | kostenlos |
| Tailwind CSS | 3.4.x | Styling | kostenlos |
| shadcn/ui | latest stable | UI-Komponenten | kostenlos |
| Framer Motion | 11.x | Animationen | kostenlos |
| Sanity.io | v3 | Blog-CMS | Free Plan |
| Resend | latest | E-Mail-Versand | Free Plan |
| React Hook Form | 7.x | Formulare | kostenlos |
| Zod | 3.x | Validierung | kostenlos |
| Lucide React | latest | Icons | kostenlos |
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
│   ├── /marketplace/ai-tools-katalog   (Google Sheets Embed)
│   └── /marketplace/ai-use-cases       (Google Sheets Embed)
├── /news                               (Sanity Blog + RSS-Feed)
│   └── /news/[slug]
├── /kontakt                            (+ Cal.com Terminbuchung)
├── /impressum
├── /datenschutz
└── /agb
```

---

## 6. DATEISTRUKTUR (aktueller Stand – vollständig)

```
esperit-website/
├── CLAUDE_CODE_PROMPT.md              ← Einstiegs-Prompt für Claude Code
├── Master_Summary_Webseitenerstellung.md
├── docs/
│   ├── ANFORDERUNGEN.md               ← Technische Spec (21 Abschnitte)
│   ├── BRANCHE.md                     ← Alle Inhalte & Texte
│   ├── CLAUDE.md                      ← Projektsteuerung & Regeln
│   ├── DESIGNSYSTEM.md                ← Visuelles Design-System
│   └── ki-assistenten/                ← 9 Assistenten-MD-Dateien
│       ├── Angebotsvergleich_Assistent.md
│       ├── Datenschutzprüfer_Assistent.md
│       ├── EU AI Act Experte_Assistent.md
│       ├── Hook_Writer_Assistent.md
│       ├── Kundenfeedback_Analyse_Assistent.md
│       ├── LinkedIn_Profil_Optimierung_Assistent.md
│       ├── ProKontra_Analyst_Assistent.md
│       ├── SEO Keyword-Recherche_Assistent.md
│       └── Vertragszusammenfassung_Assistent.md
└── public/
    ├── downloads/
    │   ├── CV_Frank_Esper.pdf
    │   ├── DSGVO_Compliance_Check.pdf
    │   ├── Handwerk_IT_Leitfaden.pdf   ← Verlinkung noch zuzuweisen
    │   └── KI_FAQ_esperit.pdf
    └── images/
        ├── firmenlogo.png              ← 879 KB (ggf. optimieren)
        ├── frank-esper.jpg             ← 18,7 MB → VOR BUILD skalieren (max. 800px, WebP)
        └── logos/
            ├── cbr-fashion.png         ← 3 KB ✅
            ├── hannover-rueck.svg      ← 56 KB (mit svgo optimieren)
            ├── hdi.svg                 ← 2 KB ✅
            └── kfw.svg                 ← 15 KB ✅
```

**Noch nicht im Projektordner (werden von Claude Code erstellt):**
```
public/
  favicon.ico · favicon-16x16.png · favicon-32x32.png
  apple-touch-icon.png · og-image.jpg · manifest.json
  llms.txt · llms-full.txt
```

---

## 7. OFFENE PUNKTE

- [ ] Cal.com Account einrichten → URL in `lib/config.ts` → `terminbuchungUrl` eintragen
- [ ] Resend Domain-Verifizierung (`esperit.net`) – aktuell nur E-Mail-Adresse verifiziert
- [ ] Google Sheets Embed-URLs in `.env.local` eintragen (bereits in Google Drive hochgeladen)
- [ ] Private Empfänger-E-Mail für Kontaktformular in `.env.local` als `CONTACT_EMAIL_TO`
- [ ] Sanity Project-ID in `.env.local` eintragen
- [ ] `frank-esper.jpg` skalieren (18,7 MB → max. 800px Breite, WebP) vor erstem Build
- [ ] `hannover-rueck.svg` mit `svgo` optimieren (56 KB → sollte unter 10 KB sein)
- [ ] `Handwerk_IT_Leitfaden.pdf` – Verwendung/Verlinkung auf welcher Seite noch ungeklärt
- [ ] Domain-Transfer zu INWX (erst nach Fertigstellung der Website)
- [ ] WebHostOne kündigen (erst nach Domain-Transfer)

---

## 8. BEREITS ERLEDIGTE SCHRITTE

- [x] Webseiten-Struktur definiert (`docs/BRANCHE.md`)
- [x] Tech-Stack festgelegt
- [x] Hosting-Entscheidung getroffen (Vercel)
- [x] Blog-Lösung festgelegt (Sanity.io)
- [x] Vercel Account eingerichtet
- [x] Sanity Account eingerichtet
- [x] Resend Account eingerichtet
- [x] GitHub Account vorhanden
- [x] Google Sheets für Marketplace vorbereitet (KI-Tools-Matrix + LLM-Matrix)
- [x] Alle 4 docs/-Dateien erstellt und bereinigt (Redundanzen entfernt)
- [x] Redundanzen zwischen CLAUDE.md / ANFORDERUNGEN.md / BRANCHE.md beseitigt
- [x] ANFORDERUNGEN.md um 11 neue Abschnitte erweitert (SEO/LLM, Error Handling, Accessibility, Sicherheit, CI/Branding, Usability, Monitoring, Referenzlogos, Mehrsprachigkeit, Terminbuchung, RSS)
- [x] Projektordner `esperit-website/` angelegt
- [x] `docs/`-Struktur vollständig befüllt
- [x] `public/images/` mit Profilfoto + Logo befüllt
- [x] `public/images/logos/` mit 4 Kundenlogos befüllt
- [x] `public/downloads/` mit 4 PDFs befüllt
- [x] `CLAUDE_CODE_PROMPT.md` und `Master_Summary` in Stammordner verschoben
- [x] Persönliche Claude-Vorgaben aktualisiert (Einstellungen → Profil)
- [x] Domain-Status bei WebHostOne geklärt (Inklusivdomain → Transfer nach Fertigstellung)

---

## 9. NÄCHSTER SCHRITT

Claude Code starten:

```bash
cd /Users/frankadmin/Documents/Homepage/esperit-website
claude
```

Dann den Inhalt aus `CLAUDE_CODE_PROMPT.md` als ersten Prompt eingeben.

---

## 10. IMPLEMENTIERUNGSREIHENFOLGE (für Claude Code)

1. Systemcheck + Scaffold + Dependencies
2. `lib/config.ts` · `lib/animations.ts` · `lib/services-data.ts` · `lib/assistants-data.ts`
3. Shared Components (RevealOnScroll · FloatingCTA · CookieBanner)
4. Layout (Header · Footer · MobileNav)
5. `app/layout.tsx`
6. Landingpage-Sektionen: Hero → Referenzlogos → Leistungen → Über-mich-Teaser → Lead Magnet → Einzugsgebiet → FAQ → CTA
7. `app/page.tsx`
8. Über-mich-Unterseiten (Qualifikationen · Rollen · Stationen)
9. Leistungs-Unterseiten
10. Service-Unterseiten (KI-Schulungen · KI-Assistenten · Consulting)
11. Marketplace (Google Sheets Embeds)
12. Blog (Sanity + RSS-Feed)
13. Kontaktformular + API Route (Resend + Honeypot + Rate Limiting)
14. Rechtliche Seiten
15. SEO (Metadata · JSON-LD · Sitemap · Robots · llms.txt)
16. Error Pages (404 · 500)
17. Cookie-Banner
18. Mobile Floating CTA
19. Security Headers (`next.config.ts`)
20. Health-Check Endpoint
21. `npm run build` + Lighthouse-Audit
22. Vercel Deploy + Domain-Konfiguration

---

## 11. WIDERSPRÜCHE / BEREINIGUNGEN (Protokoll)

| Problem | Lösung |
|---|---|
| `CLAUDE.md` referenzierte "Handwerker-Landingpage" | Korrigiert auf IT-Beratung |
| `ANFORDERUNGEN.md` enthielt interaktiven Setup-Prozess | Ersetzt durch strukturierte Spec |
| `BRANCHE.md` mischte Inhalt, Anweisungen, Layout ohne Kennzeichnung | Kennzeichnung mit `[INHALT]` / `[KONFIG]` |
| `BRANCHE.md` Kachel5 (Pro/Kontra) verwies auf falsche MD-Datei | Korrigiert auf `ProKontra_Analyst_Assistent.md` |
| Bewertungs-Sektion in ANFORDERUNGEN.md trotz Deaktivierung | Entfernt |
| Trust-Bar hatte 4 Kennzahlen, nur 2 vorhanden | Auf 2 reduziert |
| Redundanzen zwischen CLAUDE.md / ANFORDERUNGEN.md | Bereinigt: CLAUDE.md nur Regeln, ANFORDERUNGEN.md nur Technik |
| `CLAUDE_CODE_PROMPT.md` + `Master_Summary` lagen in `docs/` | Verschoben in Stammordner (Claude Code liest sonst unnötig mit) |
