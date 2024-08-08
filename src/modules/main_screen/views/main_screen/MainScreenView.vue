<template>
    <div>
        <h1 class="text-center mb-10">
            Módulo Principal
        </h1>
        

        <div class="grid grid-cols-12 gap-6">

            <div class="col-span-12 md:col-span-6 lg:col-span-4">
            
                <div class="card text-center">

                    <h2 class="mb-10">Facturación </h2>

                    <RouterLink 
                        :to="{ name: 'dashboard' }" 
                        class="hover:bg-primary-dark"
                    >
                        <button class="btn-primary">{{ $t("dashboard")}}</button>
                    </RouterLink>
                    
                </div>

            </div>



            <div class="col-span-12 md:col-span-6 lg:col-span-4">
            
            <div class="card text-center">

                <h2 class="mb-10">Gestor de noticias </h2>

                <RouterLink 
                    :to="{ name: 'dashboard' }" 
                    class="hover:bg-primary-dark"
                >
                    <button class="btn-primary">{{ $t("dashboard")}}</button>
                </RouterLink>
                
            </div>

        </div>

        </div>
        



        <div class="cols-12 ">

            



        



        </div>

        
        
        

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

