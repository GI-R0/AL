let lives = 3;
let currentRiddle = 1;

const answers = {
    1: "rio",
    2: "aliento",
    3: "mapa"
};

function checkAnswer(riddle) {
    const userAnswer = document.getElementById(`answer-${riddle}`).value.toLowerCase();
    const feedback = document.getElementById(`feedback-${riddle}`);

    if (userAnswer === answers[riddle]) {
        feedback.textContent = "¡Correcto!";
        feedback.style.color = "green";
        currentRiddle++;
        if (currentRiddle <= 3) {
            document.getElementById(`riddle-${currentRiddle}`).style.display = "block";
        } else {
            document.getElementById("game-won").style.display = "block";
        }
    } else {
        feedback.textContent = "Respuesta incorrecta.";
        lives--;
        if (lives === 0) {
            document.getElementById("game-over").style.display = "block";
        } else {
            feedback.textContent += ` Te quedan ${lives} vidas.`;
        }
    }
}
