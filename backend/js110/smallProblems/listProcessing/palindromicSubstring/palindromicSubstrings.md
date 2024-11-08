# palindromic Substrings

Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

## Understand The Problem

### input

- a string `str`

### Output

- list of all palindromic substrings of the input string `str`

### Rules

#### Explicit Requirements

- each substring consist of a sequence of characters that reads the same forward and backward
- the substrings in the returned list should be sorted by their order of appearance in the input string
- duplicate substrings should be included multiple times
- case matters
- single characters are not palindromes.

#### Implicit Requirements

- characters include alphabet letters, lowercase and uppercase, as well as dashes.
- space is not considered a character here

#### Questions

- does `_` matters here and considered characters?

### Mental Model

The simplest solution is to generate all substrings and then check if each one is palindrome. If this is the case, add it to the result array

## Example

```js
palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
```

## Data Structure

An intermediary array for storing all substrings
The result array for storing only palindromes

## Algorithm

- initialize a new variable `allSubstrings` to the return value of calling `getAllSubstrings(str)`
- initialize a new variable `result` to an empty array
- loop through `allSubstrings`; if the current substring `isPalindrome`, append it to the result array
- return the result array

### getAllSubstrings

- loop through the input string `str` with an outer loop
  -- In the outer loop, initialize a variable `CurrentSubstring` to the character at the current index `i`
  -- start an inner loop from index `i + 1`
  --- append the current character in the `allSubstrings` array

### isPalindrome

## Code

```js
function palindromes(sentence) {
  let allSubstrings = getAllSubstrings(sentence);
  let result = [];

  allSubstrings.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });
  return result;
}

function getAllSubstrings(sentence) {
  let allSubstrings = [];
  for (let i = 0; i < sentence.length - 1; i++) {
    let currentSubstring = sentence[i];
    if (currentSubstring === " ") continue;

    for (let j = i + 1; j < sentence.length; j++) {
      if (sentence[j] == " ") break;
      currentSubstring += sentence[j];
      allSubstrings.push(currentSubstring);
    }
  }
  return allSubstrings;
}

function isPalindrome(str) {
  let lIndex = 0;
  let rIndex = str.length - 1;

  while (lIndex < rIndex) {
    if (str[lIndex] !== str[rIndex]) {
      return false;
    }
    lIndex++;
    rIndex--;
  }

  return true;
}
```
