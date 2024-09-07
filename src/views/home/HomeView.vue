<template>

  <div>

    <!-- <h1 class="sm:text-2xl text-2xl font-medium title-font text-gray-900 text-center mb-10">
      ¡Bienvenido a Splytin! Descubre la excelencia en entretenimiento con nuestros productos de alta calidad.
      <br>Explora y encuentra la solución perfecta para ti.
    </h1> -->


    <div class="custom-div">
      <div class="animations">
        <!-- Primera animación SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="none" />
          <path fill="#03AEEF" d="M4 16h4v4H4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".2"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 16h4v4h-4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".4"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 16h4v4h-4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".6"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M4 10h4v4H4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".8"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 10h4v4h-4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 10h4v4h-4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.2"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M4 4h4v4H4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.4"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 4h4v4h-4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.6"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 4h4v4h-4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.8"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
        </svg>

        <!-- Segunda animación SVG (idéntica a la primera) -->
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="none" />
          <path fill="#03AEEF" d="M4 16h4v4H4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".2"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 16h4v4h-4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".4"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 16h4v4h-4V16z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".6"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M4 10h4v4H4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin=".8"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 10h4v4h-4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 10h4v4h-4V10z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.2"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M4 4h4v4H4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.4"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M10 4h4v4h-4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.6"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
          <path fill="#03AEEF" d="M16 4h4v4h-4V4z">
            <animate fill="remove" accumulate="none" additive="replace" attributeName="opacity" begin="1.8"
              calcMode="linear" dur="3s" keyTimes="0;0.9;1" repeatCount="indefinite" restart="always" values="1;0;0" />
          </path>
        </svg>

      </div>

      <div class="slogan animated-slogan">
        Descubre el poder de la innovación con Splytin. Servicios tecnológicos a medida, plantillas que destacan.
        <div>¡Tu web, tu estilo, nuestra especialidad!</div>
      </div>
      <img src="@/assets/Logo_S_60X60.png" alt="Logo Splytin" class="logo" />


    </div>


  </div>

  <section class="body-font pt-10 mb-5">
    <div class="container mx-auto">
      <div class="flex flex-wrap w-full flex-col items-center text-center mb-10">
        <h1>
          {{ $t("Nuestros Videos") }}
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-10">

        <div class="col-span-2 md:col-span-2 lg:col-span-2">
          <iframe src="https://www.youtube.com/embed/VVYnVptxKKM" frameborder="0" allowfullscreen width="100%"
            class="w-full h-[300vh] sm:h-[30vh] md:h-[60vh]"></iframe>

          <div class="text-center w-full mb-10">
            <p class="text-2xl font-medium title-font mb-4 text-center">
              Nature Ambience Minecraft
            </p>
            <a href="https://www.youtube.com/@FamiliaMusicMDDD" target="_blank"
              class="mt-3 text-gray-600 inline-flex items-center">Más videos
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

        </div>


        <div class="col-span-2 md:col-span-2 lg:col-span-1">
          <iframe src="https://www.youtube.com/embed/je-NfsNOP3g" frameborder="0" allowfullscreen width="100%"
            height="300vh"></iframe>

          <div class="text-center w-full mb-10">
            <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
              Relaxing Melodies
            </h2>
            <a href="https://www.youtube.com/@FamiliaMusicMDDD" target="_blank"
              class="mt-3 text-gray-600 inline-flex items-center">Más videos
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

        </div>

        <div class="col-span-2 md:col-span-2 lg:col-span-1">
          <iframe src="https://www.youtube.com/embed/-o209ByIFcM" frameborder="0" allowfullscreen width="100%"
            height="300vh"></iframe>

          <div class="text-center w-full mb-10">
            <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
              Música que te ayuda a relajar, estudiar, dormir con Night Ambience
            </h2>
            <a href="https://www.youtube.com/@FamiliaMusicMDDD" target="_blank"
              class="mt-3 text-gray-600 inline-flex items-center">Más videos
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

        </div>


      </div>


    </div>
  </section>

  <section class="text-gray-600 body-font pt-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap w-full flex-col items-center text-center pb-10">
        <h1>Nuestros Productos</h1>
        <p class="w-full leading-relaxed text-gray-500 text-center">
          Pensado en todos y para todos
        </p>
      </div>
      <div class="flex flex-wrap -m-4">

        <div class="container mx-auto">
          <div v-animate>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div
                  class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Desarrollo de Software
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Soluciones Personalizadas
                  </h1>
                  <p class="leading-relaxed mb-3">Creamos software a medida para optimizar los procesos de tu empresa,
                    adaptándonos a tus necesidades específicas.</p>
                  <a class="text-indigo-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span
                      class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div
                  class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Diseño Web</h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Páginas Web Profesionales
                  </h1>
                  <p class="leading-relaxed mb-3">Diseñamos y desarrollamos sitios web modernos y responsivos para
                    mejorar tu presencia en línea.</p>
                  <a class="text-indigo-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span
                      class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div
                  class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Soporte Técnico</h2>
                  <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Soporte Continuo</h1>
                  <p class="leading-relaxed mb-3">Ofrecemos mantenimiento y soporte continuo para asegurar que tu
                    software y sitio web funcionen sin problemas.</p>
                  <a class="text-indigo-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span
                      class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                        stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                        </path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- Famimusic -->
        <div class="xl:w-1/3 md:w-1/2 p-4 mb-5">
          <a href="https://music.famindex.com/" target="_blank">
            <div
              class="border border-gray-200 bg-primary-light p-6 rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:rounded-lg hover:shadow-xl">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="currentColor"
                      d="M18.671 3.208A2 2 0 0 1 21 5.18V17a4 4 0 1 1-2-3.465V9.18L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973zM9 8.82l10-1.667V5.18L9 6.847z" />
                  </g>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Famimusic
              </h2>
              <p class="leading-relaxed text-base">Página de Música y entretenimiento</p>
            </div>
          </a>
        </div>
        <!-- Famindex -->
        <div class="xl:w-1/3 md:w-1/2 p-4 mb-5">
          <a href="https://famindex.com/" target="_blank">
            <div
              class="border border-gray-200 bg-primary-light p-6 rounded-lg hover:bg-blue-100 hover:border-blue-300 hover:rounded-lg hover:shadow-xl">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                  <path d="M3 8h18"></path>
                  <path d="M7 12h5"></path>
                  <path d="M7 16h5"></path>
                  <path d="M16 12h3"></path>
                  <path d="M16 16h3"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                Famindex
              </h2>
              <p class="leading-relaxed text-base">Podrás conseguir las mejores templates</p>
            </div>
          </a>
        </div>


      </div>
    </div>
  </section>



