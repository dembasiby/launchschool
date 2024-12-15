// let person = {
//   name: "John",
//   age: 33,
// };
//
let raceCar = {
  make: "BMW",
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  stopEngine() {
    this.engineOn = false;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  refuel(percent) {
    if (this.fuelLevel + percent / 100 <= 1) {
      this.fuelLevel += percent / 100;
    } else {
      this.fuelLevel = 1;
    }
  },
};

// console.log(person);
console.log(raceCar);

raceCar.refuel(30);
console.log(raceCar);
