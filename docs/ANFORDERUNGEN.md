# ANFORDERUNGEN.md – Technische Spec: EsperIT Website

> Inhalte/Texte: `docs/BRANCHE.md` · Design: `docs/DESIGNSYSTEM.md`

---

## 1. Zentrale Konfiguration (`lib/config.ts`)

```typescript
export interface SiteConfig {
  company: {
    name: string; owner: string; foundedYear: number;
    phone: string; email: string;
    address: { street: string; zip: string; city: string };
    openingHours: { weekdays: string };
    social: { xing?: string; linkedin?: string };
  };
  colors: {
    primary: string;        // #132947
    primaryLight: string;   // #2b5ea7
    primaryLighter: string; // #e8f0fe
    accent: string;         // #5F94D6
    accentLight: string;    // #7aaee0
  };
  seo: { title: string; description: string; keywords: string[] };
  features: {
    xingButton: boolean; linkedinButton: boolean;
    cookieConsent: boolean; floatingCta: boolean;
    blog: boolean; leadMagnet: boolean;
    // alle false: whatsappButton, googleMaps, analytics, bewertungen, notdienstBanner
  };
  socialProof: { yearsExperience: number; completedProjects: number };
  referenzLogos: Array<{ name: string; src: string; alt: string }>;
  terminbuchungUrl: string;   // leer = Terminbuchungs-Button nicht anzeigen
  i18n: boolean;              // false = Sprachschalter deaktiviert anzeigen
  navigation: Array<{ label: string; href: string; cta?: boolean; children?: Array<{ label: string; href: string }> }>;
}
```

---

## 2. Projekt-Struktur

```
app/
  layout.tsx                        → Root Layout
  page.tsx                          → Landingpage
  ueber-mich/
    page.tsx · qualifikationen/ · rollen/ · stationen/
  leistungen/[slug]/page.tsx        → datawarehouse | business-intelligence | ki
  service/
    ki-schulungen/ · consulting-workshops/
    ki-assistenten/
      page.tsx                      → Kachel-Übersicht (9 Assistenten)
      [slug]/page.tsx               → Einzelseite je Assistent
  marketplace/
    ai-tools-katalog/ · ai-use-cases/
  news/
    page.tsx · [slug]/page.tsx      → Sanity Blog
  kontakt/ · impressum/ · datenschutz/ · agb/
  api/contact/route.ts              → Resend API
  sitemap.ts · robots.ts
components/
  layout/    → Header.tsx · Footer.tsx · MobileNav.tsx
  sections/  → HeroSection · LeistungenGrid · UeberMichTeaser · LeadMagnet
             → EinzugsgebietSection · FaqSection · CtaBanner
  shared/    → RevealOnScroll · FloatingCTA · CookieBanner
  ui/        → shadcn/ui
lib/
  config.ts · animations.ts · services-data.ts · assistants-data.ts · utils.ts
public/
  images/  → frank-esper.jpg (aus F 032-25-035.jpg) · firmenlogo.png
  downloads/ → CV_Frank_Esper.pdf · DSGVO_Compliance_Check.pdf
             → KI_FAQ_esperit.pdf · Handwerk_IT_Leitfaden.pdf
docs/        → BRANCHE.md · DESIGNSYSTEM.md · ANFORDERUNGEN.md · ki-assistenten/
sanity/      → schemaTypes/post.ts · sanity.config.ts
.env.local · .gitignore · next.config.ts · tailwind.config.ts
```

---

## 3. Umgebungsvariablen (`.env.local`)

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=private-empfaenger@email.de
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skxxxxxxxxxxxx
NEXT_PUBLIC_SHEETS_KI_TOOLS=https://docs.google.com/spreadsheets/d/XXXX/pubhtml
NEXT_PUBLIC_SHEETS_LLM_MATRIX=https://docs.google.com/spreadsheets/d/XXXX/pubhtml
```

Vercel Dashboard: alle obigen Keys dort ebenfalls eintragen.

---

## 4. Setup & Deployment

```bash
# Systemcheck
node --version   # mind. 20.x
npm --version
git --version

