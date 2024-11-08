# Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

## Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

### Understand the Problem

#### Input:

- an array of strings

#### Output:

- a new sorted array of strings in descending order

#### Rules

##### explicit Requirements

- sort by the length of adjacent consonants in each string
- if two strings have the same number of adjacent consonants,
  sort by the natural order of apparition in the array
- consonants are considered adjacent if :
  - they are next to each other in the same word; or
  - there is space between two consonants in adjacent words
- letters 'y' and 'w' are considered consonants here.

##### Implicit Requirements

- a string can be one or multiple words
- single consonants does not count. So are considered only consecutive consonants of two or more.

#### questions

- Is it possible to have more than one set of consecutive consonants
  in an array element?
- If so, I suppose we are always selecting the longest
- Does the string contain only lowercase letter, or a mix of uppercase
  and lowercase?

### Mental Model

Find the longest consecutive consonants in each string and
sort the array based on the length of the longest consecutive
set of consonants in each string.

### Examples / Test Cases:

All the test cases confirm my initial mental model about the problem except the first one `liist1`. Based on my understanding, `baa` has one consonant while `aa` has none. So `baa` should come first in the result array, which is not the case.

The test cases provide only lowercase letters. Also, it is possible to have more than one set of consecutive consonants. In this case, the size of the longest one is considered.

### Data Structures

No need of an additional data structure to resolve the problem.

### Algorithm

Sort the array based on the length of the longest consecutive consonants of each string and return the array. Write a helper function that returns the longest consecutive consonants for a string.
