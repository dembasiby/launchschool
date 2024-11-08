function countOccurrences(arr) {
  return arr.reduce((obj, element) => {
    obj[element] = obj[element] ? obj[element] + 1 : 1;
    return obj;
  }, {});
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

console.log(countOccurrences(vehicles));
console.log(Object.getOwnPropertyDescriptor(vehicles, "car"));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
