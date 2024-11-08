// What will this code output and why?
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let greetings = ["hello", "howdy"];
let names = ["homer", "marge"];

function random_greeting() {
  let greeting = randomElement(greetings);
  let name = randomElement(names);
  sentence = greeting + " " + name;
}

let sentence = "";
random_greeting(sentence);
console.log(sentence);

//// Bonus Questions ////
// 1. How many `sentence` variables exist in this code? How are they related?
// 2. Fix this code to output a random greeting on line 17.
// 3. After fixing the code, update it so that we don't ever repeat names or greetings.
//    How should we handle running out of names/greetings?
