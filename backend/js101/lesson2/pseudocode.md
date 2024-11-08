START

# Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
SET currentNumber = value within numbers collection at space "iterator"
IF currentNumber > savedNumber
savedNumber = currentNumber
ELSE
do nothing

iterator = iterator + 1

PRINT savedNumber

END

```js
function printMaxNumber(numbers) {
  let it = 0;
  let savedNumber = numbers[0];

  while (it < numbers.length) {
    let currentNumber = numbers[it];

    if (currentNumber > savedNumber) {
      savedNumber = currentNumber;
    }

    it += 1;
  }

  console.log(savedNumber);
}
```

back to markdown

- Write a function that returns the sum of two numbers

START

# Given two numbers number1 and number2

SET result = number1 + number2
PRINT result
END

# Given a function that takes an array of strings, and returns a string that is all those strings concatenated together

START
SET newStr = ''

FOR counter = 0 to length of array (exclusive) INCREMENT by one
SET currentStr = string at array[counter]
newStr += currentStr
END LOOP

PRINT newStr
END

# Given a method that takes an array of integers, and returns a new array with every other element from the original array,

# starting with the first element. For instance:

```js
everyOther([1, 4, 7, 2, 5]); // => [1,7,5]
```

START
SET resultArray = []

FOR index = 0 to length of array INCREMENT by 2
SET currentNumber = array element at index
append currentNumber to resultArray
END FOR LOOP

PRINT resultArray
END

# Given a function that determines the index of the 3rd occurrence of a given character in a string.

# For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should

# return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.

START
SET index = -1
SET fromIndex = 0;
SET count = 0

WHILE count < 3 AND fromIndex < length of array
index = array.indexOf(x, fromIndex)
IF index == -1 THEN break
fromIndex = index + 1
count++
END WHILE LOOP

IF count == 3 and index != -1 THEN
PRINT index
ELSE
PRINT null
END

CODEss

```js
function getThirdOccurence(string, x) {
  let index = null;
  let fromIndex = 0;
  let count = 0;

  while (count < 3 && fromIndex < string.length) {
    index = string.indexOf(x, fromIndex);

    if (!index) break;

    fromIndex = index + 1;
    count += 1;
  }

  return count == 3 && !!index ? index : null;
}
```

# Given a function that takes two arrays of numbers and returns the result of merging the arrays.

# The elements of the first array should become the elements at the even indexes of the returned

# array, while the elements of the second array should become the elements at the odd indexes. For instance:

```js
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
```

START
SET resultArray = []

FOR index = 0 to length of array1
append element at array1[index]
append element at array2[index]
END FOR LOOP

PRINT resultArray
END

```js
function merge(array1, array2) {
  let resultArray = [];

  for (let i = 0; i < array1.length; i++) {
    resultArray.push(array1[i]);
    resultArray.push(array2[i]);
  }

  return resultArray;
}
```

You may assume that both array arguments have the same number of elements.
