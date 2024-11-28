function fibonacci(num) {
  let arr = new Array(num + 1).fill(-1);

  function helper(num) {
    if (num <= 2) return 1;
    if (arr[num] === -1) {
      arr[num] = helper(num - 1, arr) + helper(num - 2, arr);
    }

    return arr[num];
  }

  return helper(num, arr);
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(35)); // 6765
console.log(fibonacci(50)); // 6765
console.log(fibonacci(100)); // 6765
console.log(fibonacci(1000)); // 6765
