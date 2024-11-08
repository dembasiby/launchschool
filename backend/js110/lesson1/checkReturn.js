function checkReturn(num) {
  return (num = num * 2);
}

// [1, 2, 3].forEach((num) => {
//   console.log(checkReturn(num));
// });
//
console.log([1, 2, 3].every(checkReturn));
