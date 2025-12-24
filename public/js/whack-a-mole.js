const holes = document.querySelectorAll(".hole");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

let score = 0;
let timeLeft = 30;
let gameTimer;
let moleTimer;
let currentMole = null;
let gameRunning = false;

function startGame() {
    if (gameRunning) return;

    score = 0;
    timeLeft = 30;
    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;
    gameRunning = true;



    moleTimer = setInterval(showMole, 800);
    gameTimer = setInterval(countDown, 1000);
}

function showMole() {
    if (currentMole) {
        currentMole.classList.remove("mole");
    }

    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add("mole");
    currentMole = randomHole;
}

holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole === currentMole && gameRunning) {
            score++;
            scoreEl.textContent = score;
            hole.classList.remove("mole");
            currentMole = null;
        }
    });
});

function countDown() {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(gameTimer);
    clearInterval(moleTimer);
    if (currentMole) currentMole.classList.remove("mole");
    gameRunning = false;
    alert(`Game Over! 🎯 Your Score: ${score}`);
}


function restartGame() {
    clearInterval(gameTimer);
    clearInterval(moleTimer);

    if (currentMole) {
        currentMole.classList.remove("mole");
        currentMole = null;
    }

    score = 0;
    timeLeft = 30;
    gameRunning = false;

    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;


}


function stopGame() {
    if (!gameRunning) return;

    clearInterval(gameTimer);
    clearInterval(moleTimer);

    if (currentMole) {
        currentMole.classList.remove("mole");
        currentMole = null;
    }

    gameRunning = false;
}
