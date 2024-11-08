"use strict";

// Write three functions that take an object as an argument and return
// an object with all of the value array elements as `0`s.

// The first function should not mutate the object or its values.
// The second function should not mutate the values but should mutate the object.
// The third function should mutate both the object and the values.

let inputObject = { a: [1, 2, 3], b: [4, 5, 6] };
// Transformed Dict: { a: [0, 0, 0], b: [0, 0, 0] }

function nonMutatingTransform(object) {
  let newObj = Object.assign({}, object);

  for (let key in newObj) {
    newObj[key] = object[key].slice().fill(0);
  }

  return newObj;
}

function partialMutatingTransform(object) {
  object["c"] = [7, 8, 9];
  return object;
}

function mutatingTransform(object) {
  for (let key in object) object[key].fill(0);
  object["d"] = [1, 2, 3];

  return object;
}

console.log(inputObject);
console.log("-----------");

let nonMutatingObj = nonMutatingTransform(inputObject);
console.log(nonMutatingObj);
console.log(inputObject);

console.log("-----------");

partialMutatingTransform(inputObject);
console.log(inputObject);

console.log("-----------");
mutatingTransform(inputObject);

console.log(inputObject);
