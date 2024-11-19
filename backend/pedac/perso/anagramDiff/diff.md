# Anagram Difference

//https://www.codewars.com/kata/5b1b27c8f60e99a467000041/javascript

Given two words, how many letters do you have to remove from them to make them anagrams?

Example

First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10

Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

P:
Input: 2 strings
Output: a number representing the number of characters removed from each of the 2 strings to make them anagrams.

Rules:

- inputs may or may not be anagrams already.
- input is lowercase

Mental:
Based on an occurence count for each string, compare the two occurence counts

E:
const testCases = [
// w1 w2 expected
["", "", 0],
["a", "", 1],
["", "a", 1],
["ab", "a", 1],
["ab", "cd", 4],
["aab", "a", 2],
["a", "aab", 2],
["codewars", "hackerrank", 10]
c: 1 c: 1
o: 1 n: 1
d: 1
e: 1 e: 1
w: 1 k: 2
a: 1 a: 2
r: 1 r: 2
s: 1 h: 1

    8
    1
    1

D:

- use two objects, one for each input string for the occurence count of the characters

Algorithm.

- `result` initialized to the number 0;
- `occurenceCount1` initialized to an empty object
- `occurenceCount2` initialized to an empty object
- run 2 loops, one for each input string. For each character, store the number of occurences in the occurenceCount variable.
- at the end of the loops, check the common keys and check if they have the same number of occurences, if not, reduce the one with the highest until we have the same number of occurence. For the keys that are unique, add the occurence count in the result.

\*/

```javascript
function anagramDifference(w1, w2) {
  let result = 0;
  let occurenceCount1 = {};
  let occurenceCount2 = {};

  for (let i = 0; i < w1.length; i++) {
    occurenceCount1[w1[i]] = occurenceCount1[w1[i]]
      ? occurenceCount1[w1[i]] + 1
      : 1;
  }

  for (let i = 0; i < w2.length; i++) {
    occurenceCount2[w2[i]] = occurenceCount2[w2[i]]
      ? occurenceCount2[w2[i]] + 1
      : 1;
  }

  for (let k of Object.keys(occurenceCount1)) {
    if (occurenceCount2[k]) {
      result += Math.abs(occurenceCount1[k] - occurenceCount2[k]);
    } else {
      result += occurenceCount1[k];
    }
  }

  for (let k of Object.keys(occurenceCount2)) {
    if (!occurenceCount1[k]) {
      result += occurenceCount2[k];
    } else {
    }
  }

  return result;
}

console.log(anagramDifference("codewars", "hackerrank"));
```
