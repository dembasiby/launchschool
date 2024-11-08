function halvsies(arr) {
  const N = arr.length;
  let ans = [[], []];
  let mid = Math.floor(N / 2);

  if (N % 2 === 0) mid = mid - 1;

  for (let i = 0; i < N; i++) {
    if (i <= mid) {
      ans[0].push(arr[i]);
    } else {
      ans[1].push(arr[i]);
    }
  }

  return ans;
  /****************************************
   * Alternative Solution from LaunchSchool
   ****************************************
   * let mid = Math.ceil(arr.length / 2);
   * return [arr.slice(0, mid), arr.slice(mid)];
   */
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
