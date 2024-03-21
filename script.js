const app = Vue.createApp({
    data() {
        return {
            correctAnswer: "Из тегов и контента",
            isModalVisible: false,
            modalMessage: "",
            canPerformClick: true,
        };
    },
    methods: {
        checkAnswer(answer, event) {
            if (!this.canPerformClick) return;

            const selectedButton = event.target;
            const buttons = document.querySelectorAll('.but');
            buttons.forEach(button => button.classList.remove('selected'));
            selectedButton.classList.add('selected');

        },
        checkAnswers() {
            if (!this.canPerformClick) return; // Строка, которая блокирует повторную проверку ответа
            this.canPerformClick = false;

            const selectedButton = document.querySelector('.but.selected');
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }

            if (selectedButton.textContent === this.correctAnswer) {
                this.openModal('Ты молодец, так держать !');
            } else {
                selectedButton.classList.add('incorrect');
                this.openModal('К сожалению ты ошибся :(');
            }

            const allButtons = document.querySelectorAll('.but');
            allButtons.forEach(button => {
                if (button.textContent === this.correctAnswer) {
                    button.classList.add('correct');
                }
            });
        },
        openModal(label) {
            this.modalMessage = label;
            this.isModalVisible = true;
            console.log(this.isModalVisible);
            setTimeout(() => {
                this.closeModal();
                console.log(this.isModalVisible);
            }, 5000);
        },
        closeModal() {
            this.isModalVisible = false;
        },
    }
});

app.mount('#app');
