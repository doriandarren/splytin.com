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