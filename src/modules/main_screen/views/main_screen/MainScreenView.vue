<template>


    <div class="min-h-screen bg-gray-100 p-8">
        <div class="max-w-7xl mx-auto">
            <header class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Módulos de la Aplicación</h1>
                <p class="text-lg text-gray-600">Selecciona un módulo para comenzar</p>
            </header>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div
                    class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="@/assets/Invoice.png" alt="Módulo 1" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Facturación</h2>
                        <p class="text-gray-600 mb-4">Facturación de proyectos</p>

                        <RouterLink :to="{ name: 'dashboard' }" class="hover:bg-primary-dark block">
                            <button class="btn-primary w-full">{{ $t("dashboard") }}</button>
                        </RouterLink>
                    </div>
                </div>

                <!-- Card 2 -->
                <div
                    class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="@/assets/generador.png" alt="Módulo 1" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Generador</h2>
                        <p class="text-gray-600 mb-4 overflow-hidden text-ellipsis">Generador de código</p>

                        <RouterLink :to="{ name: 'generator-form' }" class="hover:bg-primary-dark block">
                            <button class="btn-primary w-full">{{ $t("dashboard") }}</button>
                        </RouterLink>
                    </div>
                </div>



               

                <!-- Card 2 -->
                <!-- <div
                    class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/600x400" alt="Módulo 2" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Módulo 2</h2>
                        <p class="text-gray-600 mb-4">Descripción breve del módulo 2. Explica la funcionalidad principal
                            y cómo puede ser utilizado.</p>
                        <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">Ver más &rarr;</a>
                    </div>
                </div> -->

                <!-- Card 3 -->
                <!-- <div
                    class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="https://via.placeholder.com/600x400" alt="Módulo 3" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-3">Módulo 3</h2>
                        <p class="text-gray-600 mb-4">Descripción breve del módulo 3. Explica la funcionalidad principal
                            y cómo puede ser utilizado.</p>
                        <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">Ver más &rarr;</a>
                    </div>
                </div> -->

                 
            </div>
        </div>
    </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>
