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
            openModal('Ты молодец, так держать !');

        } else {
            selectedButton.classList.add('incorrect');
            openModal('К сожалению ты ошибся :(');
        }
    }

    var allButtons = document.querySelectorAll('.but');
    allButtons.forEach(function (but) {
        if (but.textContent === correctAnswer) {
            but.classList.add('correct');
        }
    });
}

function openModal(label) {
    var text = document.getElementById('modal-field');
    text.textContent = label;
    
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    setTimeout(function() {
        closeModal();
    }, 3000);
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
