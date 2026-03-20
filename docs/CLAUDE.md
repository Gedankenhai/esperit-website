# CLAUDE.md – EsperIT Website

## Kontext
Professionelle IT-Beratungs-Website für **Frank Esper / EsperIT** (www.esperit.net).
- Inhalte & Texte: `docs/BRANCHE.md`
- Design-System: `docs/DESIGNSYSTEM.md`
- Technische Spec & Struktur: `docs/ANFORDERUNGEN.md`

---

## Modell
- **Claude Sonnet 4.6** – kein anderes Modell verwenden

---

## Kostenkontrolle (KRITISCH – immer einhalten)

### Vor jedem Schritt
- Ist dieser Schritt für das Projektziel jetzt notwendig? Wenn nein: nicht ausführen.
- Kann ich mehrere zusammenhängende Aufgaben in einem einzigen Schritt erledigen? Wenn ja: zusammenfassen.
- Habe ich alle nötigen Informationen? Wenn nein: erst fragen, dann handeln.

### Kontextgröße minimieren
- Nur die Dateien lesen die für den aktuellen Schritt relevant sind – nicht alle docs/ auf einmal
- Bei Korrekturen: nur den betroffenen Codeabschnitt zeigen, nicht die gesamte Datei
- Keine vollständigen Dateien wiederholen wenn nur eine kleine Änderung nötig ist
- Fehlerausgaben: nur die relevante Fehlermeldung teilen, nicht den gesamten Log

### Tests & Validierung
- Tests nur ausführen wenn das weitere Vorgehen vom Ergebnis abhängt
- Kein `npm run dev` nach jeder einzelnen Komponente – erst wenn eine vollständige Sektion fertig ist
- `npm run build` nur einmal vor dem finalen Deploy
- Testdateien sofort nach erfolgreichem Test löschen

### Code-Effizienz
- Erst prüfen ob shadcn/ui die Anforderung bereits abdeckt – keine eigenen Komponenten bauen
- Keine doppelten Komponenten anlegen
- `"use client"` nur für: Formulare, Animationen, Cookie-Banner – sonst Server Component
- ISR/SSG bevorzugen, SSR nur wo zwingend nötig
- Sanity-Abfragen: immer `revalidate: 3600`

### Externe Dienste
- Resend: nur bei echtem Formular-Submit aufrufen, kein Test-Versand im Code
- Google Sheets: statische iframe-URL, kein dynamischer Abruf
- Keine kostenpflichtigen Features bei Vercel, Sanity oder Resend nutzen

### Iterationen vermeiden
- Unklarheiten vor dem Coden klären – nicht raten und danach korrigieren
- Vor jeder neuen Sektion: kurz bestätigen lassen ob Vorgehen korrekt verstanden
- Änderungswünsche vollständig verstehen bevor implementiert wird
- Bei widersprüchlichen Anforderungen: sofort fragen, nicht interpretieren

---

## Goldene Regeln

1. Firmendaten nie hardcoden – alles aus `lib/config.ts`
2. shadcn/ui für alle UI-Elemente – keine eigenen Komponenten
3. Animationen nur aus `lib/animations.ts` – nie inline
4. Mobile-First – von mobil nach desktop
5. Konsequente **Sie-Form** in allen deutschen Texten
6. `next/image` mit `priority` für Above-the-Fold
7. `"use client"` nur für: Formulare, Animationen, Cookie-Banner – sonst Server Component
8. `.env.local` niemals in Git committen

---

## Anti-Vibe-Coding (VERBOTEN)

❌ `rounded-2xl/3xl` · ❌ Lila/Violet · ❌ Gradient-Buttons · ❌ `shadow-2xl` auf Cards
❌ Glassmorphism (außer Header-Scroll) · ❌ Emojis in Headlines · ❌ `py-32` als Standard · ❌ Neon-Farben

Vollständige Designregeln: `docs/DESIGNSYSTEM.md`

---

## Tech-Stack (nur stabile Releases, Stand März 2026)

| Tool | Version |
|---|---|
| Next.js | 15 (App Router) |
| TypeScript | 5.x strict |
| Tailwind CSS | 3.4.x |
| shadcn/ui | latest stable |
| Framer Motion | 11.x |
| Sanity.io | v3 |
| Resend | latest |
| React Hook Form | 7.x |
| Zod | 3.x |
| Lucide React | latest |
| Vercel | Free/Hobby Plan |

---

## Pflichtablauf beim ersten Start

1. Systemcheck: `node --version` (mind. 20.x) · `npm --version` · `git --version`
2. Alle offenen Fragen stellen (E-Mail, API-Keys, Sheets-URLs, Sanity-ID) – **auf einmal, nicht nacheinander**
3. Design-Vorschau vorlegen (Farben · Typographie · ASCII-Wireframe Hauptseite)
4. **Warten auf ausdrückliche Freigabe durch Frank Esper**
5. Erst dann implementieren – in der Reihenfolge aus `docs/ANFORDERUNGEN.md`

---

## Hosting & Domain

- Hosting: Vercel (Free/Hobby)
- Domain: www.esperit.net (Inklusivdomain bei WebHostOne – Transfer erst nach Fertigstellung)
- Resend sendet Kontaktanfragen an `CONTACT_EMAIL_TO` aus `.env.local`
