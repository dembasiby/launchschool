function objectsEqual(obj1, obj2) {
  return (
    Object.keys(obj1).every((k) =>
      typeof obj1[k] === "object"
        ? objectsEqual(obj1[k], obj2[k])
        : obj1[k] === obj2[k],
    ) &&
    Object.keys(obj2).every((k) =>
      typeof obj2[k] === "object"
        ? objectsEqual(obj1[k], obj2[k])
        : obj1[k] === obj2[k],
    )
  );
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
console.log(objectsEqual({ a: "foo", b: { c: 56 } }, { a: "foo", b: 56 })); // false
console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false
