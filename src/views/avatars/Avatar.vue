<template>
    <div>
        <div>Avatars</div>

        <div>Avatar sizes</div>
        
        <img class="inline object-cover w-16 h-16 mr-2 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />
        <img class="inline object-cover w-12 h-12 mr-2 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />
        <img class="inline object-cover w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />

        <pre>
                {{ Avatar_sizes }}
            </pre>

        <div>Avatar group</div>
        <div class="-space-x-4">
            <img class="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <img class="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <img class="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
        </div>

        <pre>
            {{ Avatar_group }}
        </pre>

        <div>Avatar with badge</div>
        <div class="relative inline-block">
            <img class="inline-block object-cover w-12 h-12 rounded-full"
                src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <span
                class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
        </div>
        
        <pre>
            Avatar_with_badge
        </pre>


    </div>
</template>

<script setup>

let Avatar_sizes = `<img class="inline object-cover w-16 h-16 mr-2 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />
        <img class="inline object-cover w-12 h-12 mr-2 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />
        <img class="inline object-cover w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image" />`;
let Avatar_group = `<div class="-space-x-4">
            <img class="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <img class="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <img class="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
                src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />`;

let Avatars_with_badge = `<div class="relative inline-block">
            <img class="inline-block object-cover w-12 h-12 rounded-full"
                src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Profile image" />
            <span
                class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
        </div>`;

</script>

<style scoped></style>