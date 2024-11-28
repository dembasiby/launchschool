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
console.log(fibonacci(35)); // 9227465
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(100)); // 354224848179262000000
console.log(fibonacci(1000)); // 4.346655768693743e+208
