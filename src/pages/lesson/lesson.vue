<script setup>
import { module, lesson } from './lessonData';
import { getNumLessonsInModule } from '../home/homeData';

const numOfLessons = getNumLessonsInModule(module.value.moduleNumber);
</script>

<template>
    <div class="lesson-body">
        <h1> {{ module.moduleTitle }}: {{ module.moduleName }} </h1>
        <h2> Тема {{ lesson.lessonNumber }} из {{ numOfLessons }} | {{ lesson.lessonName }} </h2>
        <hr>
        <div class="markdown-body" v-html="lesson.lessonBody"></div>
    </div>
</template>

<style>
@import url(/src/github-markdown-light.css);

.lesson-body {
    max-width: 868px;
    margin: auto;
}

.markdown-body img {
    display: block;
    max-width: 50%;
    margin: auto;
}
</style>