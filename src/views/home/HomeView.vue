<template>

  <div v-animate>

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
      <div class="flex flex-wrap w-full flex-col items-center text-center mb-10">
        <h1>
          Videos a la carta
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-10">

        <div class="col-span-2 md:col-span-2 lg:col-span-1">
          <iframe :src="videoUrl1" frameborder="0" allowfullscreen width="100%" height="300vh"></iframe>
        </div>

        <div class="col-span-2 md:col-span2 lg:col-span-1">
          <iframe :src="videoUrl2" frameborder="0" allowfullscreen width="100%" height="300vh"></iframe>
        </div>


        <div class="col-span-2 md:col-span-2 lg:col-span-1">
          <iframe :src="videoUrl3" frameborder="0" allowfullscreen width="100%" height="300vh"></iframe>
        </div>


        <div class="col-span-2 md:col-span2 lg:col-span-1">
          <iframe :src="videoUrl4" frameborder="0" allowfullscreen width="100%" height="300vh"></iframe>
        </div>

      </div>

      <!-- https://www.youtube.com/watch?v=YaoF20yvUXM&t=1807s -->

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

        <div class="xl:w-1/3 md:w-1/2 p-4">
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


      </div>
    </div>
  </section>



</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const videoUrl1 = ref('https://www.youtube.com/embed/');
const videoUrl2 = ref('https://www.youtube.com/embed/');
const videoUrl3 = ref('https://www.youtube.com/embed/');
const videoUrl4 = ref('https://www.youtube.com/embed/');


const sessionLogErrors = ref([]);


const findData = async () => {

  let config = {
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${localStorage.getItem('splytin_token')}`
    }
  }



  //await fetch(`${import.meta.env.VITE_API_URL}session-logs/list`,{
  await fetch(`https://api.splytin.com/api/v1/youtube-videos/list`, {
    method: 'GET',
    headers: config.headers,
  })
    .then(res => res.json())
    .then((res) => {
      videoUrl1.value = videoUrl1.value + res.data[0].yt_id;
      videoUrl2.value = videoUrl2.value + res.data[1].yt_id;
      videoUrl3.value = videoUrl3.value + res.data[2].yt_id;
      videoUrl4.value = videoUrl4.value + res.data[3].yt_id;
    })
    .catch((e) => {
      sessionLogErrors.value.push(t("errors.error_internal"));
    });

}




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



onMounted(() => {
  findData();
})



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

.animated-slogan {
  animation: moveSlogan 3s ease-in-out infinite alternate;
}

@keyframes moveSlogan {
  0% {
    transform: translate(-50%, -50%) translateY(0);
  }

  100% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
</style>
