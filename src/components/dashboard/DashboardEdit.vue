<template>
    <div>
        <h1>Edit</h1>
        

        <div class="w-full">
            <label class="block mb-1" for="title">Titulo</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="title"
                v-model="title" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="channel_id">Channel id</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="channel_id"
                v-model="channel_id" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="comment_count">Comment count</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="comment_count"
                v-model="comment_count" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="etag">Etag</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="etag"
                v-model="etag" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="favorite_count">Favorite count</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="favorite_count"
                v-model="favorite_count" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="kind">Kind</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="kind"
                v-model="kind" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="like_count">Like count</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="like_count"
                v-model="like_count" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="published_at">Published at</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="published_at"
                v-model="published_at" 
            />
        </div>

        <div class="w-full">
            <label class="block mb-1" for="view_count">View count</label>
            <input 
                class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text" 
                id="view_count"
                v-model="view_count" 
            />
        </div>

        <div>
            <button class="btn-primary mt-3 sm:w-auto mr-2" @click.prevent="save">Guardar</button>

            <button class="btn-danger mt-3 sm:w-auto mr-2" @click.prevent="emit('cancelEdit')">Cancelar</button>
        </div>


    </div>
</template>

<script setup>

const emit = defineEmits(['cancelEdit', 'updateDashboardForm']);

const save = () => {
    emit('updateDashboardForm'); 
}



</script>

<style lang="scss" scoped>

</style>