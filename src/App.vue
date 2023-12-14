<template>
  <!-- Menú de Navegación -->
  <nav class="bg-gray-700 p-8">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="./assets/LogoSplytin.png" alt="Logo" class="w-10 h-10 mr-3">
        <span class="font-semibold text-xl tracking-tight">
          <RouterLink to="/" class="text-white text-4xl font-semibold">
            Splytin
          </RouterLink>
        </span>
      </div>

      <!-- Botón de Menú (Visible en Pantallas Pequeñas) -->
      <div class="lg:hidden">
        <button id="menu-toggle" class="text-white focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>


      <!-- Menú de Navegación (Visible en Pantallas Grandes) -->
      <div class="hidden lg:flex items-center space-x-4 text-lg">

        <ul class="flex space-x-6 text-white mr-4">
          <li>
            <RouterLink :to="{ name: 'resources' }" class="text-white">Recursos</RouterLink>
          </li>
        </ul>


      </div>

    </div>
  </nav>


  <!-- Menú de Navegación (Visible en Pantallas Grandes) -->
  <div id="menu" class="hidden lg:flex items-center space-x-4">
    <RouterLink :to="{ name: 'resources' }" class="text-white">Recursos</RouterLink>
  </div>



  <div class="container mx-auto">
    <RouterView />
  </div>
  <Footer />
</template>


<script setup>

import { RouterView } from 'vue-router';
import Footer from './components/template/Footer.vue';

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });

</script>

<style scoped></style>
