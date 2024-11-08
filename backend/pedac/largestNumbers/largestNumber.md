Given a grid of values represented by an array of arrays, e.g.:

```js
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

Return the largest sum of a column of values in the grid.
In this example, the largest sum is 18.

Input: nested array

Output: the largest sum of column in the grid.

# Rules:

- Explicit Requirements
- implicit Requirements:
  column may be equal or not to the rows

# Mental model

Loop through the grid (row) and sum the numbers based on the column.

# Example

```js
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(largestColumn(a) === 18);

let b = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

largestColumn(b);
console.log(largestColumn(b) === 12);

let c = [
  [1, 0, 0],
  [5, 8, 10],
  [3, 5, 1],
];

console.log(largestColumn(c) === 13);
```

# data structure

- array to store the sum of each column. Size of the result array = `arr[0].length`

# algorithm

- initialize an array `resultArr` with size of the inner arr and fill it with `0`.
- Outer loop -> rows (i)
  - inner loop -> columns (j) - increment the element at `resultArr[j]` with `arr[i][j]`
    return the largest number in `resultArr`

```js
function largestColumn(grid) {
  let resultArr = new Array(grid[0].length).fill(0);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      resultArr[col] += grid[row][col];
    }
  }

  return Math.max(...resultArr);
}
```
