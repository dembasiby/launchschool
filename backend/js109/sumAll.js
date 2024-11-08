function sumAll(arr) {
  return arr.reduce(
    (acc, el) => (Number.isNaN(Number(el)) ? acc : acc + Number(el)),
    0,
  );
}

console.log(sumAll([1, "2", true, false, "3.5"])); // Expected Output: 7.5
