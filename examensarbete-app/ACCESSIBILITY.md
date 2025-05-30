# Tillgänglighetsverktyg

I det här projektet har vi implementerat två verktyg för att säkerställa god tillgänglighet:

## 1. @axe-core/react

Detta verktyg kör automatiskt tillgänglighetstester i utvecklingsläge. Det rapporterar problem i webbläsarens konsol medan du utvecklar.

- Axe körs endast i utvecklingsmiljö (inte i produktion)
- Det görs automatiskt när du kör `npm start`
- Kontrollera konsolen för eventuella tillgänglighetsfel

## 2. ESLint med jsx-a11y

Vi har konfigurerat ESLint med jsx-a11y-pluginet för att fånga tillgänglighetsproblem direkt i koden.

### Kör tillgänglighetslinting

```bash
npm run lint:a11y
```

### Viktiga regler

Följande regler är aktiverade:

- `jsx-a11y/alt-text`: Bilder måste ha alt-text
- `jsx-a11y/aria-props`: Validerar ARIA-attribut
- `jsx-a11y/aria-role`: Kontrollerar giltiga ARIA-roller
- `jsx-a11y/heading-has-content`: Rubriker måste ha innehåll
- `jsx-a11y/img-redundant-alt`: Undviker redundant "image", "picture" i alt-text
- `jsx-a11y/no-access-key`: Undvik accesskey-attribut
- `jsx-a11y/tabindex-no-positive`: Undvik positiva tabindex-värden

## Tips för tillgänglighetsutveckling

1. Se till att alla interaktiva element är tillgängliga via tangentbord
2. Använd semantiska HTML-element (t.ex. `<button>`, `<nav>`, `<article>`)
3. Kontrollera färgkontrast för text och bakgrund
4. Tillhandahåll alternativtext för alla meningsfulla bilder
5. Organisera innehåll med korrekt rubrikstruktur (h1-h6) 