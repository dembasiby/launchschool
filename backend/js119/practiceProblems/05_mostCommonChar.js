const p = console.log;

const mostCommonChar = (str) => {
  let occurences = str.split("").reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  return Object.keys(occurences)
    .sort((a, b) => occurences[b] - occurences[a])
    .slice(0, 1)
    .join();
};

p(mostCommonChar("Hello World"));

p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
