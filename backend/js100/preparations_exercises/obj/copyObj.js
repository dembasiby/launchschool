function copyObj(obj, arr = null) {
  let myNewObj = {};

  arr = arr ?? Object.keys(obj);

  for (let i = 0; i < arr.length; i++) {
    myNewObj[arr[i]] = obj[arr[i]];
  }

  return myNewObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

console.log(objToCopy);
