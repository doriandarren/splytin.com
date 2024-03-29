# Spytin Web

ownCompanies
country_id name tax address state municipality email phone zip_code website


companies
country_id name tax address state municipality email phone zip_code website


projects
company_id name total_hours current_hours started_at finished_at description


projectHours
project_id invoice_id hours invoice_at is_generated description


invoiceHeaders
invoice_counter_id own_company_id company_id number date due_date month year description vat_quote total_without_vat total_with_vat has_paid


invoiceLines
invoice_header_id vat unit_prices total description




## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



### sweetalert

Guide: [Vue Install](https://github.com/avil13/vue-sweetalert2).


```sh


npm install -S vue-sweetalert2

add main.js:

...

//sweetalert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

too:

app.use(VueSweetalert2)

...


```





### Tailwind

Guide: [Tailwind Install](https://tailwindcss.com/docs/guides/vite).


```sh

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

File tailwind.config.js edit:

...
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
...


```




### Animate

```sh

//Instalar
npm install animate.css --save


// Se creo una directive en la carpeta directive
// luego en el div:

...
 <div v-animate>
 ...
 </div>
...

```


### i18n

Guide: [Tailwind Install](https://dev.to/lucasferreiralimax/how-implementation-a-i18n-in-vue-3-4cen).


```sh

npm install vue-i18n@9 --save

Create the config file with name i18n.js


->>> START

import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

let i18n;

export const SUPPORT_LOCALES = ['pt', 'en', 'es'];

export function setI18nLanguage(locale) {
  loadLocaleMessages(locale);

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }

  document.querySelector('html').setAttribute('lang', locale);
  localStorage.setItem('lang', locale);
}

export async function loadLocaleMessages(locale) {
  // load locale messages with dynamic import
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`
  );

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

export default function setupI18n() {
  if(!i18n) {
    let locale = localStorage.getItem('lang') || 'pt';

    i18n = createI18n({
      globalInjection: true,
      legacy: false,
      locale: locale,
      fallbackLocale: 'pt'
    });

    setI18nLanguage(locale);
  }
  return i18n;
}

->>> END





Add in the file main.js

...

import i18n from './i18n';


app.use(i18n())

....



```




## Vuelidator

Guide: [Install](https://vuelidate-next.netlify.app/#installation).


```sh


npm install @vuelidate/core @vuelidate/validators


```



## VueGoodTablePlugin

Guide: [Install](https://borisflesch.github.io/vue-good-table-next/guide/).


```sh


npm install --save vue-good-table-next


- into app:

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

Vue.use(VueGoodTablePlugin);


```