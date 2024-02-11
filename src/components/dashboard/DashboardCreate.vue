<template>
    <div>
        <h1>Crear</h1>

        <form @submit.prevent="save">


            <div class="grid grid-cols-12 gap-6">


                <!-- title, comment_count, etag, favorite_count, kind, like_count, published_at, view_count -->


                <div class="col-span-12 md:col-span-6 lg:col-span-12">
                    <div class="w-full">
                        <label class="block mb-1" for="title">Titulo</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="title" v-model.trim="validate.title.$model"
                            :class="{ 'border-danger': validate.title.$error }" />
                    </div>
                </div>

                <div class="col-span-6">
                    <div class="w-full">
                        <label class="block mb-1" for="comment_count">Comment count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="comment_count" v-model.trim="validate.comment_count.$model"
                            :class="{ 'border-danger': validate.comment_count.$error }" />
                    </div>
                </div>

                <div class="col-span-6">
                    <div class="w-full">
                        <label class="block mb-1" for="etag">Etag</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="etag" v-model.trim="validate.etag.$model"
                            :class="{ 'border-danger': validate.etag.$error }" />
                    </div>
                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="favorite_count">Favorite count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="favorite_count" v-model.trim="validate.favorite_count.$model"
                            :class="{ 'border-danger': validate.favorite_count.$error }" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="kind">Kind</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="kind" v-model.trim="validate.kind.$model"
                            :class="{ 'border-danger': validate.kind.$error }" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="like_count">Like count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="like_count" v-model.trim="validate.like_count.$model"
                            :class="{ 'border-danger': validate.like_count.$error }" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="published_at">Published at</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="published_at" v-model.trim="validate.published_at.$model"
                            :class="{ 'border-danger': validate.published_at.$error }" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="view_count">View count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="view_count" v-model.trim="validate.view_count.$model"
                            :class="{ 'border-danger': validate.view_count.$error }" />
                    </div>

                </div>

                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="yt_id">YT id</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="yt_id" v-model.trim="validate.yt_id.$model"
                            :class="{ 'border-danger': validate.yt_id.$error }" />
                    </div>

                </div>

                <div class="col-span-12">

                    <div>
                        <button class="btn-primary mt-3 sm:w-auto mr-2" type="submit">Guardar</button>

                        <button class="btn-danger mt-3 sm:w-auto mr-2"
                            @click.prevent="emit('cancelCreate')">Cancelar</button>
                    </div>

                </div>



            </div>




        </form>



    </div>
</template>

<script setup>
import { required, minLength, maxLength, email, url, integer } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { helpers } from '@vuelidate/validators';
import { toRefs, reactive } from 'vue';



const emit = defineEmits(['cancelCreate', 'saveDashboardForm']);


const rules = {
    title: {
        required: helpers.withMessage('requerido', required)
    },
    comment_count: {
        required: helpers.withMessage('requerido', required)
    },
    etag: {
        required: helpers.withMessage('requerido', required)
    },
    favorite_count: {
        required: helpers.withMessage('requerido', required)
    },
    kind: {
        required: helpers.withMessage('requerido', required)
    },
    like_count: {
        required: helpers.withMessage('requerido', required)
    },
    published_at: {
        required: helpers.withMessage('requerido', required)
    },
    view_count: {
        required: helpers.withMessage('requerido', required)
    },
    yt_id: {
        required: helpers.withMessage('requerido', required)
    },
}


const formData = reactive({
    title: "nuevo titilo",
    comment_count: "1",
    etag: "2",
    favorite_count: "3",
    kind: "4",
    like_count: "5",
    published_at: "2023-01-01",
    view_count: "1",
    yt_id: "1",
});

const validate = useVuelidate(rules, toRefs(formData));


const save = async () => {

    validate.value.$touch();
    if (validate.value.$invalid) {
        //TODO
    } else {
        emit('saveDashboardForm', formData);
    }
};



</script>

<style lang="scss" scoped></style>