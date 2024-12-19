# Adjust computer choice based on history

Come up with some rules based on the history of moves to help the computer make its moves.
For instance, if the human tends to win over 60% of his hands when the computer chooses "rock,"
then decrease the likelihood that the computer will choose "rock." First, come up with an
appropriate rule, then implement some history analysis. Use the analysis to adjust the weight
of each choice -- for instance, increase the weight to increase the likelihood of choosing a
particular move. Currently, the computer has a 33% chance of making any given move -- it's
those odds that you need to weight. Finally, have the computer consider the weight of each
choice when choosing a move.

## Understand the Problem

### Input

### Output

### Rules

### Mental Model

## Examples / Test Cases

## Data Structure

## Algorithm

- `defensiveMove(playMoveHistory)`
- `offensiveMove(computerMoveHistory)`

## Code

```javascript
function defensiveMove(playMoveHistory) {
  let playerWinningMoves = [];
}
function offensiveMove(computerMoveHistory) {
  let occurences = computerMoveHistory.reduce((obj, move) => {
    let key = Object.keys(move)[0];
    if (move[key]) {
      obj[key] = obj[key] + 1 || 1;
    }
    return obj;
  }, {});

  return Object.keys(occurences)
    .sort((k1, k2) => occurences[k2] - occurences[k1])
    .filter(0, 1)
    .join("");
}
function computerOptimalMove() {}
```
