<template>
    
    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!-- Menu -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'home' }" class="hover:text-blue-300">Home</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-alerts' }" class="hover:text-blue-300">Alerts</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-forms' }" class="hover:text-blue-300">Forms</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-buttons' }" class="hover:text-blue-300">Buttons</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-badges' }" class="hover:text-blue-300">Badges</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-cards' }" class="hover:text-blue-300">Cards</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-avatars' }" class="hover:text-blue-300">Avatars</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-paginations' }" class="hover:text-blue-300">Paginations</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-component-breadcrumbs' }" class="hover:text-blue-300">Breadcrumbs</RouterLink>
            </li>
        </ul>
        <!-- End Menu -->
    </div>

    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!-- Menu -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog1' }" class="hover:text-blue-300">Blog1</RouterLink>
            </li>
        </ul>
        <!-- End Menu -->
    </div>

<div class="container mx-auto mt-20">
    <RouterView />
</div></template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<style lang="scss" scoped></style>