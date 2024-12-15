function SmartPhone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.checkBatteryLevel = function () {
    return `${this.brand} ${this.model} has 90% battery life.`;
  };

  this.displayInfo = function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Release Year: ${this.releaseYear}`;
  };
}

let iphone12 = new SmartPhone("Apple", "Iphone 12", 2020);
let galaxyS21 = new SmartPhone("Samsung", "Galaxy S21", 2021);

console.log(iphone12.displayInfo());
console.log(iphone12.checkBatteryLevel());

console.log(galaxyS21.checkBatteryLevel());
console.log(galaxyS21.displayInfo());
