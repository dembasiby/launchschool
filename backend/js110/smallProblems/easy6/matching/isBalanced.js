function isBalanced(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    let currentElement = sentence[i];

    if (currentElement === "(") {
      count++;
    } else if (currentElement === ")") {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
