/*

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript


The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of 
metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, 
and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual 
spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous 
circuit all the way around the sport field, and so the wave is able to travel continuously around then
arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the 
crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one 
wave crest will be present at any given time in an arena, although simultaneous, counter-rotating 
waves have been produced. (Source Wikipedia)

Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


UNDERSTAND THE PROBLEM
Input: string
Output: an array of the same input string 
Rules:
- input is lowercase
- the first letter is uppercased first, then the second until the last one.
- the output array will have a length of the input string.
- white spaces are ignored
- the input string can be one word or more separated by white space
- input string can be empty. In this case, return an empty array.
- 
Mental model:
- focus on the index of the characters, ignore white spaces, and repeat the string string-length time, by uppercasing the letters in a wave-way.


Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Data structure:
- input: string 
- output: array of n size, n being the length of the input string
- intermediary ds: array of characters

Algorithm:
- if the input string `str` is empty, return an empty array 
- declare variable result and initialize it to an empty array 
- declare variable index and initialize it to 0 
- while `index` is less than the length of `str`
-- declare variable `currentWordArr` and initialize it to the value of splitting `str` using empty string as a separator
-- if the character at `index` of `currentWordArr` is not empty space
--- update `currentWordArr` at index `index` with an uppercase value;
--- append `currentWordArr` converted to a string to `result`
-- increment `index` by one`.
- return `result`

*/

function wave(str) {
  if (str.length === 0) return [];

  let result = [];
  let index = 0;

  while (index < str.length) {
    let currentWordArr = str.split("");

    if (currentWordArr[index] !== " ") {
      currentWordArr[index] = currentWordArr[index].toUpperCase();
      result.push(currentWordArr.join(""));
    }

    index++;
  }
  return result;
}

console.log(wave("hello"));
console.log(wave("hello world"));
