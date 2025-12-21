const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let isAITurn = false;

const HUMAN = "X";
const AI = "O";

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// Event listeners
cells.forEach(cell => cell.addEventListener("click", humanMove));

function humanMove() {
    if (!gameActive || isAITurn) return;

    const index = this.dataset.index;
    if (board[index] !== "") return;

    board[index] = HUMAN;
    this.textContent = HUMAN;

    if (checkWinner(board, HUMAN)) {
        statusText.textContent = "You Win! 🎉 (Impossible?)";
        gameActive = false;
        return;
    }

    if (isDraw(board)) {
        statusText.textContent = "Draw!";
        gameActive = false;
        return;
    }

    // Lock player & give turn to AI
    isAITurn = true;
    statusText.textContent = "Computer is thinking... 🤖";

    setTimeout(() => {
        computerMove();
        isAITurn = false;
    }, 600);
}

// AI Move (Minimax)
function computerMove() {
    if (!gameActive) return;

    const bestMove = minimax(board, AI).index;
    board[bestMove] = AI;
    cells[bestMove].textContent = AI;

    if (checkWinner(board, AI)) {
        statusText.textContent = "Computer Wins 🤖";
        gameActive = false;
        return;
    }

    if (isDraw(board)) {
        statusText.textContent = "Draw!";
        gameActive = false;
        return;
    }

    statusText.textContent = "Your Turn";
}

// -------- Minimax Algorithm --------
function minimax(newBoard, player) {
    const emptyIndexes = newBoard
        .map((v, i) => v === "" ? i : null)
        .filter(v => v !== null);

    if (checkWinner(newBoard, HUMAN)) {
        return { score: -10 };
    } else if (checkWinner(newBoard, AI)) {
        return { score: 10 };
    } else if (emptyIndexes.length === 0) {
        return { score: 0 };
    }

    const moves = [];

    for (let i = 0; i < emptyIndexes.length; i++) {
        const move = {};
        move.index = emptyIndexes[i];
        newBoard[emptyIndexes[i]] = player;

        if (player === AI) {
            const result = minimax(newBoard, HUMAN);
            move.score = result.score;
        } else {
            const result = minimax(newBoard, AI);
            move.score = result.score;
        }

        newBoard[emptyIndexes[i]] = "";
        moves.push(move);
    }

    let bestMove;
    if (player === AI) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

// -------- Helpers --------
function checkWinner(board, player) {
    return winConditions.some(condition =>
        condition.every(index => board[index] === player)
    );
}

function isDraw(board) {
    return !board.includes("");
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    isAITurn = false;
    statusText.textContent = "Your Turn";
    cells.forEach(cell => cell.textContent = "");
}
