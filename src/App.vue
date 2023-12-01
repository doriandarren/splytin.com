

<template>
  
  <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
    <!-- Menu -->
    <ul class="flex space-x-6 mr-4 ">
        <li class="mr-5"><RouterLink to="/" class="hover:text-blue-300">Home</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/alerts" class="hover:text-blue-300">Alerts</RouterLink></li>
        <li class="mr-5"><RouterLink to="/forms" class="hover:text-blue-300">Forms</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/buttons" class="hover:text-blue-300">Buttons</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/badges" class="hover:text-blue-300">Badges</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/cards" class="hover:text-blue-300">Cards</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/avatars" class="hover:text-blue-300">Avatars</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/paginations" class="hover:text-blue-300">Paginations</RouterLink></li> 
        <li class="mr-5"><RouterLink to="/breadcrumbs" class="hover:text-blue-300">Breadcrumbs</RouterLink></li> 
    </ul>
    <!-- End Menu -->

  </div>

  <div class="container mx-auto mt-20" >
    <RouterView />
  </div>

  
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router';


</script>

<style scoped>

</style>