# Scaffold
npx create-next-app@latest esperit-website --typescript --tailwind --app --src-dir=false --import-alias "@/*"
cd esperit-website

# shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card accordion sheet input textarea select checkbox badge separator form navigation-menu

# Dependencies
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react resend next-sanity @sanity/image-url

# Sanity
npm create sanity@latest -- --project-id=XXXX --dataset=production --template=clean

# Dev / Build / Deploy
npm run dev
npm run build   # vor jedem Deploy pflichtmäßig ausführen
npx vercel
```

---

## 5. Implementierungsreihenfolge

1. Systemcheck + Scaffold + Dependencies
2. `lib/config.ts` · `lib/animations.ts` · `lib/services-data.ts` · `lib/assistants-data.ts`
3. Shared Components (RevealOnScroll · FloatingCTA · CookieBanner)
4. Layout (Header · Footer · MobileNav)
5. `app/layout.tsx`
6. Landingpage-Sektionen: Hero → Leistungen → Über-mich-Teaser → Lead Magnet → Einzugsgebiet → FAQ → CTA
7. `app/page.tsx`
8. Über-mich-Unterseiten (Qualifikationen · Rollen · Stationen)
9. Leistungs-Unterseiten
10. Service-Unterseiten (KI-Schulungen · KI-Assistenten · Consulting)
11. Marketplace (Google Sheets Embeds)
12. Blog (Sanity)
13. Kontaktformular + API Route
14. Rechtliche Seiten
15. SEO (Metadata · JSON-LD · Sitemap · Robots)
16. Cookie-Banner
17. Mobile Floating CTA
18. `npm run build` + Lighthouse-Audit
19. Vercel Deploy + Domain-Konfiguration

---

## 6. Komponenten-Spezifikationen

### Header
- Sticky, `bg-white/90 backdrop-blur-sm` beim Scrollen
- Logo links (`public/images/firmenlogo.png`), Nav mittig (shadcn `NavigationMenu`), Telefon + CTA rechts
- Mobile: shadcn `Sheet`
- Framer Motion: `y: -10 → 0` initial
- Impressum-Link: dezent als Textlink rechts neben dem CTA-Button (Desktop) · im Mobile-Menü ganz unten

### Footer
- `bg-slate-900 text-white`, 4 Spalten → 1 Spalte mobil
- Spalten: Firma + Social · Leistungen · Kontakt · Rechtliches
- `© {Jahr} EsperIT – Frank Esper. Alle Rechte vorbehalten.`

### Landingpage-Sektionen

| Sektion | Hintergrund | Layout |
|---|---|---|
| Hero | Bild + `bg-black/50` | Zentriert, 4 Trust-Badges |
| Trust Bar | `bg-primary` | 2 Kennzahlen, `font-mono`, AnimatedCounter |
| Referenzen | `bg-white` | Kundenlogos-Leiste (siehe unten) |
| Leistungen | `bg-white` | 3-Spalten-Grid, Border-Cards |
| Über mich Teaser | `bg-slate-50` | Split: Text links, Bild rechts, `rounded-none` |
| Lead Magnet | `bg-primary` | Zentriert, Formular darunter |
| Einzugsgebiet | `bg-slate-50` | Badge-Chips `rounded-full` |
| FAQ | `bg-white` | `max-w-3xl mx-auto` |
| CTA Banner | `bg-primary` | Zentriert, 2 Buttons |

### Unterseiten

**Qualifikationen:** 10-Kachel-Grid, 3 pro Reihe, Kachel 10 zentriert. shadcn `Card`, `border border-slate-200`, kein Shadow.

**Rollen & Aufgaben:** shadcn `Accordion`, eine Rolle = ein Item, Aufgaben als `<ul>`.

**Stationen & Projekte:** shadcn `Accordion`, CV-Download-Button Farbe `#5F94D6`, linksbündig, 2 Zeilen Abstand.

