const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const WINNING_COMBOS = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
};
const WINNING_SCORE = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function playerWins(playerChoice, opponentChoice) {
  return WINNING_COMBOS[playerChoice].includes(opponentChoice);
}

function announceWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) return "You win!";
  if (choice === computerChoice) return "It's a tie!";
  return "Computer wins!";
}

let playAgain;
let scores = { playerScore: 0, computerScore: 0 };

while (
  scores.playerScore < WINNING_SCORE &&
  scores.computerScore < WINNING_SCORE
) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}.`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice!");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  if (playerWins(choice, computerChoice)) {
    scores.playerScore++;
  } else if (playerWins(computerChoice, choice)) {
    scores.computerScore++;
  }

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  prompt(announceWinner(choice, computerChoice));
  prompt(
    `Player score: ${scores.playerScore}, Computer score: ${scores.computerScore}`,
  );

  // prompt("Do you want to play again? (y/n)?");
  // playAgain = readline.question().toLowerCase();
  //
  // while (playAgain[0] !== "y" && playAgain[0] !== "n") {
  //   prompt("Please enter 'y' or 'n'!");
  //   playAgain = readline.question().toLowerCase();
  // }
  //
  // // if (playAgain[0] === "n") break;
}
prompt(
  `${scores.playerScore > scores.computerScore ? "You" : "Computer"} wins the game!`,
);
prompt("Thank you");
