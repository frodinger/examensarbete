# SCSS Stilstruktur

Detta projekt använder SCSS för att hantera stilar på ett mer strukturerat och underhållsbart sätt. Här är en översikt över mappstrukturen och hur den är organiserad.

## Mappstruktur

```
scss/
├── abstracts/            # Hjälpklasser, variabler, mixins, funktioner
│   ├── _variables.scss   # Variabler för färger, typografi, storlekar, etc.
│   └── _mixins.scss      # Återanvändbara mixins
│
├── layout/               # Layoutrelaterade stilar
│   ├── _navbar.scss      # Navigeringsfält
│   └── _footer.scss      # Sidfot
│
├── components/           # Komponentspecifika stilar
│   └── _hero.scss        # Hero-sektion
│
├── pages/                # Sidspecifika stilar
│   ├── _about.scss       # Om oss-sidan
│   ├── _contact.scss     # Kontaktsidan
│   └── _data.scss        # Datasidan
│
├── _base.scss            # Grundläggande stilar, reset, typografi
└── main.scss             # Huvudfil som importerar alla andra SCSS-filer
```

## Fördelar med denna struktur

1. **Modularitet**: Varje fil har ett specifikt syfte, vilket gör det lättare att hitta och underhålla kod.
2. **Återanvändbarhet**: Variabler och mixins gör det möjligt att återanvända kod och hålla designen konsekvent.
3. **Nästlade selektorer**: SCSS tillåter nästlade selektorer som gör koden mer läsbar och minskar upprepning.
4. **Funktioner**: SCSS-funktioner som `darken()` och `lighten()` gör det enkelt att skapa dynamiska färgvariationer.
5. **Moderna importsystem**: Använder `@use` och `@forward` istället för utfasade `@import` för bättre namnrymdshantering.

## Hur man använder

När du behöver lägga till nya stilar:

1. Identifiera vilken kategori stilen tillhör (layout, komponent, sida).
2. Lägg till stilen i motsvarande fil eller skapa en ny fil i rätt mapp.
3. Importera den nya filen i `main.scss` med `@use` om det är en helt ny fil.

### Exempel på import med @use:

```scss
// I main.scss
@use 'components/nykomponent';

// För att importera med en namnrymd
@use 'abstracts/variables' as v;
// Använd variablerna med v.$primary-color

// För att importera utan namnrymd (alla medlemmar tillgängliga direkt)
@use 'abstracts/variables' as *;
// Använd variablerna direkt med $primary-color
```

## Variabler och mixins

Använd de definierade variablerna och mixins för att säkerställa konsekvent design i hela projektet.

### Exempel på variabler:

```scss
// Färger
$primary-color: #1976d2;
$text-color: #333;

// Typografi
$font-size-base: 16px;
$font-size-large: 18px;

// Spacing
$spacing-md: 16px;
$spacing-lg: 24px;
```

### Exempel på mixins:

```scss
// Flexbox
@mixin flex($direction: row, $justify: flex-start, $align: stretch) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

// Media queries
@mixin respond-to($breakpoint) {
  @if $breakpoint == md {
    @media (min-width: $breakpoint-md) { @content; }
  }
}
``` 