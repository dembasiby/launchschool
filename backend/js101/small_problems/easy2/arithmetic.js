const rlSync = require("readline-sync");

let firstNumber = Number.parseInt(rlSync.question("Enter the first number:\n"));
let secondNumber = Number.parseInt(
  rlSync.question("Enter the second number:\n"),
);

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
  throw new Error("Please provide valid numbers");
}

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(
  `${firstNumber} / ${secondNumber} = ${Math.round(firstNumber / secondNumber)}`,
);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`,
);
