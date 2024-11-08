function fibonacci(num, dp) {
  if (num <= 1) return num;

  if (dp[num]) return dp[num];

  dp[num] = fibonacci(num - 1, dp) + fibonacci(num - 2, dp);
  return dp[num];
}

console.log(fibonacci(20, (dp = [])));
