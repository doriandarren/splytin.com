<template>
    <div>

        <!-- Barra superior -->
        <header class="bg-blue-500 py-4 px-6 flex justify-between items-center">
            <div>
                <h1 class="text-white text-lg font-semibold">Mi Sitio Web</h1>
            </div>
            <nav>
                <ul class="flex space-x-4 text-white">
                    <li><a href="#" class="hover:underline">Inicio</a></li>
                    <li><a href="#" class="hover:underline">Acerca</a></li>
                    <li><a href="#" class="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </header>

        <!-- Contenedor principal -->
        <div class="flex">
            <!-- Menú lateral izquierdo -->
            <aside class="bg-gray-800 text-gray-100 w-64 min-h-screen">
                <ul class="py-4">
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Inicio</a></li>
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Categoría 1</a></li>
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Categoría 2</a></li>
                    <li><a href="#" class="block py-2 px-4 hover:bg-gray-700">Categoría 3</a></li>
                </ul>
            </aside>

            <!-- Contenido principal -->
            <main class="flex-1 p-4">
                <h2 class="text-2xl font-semibold mb-4">Contenido Principal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nulla sed mauris vehicula commodo.
                    Nullam varius euismod metus, nec volutpat ex tincidunt nec.</p>
            </main>
        </div>

        <RouterView />

    </div>
</template>

<script setup>

console.log("PASA por protegido");

</script>

<style scoped></style>