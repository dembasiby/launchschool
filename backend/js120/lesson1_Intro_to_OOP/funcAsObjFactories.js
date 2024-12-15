// let raceCar1 = {
//   make: "BMW",
//   fuelLevel: 0.5,
//   engineOn: false,
//
//   startEngine() {
//     this.engineOn = true;
//   },
//
//   stopEngine() {
//     this.engineOn = false;
//   },
//
//   drive() {
//     this.fuelLevel -= 0.1;
//   },
//
//   refuel(percent) {
//     if (this.fuelLevel + percent / 100 <= 1) {
//       this.fuelLevel += percent / 100;
//     } else {
//       this.fuelLevel = 1;
//     }
//   },
// };
//
// let raceCar2 = {
//   make: "Ferrari",
//   fuelLevel: 0.7,
//   engineOn: true,
//
//   startEngine() {
//     this.engineOn = true;
//   },
//
//   stopEngine() {
//     this.engineOn = false;
//   },
//
//   drive() {
//     this.fuelLevel -= 0.1;
//   },
//
//   refuel(percent) {
//     if (this.fuelLevel + percent / 100 <= 1) {
//       this.fuelLevel += percent / 100;
//     } else {
//       this.fuelLevel = 1;
//     }
//   },
// };

function createCar(make, fuelLevel, engineOn) {
  return {
    make,
    fuelLevel,
    engineOn,

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
}

let raceCar1 = createCar("BMW", 0.5, false);
let raceCar2 = createCar("Ferrari", 0.7, true);
let jaguar = createCar("Jaguar", 0.4, false);

raceCar1.drive();
raceCar2.drive();
jaguar.drive();

console.log(raceCar1.fuelLevel);
console.log(raceCar2.fuelLevel);
console.log(jaguar.fuelLevel);
