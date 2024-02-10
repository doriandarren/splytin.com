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
                            type="text" 
                            id="day_of_week" 
                            v-model.trim="validate.day_of_week.$model"
                            :class="{'border-danger': validate.day_of_week.$error}"
                         />
                    </div>

                </div>


                

                <div class="col-span-6">

                    <div class="w-full">
                        <label class="block mb-1" for="is_first">Is first</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" 
                            id="is_first" 
                            v-model.trim="validate.is_first.$model"
                            :class="{'border-danger': validate.is_first.$error}"
                         />
                    </div>

                </div>

                <div class="col-span-6">

                    <div class="w-full">
                        <label class="block mb-1" for="is_last">Is last</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text"
                            id="is_last" 
                            v-model.trim="validate.is_last.$model"
                            :class="{'border-danger': validate.is_last.$error}"
                        />
                    </div>

                </div>
                 

                <div class="col-span-12">
                    <div class="w-full">
                        <label class="block mb-1" for="is_open">Is open</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" 
                            id="is_open" 
                            v-model.trim="validate.is_open.$model"
                            :class="{'border-danger': validate.is_open.$error}"
                        />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="price_usd">Price usd</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" 
                            id="price_usd" 
                            v-model.trim="validate.price_usd.$model"
                            :class="{'border-danger': validate.price_usd.$error}" 
                        />
                    </div>
                </div>

                <!-- day_of_week, is_first, is_last, is_open, price_usd, symbol -->

                
                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="symbol">Symbol</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" 
                            id="symbol" 
                            v-model.trim="validate.symbolymbol.$model"
                            :class="{'border-danger': validate.symbol.$error}"
                        />
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
import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import { reactive, toRefs } from 'vue';

const emit = defineEmits(['cancelCreate', 'saveMsftPriceForm']);


const rules = {
    day_of_week:{
        required: helpers.withMessage('required', required)
    },
    is_first:{
        required: helpers.withMessage('required', required)
    },
    is_last:{
        required: helpers.withMessage('required', required)
    },
    is_open:{
        required: helpers.withMessage('required', required)
    }, 
    price_usd:{
        required: helpers.withMessage('required', required)
    },
    symbol:{
        required: helpers.withMessage('required', required)
    }
}



const formData = reactive({
    day_of_week: "", 
    is_first: "",
    is_last: "",
    is_open: "",
    price_usd: "",
    symbol: "",
});

const validate = useVuelidate(rules, toRefs(FormData));

const save = async () => {
    validate.value.$touch();
    if (validate.value.$invalid) {
        //TODO
        console.log('no pasa');    
    } else {
        emit('saveMsftPriceForm', formData);
    }

}


</script>


<style lang="scss" scoped></style>