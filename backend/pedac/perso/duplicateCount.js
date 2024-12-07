//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

/*

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice

UNDERSTAND THE PROBLEM
Input: string of letters and digits 
Output: number representing the count of characters that occur at least twice.
Rules:
- uppercase and lowercase letters, and numbers
- if a character occurs more than once, we count 1 
Mental model
- have an occurrence count of characters and filter those whith count greater than 1
EXAMPLES 
- See above

DATA STRUCTURE
- use an object to store the count of occurrences for each character (letter and number)

ALGORITHM
- CREATE a `occurence` variable and initialize it to an empty object
- CREATE a variable `lowerStr` and initialize it to the return value of lowercasing the input string 
- LOOP through `lowerStr` 
-- if the character is already in the object, increment the value by 1, otherwise, create it and add 1
- FILTER the `occurence` object and return the count the number of keys which values are greater than 1;

have an occurrence count of characters and filter those whith count greater than 1
*/

function duplicateCount(text) {
  let occurences = text
    .toLowerCase()
    .split("")
    .reduce((obj, char) => {
      obj[char] = obj[char] + 1 || 1;
      return obj;
    }, {});

  return Object.values(occurences).filter((n) => n > 1).length;
}

console.log(duplicateCount("aabBcde"));

console.log(duplicateCount("abcde") === 0); // -> 0  # no characters repeats more than once
console.log(duplicateCount("aabbcde") === 2); // -> 2  # 'a' and 'b'
console.log(duplicateCount("aabBcde") === 2); // -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(duplicateCount("indivisibility") === 1); // -> 1  # 'i' occurs six times
console.log(duplicateCount("Indivisibilities") === 2); // -> 2  # 'i' occurs seven times and 's' occurs twice
console.log(duplicateCount("aA11") === 2); // -> 2  # 'a' and '1'
console.log(duplicateCount("ABBA") === 2); // -> 2  # 'A' and 'B' each occur twice
