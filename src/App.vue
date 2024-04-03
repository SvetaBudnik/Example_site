<script setup>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <PageHeader />
    <RouterView />
    <PageFooter />
</template>

<style></style>
