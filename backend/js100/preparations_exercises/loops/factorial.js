let rlSync = require("readline-sync");

function factorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

let num = Number(rlSync.question("Provide a number: \n"));
console.log(factorial(num));
