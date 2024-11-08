# Reverse Number

## Understand the Problem

### Input

### Output

### Rules

#### Explicit Rules

#### Implicit Rules

### Mental Model

## Examples

## Data Structures

## Algorithm

## Code

```javascript
function reverseNumber(num) {
  let result = 0;

  while (num) {
    let remainder = num % 10;
    result = result * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return result;
}
```
