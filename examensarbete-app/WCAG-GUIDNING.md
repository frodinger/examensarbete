# WCAG 2.2 AA-anpassningar i stilmallarna

Detta dokument beskriver hur projektet har anpassats för att följa WCAG 2.2 AA-standarder. Dessa riktlinjer hjälper till att göra webbplatsen mer tillgänglig för alla användare, inklusive personer med funktionsnedsättningar.

## Implementerade tillgänglighetsförbättringar

### Keyboard Navigation (2.1.1, 2.1.2)
- Alla interaktiva element är nåbara med tangentbordet
- Fokusordning följer en logisk sekvens
- `focus-visible` mixin tillhandahåller tydliga fokusstilar
- Skipplänk implementerad för snabb navigering

### Touch Target Size (2.5.8)
- Interaktiva element (knappar, länkar, etc.) har minst 24x24px storlek enligt WCAG 2.2 AA
- Viktiga och frekventa kontroller (ex. stängningsknappar) har större storlek (44x44px)

### Reduced Motion (2.3.3)
- Alla animationer kan pausas med `prefers-reduced-motion`-mediefråga
- Pausbara animationer implementerade genom `pausable-animation`-mixin

### Text Alternatives (1.1.1)
- CSS uppmuntrar användning av alt-text genom visuell markering på bilder som saknar alt-attribut

### Contrast (1.4.3)
- Färgsystemet följer kontrastkrav (bör verifieras med kontrastkontroll)

### Screen Reader Support
- `sr-only`-mixin för visuellt dolda texter för skärmläsare
- ARIA-attribut stöds genom `aria-popup-support`-mixin

### Responsive Design (1.4.4, 1.4.10)
- Responsiva breakpoints säkerställer läsbarhet på alla enheter
- Flexibla layouter som anpassar sig till olika skärmstorlekar

## Ytterligare åtgärder

För att komplettera CSS-förbättringarna, bör följande implementeras i HTML och JavaScript:

1. Korrekt semantisk HTML-struktur med korrekta rubriker och landmärken
2. ARIA-attribut på dynamiska element:
   - `aria-expanded` på expanderbara element
   - `aria-hidden` på dolda element
   - `aria-live` på innehåll som uppdateras dynamiskt
3. Formulärelement bör ha:
   - Kopplade etiketter (`<label for="id">`)
   - Felmeddelanden som är kopplade till sina respektive fält

## Testning

För att säkerställa tillgänglighet, testa regelbundet med:

1. Tangentbordsnavigation
2. Skärmläsare (VoiceOver, NVDA)
3. Tillgänglighetsverktyg som Lighthouse, axe eller WAVE

## Resurser

- [WCAG 2.2 Referens](https://www.w3.org/TR/WCAG22/)
- [WebAIM](https://webaim.org/standards/wcag/checklist)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/) 