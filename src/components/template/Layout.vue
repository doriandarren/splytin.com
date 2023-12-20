<template>
    <div class="container mx-auto" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">

        <div class="flex justify-center rounded-lg bg-gray-400">
            <!-- Menu -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-alerts' }" class="hover:text-blue-300">Alerts
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-forms' }" class="hover:text-blue-300">Forms
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-buttons' }" class="hover:text-blue-300">Buttons
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-badges' }" class="hover:text-blue-300">Badges
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-cards' }" class="hover:text-blue-300">Cards
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-avatars' }" class="hover:text-blue-300">Avatars
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-paginations' }" class="hover:text-blue-300">
                        Paginations</RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-component-breadcrumbs' }" class="hover:text-blue-300">
                        Breadcrumbs</RouterLink>
                </li>
            </ul>
            <!-- End Menu -->
        </div>


        <div class="flex justify-center rounded-lg bg-slate-100">
            <!-- Blog -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-blog1' }" class="hover:text-blue-300">Blog1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-blog2' }" class="hover:text-blue-300">Blog2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-blog3' }" class="hover:text-blue-300">Blog3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-blog4' }" class="hover:text-blue-300">Blog4
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-blog5' }" class="hover:text-blue-300">Blog5
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->


            <!-- Contact -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact1' }" class="hover:text-blue-300">Contact1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact2' }" class="hover:text-blue-300">Contact2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact3' }" class="hover:text-blue-300">Contact3
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->




            <!-- Contact -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact1' }" class="hover:text-blue-300">Contact1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact2' }" class="hover:text-blue-300">Contact2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-contact3' }" class="hover:text-blue-300">Contact3
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->

        </div>


        <div class="flex justify-center rounded-lg bg-gray-400">
            <!-- Content -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content1' }" class="hover:text-blue-300">Content1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content2' }" class="hover:text-blue-300">Content2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content3' }" class="hover:text-blue-300">Content3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content4' }" class="hover:text-blue-300">Content4
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content5' }" class="hover:text-blue-300">Content5
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content6' }" class="hover:text-blue-300">Content6
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content7' }" class="hover:text-blue-300">Content7
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-content8' }" class="hover:text-blue-300">Content8
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->

            <!-- CTA -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-cta1' }" class="hover:text-blue-300">Cta1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-cta2' }" class="hover:text-blue-300">Cta2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-cta3' }" class="hover:text-blue-300">Cta3
                    </RouterLink>
                </li>
            </ul>


        </div>


        <div class="flex justify-center rounded-lg bg-slate-100">
            <!-- Ecommerce -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce1' }" class="hover:text-blue-300">Ecommerce1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce2' }" class="hover:text-blue-300">Ecommerce2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-ecommerce3' }" class="hover:text-blue-300">Ecommerce3
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->



            <!-- Feature -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature1' }" class="hover:text-blue-300">Feature1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature2' }" class="hover:text-blue-300">Feature2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature3' }" class="hover:text-blue-300">Feature3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature4' }" class="hover:text-blue-300">Feature4
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature5' }" class="hover:text-blue-300">Feature5
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature6' }" class="hover:text-blue-300">Feature6
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature7' }" class="hover:text-blue-300">Feature7
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-feature8' }" class="hover:text-blue-300">Feature8
                    </RouterLink>
                </li>
            </ul>


        </div>


        <div class="flex justify-center rounded-lg bg-gray-400">
            <!-- Footer -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-footer1' }" class="hover:text-blue-300">Footer1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-footer2' }" class="hover:text-blue-300">Footer2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-footer3' }" class="hover:text-blue-300">Footer3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-footer4' }" class="hover:text-blue-300">Footer4
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-footer5' }" class="hover:text-blue-300">Footer5
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->

            <!-- Separator -->
            <div class="mr-4">
                |
            </div>

            <!-- Gallery -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-gallery1' }" class="hover:text-blue-300">Gallery1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-gallery2' }" class="hover:text-blue-300">Gallery2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-gallery3' }" class="hover:text-blue-300">Gallery3
                    </RouterLink>
                </li>
            </ul>


        </div>


        <div class="flex justify-center rounded-lg bg-slate-100">
            <!-- Header -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-header1' }" class="hover:text-blue-300">Header1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-header2' }" class="hover:text-blue-300">Header2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-header3' }" class="hover:text-blue-300">Header3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-header4' }" class="hover:text-blue-300">Header4
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->

            <!-- Separator -->
            <div class="mr-4">
                |
            </div>

            <!-- Hero -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero1' }" class="hover:text-blue-300">Hero1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero2' }" class="hover:text-blue-300">Hero2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero3' }" class="hover:text-blue-300">Hero3
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero4' }" class="hover:text-blue-300">Hero4
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero5' }" class="hover:text-blue-300">Hero5
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-hero6' }" class="hover:text-blue-300">Hero6
                    </RouterLink>
                </li>

            </ul>
            <!-- End -->

        </div>


        <div class="flex justify-center rounded-lg bg-gray-400">
            <!-- Pricing -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-pricing1' }" class="hover:text-blue-300">pricing1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-pricing2' }" class="hover:text-blue-300">pricing2
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->


            <!-- Statistic -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-statistic1' }" class="hover:text-blue-300">Statistic1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-statistic2' }" class="hover:text-blue-300">Statistic2
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-statistic3' }" class="hover:text-blue-300">Statistic3
                    </RouterLink>
                </li>
            </ul>
            <!-- End -->

        </div>


        <div class="flex justify-center rounded-lg bg-slate-100">
            <!-- Step -->
            <ul class="flex space-x-6 mr-4">
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-step1' }" class="hover:text-blue-300">Step1
                    </RouterLink>
                </li>
                <li class="mr-5">
                    <RouterLink :to="{ name: 'tailwind-resources-block-step2' }" class="hover:text-blue-300">Step2
                </RouterLink>
            </li>
        </ul>
        <!-- End -->


        <!-- Team -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-team1' }" class="hover:text-blue-300">Team1
                </RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-team2' }" class="hover:text-blue-300">Team2
                </RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-team3' }" class="hover:text-blue-300">Team3
                </RouterLink>
            </li>
        </ul>
        <!-- End -->

    </div>



    <div class="flex justify-center rounded-lg bg-gray-400">
        <!-- Testimonial -->
        <ul class="flex space-x-6 mr-4">
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-testimonial1' }" class="hover:text-blue-300">
                    Testimonial1</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-testimonial2' }" class="hover:text-blue-300">
                    Testimonial2</RouterLink>
            </li>
            <li class="mr-5">
                <RouterLink :to="{ name: 'tailwind-resources-block-testimonial3' }" class="hover:text-blue-300">
                    Testimonial3</RouterLink>
            </li>

        </ul>
        <!-- End -->

    </div>

    </div>


    <div class="container mx-auto">
        <RouterView />
    </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import AOS from 'aos';


onMounted(() => {
    AOS.init();
})

</script>

<style lang="scss" scoped></style>