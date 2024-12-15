let cat = {
  name: "Fluffy",

  makeNoise() {
    console.log("Meow! Meow!");
  },

  eat() {
    // Implementation
  },
};

let dog = {
  name: "Maxy",

  makeNoise() {
    console.log("Woof! Woof!");
  },

  eat() {
    // Implementation
  },
};

let pete = {
  name: "Pete",
  pets: [],
  heroes: ["Superman", "Batman", "Spiderman"],
  cash: { ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0 },

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pets[0].name}`);
  },

  cashOnHand() {
    let cashEq = { ones: 1, fives: 5, tens: 10, twenties: 20, hundreds: 100 };

    return Object.keys(this.cash).reduce((sum, key) => {
      let currentCount = this.cash[key];
      let multiplier = cashEq[key];
      sum += currentCount * multiplier;
      return sum;
    }, 0);
  },

  allHeroes() {
    return this.heroes.join(", ");
  },
};

pete.pets.push(cat);
pete.pets.push(dog);

console.log(pete.cashOnHand());
console.log(pete.allHeroes());
console.log(pete.printName());
console.log(pete.pets);
