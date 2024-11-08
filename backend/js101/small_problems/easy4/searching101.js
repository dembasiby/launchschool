const rlSync = require("readline-sync");

function getOrdinalSuffix(num) {
  switch (num) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

let numbers = [];

for (let i = 1; i <= 5; i++) {
  let number = rlSync.question(`Enter the ${i}${getOrdinalSuffix(i)} number: `);
  numbers.push(number);
}

let lastNumber = rlSync.question(`Enter the last number: `);

console.log();

if (numbers.includes(lastNumber)) {
  console.log(`The ${lastNumber} appears in ${numbers.join(", ")}.`);
} else {
  console.log(`The ${lastNumber} does not appear in ${numbers.join(", ")}.`);
}
