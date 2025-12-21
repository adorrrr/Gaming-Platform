const symbols = ["🍎","🍌","🍇","🍓","🍒","🍉","🥝","🍍"];
let cards = [...symbols, ...symbols]; // pair বানানো

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

const grid = document.getElementById("memoryGrid");
const statusText = document.getElementById("memory-status");

shuffle(cards);
createBoard();

function createBoard() {
    grid.innerHTML = "";
    cards.forEach((symbol, index) => {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.textContent = "❓";
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.textContent = this.dataset.symbol;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    moves++;
    statusText.textContent = `Moves: ${moves}`;

    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        matchedPairs++;
        resetTurn();

        if (matchedPairs === symbols.length) {
            statusText.textContent = `🎉 You Won in ${moves} moves!`;
        }
    } else {
        setTimeout(() => {
            firstCard.textContent = "❓";
            secondCard.textContent = "❓";
            resetTurn();
        }, 800);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restartGame() {
    moves = 0;
    matchedPairs = 0;
    statusText.textContent = "Moves: 0";
    shuffle(cards);
    createBoard();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
