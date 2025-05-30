# SCSS-struktur för Examensarbete

Detta dokument beskriver SCSS-strukturen och tillgänglighetsförbättringar enligt WCAG 2.2 för Examensarbete-projektet.

## Filstruktur

- `main.scss` - Huvudfilen som importerar alla andra SCSS-filer
- `variables.scss` - Definierar globala variabler (färger, typografi, avstånd, etc.)
- `mixins.scss` - Återanvändbara SCSS-mixins
- `base.scss` - Basstilar och reset
- `layout.scss` - Layoutstilar (grid, container, header, footer)
- `components.scss` - Komponentspecifika stilar (knappar, formulär, etc.)
- `sections.scss` - Sektionsspecifika stilar (intro, bakgrund, mål, etc.)
- `utilities.scss` - Verktygsstilar och hjälpklasser

## Tillgänglighetsförbättringar (WCAG 2.2)

Följande förbättringar har gjorts för att uppfylla WCAG 2.2-riktlinjer:

### 1. Färgkontrast (1.4.3, 1.4.11)

- Förbättrad kontrast för all text för att möta minst AA-nivå (4.5:1 för normal text, 3:1 för stor text)
- Uppdaterade primära och sekundära färger för att säkerställa tillräcklig kontrast
- Implementerade färgteman för mörkt läge och högt kontrastläge
- Säkerställt att UI-komponenter har tillräcklig kontrast mot bakgrunden

### 2. Tangentbordsnavigering (2.1.1, 2.1.2, 2.4.7)

- Förbättrade fokustillstånd för alla interaktiva element
- Säkerställde att alla interaktiva element kan nås och användas med enbart tangentbord
- Implementerade tydliga fokusindikatorer med minst 3px tjocklek
- Ordnade fokusordningen logiskt för samtliga navigationsflöden

### 3. Textanpassning och läsbarhet (1.4.4, 1.4.8, 1.4.12)

- Använder relativa enheter (rem) för typografi
- Implementerat linjehöjd på minst 1.5 för textinnehåll
- Stöd för text-spacing och letter-spacing
- Förbättrad läsbarhet genom tillräckliga marginaler och avstånd

### 4. Reducerad rörelse (2.3.3)

- Implementerat `prefers-reduced-motion` media query
- Animationer och övergångar kan inaktiveras baserat på användarpreferenser
- Alternativa presentationer för innehåll med rörelse

### 5. Interaktiva komponenter (2.5.3, 2.5.5)

- Förbättrade pekdonsmål till minst 44x44 pixlar
- Förbättrad struktur för navigeringsflikar
- Säkerställt att alla interaktiva komponenter har tydliga klickbara/tryckbara områden

### 6. Formulärelements tillgänglighet (2.4.6, 3.3.2, 4.1.2)

- Tydliga och beskrivande etiketter för alla formulärelement
- Felmeddelanden och validering som följer WCAG-riktlinjer
- Förbättrad feedback vid fokusstatus och felstatus

### 7. Struktur och landmärken (1.3.1, 2.4.1, 2.4.10)

- Implementerade aria-landmärken för huvudsektioner (header, nav, main, footer)
- Förbättrad rubrikstruktur och semantisk HTML
- Implementerat skip-link för att hoppa över navigering

### 8. Responsiv design och flexibilitet (1.4.10)

- Säkerställt att innehållet visas korrekt vid 200% zoom
- Optimerad för olika skärmstorlekar och enheter
- Inga horisontella rullister vid normal användning

### 9. Förbättrad sökning (2.4.5, 2.4.6)

- Förbättrade tillgängligheten i sökfunktionen
- Implementerade tydligt synlig resultatstatus
- Tillgänglig tangentbordsnavigering i sökresultaten

### 10. Mörkt läge och anpassat utseende

- Implementerat mörkt tema med `prefers-color-scheme`
- Högt kontrastläge för användare med nedsatt syn
- Förbättrade fokuseffekter för både ljust och mörkt läge

## Användning

För att använda dessa stilar, importera `main.scss` i din applikation. Stilarna är strukturerade på ett modulärt sätt för att möjliggöra selektiv import om det behövs.

## Fortsatt utveckling

- Ytterligare testning med skärmläsare
- Implementera fler ARIA-attribut där det behövs
- Kontinuerlig testning med användare med funktionsnedsättningar

## Resurser

- [WCAG 2.2 översikt](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [WCAG 2.2 checklista](https://www.w3.org/WAI/WCAG22/quickref/)
- [A11Y Project](https://www.a11yproject.com/checklist/)

## Filstruktur

```
scss/
├── main.scss          # Huvudimportfil som samlar alla stilar
├── variables.scss     # Globala variabler (färger, typografi, storlekar, etc.)
├── mixins.scss        # Återanvändbara mixins och funktioner
├── base.scss          # Reset och grundläggande HTML-element
├── layout.scss        # Layout-komponenter (navbar, footer, grid)
├── components.scss    # UI-komponenter (knappar, formulär, kort, etc.)
├── sections.scss      # Specifika sektioner för projektet
└── utilities.scss     # Hjälpklasser för margin, padding, display, etc.
```

## Användning

Alla stilar importeras via `main.scss`. För att lägga till nya stilar:

1. Identifiera vilken fil stilen tillhör baserat på kategori
2. Lägg till stilen i rätt fil
3. Följ befintliga namnkonventioner och strukturer
4. Använd variabler från `variables.scss` istället för hårdkodade värden

## Variabelkonventioner

### Färger

Alla färger definieras som CSS-variabler i `:root` i `variables.scss`:

```scss
:root {
  --primary-color: #4a90e2;
  --primary-color-dark: #3a80d2;
  // ...
}
```

### Typografi

Typografistorlekar följer en konsekvent skala:

```scss
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
// ...
```

### Avstånd

Avstånd följer en konsekvent skala för marginaler och padding:

```scss
$spacing-0: 0;
$spacing-1: 0.25rem;       // 4px
$spacing-2: 0.5rem;        // 8px
// ...
```

## Responsivitet

Projektet använder mixins för responsivitet:

```scss
@include media-sm {
  // Stil för små skärmar
}

@include media-md {
  // Stil för mellanstora skärmar
}

@include media-lg {
  // Stil för stora skärmar
}
```

## Utilities

Använd hjälpklasserna från `utilities.scss` för att snabbt justera element:

```html
<div class="mt-4 mb-8 text-center">
  <!-- Margin top 1rem, margin bottom 2rem, centrerad text -->
</div>
```

## Kodningsstandarder

- Använd BEM-namgivning för klasser (Block Element Modifier)
- Undvik nesting mer än 3 nivåer djupt
- Använd variabler istället för hårdkodade värden
- Kommentera komplexa kodavsnitt 