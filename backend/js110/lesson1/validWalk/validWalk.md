# Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

## Understand the Problem

### Input:

An array of one letters representing directions

### Output:

A boolean `true` or `false` for whether a ten minutes walk is possible or not

### Rules

#### implicit Requirements

- You walk a single block for each letter (direction)
- It takes one minute to traverse one city block (letter)
- Return `true` if the walk take you exactly 10 minutes, `false` otherwise

#### Explicit Requirements

- It should take exactly the same number of block from our position
  to our direction and back to our initial position. If
- Number of blocks walk towards `s` direction should be equal
  to the number of blocks walked toward `n`. The same rule holds
  for `e` and `w`;

## Mental Model

The number of blocks of `s` should be equal to the number of blocks of `n`.
And the number of blocks of `w` should be equal to the number of blocks
to `e`.

## Example & Test Cases

```js
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
```

## Data Structures

We will use an object to count the number of occurrences for each direction.

## Algorithm

If the length of the input array `walk` is not 10, return `false`.

Initialize an object `obj` with the 4 directions (`e, w, n, s`) as properties and
initialize them with the number `0` as starting value.
LOOP through the `walk` input array and add the occurrences of each direction
in the occurrences object;

Return a boolean value checking whether the number of occurrences for `s` is
equal to the number of occurrences for `n`. Compare also the number of
occurrences for `e` and `w`.

## Code

```js
function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let obj = { e: 0, w: 0, n: 0, s: 0 };

  walk.forEach((block) => obj[block]++);

  return obj.e === obj.w && obj.n === obj.s;
}
```

```

```
