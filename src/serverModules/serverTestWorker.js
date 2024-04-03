import json from '../modulesData/tests.json' assert { type: 'json' };

const modules = json.data;

function findTestParams(_module, _lesson, _test) {
    console.log(`getting test for module ${_module}, lesson ${_lesson}, test ${_test}`)

    const module = modules.find((el) => el.module == _module)
    if (module == null) {
        console.log("Module wasn't founded. Reverting...")
        return { result: false };
    }
    const lesson = module.lessons.find((el) => el.lesson == _lesson)
    if (lesson == null) {
        console.log("Post wasn't founded. Reverting...")
        return { result: false };
    }
    const test = lesson.tests.find((el) => el.test == _test)
    if (test == null) {
        console.log("Test wasn't founded. Reverting...")
        return { result: false };
    }

    console.log("Test was founded")
    return {
        result: true,
        question: test.question,
        answers: test.answers,
        correctAnswer: test.correctAnswer,
    };
}

export function findTest(req, res) {
    const module = req.params.module;
    const lesson = req.params.lesson;
    const test = req.params.test;
    const data = findTestParams(module, lesson, test);
    if (data.result) {
        data.test = test;
        res.send(data);
    } else {
        res.status(404).send("Test not found")
    }
}
