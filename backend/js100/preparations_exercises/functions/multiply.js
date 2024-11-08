function multiply(num1, num2) {
  return num1 * num2;
}

function getNumber(prompt) {
  let rlSync = require("readline-sync");
  let number = Number(rlSync.question(prompt));
  return number;
}

let num1 = getNumber("What is the first number?\n");
let num2 = getNumber("What is the second number?\n");

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
