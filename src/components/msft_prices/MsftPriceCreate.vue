<template>
    <div>
        <h1>Crear</h1>

        <form @submit.prevent="save">

            <div class="grid grid-cols-12 gap-6">

                <div class="col-span-12 md:col-span-6 lg:col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="day_of_week">Day of week</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="day_of_week" v-model="day_of_week" />
                    </div>

                </div>

                <div class="col-span-6">

                    <div class="w-full">
                        <label class="block mb-1" for="is_first">Is first</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="is_first" v-model="is_first" />
                    </div>

                </div>

                <div class="col-span-6">

                    <div class="w-full">
                        <label class="block mb-1" for="is_last">Is last</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="is_last" v-model="is_last" />
                    </div>

                </div>


                <div class="col-span-12">
                    <div class="w-full">
                        <label class="block mb-1" for="is_open">Is open</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="is_open" v-model="is_open" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="price_usd">Price usd</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="price_usd" v-model="price_usd" />
                    </div>
                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="symbol">Symbol</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="symbol" v-model="symbol" />
                    </div>
                </div>


                <div class="col-span-12">

                    <div>
                        <button class="btn-primary sm:w-auto mr-2 mt-3" type="submit">Guardar</button>

                        <button class="btn-danger sm:w-auto mr-2 mt-3" @click.prevent="emit('cancelCreate')">Cancelar</button>
                    </div>

                </div>

            </div>


        </form>



    </div>
</template>

<script setup>
// console.log('Desde el Create');

const emit = defineEmits(['cancelCreate', 'saveMsftPriceForm']);


const save = async () => {
    emit('saveMsftPriceForm');


}


</script>


<style lang="scss" scoped></style>