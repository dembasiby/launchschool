//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Understand the Problem
Input: a string of words 
Output: highest scoring word.

Rules:
- the score of each word is based on the position of the word in the alphabet. a = 1, b=2, c=3, d=4.....z=26
- words separated by a space.

Mental Model
- get the score of each word and select the highest.

Data Structure;
- input=string, output =string (word)
- no need of an intermidiary ds.

examples:
"man i need a taxi up to ubud' => taxi 
'what time are we climbing up the volcano' => volcano

Algorithm:
- declare a variable `stringArr` and initialize it with the return value of splitting the sentence with a space as a separtor
- declare a variable `higestScoringWord` and initialize it with an empty string.
- declare a variable `higestScore` and initialize it to 0.
- loop through the `stringArr` array, and get the score of the current word. If the score tof the current word is higher than the one of the `higestScore`, reassign the `higestScoringWord` to the current word and`higestScore` to the score of the current word.
- return `higestScoringWord`


a helper function getScore that takes a word as argument.
- declare a constant variable `A_CHARCODE` and initialize to the return value of calling `charCodeAt` on the character `a'
- declare a variable charArr and initialize it to the return value of splitting the word by character
-declare a variable sum and initialize it to 0
- loop through the array `charArr` and for each character, get the caracter code subtract `A_CHARCODE` from it and add 1 and add the value to `sum`
- return `sum`


*/

function high(sentence) {
  let stringArr = sentence.split(" ");
  let highestScoringWord = "";
  let highestScore = 0;

  for (let word of stringArr) {
    let currentScore = getScore(word);
    if (currentScore > highestScore) {
      highestScoringWord = word;
      highestScore = currentScore;
    }
  }

  return highestScoringWord;
}

function getScore(word) {
  const A_CHARCODE = "a".charCodeAt(0);
  let sum = 0;
  let charArr = word.split("");

  for (let char of charArr) {
    sum += char.charCodeAt(0) - A_CHARCODE + 1;
  }
  return sum;
}

// console.log(high("abad"));
console.log(high("man i need a taxi up to ubud")); // => taxi
console.log(high("what time are we climbing up the volcano")); // => volcano
//high()
