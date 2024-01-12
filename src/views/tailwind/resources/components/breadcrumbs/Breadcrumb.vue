<template>
    <div>

        <div>Breadcrumbs</div>


        <div>Simple breadcrumb</div>
        <nav aria-label="breadcrumb">
            <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li class="pr-4"><a href="#">Home</a></li>
                <li class="px-4 text-gray-700" aria-current="page">Blog</li>
            </ol>
        </nav>

        <nav class="mt-8" aria-label="breadcrumb">
            <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li class="pr-4"><a href="#">Home</a></li>
                <li class="px-4"><a href="#">Blog</a></li>
                <li class="px-4 text-gray-700" aria-current="page">This week</li>
            </ol>
        </nav>

        <pre>
            {{ Simple_breadcrumb }}
        </pre>

    </div>
</template>

<script setup>

let Simple_breadcrumb = `<nav aria-label="breadcrumb">
            <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li class="pr-4"><a href="#">Home</a></li>
                <li class="px-4 text-gray-700" aria-current="page">Blog</li>
            </ol>
        </nav>

        <nav class="mt-8" aria-label="breadcrumb">
            <ol class="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                <li class="pr-4"><a href="#">Home</a></li>
                <li class="px-4"><a href="#">Blog</a></li>
                <li class="px-4 text-gray-700" aria-current="page">This week</li>
            </ol>
        </nav>`;

</script>

<style scoped></style>