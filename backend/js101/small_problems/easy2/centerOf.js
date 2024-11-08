let centerOf = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return "INVALID INPUT";
  }

  let len = str.length;
  let midIndex = Math.floor(len / 2);

  return len % 2 === 1 ? str[midIndex] : `${str[midIndex - 1]}${str[midIndex]}`;
};

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
