<template>
    <!-- Menú de Navegación -->
    <nav class="bg-gray-600 p-8">

        <div class="container mx-auto flex justify-between items-center">

            <div class="flex items-center flex-shrink-0 mr-6">

                <RouterLink to="/">
                    <svg class="w-10 h-10 mr-3" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 904.79 991.96"><defs><radialGradient id="Degradado_sin_nombre_8" cx="449.25" cy="516.28" r="136.76" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="0.57" stop-color="#1e77bc"/></radialGradient></defs><path d="M590.08,10.72" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10"/><ellipse cx="449.25" cy="516.28" rx="131.6" ry="141.72" style="fill:url(#Degradado_sin_nombre_8)"/><path d="M995,253.68" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M964.63,162.57" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10"/><path d="M934.26,203.06" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M964.63,20.85V192.94H934.26c-17.31-.2-34.21-.2-50.61,0-362,4.25-534.5,101.23-536.53,101.23-179.58,99.71-103.56,327.28-101.33,334C63.68,557.27,104.17,354.91,104.17,354.91c7.93-42.28,27.51-81.46,53.3-115.64,23.41-31,51.73-58.19,82.36-82,44.22-34.4,91.65-62.38,145.87-77.58,15.32-4.29,30.84-7.86,46.42-11.12,32.34-6.78,65-12,97.74-16.47,35.68-4.89,71.47-8.85,107.32-12.27q53.27-5.09,106.66-8.66,47.86-3.27,95.8-5.63,37.35-1.84,74.72-3.19,21.71-.77,43.43-1.34Z" transform="translate(-59.84 -20.85)" style="fill:#03aeef"/><path d="M867.31,160" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M790.89,153.6" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:lime;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M778,140.73" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:lime;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M929.2,53.75V160H882.51a15.08,15.08,0,1,1-.23-15.19H914V68.93H792.16a15,15,0,1,1,.23-15.18Z" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9"/><path d="M905.89,98.77a15,15,0,0,1-15,15,14.66,14.66,0,0,1-12.6-6.91H805.45v45.56h-61.2a15,15,0,0,1-27.63-7.6v-.53a15,15,0,0,1,28.24-7.06h45.4V91.71h87.46a15,15,0,0,1,28.17,7.06Z" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9"/><path d="M29.47,780" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M59.84,871.08" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10"/><path d="M90.21,830.59" transform="translate(-59.84 -20.85)" style="fill:none;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M59.84,1012.81V840.71H90.21c17.31.21,34.22.21,50.61,0,362-4.25,534.5-101.23,536.53-101.23,179.58-99.71,103.56-327.28,101.33-334C960.79,476.38,920.3,678.74,920.3,678.75,912.37,721,892.79,760.21,867,794.38c-23.41,31-51.73,58.19-82.36,82C740.42,910.79,693,938.77,638.77,954c-15.32,4.3-30.84,7.86-46.42,11.12-32.34,6.78-65,12-97.74,16.47-35.68,4.89-71.47,8.86-107.31,12.27q-53.28,5.08-106.67,8.66-47.87,3.27-95.8,5.63-37.35,1.85-74.72,3.19-21.7.78-43.43,1.34Z" transform="translate(-59.84 -20.85)" style="fill:#1e77bc"/><path d="M157.16,873.61" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:#a4e80f;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M233.58,880.05" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:lime;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M246.46,892.93" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9;stroke:lime;stroke-miterlimit:10;stroke-width:0.5px"/><path d="M95.27,979.91V873.61H142a15.08,15.08,0,1,1,.23,15.19H110.46v75.92H232.31a15,15,0,1,1-.23,15.19Z" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9"/><path d="M118.58,934.88a15,15,0,0,1,15-15,14.66,14.66,0,0,1,12.6,6.91H219V881.21h61.19a15,15,0,0,1,27.64,7.59v.53a15,15,0,0,1-28.25,7.06h-45.4V942H146.75a15,15,0,0,1-28.17-7.07Z" transform="translate(-59.84 -20.85)" style="fill:#f9f9f9"/></svg>
                </RouterLink>
                
                <RouterLink to="/">
                    <svg class="w-36 h-10" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1901.95 234.98"><path d="M233.15,111.63c55.43,0,85.36,20.74,85.36,62.23,0,46.6-28.23,74.48-97.6,74.48H9.05l45.23-58.49H226.35c16.66,0,24.14-4.77,24.14-16.67,0-11.56-7.48-16.32-24.14-16.32H102.57c-58.5,0-85.36-26.19-85.36-65.29,0-42.85,28.56-70.74,97.6-70.74H312.39L267.16,80H109.37C93,80,85.22,84.09,85.22,95.65s7.82,16,24.15,16Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M538.25,190.19h-119v58.15H349.17V132H545.05c21.77,0,34.35-10.55,34.35-26.19,0-16-12.58-25.84-34.35-25.84H349.17l46.59-59.18H538.59c70.39,0,111.54,34.69,111.54,85.36C650.13,156.52,609,190.19,538.25,190.19Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M932.45,189.85l-45.56,58.49h-201V20.83H756.3v169Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M1198.42,20.83l-135,152.35v75.16H992.68V172.85l-138.75-152h90.46L998.8,84.09c7.14,8.16,26.19,28.9,30.94,35.7,4.43-6.46,12.25-16.32,28.57-36.05L1110,20.83Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M1504.88,20.83,1459.32,80H1378V248.34h-70.39V80H1200.86l45.57-59.18Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M1597.78,248.34h-70.39V20.83h70.39Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/><path d="M1844,239.84,1704.58,114.69V248.34h-63.94V59.6c0-30.27,18.37-42.51,38.43-42.51,8.5,0,17,2,28.23,12.24l139.43,125.15V20.83H1911v188.4c0,30.26-18.36,42.85-38.77,42.85C1863.39,252.08,1854.89,250,1844,239.84Z" transform="translate(-9.05 -17.09)" style="fill:#03aeef"/></svg>
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

</script>

<style lang="scss" scoped></style>