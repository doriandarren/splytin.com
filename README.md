# Spytin Web


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

then file assets -> main.css: 

...
/*
 |--------------------------------------------------------------------------
 | Tailwind Directives
 |--------------------------------------------------------------------------
 |
 | Import TailwindCSS directives and swipe out at build-time with all of
 | the styles it generates based on your configured design system.
 |
 */ 
@tailwind base;
@tailwind components;
@tailwind utilities;
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

Guide: [I18n](https://dev.to/lucasferreiralimax/how-implementation-a-i18n-in-vue-3-4cen).


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




## Preloader:

```sh 

<template>
    
    ...
    
    <Preloader v-if="loading" />
    
    ...

</template>




<script setup>
    ...

    //import 
    import Preloader from '@/components/preloader/Preloader.vue';

    //init
    const loading = ref(false);

    //set value
    loading.value = true; 

    ...

</script>

```




## headlessui:

```sh

npm install @headlessui/vue@latest

```



## heroicons:

```sh

npm install @heroicons/vue

```



## vue3-cookies:

```sh

  npm install vue3-cookies


// Create Component in folder components/coockies/CookieConsent.vue -> Copy code.


// Then import to App.vue file

  ...

  <CookieConsent />

  ...

  import CookieConsent from './components/CookieConsent.vue';

  ...

```



## SEO: vueuse/head

```sh

npm install @vueuse/head


//Main.js:
...
import { createHead } from '@vueuse/head';
...
const head = createHead();
app.use(head);


//Views Exmple Home.vue

...
import { useHead } from '@vueuse/head';
...
useHead({
  title: 'Home - PAGE',
  meta: [
    {
      name: 'description',
      content: 'Welcome to the home page of PAGE.',
    },
    {
      property: 'og:title',
      content: 'Home QQ Splytin',
    },
    {
      property: 'og:description',
      content: 'Welcome to the home page of PAGE.',
    },
    {
      property: 'og:image',
      content: 'URL_to_your_image',
    },
    {
      property: 'og:url',
      content: 'https://PAGE.com/',
    },
  ],
});


```



## Cargar el archivo robots.txt

Tiene que estar en la carpeta public del proyecto.

```sh

User-agent: *
Disallow: /admin/
Disallow: /login/
Allow: /

```


Registrarse en google search console, con una cuenta google ejemplo: cuenta_asociada@gmail.com.









## Select combobox:

```sh

npm install vue-select@beta

en main.js:

...
// vueselecu
import vSelect from 'vue-select';
...
app.component('v-select', vSelect);



Luego en XXXX.vue ejemplo: 

...
<v-select
    v-model="validate.country_id.$model"
    :options="countries"
    label="common_name"
    :reduce="country => country.id"
    :class="{ 'border-danger': validate.country_id.$error }"
    class="form-control"
></v-select>
...

...

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
...



Nota: para que funcione tuve que agregar en base.css en el ::before ::after:
...
--vs-border-color: #ffffff;
...
```