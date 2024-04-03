import express from "express";
import ViteExpress from "vite-express";
import { findTest } from "./src/serverModules/serverTestWorker.js";
import { getModulesList, getLessonFor } from './src/serverModules/serverModuleWorker.js'

const app = express();

// Запуск сервера в продакшн
// Перед запуском необходимо выполнить команду npm run build
ViteExpress.config({ mode: "production" }) 

// Кастомные пути для работы сервера (подойдёт для реализации API)
app.get("/api/getTestData/:module/:lesson/:test", findTest);
app.get("/api/getModulesList", (_, res) => {
    const data = getModulesList();
    const resp = {
        modules: data,
    };
    res.send(resp);
});
app.get("/api/getLessonData/:module/:lesson", async (req, res) => {
    const result = await getLessonFor(req.params.module, req.params.lesson);
    if (!result.success) {
        res.status(404).send(result.reason);
    } else {
        res.send(result.data);
    }
})

const port = 3000;
ViteExpress.listen(app, port, () => console.log(`Server is listening at port ${port} ...`));
