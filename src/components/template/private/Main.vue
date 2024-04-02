<template>
  <div class="flex flex-col h-screen">
    <!-- Barra superior -->
    <header class="bg-blue-500 text-white p-4 text-lg font-semibold">
      <!-- Botón para dispositivos móviles -->
      <!-- <button @click="toggleSidebar" class="md:hidden">
        <span>Menú</span>
      </button> -->
      <div>
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center">
            <a href="/" class="text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Splytin
            </a>
            <!-- Cualquier otro elemento que quieras a la izquierda -->
          </div>
          <div>
            <!-- El botón queda a la derecha debido a justify-between en el contenedor padre -->
            <button @click="logOut" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {{ $t('logout') }}
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal y menú lateral -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Menú lateral -->
      <nav :class="{ 'block': isSidebarOpen, 'hidden': !isSidebarOpen }" class="bg-blue-100 w-64 p-5 md:block">

        <ul class="mt-4">
          <li>
            <RouterLink :to="{ name: 'dashboard' }" class="block py-2 hover:bg-blue-200">
              {{ $t('dashboard') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'companies' }" class="block py-2 hover:bg-blue-200">
              {{ $t('companies') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'own_companies' }" class="block py-2 hover:bg-blue-200">
              {{ $t('own_companies') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'projects' }" class="block py-2 hover:bg-blue-200">
              {{ $t('projects') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'project_hours' }" class="block py-2 hover:bg-blue-200">
              {{ $t('project_hours') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'invoice_headers' }" class="block py-2 hover:bg-blue-200">
              {{ $t('invoice_headers') }}
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ name: 'invoice_lines' }" class="block py-2 hover:bg-blue-200">
              {{ $t('invoice_lines')}}
            </RouterLink>
          </li>

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
import { useI18n } from 'vue-i18n';

const isSidebarOpen = ref(false);
const { t } = useI18n();

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}



const logOut = () => {
  console.log('Log Out');
}

</script>

<style scoped></style>