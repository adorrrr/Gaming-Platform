let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function checkGuess() {
    if (gameOver) return;

    const guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "❌ Enter a number between 1 and 100";
        return;
    }

    attempts++;
    attemptsText.textContent = `Attempts: ${attempts}`;

    if (guess === secretNumber) {
        message.textContent = `🎉 Correct! The number was ${secretNumber}`;
        gameOver = true;
    } 
    else if (guess < secretNumber) {
        message.textContent = "⬆ Too Low!";
    } 
    else {
        message.textContent = "⬇ Too High!";
    }

    input.value = "";
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    message.textContent = "";
    attemptsText.textContent = "Attempts: 0";
    input.value = "";
}
