function buyFruit(arr) {
  let result = [];
  arr.forEach((sub) => {
    let [fruit, count] = sub;
    while (count--) {
      result.push(fruit);
    }
  });

  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ]),
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
