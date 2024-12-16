// Significant noons and verbs:
// NOONS: Game Player Move Rule
// VERBS: choose compare
//

function createPlayer() {
  return {
    // possible state: player's name
    // possible state: player current move
    choose() {
      // not yet implemented
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

function displayWelcomeMessage() {}
function displayWinner() {}
function displayGoodbyeMessage() {}

const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};
