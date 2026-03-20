# Claude Code Prompt – EsperIT Website

## Verwendung
Diesen Prompt beim ersten Start von Claude Code eingeben. Alle referenzierten Dateien müssen
im Ordner `docs/` vorhanden sein (Pfade siehe unten).

---

## PROMPT (in Claude Code eingeben)

```
Du bist ein erfahrener Next.js-Entwickler und baust die offizielle Website von EsperIT (Frank Esper).

Alle Informationen zur Website stehen in diesen drei Dateien:
- docs/CLAUDE.md        → Projektregeln, Tech-Stack, Kosten-Regeln, Implementierungsreihenfolge
- docs/BRANCHE.md       → Alle Inhalte, Texte, Konfigurationen
- docs/ANFORDERUNGEN.md → Technische Spezifikation aller Seiten

Lese diese drei Dateien vollständig, bevor du irgendetwas tust.

---

## SCHRITT 1: Systemcheck

Führe folgende Befehle aus und zeige mir die Ausgabe:
node --version
npm --version
git --version

Warte auf meine Bestätigung, bevor du mit Schritt 2 beginnst.

---

## SCHRITT 2: Offene Fragen klären

Bevor du Code schreibst, stelle mir folgende Fragen (alle auf einmal):

1. Private E-Mail-Adresse für Kontaktformular-Anfragen (Empfänger)?
2. Resend API-Key vorhanden? (Format: re_xxxxxxxxxxxx)
3. GitHub-Repository: soll ich eines erstellen oder gibt es bereits eines?
4. Sanity-Account vorhanden? (kostenlos unter sanity.io)
5. Sind KI-Tools-Matrix-2026.xlsx und LLM-Matrix-2026.xlsx bereits als Google Sheets veröffentlicht? 
   Falls ja: beide Embed-URLs mitteilen.

Warte auf alle Antworten, bevor du fortfährst.

---

## SCHRITT 3: Design-Vorschau (VOR der Umsetzung)

Zeige mir schriftlich (kein Code):

a) Farbschema-Vorschau (Hex-Werte + Verwendungszweck)
b) Typographie: Welche Fonts, welche Gewichtungen
c) ASCII-Wireframe der Hauptseite (alle Sektionen in Reihenfolge)
d) Navigationsstruktur als Baumdiagramm

Warte auf meine ausdrückliche Freigabe ("Freigabe erteilt" oder Änderungswünsche), 
bevor du mit der Implementierung beginnst.

---

## SCHRITT 4: Implementierung

Folge exakt der Implementierungsreihenfolge aus docs/CLAUDE.md (Abschnitt 10).
Führe jeden Schritt durch und teile mir mit, was du getan hast.
Frage bei Unklarheiten, statt Annahmen zu treffen.
Nach jedem größeren Abschnitt: kurze Zusammenfassung was fertig ist, was als nächstes kommt.

---

## WICHTIGE REGELN (nicht vergessen)

- Sie-Form in allen deutschen Texten
- Kein hardcoding von Firmendaten – alles aus lib/config.ts
- shadcn/ui für alle UI-Elemente
- Animationen nur aus lib/animations.ts
- .env.local niemals in Git committen
- Bewertungs-Sektion ist DEAKTIVIERT – nicht umsetzen
- Notdienst-Banner ist DEAKTIVIERT – nicht umsetzen
- KI-Assistenten: keine LLM-Interaktion, nur Inhalt aus MD-Dateien darstellen
- Google Sheets: iframe-Embed, kein API-Key
- Blog: Sanity.io v3, revalidate: 3600
- Vor WebHostOne-Kündigung: Domain-Registrierung prüfen (siehe CLAUDE.md Abschnitt 8)
```

---

## Dateipfade für Claude Code

Folgende Struktur muss VOR dem ersten Start erstellt werden:

```
/Users/frankadmin/Documents/Homepage/esperit-website/   ← Projektordner (neu anlegen)
├── docs/
│   ├── CLAUDE.md           ← Diese Datei
│   ├── BRANCHE.md          ← Inhalts-Konfiguration
│   ├── ANFORDERUNGEN.md    ← Technische Spec
│   ├── DESIGNSYSTEM.md     ← Design-System (unverändert)
│   └── ki-assistenten/     ← Ordner mit 9 MD-Dateien
│       ├── Vertragszusammenfassung_Assistent.md
│       ├── EU AI Act Experte_Assistent.md
│       ├── Datenschutzprüfer_Assistent.md
│       ├── SEO Keyword-Recherche_Assistent.md
│       ├── ProKontra_Analyst_Assistent.md
│       ├── LinkedIn_Profil_Optimierung_Assistent.md
│       ├── Kundenfeedback_Analyse_Assistent.md
│       ├── Angebotsvergleich_Assistent.md
│       └── Hook_Writer_Assistent.md
└── (Rest wird von Claude Code erstellt)
```

**Vorbereitungs-Schritte (du, vor Claude Code-Start):**
1. Ordner `/Users/frankadmin/Documents/Homepage/esperit-website/docs/` anlegen
2. Die 4 Markdown-Dateien (CLAUDE.md, BRANCHE.md, ANFORDERUNGEN.md, DESIGNSYSTEM.md) in `docs/` kopieren
3. Unterordner `docs/ki-assistenten/` anlegen
4. Die 9 Assistenten-MD-Dateien aus `/Users/frankadmin/Documents/Homepage/Vorlagen/KI-Assistenten/` in `docs/ki-assistenten/` kopieren
5. Claude Code im Terminal starten: `claude` (im Projektordner)
6. Den Prompt oben einfügen
