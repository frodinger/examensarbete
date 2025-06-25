# Examensarbete App

En modern och tillgänglig webbapplikation för presentation av examensarbete med fokus på tillgänglighet och användbarhet.

## Om projektet

Denna applikation presenterar ett examensarbete i ett interaktivt och tillgängligt format. Designen är modern och minimalistisk med fokus på användarvänlighet och tillgänglighet enligt WCAG 2.1 AA-riktlinjer.

## Installation

```bash
# Installera beroenden
npm install

# Starta utvecklingsservern
npm start
```

Öppna [http://localhost:3000](http://localhost:3000) för att se applikationen i din webbläsare.

## Projektstruktur

```
examensarbete-app/
├── public/        # Statiska filer
├── src/           # Källkod
│   ├── assets/    # Bilder och media
│   ├── components/# React-komponenter
│   ├── sections/  # Sektionskomponenter
│   ├── hooks/     # Custom React hooks
│   ├── scss/      # Stilar
│   ├── App.js     # Huvudkomponent
│   └── index.js   # Startpunkt
└── ACCESSIBILITY.md # Tillgänglighetsdokumentation
```

## Komponentstruktur

- **SharedComponents.js** - UI-komponenter (knappar, kort, etc.)
- **SectionComponents.js** - Sektionskomponenter för examensarbetets delar

## Huvudfunktioner

- Modern, responsiv design
- Tillgänglighetsanpassad presentation
- Animationer med Framer Motion
- Gradient-baserad färgdesign
- Optimerad för alla enheter

## Teknologier

- React
- SCSS för styling
- Framer Motion för animationer
- Modern CSS med flexbox och grid
- Tillgänglighetsfokuserad design (WCAG 2.1 AA)

## Anpassning

För att anpassa innehållet:

1. Redigera dataobjekten i `SectionComponents.js`
2. Anpassa stilar i SCSS-filerna i `src/scss/`
3. Ändra bilder i `src/assets/images/`

## Scripts

- `npm start` - Starta utvecklingsserver
- `npm test` - Kör tester
- `npm run build` - Bygg produktionsversion
