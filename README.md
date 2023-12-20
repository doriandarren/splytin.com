# Spytin Web

This template should help get you started developing with Vue 3 in Vite.

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


### Page Reference:

[Reference](https://tailwind-starter-kit.vercel.app/docs/alerts).


[Reference](https://tailblocks.cc/).







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
 <div v-animate >
 ...
 </div>
...

```