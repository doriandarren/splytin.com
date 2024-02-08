<template>
    <div>
        <h1>Crear</h1>

        <form @submit.pevent="save">


            <div class="grid grid-cols-12 gap-6">


                <div class="col-span-12 md:col-span-6 lg:col-span-12">
                    <div class="w-full">
                        <label class="block mb-1" for="title">Titulo</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="title" v-model="title" />
                    </div>
                </div>

                <div class="col-span-6">
                    <div class="w-full">
                        <label class="block mb-1" for="comment_count">Comment count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="comment_count" v-model="comment_count" />
                    </div>
                </div>

                <div class="col-span-6">
                    <div class="w-full">
                        <label class="block mb-1" for="etag">Etag</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="etag" v-model="etag" />
                    </div>
                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="favorite_count">Favorite count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="favorite_count" v-model="favorite_count" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="kind">Kind</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="kind" v-model="kind" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="like_count">Like count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="like_count" v-model="like_count" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="published_at">Published at</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="published_at" v-model="published_at" />
                    </div>

                </div>


                <div class="col-span-12">

                    <div class="w-full">
                        <label class="block mb-1" for="view_count">View count</label>
                        <input
                            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                            type="text" id="view_count" v-model="view_count" />
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

const emit = defineEmits(['cancelCreate', 'saveDashboardForm']);

const save = () => {
    emit('saveDashboardForm');
}



</script>

<style lang="scss" scoped></style>