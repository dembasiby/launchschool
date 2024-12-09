const p = console.log;

const equalSumIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;

    for (let l = 0; l < i; l++) {
      left += arr[l];
    }

    for (let r = i + 1; r < arr.length; r++) {
      right += arr[r];
    }

    if (left === right) return i;
  }
  return -1;
};

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
