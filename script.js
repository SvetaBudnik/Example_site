function checkAnswer(button) {
    // Отменяем подсветку для всех кнопок
    var but = document.querySelectorAll('.but');
    but.forEach(function (but) {
        but.classList.remove('selected');
    });

    // Подсвечиваем выбранную кнопку
    button.classList.add('selected');

}

function checkAnswers() {
    var correctAnswer = " Из тегов и контента "; // Здесь нужно указать правильный ответ

    var selectedButton = document.querySelector('.but.selected');
    if (selectedButton) {
        selectedButton.classList.remove('selected');
        if (selectedButton.textContent === correctAnswer) {
            selectedButton.classList.add('correct');
            window.alert("Ты молодец, так держать !");

        } else {
            selectedButton.classList.add('incorrect');
            window.alert("К сожалению ты ошибся :(");
        }
    }

    var allButtons = document.querySelectorAll('.but');
    allButtons.forEach(function (but) {
        if (but.textContent === correctAnswer) {
            but.classList.add('correct');
        }
    });
}

