const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function prompt(message) {
  console.log(`==> ${message}`);
}
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function displayBoard(board) {
  console.clear();

  console.log("");
  console.log(`     |     |     `);
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}  `);
  console.log(`     |     |     `);
  console.log("-----+-----+-----");
  console.log(`     |     |     `);
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}  `);
  console.log(`     |     |     `);
  console.log("-----+-----+-----");
  console.log(`     |     |     `);
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}  `);
  console.log(`     |     |     `);
  console.log("");
}

function computerChoosesSquare(board) {
  let emptySquares = getEmptySquares(board);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function playerChoosesSquare(board) {
  let emptySquares = getEmptySquares(board);

  let square;

  while (true) {
    prompt(`Choose a square ${emptySquares.join(", ")}: `);
    square = readline.question().trim();
    if (emptySquares.includes(square)) break;
    prompt("Please provide a valid square number: ");
  }

  board[square] = HUMAN_MARKER;
}

function getEmptySquares(board) {
  return Object.keys(board).filter(
    (square) => board[square] === INITIAL_MARKER,
  );
}

function boardIsFull(board) {
  return getEmptySquares(board).length === 0;
}

function someoneWon(board) {
  return false;
}

let board = initializeBoard();
displayBoard(board);

while (true) {
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);

  if (someoneWon(board) || boardIsFull(board)) break;
}

prompt(`Thank you!`);
