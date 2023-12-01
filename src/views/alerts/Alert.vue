<template>
    <div>

        <div>Alerts</div>


        Simple

        <div class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg" role="alert">
            <p>A simple alert with text</p>
        </div>


        With close icon

        <div class="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
            <p>A simple alert with text and a right icon</p>
            <span class="absolute inset-y-0 right-0 flex items-center mr-4">
                <svg class="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20">
                    <path
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd" fill-rule="evenodd"></path>
                </svg>
            </span>
        </div>

        With link
        <div class="px-4 py-3 leading-normal text-orange-700 bg-orange-100 rounded-lg" role="alert">
            <p>A simple alert with text <a class="font-bold hover:underline" href="#">and a link</a>. Check it out!</p>
        </div>

        With header
        <div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg" role="alert">
            <p class="font-bold">You are the visitor 1000!</p>
            <p>A simple alert with text and header. Check it out!</p>
        </div>

    </div>

    With icon
    <div class="relative px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
        <span class="absolute inset-y-0 left-0 flex items-center ml-4">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
        </span>
        <p class="ml-6">A simple alert with text and an icon. Check it out!</p>
    </div>

    Filled background

    <div class="px-4 py-3 leading-normal text-red-100 bg-red-700 rounded-lg" role="alert">
        <p>A simple alert with text and an icon. Check it out!</p>
    </div>

    Filled header
    <div class="overflow-hidden leading-normal rounded-lg" role="alert">
        <p class="px-4 py-3 font-bold text-purple-100 bg-purple-800">You're being notified</p>
        <p class="px-4 py-3 text-purple-700 bg-purple-100 ">A simple alert with text and a filled header. Check it out!</p>
    </div>

    With border
    <div class="px-4 py-3 leading-normal text-indigo-700 border border-indigo-500 rounded-lg" role="alert">
        <p>A simple alert with text and borders!</p>
    </div>
</template>

<script setup>

</script>

<style scoped></style>