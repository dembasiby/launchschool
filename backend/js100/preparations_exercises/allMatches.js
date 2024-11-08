function allMatches(arr, pattern) {
  // return arr.reduce((narr, x) => (pattern.test(x) ? narr.concat(x) : narr), []);
  return arr.filter((x) => pattern.test(x));
}

let words = [
  "laboratory",
  "experiment",
  "flab",
  "Pans Labyrinth",
  "elaborate",
  "polar bear",
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
