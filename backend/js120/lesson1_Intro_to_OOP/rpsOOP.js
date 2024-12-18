// Significant noons and verbs:
// NOONS: Game Player Move Rule
// VERBS: choose compare
//
const readline = require("readline-sync");

function createPlayer() {
  return {
    move: null,
    score: 0,

    incrementScore() {
      this.score += 1;
    },

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
        console.log("Please choose rock, paper, scissors, lizard, or spock:");
        choice = readline.question();
        if (["rock", "paper", "scissors", "lizard", "spock"].includes(choice))
          break;
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
  winningCombos: {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  },

  displayWelcomeMessage() {
    this.prompt("Welcome to Rock, Paper, Scissors, Lizard, and Spock!");
  },

  displayGoodbyeMessage() {
    console.clear();
    this.prompt(
      "Thanks for playing Rock, Paper, Scissors, Lizard, and Spock. Goodbye!",
    );
  },

  displayWinner() {
    console.clear();

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    this.prompt(`You chose: ${humanMove}`);
    this.prompt(`The computer chose: ${computerMove}`);

    if (this.winningCombos[humanMove].includes(computerMove)) {
      this.prompt("You win!");
      this.human.incrementScore();
    } else if (this.winningCombos[computerMove].includes(humanMove)) {
      this.prompt("Computer wins!");
      this.computer.incrementScore();
    } else {
      this.prompt("It's a tie!");
    }
  },

  resetAllScores() {
    this.human.resetScore();
    this.computer.resetScore();
  },

  displayScores() {
    this.prompt(
      `The score is: Human: ${this.human.score}, Computer: ${this.computer.score}`,
    );

    if (this.human.score === this.maxScore) {
      this.prompt("You are the grand winner!");
    } else if (this.computer.score === this.maxScore) {
      this.prompt("Computer is the grand winner!");
    }
  },

  prompt(message) {
    console.log(`=> ${message}`);
  },

  playAgain() {
    this.resetAllScores();
    this.prompt("Would you like to play again? (y/n)");
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
        this.displayScores();
      }

      if (!this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
