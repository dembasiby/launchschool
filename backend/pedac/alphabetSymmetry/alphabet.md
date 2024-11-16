# Alphabet Symmetry

Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

```JavaScript
solve(["abode","ABc","xyzD"]) // [4, 3, 1]

```

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

## Understand the Problem

### Input

- an array of words

### Output

- an array of number representing the number of letters that are the same position in the word as they are in alphabetical order.

### Rules

- input letters can be lowercase or uppercase

### Mental Model

Check each word. For each letter of a given word, if a letter is at the same position as its position in the alphabet, increment the count by one and store the total number of letters that are at the right position for each word.

## Example / Test cases

```JavaScript
// JavaScript test cases
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]
```

## Data Structure

- use an array of the 26 letters
- return an array of numbers.

## Algorithm

- Declare and initialize a result variable with an empty array
- loop through the input array of word, for each word, `countNumberOfLettersInTheRightAlphabeticOrder` and store that number in a result array,
- return the result array of numbers

`countNumberOfLettersInTheRightAlphabeticOrder(word)`

- Declare and initialize a constant array with the 26 alphabet letters;
- Declare and initialize a variable `count` to `0`
- loop through the word letter by letters
  -- for the lowercase value of each letter, check if it is at the same position as in the alphabet array.
  --- If so, increment the count
- return the count

## Code

```JavaScript
function solve(arr) {
  return arr.map(countNumberOfLettersInTheRightAlphabeticOrder);
}

function countNumberOfLettersInTheRightAlphabeticOrder(word) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return word
    .split("")
    .filter((letter, idx) => alphabet.indexOf(letter.toLowerCase()) === idx)
    .length;
}


```
