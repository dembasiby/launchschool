/*

Given a word, return a copy of that word, removing every vowel after the first three:

P:
Input = string;
output: string with vowels removed startinng from the 4th vowels. If vowels count <= 3, return Input
string as it is.

vowels = (a e i u o). Is y considered a vowels

implicit requirements:
 - input include uppercase and lowercase letters including vowels

Questions:
 - Can the input include uppercase letters?

Algorithm

initialize a vowelCount variable to 0 
initialize a VOWELS constant to the string "aeiuoAEIUO";
initialize a result variable to an empty string 

LOOP through the input string character by character. 
If the current character is not a vowel, append it 
to the result string.
if the current character is a vowel, increment the vowelCount. if vowelCount <= 3, 
append the character to the result string.

*/

const VOWELS = "aeiuoyAEIUOY";
const MAX_NUMBER_OF_VOWELS = 3;

function three_vowels(string) {
  let vowelCount = 0;

  return string
    .split("")
    .filter((x) => {
      if (!VOWELS.includes(x)) {
        return x;
      } else {
        vowelCount++;
        return vowelCount <= MAX_NUMBER_OF_VOWELS ? x : "";
      }
    })
    .join("");

  // for (let i = 0; i < string.length; i++) {
  //   if (!VOWELS.includes(string[i])) {
  //     result += string[i];
  //   } else {
  //     vowelCount++;
  //     if (vowelCount <= 3) {
  //       result += string[i];
  //     }
  //   }
  // }
  // return result;
}

console.log(three_vowels("tropicalia"));
console.log(three_vowels("tropical") === "tropical");
console.log(three_vowels("tropicalia") === "tropical");
console.log(three_vowels("BliMp123") === "BliMp123");
console.log(three_vowels("eyelash2!!!") === "eyelsh2!!!");
