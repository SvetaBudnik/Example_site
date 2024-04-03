import baseUrl from '/src/components/baseUrl';
import {ref} from 'vue';

export const modules = ref(null);

export async function getModules() {
    if (modules.value != null) {
        return true; // Пропускаем повторное получение модулей (они так быстро не меняются)
    }
    
    const response = await fetch(`${baseUrl}api/getModulesList`, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (!response.ok) {
        const desc = await response.text();
        console.log(`Server responsed ${response.status}: ${desc}`)
        return false;
    }
    
    const data = await response.json();
    modules.value = data.modules;

    return true;
}

export function getNumLessonsInModule(_module) {
    const module = modules.value.find((el) => el.moduleNumber == _module);
    if (module == null)
        return null;
    return module.lessons.length;
}