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
            <li>
              <RouterLink 
                :to="{ name: 'dashboard' }" 
                class="block py-2 hover:bg-blue-200"
              >
                Inicio
              </RouterLink>
            </li>

            <!-- <li>
              <RouterLink 
                :to="{ name: 'categories' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Categories
              </RouterLink>
            </li> -->

            <!-- <li>
              <RouterLink 
                :to="{ name: 'msft-prices' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Msft Prices
              </RouterLink>
            </li> -->

            <li>
              <RouterLink 
                :to="{ name: 'companies' }" 
                class="block py-2 hover:bg-blue-200"
              >
              companies
              </RouterLink>
            </li>

              <li>
              <RouterLink 
                :to="{ name: 'own_companies' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Own Companies
              </RouterLink>
              </li>

              <li>
              <RouterLink 
                :to="{ name: 'projects' }" 
                class="block py-2 hover:bg-blue-200"
              >
              projects
              </RouterLink>
              </li>
          
            <li>
              <RouterLink 
                :to="{ name: 'project_hours' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Project Hours
              </RouterLink>
            </li>

            <li>
              <RouterLink 
                :to="{ name: 'invoice_headers' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Invoice Headers
              </RouterLink>
            </li>

            <li>
              <RouterLink 
                :to="{ name: 'invoice_lines' }" 
                class="block py-2 hover:bg-blue-200"
              >
              Invoice Lines
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

const isSidebarOpen = ref(false);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<style scoped></style>