<template>
  <div class="flex flex-col min-h-screen">
    <TopBar />
    <main class="flex-grow">
        <RouterView />
    </main>
    <Footer ref="footer" />
  </div>
</template>

<script setup>

import { watch, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Footer from '@/components/template/public/Footer.vue';
import TopBar from '@/components/template/public/TopBar.vue';

// Observamos el cambio de ruta
const route = useRoute();
const footer = ref(null);

watch(route, () => {
  // Reiniciamos la animación del footer al cambiar de ruta
  const footerElement = footer.value.$el || footer.value; 
  footerElement.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__fast');
  void footerElement.offsetWidth; // Forzamos el reflow para reiniciar la animación
  footerElement.classList.add('animate__animated', 'animate__fadeInUp', 'animate__fast');
});



</script>

<style scoped>
/* Estilos de transición para las rutas */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>