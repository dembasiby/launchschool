function wordToDigit(sentence) {
  let numberWords = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  Object.keys(numberWords).forEach((word) => {
    let regexp = new RegExp("\\b" + word + "\\b", "g");
    sentence = sentence.replace(regexp, numberWords[word]);
  });

  return sentence;
}

console.log(
  wordToDigit(
    "Please call me at five five five one two three four eighty nine. Thanks.",
  ),
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit("The weight is done.")); // "The w8 is d1."
