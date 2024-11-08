function interleave(arr1, arr2) {
  return arr1.reduce((arr, element, idx) => arr.concat(element, arr2[idx]), []);
}

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
