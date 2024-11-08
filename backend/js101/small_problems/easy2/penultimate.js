function isNotValidSentence(sentence) {
  return typeof sentence !== "string" || sentence.trim().length === 0;
}

function penultimate(sentence) {
  if (isNotValidSentence(sentence)) {
    return "INVALID INPUT"; // decide what to do
  }

  let words = sentence.trim().split(" ");
  const wordsLength = words.length;
  const middleIndex = Math.floor(wordsLength / 2);

  if (wordsLength < 2) return sentence;

  // What is the middle of an even length number of words????
  if (wordsLength % 2 === 0) {
    return `${words[middleIndex - 1]} ${words[middleIndex]}`;
  }

  return words[middleIndex];
}

console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true
console.log(penultimate("This is something really wonderful"));
console.log(penultimate("Hello"));
console.log(penultimate(undefined));
