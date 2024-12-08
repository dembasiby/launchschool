// Your job is to write a function which increments a string to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number, the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo42 -> foo43
// foo9 -> foo10
// foo99 -> foo100
/*

String => string 


*/

function incrementString(str) {
  let digitStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (!/[0-9]/.test(str[i])) break;
    digitStr += str[i];
  }

  return digitStr.length !== 0
    ? str.slice(0, -digitStr.length) + String(Number(digitStr) + 1)
    : str + 1;
}

console.log(incrementString("foobar0")); // "foobar1"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1")); // "2"
console.log(incrementString("9")); // "10"
console.log(incrementString("fo99obar99")); // "fo99obar100"
