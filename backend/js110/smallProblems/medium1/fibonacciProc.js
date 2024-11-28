function fibonacci(num) {
  let [prev, current] = [1, 1];

  for (let i = 3; i <= num; i++) {
    [current, prev] = [current + prev, current];
  }

  return current;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
