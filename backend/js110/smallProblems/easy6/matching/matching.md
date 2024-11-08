# Matching Parentheses

## Understand the Problem

### Input:

a sentence of one to several words

### Output

A boolean value `true` or `false` indicating whether all parentheses in the string are properly balanced.

### Rules

#### Explicit Rules

- to be properly balanced, parentheses must occur in matching open and closing parentheses pairs.

#### Implicit Rules

- if the first parenthesis is a closing parenthesis, the function returns false
- if the last parenthesis is an opening parenthesis, the function returns false

### Mental Model

Start counting the parentheses, 1 for opening, -1 for closing parentheses. Whenever the count is -1, return false. At the end if the count is not 0, return false

## Examples

```javascript
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
```

## Data Structure

No need for an intermediary data structure here

## Algorithm

- initialize a `count` variable to the number `0`
- traverse the string
  -- if the current element is `(` add `1` to `count`
  -- if the current element is `)` subtract `1` from `count`
  -- Whenever count is negative, return false
- at the end of the loop, return the boolean `count === 0`

## Code

```javascript
function isBalanced(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    let currentElement = sentence[i];

    if (currentElement === "(") {
      count++;
    } else if (currentElement === ")") {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0;
}
```