**Leistungs-Unterseiten** (`/leistungen/[slug]`): Mini-Hero → Kundenprobleme ("Kennen Sie das?") → Lösungskarten → Prozess-Timeline (4 Schritte) → CTA. `generateMetadata()` + JSON-LD `Service`-Schema.

**KI-Assistenten Übersicht:** 3-Spalten-Grid, 9 Kacheln. Mouseover: `transform: rotate(10deg)` via CSS transition (kein Framer Motion). Name: Poppins Bold, Zweck: Poppins Regular, linksbündig.

**KI-Assistenten Einzelseite:** H1 = Name, Subheadline = Zweck, alle Felder aus MD-Datei, Systemprompt in `<pre>`-Block öffentlich sichtbar. Kein LLM-Link, keine Interaktion.

**Consulting & Workshops:** 2 Abschnitte (CONSULTING + WORKSHOP), CV-Download-Button `#5F94D6`, CTA zur Kontaktseite.

**Marketplace:** `<iframe>` Embed, `min-height: 600px`, Breite 100%, URL aus `.env.local`. Kein API-Key.

**Blog:** Sanity v3, `revalidate: 3600`. Übersicht: Card-Grid (Bild · Titel · Datum · Excerpt). Detail: Portable Text Renderer.

---

## 7. Kontaktformular

- React Hook Form + Zod
- Felder: Anrede (Select) · Name · Telefon · E-Mail · Betreff (Select aus Leistungen) · Nachricht · DSGVO-Checkbox (Pflicht)
- API Route: `app/api/contact/route.ts` → Resend
- Absender: `info@esperit.net` · Empfänger: `CONTACT_EMAIL_TO`
- Erfolgsmeldung: "Vielen Dank! Ich melde mich innerhalb von 24 Stunden bei Ihnen."

---

## 8. SEO

- `generateMetadata()` pro Seite, Open Graph, Twitter Cards, Canonical URLs
- JSON-LD `LocalBusiness` auf jeder Seite (Daten aus `lib/config.ts`)
- JSON-LD `Service` auf Leistungsseiten
- `app/sitemap.ts` + `app/robots.ts`

---

## 9. Performance & Mobil

- Lighthouse 90+ auf allen Kategorien
- `next/image priority` für Hero · `next/font display: swap`
- SSG/ISR überall außer API-Route
- Floating CTA nur mobil: "Jetzt anrufen", `shadow-lg`
- Click-to-Call auf ALLEN Telefonnummern
- Touch-Targets mind. 44px

---

## 10. Rechtliche Seiten & Cookie-Banner

- Impressum (§ 5 TMG), Datenschutz (DSGVO, Vercel + Resend erwähnen, kein Analytics-Absatz), AGB
- Alle mit Hinweis: "Platzhalter – bitte von Rechtsanwalt prüfen lassen"
- Cookie-Banner: clientseitig, `localStorage`, Optionen: "Nur notwendige" / "Alle akzeptieren"
- Analytics `false` → kein Analytics-Absatz im Banner

---

## 11. SEO & LLM-Auffindbarkeit (Erweiterung)

### JSON-LD Schemas (ergänzend zu Abschnitt 8)
```typescript
// Person-Schema auf /ueber-mich und Hauptseite
{
  "@type": "Person",
  "name": "Frank Esper",
  "jobTitle": "BI- und DWH-Experte, KI-Berater",
  "url": "https://www.esperit.net",
  "sameAs": [
    "https://www.xing.com/profile/Frank_Esper",
    "https://www.linkedin.com/in/frank-esper/"
  ],
  "worksFor": { "@type": "Organization", "name": "EsperIT" }
}

// FAQPage-Schema auf Hauptseite (FAQ-Sektion)
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
}

// BreadcrumbList auf allen Unterseiten
{
  "@type": "BreadcrumbList",
  "itemListElement": [ ... ]
}
```

### LLM-Auffindbarkeit (llms.txt Standard)
- `public/llms.txt` anlegen – maschinenlesbare Zusammenfassung der Website für LLMs
- `public/llms-full.txt` anlegen – vollständiger Seiteninhalt strukturiert
- Format: siehe https://llmstxt.org
- Inhalt: Firmenname, Leistungen, Expertise, Kontakt, alle URLs

