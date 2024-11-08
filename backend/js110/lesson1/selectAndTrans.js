function selectFruit(produce) {
  let result = {};

  for (let prdt of Object.keys(produce)) {
    if (produce[prdt] === "Fruit") result[prdt] = "Fruit";
  }

  return result;
}

let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
