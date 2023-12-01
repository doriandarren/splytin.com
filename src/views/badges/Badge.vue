<template>
    <div>

        <div>Badges</div>


        Badge sizes
        <div><span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
            <span
                class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
            <span
                class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">99+</span>
        </div>

        Button with badge
        <div><button
                class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                <span class="mr-2">Button</span>
                <span
                    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">9</span>
            </button></div>

        Icon with badge
        <div>
            <span class="relative inline-block">
                <svg class="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
            </span>
            <span class="relative inline-block ml-8">
                <svg class="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
                    <path
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
                <span
                    class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
            </span>
        </div>


        Text badge
        <span
            class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">NEW</span>
        <span
            class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">NEW</span>


    </div>
</template>

<script setup>

</script>

<style  scoped></style>