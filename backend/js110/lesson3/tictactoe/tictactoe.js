const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinOr(arr, delimiter = ", ", joiningWord = "or") {
  if (arr.length <= 1) return arr.join();
  if (arr.length === 2) return arr.join(` ${joiningWord} `);

  let result = arr.slice(0, -1).join(delimiter);
  result += `${delimiter}${joiningWord} ${arr.slice(-1)}`;

  return result;
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

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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
    prompt(`Choose a square ${joinOr(emptySquares, ", ")}: `);
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
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // rows
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // columns
    [1, 5, 9],
    [3, 5, 7], // diagnnals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardIsFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardIsFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} has won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt("Play again? (y or n): ");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt(`Thanks for playing Tic Tac Toe!`);
