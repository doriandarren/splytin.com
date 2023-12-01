<template>

  <div class="container mx-auto mt-20" >
    <RouterView />
  </div>
  <Footer />
  
</template>


<script setup>
  
  import { RouterView } from 'vue-router';
  import Footer from './components/template/Footer.vue';

</script>

<style scoped>

</style>
