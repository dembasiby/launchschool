const rlSync = require("readline-sync");

let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adje = rlSync.question("Enter an adjective: ");
let adve = rlSync.question("Enter an adverb: ");

console.log("------------------------------------------------------");
console.log();

console.log(`Do you ${verb} your ${adje} ${noun} ${adve}? That's hilarious!`);
console.log(`The ${adje} ${noun} ${verb}s ${adve} over the lazy ${noun}.`);
console.log(`The ${noun} ${adve} ${verb}s up ${adje} Joe's turtle.`);
