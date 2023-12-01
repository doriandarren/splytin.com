<template>
    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!-- Menu -->
        <ul class="flex space-x-6 mr-4 ">
            <li class="mr-5">
                <RouterLink :to="{ name: 'home' }" class="hover:text-blue-300">Home</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-alerts' }" class="hover:text-blue-300">Alerts</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-forms' }" class="hover:text-blue-300">Forms</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-buttons' }" class="hover:text-blue-300">Buttons</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-badges' }" class="hover:text-blue-300">Badges</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-cards' }" class="hover:text-blue-300">Cards</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-avatars' }" class="hover:text-blue-300">Avatars</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-paginations' }" class="hover:text-blue-300">Paginations</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'resources-breadcrumbs' }" class="hover:text-blue-300">Breadcrumbs</RouterLink>
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