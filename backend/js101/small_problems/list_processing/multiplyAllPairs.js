function multiplyAllPairs(arr1, arr2) {
  let ans = [];

  arr1.forEach((n) => {
    arr2.forEach((m) => ans.push(n * m));
  });

  return ans.sort((a, b) => a - b);
}

console.log(
  multiplyAllPairs([2, 4], [4, 3, 1, 2]), // [2, 4, 4, 6, 8, 8, 12, 16]
);
