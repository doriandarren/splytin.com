<template>
    <div class="flex flex-col h-screen">
      <!-- Barra superior -->
      <header class="bg-blue-500 text-white p-4 text-lg font-semibold">
        Barra Superior
        <!-- Botón para dispositivos móviles -->
        <button @click="toggleSidebar" class="md:hidden">
          <span>Menú</span>
        </button>
      </header>
  
      <!-- Contenido principal y menú lateral -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Menú lateral -->
        <nav :class="{'block': isSidebarOpen, 'hidden': !isSidebarOpen}" class="bg-blue-100 w-64 p-5 md:block">
          Menú Lateral
          <ul class="mt-4">
            <li><a href="#" class="block py-2 hover:bg-blue-200">Inicio</a></li>
            <li><a href="#" class="block py-2 hover:bg-blue-200">Perfil</a></li>
            <li><a href="#" class="block py-2 hover:bg-blue-200">Mensajes</a></li>
            <li><a href="#" class="block py-2 hover:bg-blue-200">Configuración</a></li>
          </ul>
        </nav>
  
        <!-- Contenido -->
        <main class="flex-1 p-5 overflow-auto">
          <RouterView />
        </main>
      </div>
    </div>
  </template>
<script setup>

import { ref } from 'vue';

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<style scoped></style>