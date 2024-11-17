# IMPROVED JOIN

## Understand the Problem

### Input

- an array of number
- a delimiter. `,` is the default value
- a joining word for the last element `or` or `and`. `or` is the default value

### Output

- a string of numbers separated by a separator and the last number connected to the remaining numbers by a logical connector.

### Rules

#### Explicit Requirements

- the user can choose any delimiter
- the user can choose any joining word

#### Implicit Requirements

- a single number will have no delimiter and no joining word.
- two numbers will only have a joining word but no delimiter
- the default delimiter is `,`
- the default joining word is `or`

## Example / Test Cases

```js
joinOr([1, 2, 3]); // => "1, 2, or 3"
joinOr([1, 2, 3], "; "); // => "1; 2; or 3"
joinOr([1, 2, 3], ", ", "and"); // => "1, 2, and 3"
joinOr([]); // => ""
joinOr([5]); // => "5"
joinOr([1, 2]); // => "1 or 2"
```

## Data Structures

- No need for intermediary data Structures

## Algorithm

- if input array length is less than or equal to 1, return the element
- if input array length is equal to 2, return the two elements after joining them together by the joining word
- join the elements of the array from the first element to the second-to-last one with the delimiter and assign the return value to a new variable `result`
- append the joining word separated with spaces to the `result` variable
- append the last element to the `result` variable
- return the `result` variable

## Code

```js
function joinOr(arr, delimiter = ", ", joiningWord = "or") {
  if (arr.length <= 1) return arr.join();
  if (arr.length === 2) return arr.join(` ${joiningWord} `);

  let result = arr.slice(0, -1).join(delimiter);
  result += `${delimiter}${joiningWord}${arr.slice(-1)}`;

  return result;
}
```
