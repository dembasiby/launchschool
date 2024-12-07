const p = console.log;

const evenSubstrings = (str) => {
  return str.split("").reduce((acc, d, idx) => {
    return d % 2 === 0 ? acc + idx + 1 : acc;
  }, 0);
};

p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
