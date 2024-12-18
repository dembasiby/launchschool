let myObject = {};

myObject[false] = "one";
myObject[7] = "two";
myObject[[1, 2, 3]] = "three";

console.log(Object.keys(myObject));

console.log(myObject["false"]);
console.log(myObject["7"]);
console.log(myObject["1,2,3"]);

myObject["foo"] = "bar";
console.log(myObject.foo);
console.log(myObject["foo"]);

myObject["a-key"] = "four";
// console.log(myObject.a-key); // syntax error
console.log(myObject["a" + "-" + "key"]);

console.log(Object.keys(myObject));
myObject["undefinedKey"] = undefined;

console.log(myObject.undefinedKey);
console.log(myObject.missingKey);
