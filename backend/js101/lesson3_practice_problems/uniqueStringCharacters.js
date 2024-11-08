function uniqueStringCharacters(str1, str2) {
  return getUniqueCharacters(str1, str2).concat(
    getUniqueCharacters(str2, str1),
  );
}

function getUniqueCharacters(str1, str2) {
  return str1
    .split("")
    .filter((x) => !str2.includes(x))
    .join("");
}

console.log(uniqueStringCharacters("xyab", "xzca") === "ybzc"); // true
console.log(uniqueStringCharacters("a", "z") === "az"); // true
console.log(uniqueStringCharacters("abcd", "de") === "abce"); // true
console.log(uniqueStringCharacters("abc", "abba") === "c"); // true
console.log(uniqueStringCharacters("xyz", "zxy") === ""); // true

/*
 * given inputs str1 and str2
 * check if str1 is empty, return str2
 * check if str2 is empty, return str1
 *
 * declare a new variable output and initialize it to the return
 * value of calling the getUniqueCharacters function
 * with str1, and str2 as first and second arguments
 *
 * append the return value of calling the getUniqueCharacters function
 * with str2 and str1 as first and second arguments
 *
 * return output
 *
 * Helper function getUniqueCharacters(str1, str2)
 * declare and initialize a new variable output with the value of an empty string
 * loop through the str1 string and check str2 includes the character at the current index
 * if not, append it to the output value
 * Once the loop is over, return the output.
 */
