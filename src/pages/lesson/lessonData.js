import {ref} from 'vue';
import baseUrl from '/src/components/baseUrl';

export const module = ref(null);
export const lesson = ref(null);

export async function getLessonData(_module, _lesson) {
    // TODO: сделать запрос к серверу по API
    const response = await fetch(`${baseUrl}api/getLessonData/${_module}/${_lesson}`, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (!response.ok) {
        const desc = await response.text();
        console.log(`Server responded error: ${response.status}, ${desc}`);
        return false;
    }

    const data = await response.json();
    module.value = data.module;
    lesson.value = data.lesson;

    return true;
}