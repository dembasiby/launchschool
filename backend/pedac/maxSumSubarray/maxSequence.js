function maxSequence(arr) {
  let result = 0;
  let currentSum = 0;

  arr.forEach((num) => {
    currentSum += num;
    if (currentSum < 0) {
      currentSum = 0;
    } else {
      result = Math.max(result, currentSum);
    }
  });

  return result;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
