<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="[className]" viewBox="0 0 24 24">
        <path fill="currentColor"
            d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
    </svg>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    className: {
        type: String,
        default: 'w-6 h-6 mr-1 text-primary hover:text-primary-dark',
    }
})
</script>