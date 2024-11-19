function anagramDifference(w1, w2) {
  let result = 0;
  let occurenceCount1 = letterOccurences(w1);
  let occurenceCount2 = letterOccurences(w2);

  for (let k in occurenceCount1) {
    result += occurenceCount2[k]
      ? Math.abs(occurenceCount1[k] - occurenceCount2[k])
      : occurenceCount1[k];
  }

  for (let k in occurenceCount2) {
    if (!occurenceCount1[k]) result += occurenceCount2[k];
  }

  return result;
}

function letterOccurences(word) {
  const occurenceCount = {};

  for (let i = 0; i < word.length; i++) {
    occurenceCount[word[i]] = occurenceCount[word[i]]
      ? occurenceCount[word[i]] + 1
      : 1;
  }
  return occurenceCount;
}

console.log(anagramDifference("codewars", "hackerrank"));
