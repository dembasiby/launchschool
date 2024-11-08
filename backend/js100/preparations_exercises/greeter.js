function getName(prompt) {
  let rlSync = require("readline-sync");
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
