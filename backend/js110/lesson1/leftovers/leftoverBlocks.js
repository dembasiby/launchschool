function calculateLeftoverBlocks(blocks) {
  let blocksRemaining = blocks;
  let currentLayer = 1;

  let blocksRequired = currentLayer * currentLayer;

  while (blocksRemaining >= blocksRequired) {
    blocksRemaining -= blocksRequired;

    currentLayer++;
    blocksRequired = currentLayer * currentLayer;
  }

  return blocksRemaining;
}

// function calculateLeftoverBlocks(blocks) {
//   let used = 0;
//
//   for (let i = 1; i * i + used <= blocks; i++) {
//     used += i * i;
//   }
//
//   let leftOvers = blocks - used;
//
//   return leftOvers;
// }

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
