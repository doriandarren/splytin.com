<template>
    <div>
        <div>
            Pantalla de Modulos
        </div>
        


        
        <div class="mt-5">

            <button class="text-white btn-primary">
                <RouterLink 
                    :to="{ name: 'dashboard' }" 
                    class="hover:text-blue-300"
                >
                    Dashboard
                </RouterLink>
            </button>

        </div>
        

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

