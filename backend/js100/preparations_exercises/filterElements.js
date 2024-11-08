let scores = [96, 47, 113, 89, 100, 102];

let total = scores.reduce((x, y) => (y >= 100 ? x + 1 : x + 0), 0);

console.log(total);