</template>

<script setup>

import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();




const sessionLogErrors = ref([]);






useHead({
  title: 'Home - Splytin',
  meta: [
    {
      name: 'description',
      content: 'Bienvenido a Splytin, tu destino para el mejor entretenimiento en línea. Descubre productos de alta calidad y disfruta de una experiencia única.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'keywords',
      content: 'entretenimiento, videos, música, productos de alta calidad, Splytin'
    },
    {
      name: 'author',
      content: 'Splytin'
    },
    {
      property: 'og:title',
      content: 'Splytin - Home'
    },
    {
      property: 'og:description',
      content: 'Bienvenido a Splytin, tu destino para el mejor entretenimiento en línea. Descubre productos de alta calidad y disfruta de una experiencia única.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://splytin.com/'
    },
    {
      property: 'og:image',
      content: '/img/splytin.svg'
    },
    {
      property: 'og:site_name',
      content: 'Splytin'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Splytin - Home'
    },
    {
      name: 'twitter:description',
      content: 'Bienvenido a Splytin, tu destino para el mejor entretenimiento en línea. Descubre productos de alta calidad y disfruta de una experiencia única.'
    },
    {
      name: 'twitter:image',
      content: '/img/splytin.svg'
    },
    {
      name: 'twitter:site',
      content: '@tu_twitter_handle'
    },
    {
      name: 'twitter:creator',
      content: '@tu_twitter_handle'
    }
  ]
});


</script>


<style>
.animations {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* Ocupa todo el alto del banner */
  margin-right: 20px;
  /* Espacio entre las animaciones y el contenido de texto */
}

.custom-div {
  width: 100%;
  height: 300px;
  /* Ajusta la altura según tus necesidades */
  background-color: #0A0A23;
  /* Tono azul oscuro similar al banner */
  position: relative;
  /* Posicionamiento relativo para la colocación absoluta */
  padding: 20px;
  /* Añade un poco de espacio alrededor del contenido */
  color: white;
  box-sizing: border-box;
  /* Asegura que el padding se incluya dentro del tamaño total del div */
  overflow: hidden;
  /* Oculta las partes de las líneas que salen del div */
}

.slogan {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  line-height: 1.5;
  text-align: center;
  color: rgb(255, 255, 255);
  max-width: 70%;
}

.logo {
  position: absolute;
  width: 60px;
  height: 60px;
  /* Ajusta la distancia desde el borde inferior */
  bottom: 30px;
  /* Ajusta la distancia desde el borde derecho */
  right: 40px;
}
</style>
