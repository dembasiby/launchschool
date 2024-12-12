/*
 * CREATE a variable `obj1` and initialize it to an empty object
 * CREATE a variable `obj2` and initialize it to an empty object
 * CREATE a variable `result` and initialize it to 0
 *
 *
 * LOOP through `str1`:
 * - if the current character is already in `obj1`, add `1` otherwise, add the character as key and initialize it to 1
 * LOOP through `str2`:
 * - if the current character is already in `obj1`, add `1` otherwise, add the character as key and initialize it to 1
 * LOOP through the keys of `obj`:
 * - if the key is in obj2, add the difference of value to `result`, otherwise, add the value of `obj1` for that key
 * LOOP through the keys of `obj2`:
 * - if the current keys is not in `obj1`, add the value of `obj2` for that key to `result`
 * Return `result`
 *
 */

function anagram_difference(str1, str2) {
  let result = 0;
  let obj1 = getObject(str1);
  let obj2 = getObject(str2);

  Object.keys(obj1).forEach((k) => {
    result += obj2[k] ? Math.abs(obj1[k] - obj2[k]) : obj1[k];
  });

  Object.keys(obj2).forEach((k) => {
    if (!obj1[k]) {
      result += obj2[k];
    }
  });

  return result;
}

function getObject(str) {
  return str.split("").reduce((obj, k) => {
    obj[k] = obj[k] + 1 || 1;
    return obj;
  }, {});
}

console.log(anagram_difference("", "") == 0);
console.log(anagram_difference("a", "") == 1);
console.log(anagram_difference("", "a") == 1);
console.log(anagram_difference("ab", "a") == 1);
console.log(anagram_difference("ab", "ba") == 0);
console.log(anagram_difference("ab", "cd") == 4);
console.log(anagram_difference("aab", "a") == 2);
console.log(anagram_difference("a", "aab") == 2);
console.log(anagram_difference("codewars", "hackerrank") == 10);
console.log(
  anagram_difference(
    "oudvfdjvpnzuoratzfawyjvgtuymwzccpppeluaekdlvfkhclwau",
    "trvhyfkdbdqbxmwpbvffiodwkhwjdjlynauunhxxafscwttqkkqw",
  ) == 42,
);
console.log(
  anagram_difference(
    "fcvgqognzlzxhmtjoahpajlplfqtatuhckxpskhxiruzjirvpimrrqluhhfkkjnjeuvxzmxo",
    "qcfhjjhkghnmanwcthnhqsuigwzashweevbegwsbetjuyfoarckmofrfcepkcafznykmrynt",
  ) == 50,
);
