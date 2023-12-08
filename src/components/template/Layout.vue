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
        <!-- Blog -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog1' }" class="hover:text-blue-300">Blog1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog2' }" class="hover:text-blue-300">Blog2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog3' }" class="hover:text-blue-300">Blog3</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog4' }" class="hover:text-blue-300">Blog4</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-blog5' }" class="hover:text-blue-300">Blog5</RouterLink>
            </li>
        </ul>
        <!-- End -->

        <!-- Separator -->
        <div class="mr-4">
            |
        </div>
        <!-- End -->


         <!-- Contact -->
         <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact1' }" class="hover:text-blue-300">Contact1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact2' }" class="hover:text-blue-300">Contact2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact3' }" class="hover:text-blue-300">Contact3</RouterLink>
            </li>
        </ul>
        <!-- End -->



        <!-- Separator -->
        <div class="mr-4">
            |
        </div>
        <!-- End -->


         <!-- Contact -->
         <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact1' }" class="hover:text-blue-300">Contact1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact2' }" class="hover:text-blue-300">Contact2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-contact3' }" class="hover:text-blue-300">Contact3</RouterLink>
            </li>
        </ul>
        <!-- End -->

    </div>



    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!-- Content -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content1' }" class="hover:text-blue-300">Content1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content2' }" class="hover:text-blue-300">Content2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content3' }" class="hover:text-blue-300">Content3</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content4' }" class="hover:text-blue-300">Content4</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content5' }" class="hover:text-blue-300">Content5</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content6' }" class="hover:text-blue-300">Content6</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content7' }" class="hover:text-blue-300">Content7</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content8' }" class="hover:text-blue-300">Content8</RouterLink>
            </li>
        </ul>
        <!-- End -->

        <!-- Separator -->
        <div class="mr-4">
            |
        </div>


        <!-- CTA -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-cta1' }" class="hover:text-blue-300">Cta1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-cta2' }" class="hover:text-blue-300">Cta2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-cta3' }" class="hover:text-blue-300">Cta3</RouterLink>
            </li>
        </ul>


    </div>




    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!-- Ecommerce -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce1' }" class="hover:text-blue-300">Ecommerce1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce2' }" class="hover:text-blue-300">Ecommerce2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce3' }" class="hover:text-blue-300">Ecommerce3</RouterLink>
            </li>
        </ul>
        <!-- End -->

        <!-- Separator -->
        <div class="mr-4">
            |
        </div>


         <!-- Feature -->
         <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature1' }" class="hover:text-blue-300">Feature1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature2' }" class="hover:text-blue-300">Feature2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature3' }" class="hover:text-blue-300">Feature3</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature4' }" class="hover:text-blue-300">Feature4</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature5' }" class="hover:text-blue-300">Feature5</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature6' }" class="hover:text-blue-300">Feature6</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature7' }" class="hover:text-blue-300">Feature7</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-feature8' }" class="hover:text-blue-300">Feature8</RouterLink>
            </li>
        </ul>


    </div>




    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!--  -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-footer1' }" class="hover:text-blue-300">Footer1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-footer2' }" class="hover:text-blue-300">Footer2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-footer3' }" class="hover:text-blue-300">Footer3</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-footer4' }" class="hover:text-blue-300">Footer4</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-footer5' }" class="hover:text-blue-300">Footer5</RouterLink>
            </li>
        </ul>
        <!-- End -->

        <!-- Separator -->
        <div class="mr-4">
            |
        </div>

    </div>





    <div class="flex justify-center rounded-lg  m-10 bg-slate-100">
        <!--  -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-content1' }" class="hover:text-blue-300">Content1</RouterLink>
            </li>
        </ul>
        <!-- End -->

        <!-- Separator -->
        <div class="mr-4">
            |
        </div>

    </div>




<div class="container mx-auto mt-20">
    <RouterView />
</div></template>

<script setup>

import { RouterLink, RouterView } from 'vue-router';

</script>

<style lang="scss" scoped></style>