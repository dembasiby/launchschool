function sumSquareDifference(num) {
  let sumOfNumbers = ((num * (num + 1)) / 2) ** 2;

  for (let i = 1; i <= num; i++) {
    sumOfNumbers -= i ** 2;
  }

  return sumOfNumbers;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
