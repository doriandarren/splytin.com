<template>
  <div class="flex flex-col min-h-screen">
    <TopBar />
    <main class="flex-grow">
        <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';
import Footer from '@/components/template/public/Footer.vue';
import TopBar from '@/components/template/public/TopBar.vue';


const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });

</script>

<style scoped></style>