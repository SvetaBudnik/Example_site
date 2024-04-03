import {promises as fs} from 'fs';
import { marked } from 'marked';


const rawData = await fs.readFile('./src/modulesData/modules.json');
const dataJson = JSON.parse(rawData.toString());


export function getModulesList() {
    return dataJson.data;
}

export async function getLessonFor(_module, _lesson) {
    const module = dataJson.data.find((e) => e.moduleNumber == _module);
    if (module == null) {
        return {
            success: false,
            reason: "Module not found",
        };
    }
    const lesson = module.lessons.find((e) => e.lessonNumber == _lesson);
    if (lesson == null) {
        return {
            success: false,
            reason: "Lesson not found",
        }
    }
    let md = null;
    const filepath = `./src/modulesData/lessons/m${_module}-l${_lesson}.md`;
    try {
        const rawMd = await fs.readFile(filepath);
        md = rawMd.toString();
    } catch {
        return {
            success: false,
            reason: `Lesson file not found by path ${filepath}`,
        }
    }

    return {
        success: true,
        data: {
            module: {
                moduleNumber: _module,
                moduleTitle: module.moduleTitle,
                moduleName: module.moduleName,
            },
            lesson: {
                lessonNumber: _lesson,
                lessonTitle: lesson.lessonTitle,
                lessonName: lesson.lessonName,
                lessonBody: marked(md).toString(),
            }
        }
    }
}
