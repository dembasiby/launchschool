//https://www.codewars.com/kata/5202ef17a402dd033c000009

/*

A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


UNDERSTAND THE PROBLEM.
Input:
- String
- an optional list of minor words separated by a space.

Output:
- string in titleCase

Rules;
- First word is always 'titleized'
- for the subsequent words, 'titleized' it unless it is a minor word (in the second argument provided)
- second parameter will have an default value of empty string.
- the input can be lowercase or uppercase or a mix

Mental model;
- titleize the first word. For the remaining words, titleize if the word is not in the minors list.


Data structure;
- array for the minor words 

Algorithm
- declare a variable `minors` and initialize it to the return value of splitting the second parameter using the space as separator
- declare a variable inputStringArr and initialize it to the return value of splitting the first parameter using the space as separator
- declare variable `result` and initialize it to an empty string.
- loop through the input string word by word.
-- titleize the first word.
-- if the word is not included in the `minors` list, titleize it.
-- else use its lowercase version.
-- add the updated word in the result
- return `result`

titleize helper function which define a one-paramater `word`
- uppercase the first character
- append the remaining character after applying lowercase.

*/

function titleCase(str, minors = "") {
  minors = minors.split(" ").map((word) => word.toLowerCase());
  let inputStringArr = str.split(" ");
  let result = [];

  for (let i = 0; i < inputStringArr.length; i++) {
    if (i === 0 || !minors.includes(inputStringArr[i].toLowerCase())) {
      result.push(titleize(inputStringArr[i]));
    } else {
      result.push(inputStringArr[i].toLowerCase());
    }
  }

  return result.join(" ");
}

function titleize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'

// console.log(titleize(""));
