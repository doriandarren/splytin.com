# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

## update Astro

```sh

npx @astrojs/upgrade

```


## 🚀 Project Structure

Folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── components/
│       └── Nabvar/
│           └── LangSelector.jsx
│           └── Nabvar.astro
│   └── i18n/
│       └── en.json
│       └── es.json
│       └── utils.ts
│   └── layouts/
│       └── MainLayout.astro
│   └── pages/
│       └── [lang]/
│           └── index.astro
│           └── contact.astro
│           └── about.astro
│       └── index.astro
│   └── styles/
│       └── gobal.css
└── .gitignore
└── astro.config.mjs
└── package.json
└── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Libraries

## i18n

```sh
1. Creamos esta estructura:
src/pages/
├── [lang]/
│   └── index.astro  ← Solo uno para todos los idiomas
src/i18n/
├── es.json
├── en.json

2. Agregar en astro.config.mjs

i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true }
}

3. Copiar en el archivo src/pages/[lang]/index.astro

---
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

// 👇 Esta es la parte nueva que necesitas
export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } }
  ];
}

const lang = getLangFromUrl(Astro.url); // Detecta el idioma desde la URL
const t = useTranslations(lang);        // Carga las traducciones


---

<html lang={lang}>
  <head>
    <title>{t("home.title")}</title>
  </head>
  <body>
    <h1>{t("home.heading")}</h1>
    <p>{t("home.description")}</p>
  </body>
</html>


4. Crea Archivo utils.js o utils.ts (en src/i18n/utils.ts)


import es from './es.json';
import en from './en.json';

export const languages = { es, en } as const;

type TranslationObject = typeof es;

// Profundiza en el objeto para obtener todas las claves tipo "home.title"
type DeepKeys<T, P extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? DeepKeys<T[K], `${P}${K & string}.`>
    : `${P}${K & string}`;
}[keyof T];

export type TranslationKey = DeepKeys<TranslationObject>;

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: TranslationKey): string {
    return key
      .split('.')
      .reduce((obj: any, segment: string) => obj?.[segment], languages[lang]) || key;
  };
}


5. Traducciones en src/i18n/es.json y src/i18n/en.json

es.json
{
  "home": {
    "title": "Home",
    "heading": "Welcome",
    "description": "This is the English version."
  }
}

en.json

{
  "home": {
    "title": "Home",
    "heading": "Welcome",
    "description": "This is the English version."
  }
}


```






## Tailwind

Entramos a la documentación de AstroJS

```sh

npx astro add tailwind


```



## React

Entramos a la documentación de AstroJS

```sh

npx astro add react


```



## Map 

Instalar Leaflet.

```sh

npm install leaflet

Crear componente react y llamarlo luego


```

## Aos

Instalar AOS.

```sh

npm install aos



En MainLayout se agrega un script: 
---
import 'aos/dist/aos.css';  // Importa los estilos de AOS en el layout global
import AOS from 'aos';
---

<script>
  import AOS from 'aos';
  AOS.init();
</script>

Se crea un fichero en src/types/aos.d.ts y se agrega:

declare module 'aos';


```

## Swiper

Instalar swiper para el componente menu

```sh

npm install swiper

Crear componente menu 


```