Beispiel `llms.txt`:
```
# EsperIT – Frank Esper

> IT-Beratung für Data Warehouse, Business Intelligence und KI-Automatisierung.

Frank Esper ist selbständiger IT-Berater mit Sitz in Weyhe (PLZ 28844).
Erreichbar unter: info@esperit.net | +49 177 2578260
Deutschlandweit remote, PLZ-Bereich 2* in Präsenz.

### Leistungen
- [DataWarehouse](https://www.esperit.net/leistungen/datawarehouse)
- [Business Intelligence](https://www.esperit.net/leistungen/business-intelligence)
- [Künstliche Intelligenz](https://www.esperit.net/leistungen/ki)

### Service
- [KI-Schulungen](https://www.esperit.net/service/ki-schulungen)
- [KI-Assistenten](https://www.esperit.net/service/ki-assistenten)
- [Consulting & Workshops](https://www.esperit.net/service/consulting-workshops)
```

### Open Graph Bilder
- `public/og-image.jpg` anlegen (1200×630px) – wird für Social-Media-Vorschau genutzt
- Pro Seite via `generateMetadata()` referenzieren
- Inhalt: EsperIT-Logo + Name + Claim auf dunkelblauem Hintergrund

### Weitere SEO-Maßnahmen
- `<link rel="canonical">` auf jeder Seite
- `hreflang="de"` deklarieren (nur DE, aber explizit)
- Alle Bilder mit aussagekräftigem `alt`-Text versehen

---

## 12. Error Handling

### Fehlerseiten
- `app/not-found.tsx` – individuelle 404-Seite mit Navigation zurück zur Startseite
- `app/error.tsx` – globale Fehlerseite mit Retry-Button
- Beide Seiten: im EsperIT-Design, mit Header/Footer, ohne generische Next.js-Optik

### API-Route Fehlerbehandlung (`app/api/contact/route.ts`)
```typescript
// Pflichtstruktur:
try {
  // Resend-Aufruf
  return NextResponse.json({ success: true }, { status: 200 });
} catch (error) {
  // Fehler loggen (console.error, kein sensitiver Inhalt)
  return NextResponse.json(
    { error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
    { status: 500 }
  );
}
```

### Formular-Fehlermeldungen
- Jedes Pflichtfeld zeigt eine inline Fehlermeldung bei leerem Submit
- E-Mail-Feld: Formatvalidierung mit sprechender Meldung ("Bitte gültige E-Mail eingeben")
- Submit-Button: Loading-State während Versand, danach Erfolgs- oder Fehlermeldung
- Bei Resend-Fehler: Fehlermeldung mit Telefonnummer als Fallback anzeigen

---

## 13. Accessibility (WCAG 2.1 AA)

- `aria-label` auf allen Icon-only Buttons (z.B. Mobile-Menü, Social-Icons)
- Skip-to-Content Link als erstes Element im Body: `<a href="#main-content">Zum Inhalt springen</a>`
- Fokus-Styles nicht entfernen (`outline` nicht auf `none` setzen – stattdessen stylen)
- Alle Bilder mit `alt`-Text (leerer `alt=""` für rein dekorative Bilder)
- Farbkontrast: Akzentfarbe `#5F94D6` auf weißem Hintergrund **prüfen** (Mindest-Ratio 4.5:1 für Text)
- Accordion-Komponenten: `aria-expanded` korrekt setzen (shadcn macht das automatisch)
- Formularfelder: jedes `<input>` hat ein zugehöriges `<label>`

---

## 14. Sicherheit

### Security Headers (`next.config.ts`)
```typescript
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];
// In next.config.ts unter headers() eintragen
```

### Spam-Schutz Kontaktformular (ohne CAPTCHA)
- Honeypot-Feld: verstecktes Feld `website` (CSS: `display:none`) – wenn ausgefüllt → Bot, Anfrage verwerfen
- Rate Limiting: max. 5 Anfragen pro IP pro Stunde (via Vercel Edge Config oder einfache Map)
- Zod-Validierung serverseitig wiederholen (nicht nur clientseitig)

