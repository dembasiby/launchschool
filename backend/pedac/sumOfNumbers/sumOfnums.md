# Sum of Numbers Inside a string

## Understand the Problem

### Input:

String including white spaces, numbers and letters

### Output

Number representing the sum of all numbers in the string

### Rules

#### Explicit Requirement

- a number can be 1 or many integers
- the string include only integers

#### Implicit Requirements

- In order to perform the summation, coerce the number string to number.

### Mental Model

split the string using everything not a number as a separator and select only the number string.
Add the number string together after converting each string number to a number.

## Example

Implement a function that calculates the sum of numbers inside of a string.

You can expect that the string will include only positive numbers.

sum_of_numbers("L12aun3ch Sch3oo451") = 469
sum_of_numbers("HE2LL3O W1OR5LD") == 11
sum_of_numbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") == 3635

## Data Structure

- use an array as intermediary data structure after splitting the string

## Algorithm

- split the string with non-digits as separator
- filter the array and only select string numbers
- add up numbers to get the sum

## Code

```js
function sumOfNumber(str) {
  return str
    .split(/\D/)
    .filter((num) => !Number.isNaN(Number(num)))
    .reduce((acc, num) => acc + Number(num), 0);
}
```
