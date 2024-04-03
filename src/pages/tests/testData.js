import { ref } from 'vue'
import baseUrl from '/src/components/baseUrl';

export const moduleNum = ref(null)
export const lessonNum = ref(null)
export const test = ref(null)

export async function getTestData(_module, _lesson, _test) {
    const fetchUrl = `${baseUrl}api/getTestData/${_module}/${_lesson}/${_test}`;
    console.log(`Sending request to ${fetchUrl}`);

    const response = await fetch(fetchUrl, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (!response.ok) {
        const desc = await response.text();
        console.log(`Server responsed ${response.status}: ${desc}`)
        return false
    }
    test.value = await response.json();
    moduleNum.value = _module;
    lessonNum.value = _lesson;

    console.log("Test was founded")
    return true;
}
