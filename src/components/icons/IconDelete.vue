<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="[className]" viewBox="0 0 24 24">
        <path fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" />
    </svg>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    className: {
        type: String,
        default: 'w-6 h-6 mr-1 text-red-600 hover:text-red-400',
    }
})
</script>