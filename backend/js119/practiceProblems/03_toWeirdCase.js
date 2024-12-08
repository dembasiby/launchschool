/*
 *
 * PROBLEM DESCRIPTION
 * Create a function that takes a string argument and returns a copy of the string
 * with every second character in every third word converted to uppercase.
 * Other characters should remain the same.
 *
 * UNDERSTAND THE PROBLEM
 * Input: a sentence (series of strings)
 * Output: a transformed sentence
 *
 * Rules:
 * - convert the second character of every thid word to uppercase.
 *
 * Mental model
 * - based on the index of each word, add one and choose indexes that
 *   are divisible by 3. For each word, replace each letter divisible by 2 and
 *   but which position is not the first (0)
 *
 * EXAMPLES
 * - Check examples below
 *
 * DATA STRUCTURE
 * - transform the input sentence into an array of words.
 * - transform each word into an array of character.
 *
 * ALGORITHM
 * - initialize a new variable `wordsArr` and set it to the sentence splitted
 *   wth space as separator
 * - LOOP through `wordsArr` word by word wth the currrent word titled `currentWord`
 *   if `index + 1` is divisible by 3
 *    + initialize a variable `charsArr` and set it to the value of `currentWord`
 *      splitted with empty string as separtor;
 *      - LOOP through `charsArr` character by character with current char named `char`
 *       + if the index of `char` + 1 is divisible by 2, make it uppercase.
 *      replace `currentWord` with the joined value of the transformed word
 * - return the joined value of `wordsArr`
 *
 */
let p = console.log;

function toWeirdCase(str) {
  return str
    .split(" ")
    .map((word, index) => {
      return (index + 1) % 3 === 0
        ? word
            .split("")
            .map((char, i) => ((i + 1) % 2 === 0 ? char.toUpperCase() : char))
            .join("")
        : word;
    })
    .join(" ");
}

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);
// p(toWeirdCase(original));

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
