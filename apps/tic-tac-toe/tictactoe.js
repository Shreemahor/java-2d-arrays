const boardElement = document.getElementById('gameBoard');
const messageElement = document.getElementById('message');
const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
const restartButton = document.getElementById('restartButton');
const menuOptionsElement = document.getElementById('menuOptions');
const gameAreaElement = document.getElementById('gameArea');
const backToMenuButton = document.getElementById('backToMenuButton');
const backButton = document.querySelector('.back-button');

let board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let currentPlayer = "O";
let gameOver = false;
let gameMode = ''; // 'self', 'easy', 'hard'

// --- AI Functions ---

// Easy AI: Makes random valid moves
function easyAIMove() {
    const emptyCells = [];
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[r][c] === " ") {
                emptyCells.push({ row: r, col: c });
            }
        }
    }
    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const move = emptyCells[randomIndex];
        return move;
    }
    return null; // Should not happen in a normal game
}

// Minimax AI
function minimax(currentBoard, depth, isMaximizingPlayer) {
    if (checkForWin(currentBoard, 'X')) return 10 - depth;
    if (checkForWin(currentBoard, 'O')) return depth - 10;
    if (checkForDraw(currentBoard)) return 0;

    if (isMaximizingPlayer) {
        let maxEval = -Infinity;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (currentBoard[r][c] === " ") {
                    currentBoard[r][c] = 'X'; // AI's move
                    const evalScore = minimax(currentBoard, depth + 1, false);
                    currentBoard[r][c] = " "; // Undo move
                    maxEval = Math.max(maxEval, evalScore);
                }
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (currentBoard[r][c] === " ") {
                    currentBoard[r][c] = 'O'; // Player's move
                    const evalScore = minimax(currentBoard, depth + 1, true);
                    currentBoard[r][c] = " "; // Undo move
                    minEval = Math.min(minEval, evalScore);
                }
            }
        }
        return minEval;
    }
}

function findBestMove(currentBoard) {
    let bestVal = -Infinity;
    let bestMove = { row: -1, col: -1 };

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (currentBoard[r][c] === " ") {
                currentBoard[r][c] = 'X'; // AI's move
                const moveVal = minimax(currentBoard, 0, false);
                currentBoard[r][c] = " "; // Undo move

                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove.row = r;
                    bestMove.col = c;
                }
            }
        }
    }
    return bestMove;
}

// --- Game Logic ---

// Function to create the HTML board
function createBoardHTML() {
    boardElement.innerHTML = ''; // Clear previous board
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.textContent = board[r][c] === " " ? "" : board[r][c];

            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
}

// Function to update the displayed board and messages
function updateDisplay() {
    const cells = boardElement.querySelectorAll('.cell');
    cells.forEach(cell => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        cell.textContent = board[r][c] === " " ? "" : board[r][c];
    });
    currentPlayerDisplay.textContent = currentPlayer;
    messageElement.textContent = "";
}

// Function to check for a win
function checkForWin(currentBoard, player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (currentBoard[i][0] === player && currentBoard[i][1] === player && currentBoard[i][2] === player) return true;
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (currentBoard[0][j] === player && currentBoard[1][j] === player && currentBoard[2][j] === player) return true;
    }
    // Check diagonals
    if (currentBoard[0][0] === player && currentBoard[1][1] === player && currentBoard[2][2] === player) return true;
    if (currentBoard[0][2] === player && currentBoard[1][1] === player && currentBoard[2][0] === player) return true;
    return false;
}

// Function to check for a draw
function checkForDraw(currentBoard) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (currentBoard[i][j] === " ") return false;
        }
    }
    return true;
}

// Handle a player clicking a cell
function handleCellClick(event) {
    if (gameOver) return;

    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (board[row][col] === " ") {
        board[row][col] = currentPlayer;
        updateDisplay();

        if (checkForWin(board, currentPlayer)) {
            messageElement.textContent = `${currentPlayer} wins!`;
            gameOver = true;
            return; // End turn immediately after win
        } else if (checkForDraw(board)) {
            messageElement.textContent = "It's a draw!";
            gameOver = true;
            return; // End turn immediately after draw
        }

        // Switch player
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        updateDisplay();

        // AI's turn if not player vs player and it's AI's turn
        if (!gameOver && gameMode !== 'self' && currentPlayer === 'X') {
            setTimeout(() => { // Slight delay for AI move
                let move;
                if (gameMode === 'easy') {
                    move = easyAIMove();
                } else if (gameMode === 'hard') {
                    move = findBestMove(board);
                }

                if (move) {
                    board[move.row][move.col] = currentPlayer;
                    updateDisplay();

                    if (checkForWin(board, currentPlayer)) {
                        messageElement.textContent = `${currentPlayer} wins!`;
                        gameOver = true;
                    } else if (checkForDraw(board)) {
                        messageElement.textContent = "It's a draw!";
                        gameOver = true;
                    } else {
                        // Switch player back to human
                        currentPlayer = (currentPlayer === "X") ? "O" : "X";
                        updateDisplay();
                    }
                }
            }, 500); // 500ms delay
        }
    } else {
        messageElement.textContent = "Cell already occupied!";
    }
}

// Restart the game
function restartGame() {
    board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ];
    currentPlayer = "O";
    gameOver = false;
    messageElement.textContent = "";
    updateDisplay();
    createBoardHTML();
}

// Show game area and hide menu
function startGame(mode) {
    backButton.style.display = 'none'; // Hide the back button in the game area
    gameMode = mode;
    menuOptionsElement.style.display = 'none';
    gameAreaElement.style.display = 'flex';
    restartGame(); // Initialize the game board
    // Set the first player to 'O' (human) if AI is 'X'
    if (gameMode !== 'self') {
        currentPlayer = 'O'; // Human player always starts as O
        currentPlayerDisplay.textContent = currentPlayer;
    } else {
        currentPlayer = 'O'; // For self-play, 'O' starts
        currentPlayerDisplay.textContent = currentPlayer;
    }
}

// Handle 'Back to Menu' button click
function backToMenu() {
    gameAreaElement.style.display = 'none';
    menuOptionsElement.style.display = 'flex';
    backButton.style.display = 'flex'; // Show the back button in the menu
}

// --- Initialization ---

// Event listeners for menu options
document.getElementById('playSelf').addEventListener('click', () => startGame('self'));
document.getElementById('playEasyAI').addEventListener('click', () => startGame('easy'));
document.getElementById('playHardAI').addEventListener('click', () => startGame('hard'));

// Event listener for restart button
restartButton.addEventListener('click', restartGame);

// Event listener for back to menu button
backToMenuButton.addEventListener('click', backToMenu);

// Initial display setup
backToMenu(); // Show menu on page load