// Significant noons and verbs:
// NOONS: Game Player Move Rule
// VERBS: choose compare
//
const readline = require("readline-sync");

function createPlayer() {
  return {
    move: null,
    score: 0,

    resetScore() {
      this.score = 0;
    },
  };
}

function createComputer() {
  let player = createPlayer();
  let computer = {
    choose() {
      let choices = ["rock", "paper", "scissors"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(player, computer);
}

function createHuman() {
  let player = createPlayer();

  let human = {
    choose() {
      let choice;

      while (true) {
        console.log("Please choose rock, paper, or scissors:");
        choice = readline.question();
        if (["rock", "paper", "scissors"].includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
    },
  };

  return Object.assign(player, human);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  maxScore: 5,

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.clear();
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },

  displayWinner() {
    console.clear();

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (
      (humanMove === "rock" && computerMove === "scissors") ||
      (humanMove === "paper" && computerMove === "rock") ||
      (humanMove === "scissors" && computerMove === "paper")
    ) {
      this.human.score += 1;
      console.log("You win!");
    } else if (
      (computerMove === "rock" && humanMove === "scissors") ||
      (computerMove === "paper" && humanMove === "rock") ||
      (computerMove === "scissors" && humanMove === "paper")
    ) {
      this.computer.score += 1;
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  },

  displayScore() {
    console.log(
      `The score is: Human: ${this.human.score}, Computer: ${this.computer.score}`,
    );

    if (this.human.score === this.maxScore) {
      console.log("You are the grand winner!");
    } else if (this.computer.score === this.maxScore) {
      console.log("Computer is the grand winner!");
    }
  },

  playAgain() {
    this.human.resetScore();
    this.computer.resetScore();

    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      while (
        this.human.score < this.maxScore &&
        this.computer.score < this.maxScore
      ) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        this.displayScore();
      }

      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
