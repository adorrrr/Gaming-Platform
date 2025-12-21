let playerScore = 0;
let computerScore = 0;

const resultText = document.getElementById("rps-result");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw 🤝";
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        result = "You Win! 🎉";
    } 
    else {
        computerScore++;
        result = "Computer Wins 🤖";
    }

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    resultText.textContent = `
        You chose ${playerChoice.toUpperCase()},
        Computer chose ${computerChoice.toUpperCase()}.
        ${result}
    `;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = "0";
    computerScoreText.textContent = "0";
    resultText.textContent = "Make your move!";
}
