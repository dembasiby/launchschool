const rlSync = require("readline-sync");

let name = rlSync.question("What is your name?\n");

console.log(
  name.endsWith("!")
    ? `HELLO ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`
    : `Hello ${name}.`,
);