---

## 15. CI/Branding Assets

Folgende Dateien in `public/` anlegen:
```
public/
  favicon.ico              → 32×32px, aus Firmenlogo ableiten
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png     → 180×180px
  og-image.jpg             → 1200×630px (Open Graph)
  manifest.json            → PWA-Grundlagen (Name, Icons, Theme-Color)
  llms.txt                 → LLM-Auffindbarkeit
  llms-full.txt            → LLM-Auffindbarkeit (vollständig)
```

`manifest.json` Mindestinhalt:
```json
{
  "name": "EsperIT – Frank Esper",
  "short_name": "EsperIT",
  "theme_color": "#132947",
  "background_color": "#ffffff",
  "display": "browser",
  "icons": [
    { "src": "/favicon-32x32.png", "sizes": "32x32", "type": "image/png" },
    { "src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
  ]
}
```

---

## 16. Usability

### Navigation & Orientierung
- Breadcrumb-Navigation auf allen Unterseiten (außer Hauptseite)
- "Zurück zur Übersicht"-Link auf jeder Leistungs- und Service-Unterseite
- Aktiver Navigationspunkt im Header visuell hervorheben (`aria-current="page"`)

### Interaktionsfeedback
- Scroll-to-Top Button: erscheint nach 300px Scrolltiefe, nur Desktop
- Alle Links mit `hover`- und `focus`-State
- Externe Links (`target="_blank"`) immer mit `rel="noopener noreferrer"`

### Ladezeit & Skeleton
- Kontaktformular: Submit-Button zeigt Spinner + "Wird gesendet..." während API-Call
- Blog-Übersicht: Skeleton-Loader während Sanity-Daten laden

---

## 17. Monitoring & Health

### Health-Check Endpoint
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: "ok", timestamp: new Date().toISOString() });
}
```
- Dient zur Vercel-Überwachung und externen Monitoring-Tools
- Gibt `200 OK` zurück solange die App läuft

### Fehler-Logging
- `console.error` nur in API-Routes – nie sensible Daten loggen
- Keine persönlichen Daten (E-Mail, Name) in Logs schreiben

---

## 18. Referenzen / Kundenlogos

### Konzept
- Keine erfundenen Referenzen – ausschließlich echte, belegbare Projektkunden
- Darstellung als **Logostreifen** direkt unter der Trust Bar auf der Hauptseite
- Logos der bekannten Unternehmen aus den Stationen & Projekten verwenden

### Umsetzung

**Ablageort (manuell vor Claude Code-Start befüllen):**
```
public/images/logos/
  hdi.svg              → von hdi.de/Pressebereich herunterladen (SVG bevorzugt, sonst PNG)
  hannover-rueck.svg   → von hannover-re.com/Press/Logos herunterladen
  kfw.svg              → von kfw.de/Presse/Bildmaterial herunterladen
  cbr-fashion.png      → kein offizieller Pressebereich, PNG aus Google-Bildersuche
