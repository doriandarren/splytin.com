<template>
    <!-- Menú de Navegación -->
    <nav class="bg-gray-600 p-8">

        <div class="container mx-auto flex justify-between items-center">

            <div class="flex items-center flex-shrink-0 mr-6">

                <RouterLink to="/">
                   <Logo />
                </RouterLink>
                
                <RouterLink to="/">
                    <LogoLetters />
                </RouterLink>

                <!-- <span class="font-semibold text-xl tracking-tight">
                    <RouterLink to="/" class="text-white text-4xl font-semibold">
                        Splytin
                    </RouterLink>
                </span> -->
            </div>


            <!-- Botón de Menú (Visible en Pantallas Pequeñas) -->
            <div class="lg:hidden">
                <button id="menu-toggle" class="focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>


            <!-- Menú de Navegación (Visible en Pantallas Grandes) -->
            <div class="hidden lg:flex items-center space-x-4 text-lg">
                <ul class="flex space-x-6 text-white mr-4">
                    <li>
                        <RouterLink :to="{ name: 'resources' }">{{ $t("resources") }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ name: 'login' }">{{ $t("login") }}</RouterLink>
                    </li>
                </ul>
            </div>


        </div>

    </nav>
</template>

<script setup>

import Logo from '@/components/template/images/Logo.vue';
import LogoLetters from '@/components/template/images/LogoLetters.vue';




</script>

<style lang="scss" scoped></style>