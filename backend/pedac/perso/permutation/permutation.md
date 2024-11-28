# Next Permutation

Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order).

Note - A permutation of an array of integers refers to a specific arrangement of its elements in a sequence or linear order.
e
Constraints:

`1 ≤ arr.size() ≤ 10^5`
`1 ≤ arr[i] ≤ 10^5`

## Understand the Problem

### Input

An array of numbers that have between 1 and 100,000 1-digit to 100,000-digit elements.
[1, 2, 4]
`[1,2,4], [1, 4, 2], [2,1, 4], [2, 4, 1], [4, 1, 2], [4,2, 1]`

### Output

The next lexicographically greater permutation or the smallest if the array is already the greatest lexicographically permutation.

### Rules / Requirements

The next lexicographically greater permutation or the smallest if the array is already the greatest lexicographically permutation.

- The array size can span from 1 to 100,000 elements
- each number can range from 1 to 100,000

### Mental Model

## Examples:

Input: `arr = [2, 4, 1, 7, 5, 0]`
Output: `[2, 4, 5, 0, 1, 7]`
Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.
Input: `arr = [3, 2, 1]`
Output: `[1, 2, 3]`
Explanation: As arr[] is the last permutation, the next permutation is the lowest one.
Input: `arr = [3, 4, 2, 5, 1]`
Output: `[3, 4, 5, 1, 2]`
Explanation: The next permutation of the given array is {3, 4, 5, 1, 2}.
