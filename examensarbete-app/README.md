# Examensarbete App

En modern och tillgänglig webbapplikation för presentation av examensarbete med fokus på tillgänglighet och användbarhet.

## Projektstruktur

Projektet har en förenklad och konsoliderad struktur för enklare underhåll och utveckling:

```
examensarbete-app/
├── public/              # Statiska filer
├── src/                 # Källkod
│   ├── assets/          # Bilder, ikoner och media
│   │   └── SharedComponents.js  # Konsoliderade UI-komponenter
│   ├── components/      # React-komponenter
│   │   └── SectionComponents.js # Konsoliderade sektionskomponenter
│   ├── hooks/           # Custom React hooks
│   ├── scss/            # Stilar
│   │   ├── _base.scss   # Grund- och layoutstilar
│   │   ├── _config.scss # Variabler och mixins
│   │   ├── _modules.scss # Komponent- och sektionsstilar
│   │   ├── _utilities.scss # Hjälpklasser
│   │   └── main.scss    # Huvudfil som importerar allt
│   ├── App.js           # Huvudkomponent
│   ├── App.scss         # App-specifika stilar
│   ├── index.js         # Applikationens startpunkt
│   └── index.scss       # Globala stilar
├── package.json         # Projektberoenden
└── README.md            # Projektdokumentation
```

## Stilstruktur

Stilarna är organiserade enligt en modifierad ITCSS-metodik för bättre skalbarhet och underhåll:

1. **_config.scss** - Variabler, mixins och funktioner
2. **_base.scss** - Grundläggande stilar och layout
3. **_modules.scss** - Komponent- och sektionsstilar
4. **_utilities.scss** - Hjälpklasser

## Komponentstruktur

Komponenterna är grupperade i två huvudfiler för enkelhet:

1. **SharedComponents.js** - Återanvändbara UI-komponenter som knappar, kort, modaler, etc.
2. **SectionComponents.js** - Sektionskomponenter som representerar de olika delarna av examensarbetet

## Installation

För att installera och köra projektet lokalt:

```bash
# Klona projektet
git clone <repository-url>

# Navigera till projektmappen
cd examensarbete-app

# Installera beroenden
npm install

# Starta utvecklingsservern
npm start
```

## Tillgänglighet

Projektet följer WCAG 2.1 AA-riktlinjerna för att säkerställa att innehållet är tillgängligt för alla användare. Några av de implementerade tillgänglighetsfunktionerna inkluderar:

- Semantisk HTML-struktur
- Korrekt kontrastförhållande
- Tangentbordsnavigering
- Skärmläsarstöd
- Reduced motion-alternativ

## Anpassning

För att anpassa innehållet, redigera dataobjekten i respektive sektionskomponent i `SectionComponents.js`. Stilar kan anpassas i de relevanta SCSS-filerna i `src/scss/`.

## Licens

Detta projekt är licensierat under MIT-licensen.

## Ny modern design

Applikationen har fått en fullständig redesign med en modernare, mer minimalistisk stil:

- Stilren, luftig layout med mer whitespace
- Modern, gradient-baserad färgdesign
- Förbättrade animationer med Framer Motion
- Optimerad responsivitet för alla enheter
- Förbättrad tillgänglighet

## Designkomponenter

Den nya designen använder följande komponenter:

- Modern navigationsmeny med subtila animationer och gradienteffekter
- Stilren hero-sektion med gradient och subtila bakgrundselement
- Förbättrad presentationssektion med skuggeffekter och animationer
- SVG-ikoner istället för fontawesome för bättre prestanda
- Dynamisk scrollindikator med animation

## Arbetsgång för att fortsätta uppdatera

För att uppdatera resterande sektioner enligt den nya designen:

1. Utgå från det nya utseendet på IntroductionSection som mall
2. Använd Framer Motion-komponenter för animationer
3. Använd gradienteffekter för accent-färger
4. Följ den nya färgpaletten och typografin i variables.scss

## Teknologier

- React
- SCSS för styling
- Framer Motion för animationer
- Modern CSS med flexbox och grid
- Tillgänglighetsfokuserad design

## Fortsatt utveckling

För att fortsätta utvecklingen av designen:

1. Uppdatera BackgroundSection, GoalSection, TargetGroupSection, MethodSection, ResultsSection och ReflectionSection med samma stilistiska riktlinjer
2. Lägg till fler subtila animationer med Framer Motion
3. Överväg att implementera ett mörkt tema som fungerar med färgpaletterna

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
