import { createWebHistory, createRouter } from 'vue-router';

import Home from '/src/pages/home/Home.vue';
import Tests from '/src/pages/tests/Tests.vue';
import Lesson from '/src/pages/lesson/lesson.vue';
import PageNotFound from '/src/pages/PageNotFound.vue';

import { getTestData } from '/src/pages/tests/testData';
import { getLessonData } from '/src/pages/lesson/lessonData';
import { getModules } from '/src/pages/home/homeData';

const routes = [
    {
        path: '/',
        name: "HomePage",
        component: Home,
        meta: { requiresModulesData: true },
    },
    {
        path: '/tests/:module/:lesson/:test',
        name: "test",
        component: Tests,
        meta: { requiresTestData: true},
    },
    {
        path: '/lessons/:module/:lesson',
        name: 'lesson',
        component: Lesson,
        meta: { requiresLessonData: true, requiresModulesData: true },
    },
    { path: '/:pathMatch(.*)*', name: "PageNotFound", component: PageNotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    console.log("BeforeEach")
    if (to.meta.requiresModulesData) {
        console.log("Requires modules data");
        if (!await getModules()) {
            console.log("Redirect to homepage");
            next({ name: "HomePage" });
            return;
        }
    }
    if (to.meta.requiresTestData) {
        console.log("Requires test data")
        if (!await getTestData(to.params.module, to.params.lesson, to.params.test)) {
            console.log("Redirect to homepage");
            next({ name: "HomePage" });
            return;
        }
    }
    if (to.meta.requiresLessonData) {
        console.log("Requires lesson data");
        if (!await getLessonData(to.params.module, to.params.lesson)) {
            console.log("Redirecting to homepage");
            next({ name: "HomePage" });
            return;
        }
    }

    console.log("Navigating to next page...");
    next();
})

export default router
