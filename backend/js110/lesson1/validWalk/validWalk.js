function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let obj = { e: 0, w: 0, n: 0, s: 0 };

  walk.forEach((b) => obj[b]++);

  return obj.e === obj.w && obj.n === obj.s;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