```

**Hinweis:** Kein JPG – Logos benötigen Transparenz. SVG > PNG > JPG.

**Komponente:** `components/sections/ReferenzenLogos.tsx`
- Grayscale-Darstellung: `filter: grayscale(100%) opacity(60%)`, bei Hover: `filter: none`
- CSS transition: `transition: filter 0.3s ease`
- Layout: `flex flex-wrap justify-center items-center gap-8 md:gap-12`
- Jedes Logo: `max-h-10 w-auto` (Höhe fix, Breite proportional)
- Subtext unter Logostreifen: "Aus meiner Projekthistorie" (`text-sm text-slate-400 text-center mt-6`)
- Kein Sektions-Titel

**Einbindung Hauptseite (`app/page.tsx`):**
- Position: direkt nach Trust Bar, vor Leistungsübersicht
- Hintergrund: `bg-white py-10`
- Daten aus `lib/config.ts` → neues Feld `referenzLogos`:

```typescript
referenzLogos: [
  { name: "HDI",          src: "/images/logos/hdi.svg",            alt: "HDI Logo" },
  { name: "HannoverRück", src: "/images/logos/hannover-rueck.svg", alt: "HannoverRück Logo" },
  { name: "KfW",          src: "/images/logos/kfw.svg",            alt: "KfW Bank Logo" },
  { name: "CBR Fashion",  src: "/images/logos/cbr-fashion.png",    alt: "CBR Fashion Logo" },
]
```

**Rechtlicher Hinweis:** Die Verwendung von Unternehmenslogos zur Referenznennung auf der eigenen Website ist in Deutschland üblich und in der Regel unproblematisch, solange keine Verwechslungsgefahr oder Irreführung besteht. Zur Sicherheit einen kurzen Disclaimer ergänzen: "Alle genannten Marken sind Eigentum der jeweiligen Unternehmen."

**Fallback:** Falls ein Logo nicht verfügbar ist → Unternehmensname als Text in `font-mono text-slate-400`

---

## 19. Mehrsprachigkeit (vorbereitet, deaktiviert)

### Architektur-Vorbereitung
- Next.js App Router unterstützt i18n nativ via Ordnerstruktur `app/[locale]/`
- **Jetzt:** Architektur NICHT umbauen – zu aufwändig für den Start
- **Vorbereitung:** Alle Texte ausschließlich aus `lib/config.ts` und `docs/BRANCHE.md` laden – kein Hardcoding (bereits so definiert)
- Wenn Mehrsprachigkeit später aktiviert wird, müssen nur neue Locale-Ordner + übersetzte BRANCHE.md angelegt werden

### Sprach-Umschalter (deaktiviert)
- Im Header rechts: Sprachschalter `DE | EN` vorbereiten aber **ausgegraut/deaktiviert** darstellen
- Tooltip bei Hover: "English version coming soon"
- Feature-Flag in `lib/config.ts`: `i18n: false` → Schalter nur anzeigen wenn `true`
- Keine Übersetzungen anlegen bis Feature aktiviert wird

---

## 20. Terminbuchung (Calendly-Integration)

### Konzept
- Direkter Terminbuchungs-Link als zusätzlicher Conversion-Weg neben dem Kontaktformular
- Empfehlung: **Cal.com** (Open Source, kostenloser Plan, DSGVO-freundlicher als Calendly)
- Alternative: Calendly Free Plan (eingeschränkt aber ausreichend für einen Berater)

### Umsetzung
- CTA-Button "Termin buchen" als **zweite Option** auf der Kontaktseite
- Text: "Oder buchen Sie direkt einen kostenlosen Erstgesprächstermin (30 Min.)"
- Öffnet Cal.com-Link in neuem Tab (`target="_blank"`)
- Feature-Flag: `terminbuchung_url: ""` in `lib/config.ts` – leer = Button nicht anzeigen
- Frank Esper trägt URL ein sobald Cal.com-Account eingerichtet ist

### Platzierung
- Kontaktseite: unter dem Formular, klar abgetrennt
- CTA-Banner auf Hauptseite: als dritte Option neben den zwei bestehenden Buttons

---

## 21. RSS-Feed (Blog)

### Zweck
- Maschinenlesbare Ausgabe aller Blog-Artikel
- Wird automatisch von Google, Aggregatoren und LLMs genutzt
- Kein Mehraufwand beim Schreiben von Artikeln – Sanity liefert die Daten automatisch

### Umsetzung
```typescript
// app/feed.xml/route.ts
// Liest alle Sanity Blog-Posts und gibt valides RSS 2.0 XML zurück
// Felder: title, link, description, pubDate, guid
// revalidate: 3600 (stündlich aktualisiert)
```

- URL: `https://www.esperit.net/feed.xml`
- Im `<head>` jeder Seite als `<link rel="alternate" type="application/rss+xml">` einbinden
- Im Footer: kleines RSS-Icon mit Link zu `/feed.xml`
- Sitemap (`app/sitemap.ts`) um Blog-Artikel-URLs ergänzen
