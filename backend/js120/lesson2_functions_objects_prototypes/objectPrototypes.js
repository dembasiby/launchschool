function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },
    stop() {
      this.started = false;
    },
  };
}

// let car1 = createCar("Toyota", "Corolla", 2016);
// let car2 = createCar("Ford", "Fusion", 2015);
//
// console.log(car1);
// console.log(car2);

let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);

console.log(b);

console.log(a.hasOwnProperty("foo"));
console.log(b.hasOwnProperty("foo"));

console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));
