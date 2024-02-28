function checkAnswer(button) {
    // Отменяем подсветку для всех кнопок
    var but = document.querySelectorAll('.but');
    but.forEach(function (but) {
        but.classList.remove('selected');
    });

    // Подсвечиваем выбранную кнопку
    button.classList.add('selected');

    // Здесь можно добавить логику для проверки правильного ответа
    // и выполнения соответствующих действий.
}
