function first(arr) {
  return !Array.isArray(arr) || arr.length === 0 ? undefined : arr[0];
}

console.log(first(["Earth", "Moon", "Mars"]));
