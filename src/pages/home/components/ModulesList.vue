<script setup>
import LessonsList from "./LessonsList.vue";

const props = defineProps({
    modules: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <LessonsList v-for="module in props.modules" :module="module" />
</template>

<style></style>