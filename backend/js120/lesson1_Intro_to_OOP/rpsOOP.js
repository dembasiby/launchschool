// Significant noons and verbs:
// NOONS: Game Player Move Rule
// VERBS: choose compare
//
const readline = require("readline-sync");

function createPlayer(playerType) {
  return {
    playerType,
    move: null,

    isHuman() {
      return this.playerType.toLowerCase() === "human";
    },

    choose() {
      let choices = ["rock", "paper", "scissors"];

      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log("Please choose rock, paper, or scissors:");
          choice = readline.question();
          if (choices.includes(choice)) break;
          console.log("Sorry, invalid choice.");
        }

        this.move = choice;
      } else {
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },
  };
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

function createRule() {
  return {
    // possible state: not clear whether rules need state
  };
}

// Since we don't yet know where to put 'compare', let's define
// it as an ordinary function
let compare = function (move1, move2) {
  // not yet implemented
};

const RPSGame = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${humanMove}`);
    console.log(`The computer chose: ${computerMove}`);

    if (
      (humanMove === "rock" && computerMove === "scissors") ||
      (humanMove === "paper" && computerMove === "rock") ||
      (humanMove === "scissors" && computerMove === "paper")
    ) {
      console.log("You win!");
    } else if (
      (computerMove === "rock" && humanMove === "scissors") ||
      (computerMove === "paper" && humanMove === "rock") ||
      (computerMove === "scissors" && humanMove === "paper")
    ) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    }
  },

  playAgain() {
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();