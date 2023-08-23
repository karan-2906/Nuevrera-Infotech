function calculateScore() {
    const form = document.getElementById("quiz-form");
    const questions = form.querySelectorAll(".mb-4"); // Each question div
    let score = 0;
    
    questions.forEach((question, index) => {
        const selectedOption = form.querySelector(`input[name=q${index + 1}]:checked`);
        if (selectedOption) {
            const selectedValue = selectedOption.value;
            if (selectedValue === "a") {
                score++;
            }
        }
    });
    
    const scoreContainer = document.getElementById("score-container");
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your score is: ${score} out of ${questions.length}`;
    scoreContainer.classList.remove("hidden");
}