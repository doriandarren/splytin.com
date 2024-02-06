<template>
    <div>
        <h1>Editar</h1>

        <div class="w-full">
            <label class="block mb-1" for="day_of_week">Day of week</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="day_of_week"
                v-model="day_of_week" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="is_first">Is first</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="is_first"
                v-model="is_first" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="is_last">Is last</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="is_last"
                v-model="is_last" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="is_open">Is open</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="is_open"
                v-model="is_open" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="price_usd">Price usd</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="price_usd"
                v-model="price_usd" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="symbol">Symbol</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="symbol"
                v-model="symbol" 
            />
        </div>

        <div>
            <button class="btn-primary sm:w-auto mr-2 mt-3" @click.prevent='save'>Guardar</button>
            <button class="btn-danger sm:w-auto mr-2 mt-3" @click.prevent="emit('cancelEdit')">Cancelar</button>
        </div>

        



    </div>
</template>

<script setup>
    // console.log('Desde el Create');

    const emit = defineEmits(['cancelEdit','updateMsftPriceForm']);


    const save = async () => {
        emit('updateMsftPriceForm');

        
    }

</script>

<style lang="scss" scoped>

</style>