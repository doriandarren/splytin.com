<template>

  <!-- Banner -->
  <!-- <section class="bg-gray-800">
    <div class="container w-full">
      
      <img src="/public/img/img1.jpg" alt="img">
    </div>
  </section> -->


  <div class="container mx-auto mt-20">
    <h1 class="text-3xl mb-10">
      ¡Bienvenido a Splytin! Descubre la excelencia en entretenimiento con nuestros productos de alta calidad. Explora y
      encuentra la solución perfecta para ti.
    </h1>
  </div>


  <div class="container mx-auto">

    <h1 class="text-4xl">Videos a la carta</h1>

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

  </div>




  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full flex-col items-center text-center">
        <h1 class="sm:text-2xl text-2xl font-medium title-font mb-2 text-gray-900">Nuestros Productos</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Pensado en todos y para todos
        </p>
      </div>
      <div class="flex flex-wrap -m-4">

        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-200 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.671 3.208A2 2 0 0 1 21 5.18V17a4 4 0 1 1-2-3.465V9.18L9 10.847V18c0 .06-.005.117-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973zM9 8.82l10-1.667V5.18L9 6.847z"/></g></svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2"><a href="https://music.famindex.com/" target="_blank">Famimusic</a></h2>
            <p class="leading-relaxed text-base">Página de Música y entretenimiento</p>
          </div>
        </div>

        

      </div>

      <button
        class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
    </div>
  </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import bgImg from '@/assets/img1.jpg';


const videoUrl1 = ref('https://www.youtube.com/embed/');
const videoUrl2 = ref('https://www.youtube.com/embed/');
const videoUrl3 = ref('https://www.youtube.com/embed/');
const videoUrl4 = ref('https://www.youtube.com/embed/');



const imagen = ref();



const findData = async () => {

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  }



  //await fetch(`${import.meta.env.VITE_API_URL_GLOBALFLEET}session-logs/list`,{
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




onMounted(() => {

  imagen.value = bgImg;
  findData();

  

  // console.log('Configurando meta description');
  // const metaDescription = 'Descripción única para este componente';
  // document.querySelector('meta[name="description"]').setAttribute('content', metaDescription);


})



</script>


<style>

</style>